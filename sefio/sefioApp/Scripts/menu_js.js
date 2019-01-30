//$(function(){
//    var flag = 0;
//    $('.menu-icon').on('click', function(e){
//      e.preventDefault();
//      if(flag === 0 ){
//        $('.menu-icon').addClass("active");
//        $('.menu').addClass('visible'); 
//        flag = 1;
//      }else {
//        $('.menu-icon').removeClass("active");
//        $('.menu').removeClass('visible');
//        flag = 0;
//      }
//   });
//});

$(document).ready(function () {
    $(document).delegate('.open', 'click', function (event) {
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function (event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function (event) {
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});