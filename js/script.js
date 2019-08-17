$('#delete1').on('click', function(e){
  e.preventDefault();
  
  var val = $('.form-control-1').val();
  
  if(val.length >= 1){
    $('.form-control-1').val('');
  }

});
    $('#calendar1').on('click', function(e){
  
    $('.form-control-1').datepicker("show");

  
 });
    $('#delete2').on('click', function(e){
  e.preventDefault();
  
  var val = $('.form-control-2').val();
  
  if(val.length >= 1){
    $('.form-control-2').val('');
  }

});
    $('#calendar2').on('click', function(e){
  
    $('.form-control-2').datepicker("show");

  
 });