/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

//keypress enter
//  var input = document.getElementById("cost");
//  input.addEventListener("keyup", function(event) {
//    if (event.keyCode === 13) {
//      event.preventDefault();
//      document.getElementById("calc").click();
//    }
//  });


//keypress enter for all input
var inputs = document.querySelectorAll("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("calc").click();
      document.getElementById("calc1").click();
    }
  });
}

// calculates the formula
function calculate() {
  const cost = Number(document.getElementById("cost").value);
  const margin = Number(document.getElementById("margin").value);
  const labor = Number(document.getElementById("labor").value);
  const shipping = Number(document.getElementById("shipping").value);
  const result = document.getElementById("result");

  result.innerHTML = money_separators("The cost is $" + (cost * (1 + margin / 100) + (labor + shipping)).toFixed(2) + " + taxes");
}

$('#cost, #margin, #labor, #shipping, #tax').keyup(function () {
  const cost = Number(document.getElementById("cost").value);
  const margin = Number(document.getElementById("margin").value);
  const labor = Number(document.getElementById("labor").value);
  const shipping = Number(document.getElementById("shipping").value);
  const tax = Number(document.getElementById("tax").value);
  const result = document.getElementById("result");

  if (tax < 1) {
    result.innerHTML = money_separators("The cost is $" + (cost * (1 + margin / 100) + (labor + shipping)).toFixed(2) + " + taxes");
  } else {
    result.innerHTML = money_separators("The cost is $" + ((cost * (1 + margin / 100) + (labor + shipping)) * (1 + tax / 100)).toFixed(2) + " including taxes");
  }
});

// disables autocomplete in the form textbox
$("form").attr("autocomplete", "off");

// tooltip
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

// stops the page from redirecting when submit is clicked
$(function() {
  $("#calcForm").submit(function(event) {
    event.preventDefault();
    $(this).submit();
  });
});

function perRound(num, precision) {
  var precision = 3; //default value if not passed from caller, change if desired
  // remark if passed from caller
  precision = parseInt(precision); // make certain the decimal precision is an integer
  var result1 = num * Math.pow(10, precision);
  var result2 = Math.round(result1);
  var result3 = result2 / Math.pow(10, precision);
  return zerosPad(result3, precision);
}

function zerosPad(rndVal, decPlaces) {
  var valStrg = rndVal.toString(); // Convert the number to a string
  var decLoc = valStrg.indexOf("."); // Locate the decimal point
  // check for a decimal
  if (decLoc == -1) {
    decPartLen = 0; // If no decimal, then all decimal places will be padded with 0s
    // If decPlaces is greater than zero, add a decimal point
    valStrg += decPlaces > 0 ? "." : "";
  } else {
    decPartLen = valStrg.length - decLoc - 1; // If there is a decimal already, only the needed decimal places will be padded with 0s
  }
  var totalPad = decPlaces - decPartLen; // Calculate the number of decimal places that need to be padded with 0s
  if (totalPad > 0) {
    // Pad the string with 0s
    for (var cntrVal = 1; cntrVal <= totalPad; cntrVal++) valStrg += "0";
  }
  return valStrg;
}

// clears field of default value
function clear_field(field) {
  if (field.value == field.defaultValue) {
    field.value = "";
  }
}

function s(num, val) {
  var amount = num * 1; // amount is the num or NaN
  var sum = (!num ? 0 : num) * val; // the sum for that bill or coin

  if (isNaN(amount)) {
    // if the entire is not a number
    alert(
      "' " +
        num +
        " ' is not a valid entry and that field will " +
        "not be included in the total money calculation."
    );
    return 0;
  } else return sum; // if it is OK, send sum back
}

// separates numbers in thousands with comma
function money_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

