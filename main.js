$(document).ready(function() {


var source   = document.getElementById("template-quadrato").innerHTML;
var template = Handlebars.compile(source);
var context = {
  numero: "",

};
var html    = template(context);
for (var i = 0; i < 36; i++) {
  $(".container").append(html)
};

$('.quadrato').click(function() {
  var quadrato = $(this);
  var titolo = $(this).find('h1');

  $.ajax({
    url: 'https://www.boolean.careers/api/random/int',
    method: 'GET',
    success: function(data){
      titolo.text(data.response)
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
