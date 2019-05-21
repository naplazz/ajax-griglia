$(document).ready(function() {

/// creo il template del quadrato
var source   = document.getElementById("template-quadrato").innerHTML;
var template = Handlebars.compile(source);
var context = {
  numero: "",

};
// lo ripeto per 306 volte
var html    = template(context);
for (var i = 0; i < 36; i++) {
  $(".container").append(html)
};
//quando clicco sul quadtato
$('.quadrato').click(function() {
  var quadrato = $(this);
  var titolo = $(this).find('h1');
//faccio la chiamata api
  $.ajax({
    url: 'https://www.boolean.careers/api/random/int',
    method: 'GET',
    success: function(data){
      ///sostituisco il numero (titolo) con il valore della chiamata
      titolo.text(data.response)
      //aggiungo la condizione per cambiare lo sfondo
      if (data.response <= 5) {

        quadrato.addClass('bg-yellow')
        quadrato.removeClass('bg-green')
      } else {
        quadrato.addClass('bg-green')
        quadrato.removeClass('bg-yellow')
      }

    } ,
    error: function() {
      alert('errore')
    }


  }); //ajax closing


}); /// click closing

}); //doc ready end
