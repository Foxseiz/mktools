//https://www.youtube.com/watch?v=b8sUhU_eq3g

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Variables
let LIST, id;

// Get item from localStorage
let data = localStorage.getItem("TODO");

// Check if data is not empty
if(data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
}else{
  LIST =[];
  id = 0;
}

// Load items to the user's interface
function loadList(array) {
  array.forEach(function(item){
      addToDo(item.name, item.id, item.done, item.trash);
  });
}

// Clear the localStorage
clear.addEventListener("click", function() {
  localStorage.clear();
  location.reload();
})

// Show today's date
const options = {weekday : "long", month : "short", day : "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// Add to do function
function addToDo(toDo, id, done, trash) {
  
  if(trash) { return; }
  
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  
  const item = `<li class="item">
                  <i class="fa ${DONE}" job="complete" id="${id}"></i>
                  <p class="text ${LINE}">${toDo}</p>
                  <i class="fas fa-times de" job="delete" id="${id}"></i>
                </li>
                `;
  const position = "beforeend";
  
  list.insertAdjacentHTML(position, item);
}

// Add an item to the list when the user cick the enter key
document.addEventListener("keyup", function(event) {
  if(event.keyCode == 13) {
    const toDo = input.value;
    
    // If the input isn't empty
    if(toDo) {
      addToDo(toDo);
      
      LIST.push({
        name : toDo,
        id : id,
        done : false,
        trash : false
      });
      // Add item to localStorage
      localStorage.setItem("TODO", JSON.stringify(LIST));
      
      id++;
    }
    input.value = ""
  }
});


// complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// Remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  
  LIST[element.id].trash = true;
  // Add item to localStorage
  localStorage.setItem("TODO", JSON.stringify(LIST));
}

// Target the items created dynamically
list.addEventListener("click", function(event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  
  if(elementJob == "complete") {
    completeToDo(element);
  }else if(elementJob == "delete"){
    removeToDo(element);
  }
  // Add item to localStorage
  localStorage.setItem("TODO", JSON.stringify(LIST));
});


// For sorting the list
Sortable.create(list, {
    group: "list-1",
    options: {
      animation: 100,
      draggable: "#list li",
      handle: "#list li",
      sort: true,
      filter: ".sortable-disabled",
      chosenClass: "active"
    },
    store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get: function(sortable) {
        var order = localStorage.getItem(sortable.options.group.name);
        return order ? order.split("|") : [];
      },

      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set: function(sortable) {
        var order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, order.join("|"));
      }
    }
});