function money(form) {
  var hun = s(form.hun.value, 100); // Each amount is the returned value
  var fif = s(form.fif.value, 50); // for the amount in the s() function
  var twe = s(form.twe.value, 20);
  var ten = s(form.ten.value, 10);
  var fiv = s(form.fiv.value, 5);
  var two = s(form.two.value, 2);
  var one = s(form.one.value, 1);
  //sdol = s(form.sdol.value, 1);
  //hlf = s(form.hlf.value, .5);
  var qtr = s(form.qtr.value, 0.25);
  var dme = s(form.dme.value, 0.1);
  var nck = s(form.nck.value, 0.05);
  //pny = s(form.pny.value, .01);

  // add up all the amounts
  // var ttl = hun + fif + twe + ten + fiv + two + one + sdol + hlf + qtr + dme + nck + pny;
  var ttl = hun + fif + twe + ten + fiv + two + one + qtr + dme + nck;

  // add up all the bills
  var bills =
    form.hun.value * 1 +
    form.fif.value * 1 +
    form.twe.value * 1 +
    form.ten.value * 1 +
    form.fiv.value * 1;

  // add up all the coins
  // var coins = (form.sdol.value *1) + (form.hlf.value *1) + (form.qtr.value *1) + (form.dme.value *1) + (form.nck.value *1) + (form.pny.value *1);
  var coins =
    form.two.value * 1 +
    form.one.value * 1 +
    form.qtr.value * 1 +
    form.dme.value * 1 +
    form.nck.value * 1;

  // rounds total to two decimal places

  ttl = "" + Math.round(ttl * 100) / 100;

  var dec1 = ttl.substring(ttl.length - 3, ttl.length - 2);
  var dec2 = ttl.substring(ttl.length - 2, ttl.length - 1);

  if (dec1 != ".") {
    // adds trailing zeroes if necessary
    if (dec2 == ".") ttl += "0";
    else ttl += ".00";
  }
  form.total.value = money_separators("$ " + ttl); // display total amount with money_separator function
  form.bills.value = bills; // display total quantity bills
  form.coins.value = coins; // display total quantity coins
}

$("#hun, #fif, #twe, #ten, #fiv, #two, #one, #qtr, #dme, #nck").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        $('#calc1').click(money(this.form));
    }
});

// Auto adjusting text in input boxes
$.fn.textWidth = function(text, font) {
    
    if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
    
    $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
    
    return $.fn.textWidth.fakeEl.width();
};

$('.width-dynamic').on('input', function() {
    var inputWidth = $(this).textWidth();
    $(this).css({
        width: inputWidth
    })
}).trigger('input');


function inputWidth(elem, minW, maxW) {
    elem = $(this);
    console.log(elem)
}

var targetElem = $('.width-dynamic');

inputWidth(targetElem);

// Copy text inside the input
function modelNumberCopy() {
  var copyText = document.getElementById("modelNumber");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied: " + copyText.value);
}

$( "#copy-btn" ).click(function() {
  $( "div.copy" ).fadeIn( 300 ).delay( 1500 ).fadeOut( 400 );
});

// change title when inactive
/*
window.onload = function() {

  var pageTitle = document.title;
  var attentionMessage = "Professional Smartphone Repair";
  var blinkEvent = null;

  document.addEventListener('visibilitychange', function(e) {
    var isPageActive = !document.hidden;

    if(!isPageActive){
     // blink();
      document.title = attentionMessage; // comment this if you want to use blinking title
    }else {
      document.title = pageTitle;
     // clearInterval(blinkEvent); // remove the comment to use blinking title
    }
  });

 function blink(){
    blinkEvent = setInterval(function() {
      if(document.title === attentionMessage){
        document.title = pageTitle;
      }else {
        document.title = attentionMessage;
      }
    }, 100);
  }
};
*/


// keeps the active tab even if you refresh the page
$(document).ready(function(){
	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
		localStorage.setItem('activeTab', $(e.target).attr('href'));
	});
	var activeTab = localStorage.getItem('activeTab');
	if(activeTab){
		$('#pills-tab a[href="' + activeTab + '"]').tab('show');
	}
});


// Popover to stay on hover and activate html to use links
$(document).ready(function() {
  $('[data-toggle="popover"]').popover({
    placement: 'top',
    html: true,
  });

  $('[data-toggle="popover"]').on("mouseenter", function() {
    $(this).popover('show');
  });
  
  $('body').on('click', function(e) {
    $('[data-toggle=popover]').each(function() {
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });
});


//PPE Form Submission
/*
function ppesubject() {
  const ppeStoreName = (document.getElementById("ppeStoreName").value);
  const ppesubj = (document.getElementById("ppesubj").value);
  
  ppesubj.value = "PPE Replenishment Request " + ppeStoreName.value;
} 
*/

//PPE Form Submission
$('#ppeStoreName').keyup(function () {
   $('#ppesubj').val("PPE Replenishment Request " + $(this).val());
});

