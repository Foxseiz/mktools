var province = [ '5.00',
                 '12.00', 
                 '12.00',
                 '15.00',
                 '15.00',
                 '5.00',
                 '15.00',
                 '5.00',
                 '13.00',
                 '15.00',
                 '14.975',
                 '11.00',
                 '5.00'];

$('#paybright').change(function(paycalc) {
  var o = parseInt($(this).val()) < 14 ? $(this).val() - 1 : 2;
  $('#paytax').val(province[o]).addClass('hidden');
  $('#paytax, #paybprice, #paybplan, #paybacc').trigger("input") 
});

$('#paytax, #paybprice, #paybplan, #paybacc').on('input', function paycalc() {
  const paytax = Number(document.getElementById("paytax").value);
  const paybprice = Number(document.getElementById("paybprice").value); 
  const paybplan = Number(document.getElementById("paybplan").value);
  const paybacc = Number(document.getElementById("paybacc").value);
  //const sixmos = (document.getElementById("sixmos"));
  //const twemos = (document.getElementById("twemos"));

  if (paytax == "") {
    alert("Please select a province!");
    $('#paybprice').val("");
    return true;
  }
  
  if (paybprice < 100) {
    //$('#sixmos').val("N/A");
    //$('#twemos').val("N/A");
    $('#aslowas').val("N/A");
  } else {
    //$('#sixmos').val("$" + ((paybprice * (1 + paytax / 100) + (6 * 3.95)) / 6).toFixed(2) + " / month");
    //$('#twemos').val("$" + ((paybprice * (1 + paytax / 100) + (12 * 3.95)) / 12).toFixed(2) + " / month");
    $('#aslowas').val("$" + Math.ceil((((paybprice + paybacc) + (paybplan * 12)) * (1 + paytax / 100)) / 12).toFixed(0) + " / month");
  }
})

// =========================================================================================================================================================== //

/* //reference https://stackoverflow.com/questions/63164080/results-doesnt-update-after-changing-dropdown-javascript?noredirect=1#comment111695251_63164080
//Select options
$('#paybright').change(function(paycalc) {
  var o = parseInt($(this).val()) < 14 ? $(this).val() - 1 : 2;
  $('#paytax').val(province[o]).addClass('hidden');
  changeOnSelect()
});

//Change prices
function changeOnSelect() {
  var paytax = parseInt($('#paytax').val())
  var paybprice = parseInt($('#paybprice').val())
  var sixmos = $('#sixmos')
  var twemos = $('#twemos')

  if (paybprice < 300) {
    $(sixmos).val("N/A");
    $(twemos).val("N/A");
  } else {
    $(sixmos).val("$" + ((paybprice * (1 + paytax / 100) + (6 * 3.95)) / 6).toFixed(2) + " / month");
    $(twemos).val("$" + ((paybprice * (1 + paytax / 100) + (12 * 3.95)) / 12).toFixed(2) + " / month");
  }
}

//On input function
$('#paytax, #paybprice').on('input', function paycalc() {
  changeOnSelect()
})
*/

// =========================================================================================================================================================== //

/*
$('#paybright').change(function(paycalc){
    var o = parseInt($(this).val()) < 14 ? $(this).val()-1 : 2;
    $('#paytax').val(province[o]).addClass('hidden');
});


$('#paytax, #paybprice').on('input', function paycalc(){
  const paytax = Number(document.getElementById("paytax").value);
  const paybprice = Number(document.getElementById("paybprice").value);
  const sixmos = (document.getElementById("sixmos"));
  const twemos = (document.getElementById("twemos"));

  if (paybprice < 300) {
    $('#sixmos').val("N/A");
    $('#twemos').val("N/A");
  }else{
    $('#sixmos').val("$" + ((paybprice * (1 + paytax / 100) + (6 * 3.95)) / 6).toFixed(2) + " / month");
    $('#twemos').val("$" + ((paybprice * (1 + paytax / 100) + (12 * 3.95)) / 12).toFixed(2) + " / month");
  }
})


function paycalc() {
  const paytax = Number(document.getElementById("paytax").value);
  const paybprice = Number(document.getElementById("paybprice").value);
  const sixmos = (document.getElementById("sixmos"));
  const twemos = (document.getElementById("twemos"));

  if (paybprice < 300) {
    $('#sixmos').val("N/A");
    $('#twemos').val("N/A");
  }else{
    $('#sixmos').val("$" + ((paybprice * (1 + paytax / 100) + (6 * 3.95)) / 6).toFixed(2) + " / month");
    $('#twemos').val("$" + ((paybprice * (1 + paytax / 100) + (12 * 3.95)) / 12).toFixed(2) + " / month");
  }
}

$('#paytax, #paybprice').on('input', function(paycalc){})
$('#paytax, #paybprice').change('input', function(paycalc){})
*/

// =========================================================================================================================================================== //