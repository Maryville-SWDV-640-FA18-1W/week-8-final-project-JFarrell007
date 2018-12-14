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