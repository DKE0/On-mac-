/*jQuery(document).ready(function() {

  // Ici, le DOM est entièrement défini

});

$(document).ready(function() {

  // Ici, le DOM est entièrement défini

});

$(function() {

  // Ici, le DOM est entièrement défini


});*/

  $(function() {
    $(".rouge").fadeOut("slow", function()
    {
      $(this).fadeIn("slow");
    });
    $('.rouge').css('background','red');
    $('.rouge').css('color','yellow');
    $('#resultat').html('texte à écrire dans la balise span');

    $('[border*="1"]').css('border-color', 'red');
    $('[title~="child"]').css('border-color', 'red');
    $('[src$="e.jpg"]').css('border-color', 'red');
    $('[border!="15"]').css('border-color', 'red');
    $('[src^="ch"]').css('border-color', 'red');

  });
