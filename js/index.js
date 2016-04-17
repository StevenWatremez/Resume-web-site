$( document ).ready(function(){
    $(".button-collapse").sideNav();
});
toast('Appréciez la visite de mon site web', 3000, 'rounded'); // 'rounded' is the class I'm applying to the toast

$('a[href^="#"]').click(function(){
    var id = $(this).attr("href");
    var offset = $(id).offset().top
    $('html, body').animate({scrollTop: offset}, 'slow');
    return false;
}); 