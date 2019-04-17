$(function(){
  $('#current-year').html(new Date().getFullYear());
    $('.vehicleModal-btn').click(function(){
      $('#vehicleModal').modal('show');
    });
    $('.pollingModal-btn').click(function(){
      $('#pollingModal').modal('show');
    });
    $('.routeHistory-btn').click(function(){
      $('#routeHistoryModal').modal('show');
    });
    // $('.datepicker').datepicker({
    //     format: 'dd M yyyy'
    // }); // code for date picker
    $('.button-collapse').click(function(){
        $('body').append('<div id="sidenav-overlay"></div>');
        $('body').addClass('sidemenu-opened');
    });
    $('body').on('click','#sidenav-overlay', function () {
       $(this).fadeOut();
       $('body').removeClass('sidemenu-opened');
    });
});

if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
    .register('../pw-cache-assets.js')
    .then(reg => {
      console.log('service worker registered! with- ', reg.scope)
    })
    .catch(err => console.log(`service worker: Error : ${err}`))
  });
}