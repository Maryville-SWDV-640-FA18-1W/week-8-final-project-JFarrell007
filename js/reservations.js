$(function(){
    $('.findtable').click(function(e){
      e.preventDefault();
      var date = new Date($('#date-input').val());
      day = date.getDate() + 1;
      month = date.getMonth() + 1;
      year = date.getFullYear();

      var resDate = [month, day , year].join('/');
      console.log(resDate);

      var resTime = $("#time-input option:selected").text();
      console.log(resTime);

      var resGuests = $("#guests-input option:selected").text();
      console.log(resGuests);

      //var resGuests = $("#guests-input option:selected").text();
      //console.log(resGuests);

      var mymodal = $('#myModal');
      mymodal.find('.modal-header .resDate').html(resDate);
      mymodal.find('.modal-header .resTime').html(resTime);
      mymodal.find('.modal-header .resGuests').html(resGuests);
      
    });
  })

//Put the current date into the date input field
$(document).ready( function() {
  var today = setMinDate();
  //set default reservation date to today
  $('#date-input').val(today);
});
//Method to set min date attribute to today's date
//Returns todays date
function setMinDate(){
var today = new Date().toISOString().split('T')[0];
console.log(today);
console.log(document.getElementsByName("reservation-date")[0]);
document.getElementsByName("reservation-date")[0].setAttribute('min', today);
return today;
}
