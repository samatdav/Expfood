json = json.sort(function(a, b) {
    return parseFloat((new Date(a.updatedAt)).getTime()) - parseFloat((new Date(b.updatedAt)).getTime());
});

var fruits = '';
var juices = '';
var water = '';
var baby = '';
var curd = '';
var dairy = '';
var canned = '';
var salt = '';
var sauces = '';
var breakfasts = '';
var pasta = '';
var nuts = '';
var oil = '';
var frozen = '';
var cooked = '';
var meatdeli = '';
var meat = '';
var fish = '';
var cheese = '';
var bread = '';
var tea = '';
var sweet = '';
var cookies = '';
var choco = '';

var searchvar = '';


function num2word(num,words) {
  num=num%100;
  if (num>19) { num=num%10; }
  switch (num) {
    case 1:  { return(words[0]); }
    case 2: case 3: case 4:  { return(words[1]); }
    default: { return(words[2]); }
  }
}
words=Array("рубль", "рубля", "рублей");


for (i = 0; i < json.length; i++) { 
    
    if (Number(sessionStorage[json[i].objectId]) > 0) {
    
    window[json[i].category]  += '<div class="product-wrap"> <div class="product" id="' + json[i].objectId + '"> <a href="#" data-toggle="modal" data-target="#idt' + json[i].objectId + '"> <div class="product_img"> <span class="helper"></span> <img class="" src="' + json[i].img_sm + '"> </a> </div> <button class="item_count visible btn count btn-dark-blue btn-small-med btn-trans">'+sessionStorage[json[i].objectId]+'</button> <div class="action"> <div> <button href="javascript:void(0)" class="reduce_count visible btn minus btn-dark-blue btn-small-med btn-trans">-</button> <button href="javascript:void(0)" class="increase_count btn add btn-dark-blue btn-small-med btn-trans">Добавить</button> </div> </div> <div class="desc"> <div class="name"> <p class="product-name">' + json[i].product_name + '</p> </div>  <div class="price"> <p class="product-price">' + json[i].price + '<span class="kop">00</span></p> </div> <div class="product-howmuch">'+ json[i].amount +' </div></div> </div> </div>';

    } else {
        // console.log('2');
    window[json[i].category]  += '<div class="product-wrap"> <div class="product" id="' + json[i].objectId + '">  <a href="#" data-toggle="modal" data-target="#idt' + json[i].objectId + '"> <div class="product_img"> <span class="helper"></span> <img class="" src="' + json[i].img_sm + '">  </div> </a><button class="item_count hidden btn count btn-dark-blue btn-small-med btn-trans">'+sessionStorage[json[i].objectId]+'</button> <div class="action"> <div> <button href="javascript:void(0)" class="reduce_count hidden btn minus btn-dark-blue btn-small-med btn-trans">-</button> <button href="javascript:void(0)" class="increase_count btn add btn-dark-blue btn-small-med btn-trans">Добавить</button> </div> </div> <div class="desc"> <div class="name"> <p class="product-name">' + json[i].product_name + '</p> </div>  <div class="price"> <p class="product-price">' + json[i].price + '<span class="kop">00</span></p> </div><div class="product-howmuch">'+ json[i].amount +' </div> </div> </div> </div>';

    }


}







var current;
$.each([ 'fruits', 'juices', 'water', 'baby',  'curd', 'dairy', 'canned', 'salt', 'sauces', 'breakfasts', 'pasta', 'nuts', 'oil' , 'frozen' , 'cooked' , 'meatdeli' , 'meat' , 'fish' , 'cheese' , 'bread' , 'tea' , 'sweet' , 'cookies', 'choco'  ], function( index, value ) {
    $('#' + value).click(function () {
        $(".header_cat").empty();
        if (value == 'fruits') {
            $(".header_cat").prepend('Фрукты и овощи');
        } else if (value == 'juices') {
            $(".header_cat").prepend('Соки');
        } else if (value == 'water') {
            $(".header_cat").prepend('Вода и напитки');
        } else if (value == 'baby') {
            $(".header_cat").prepend('Детское питание');
        } else if (value == 'curd') {
            $(".header_cat").prepend('Творог и йогурты');
        } else if (value == 'dairy') {
            $(".header_cat").prepend('Молочные продукты');
        } else if (value == 'canned') {
            $(".header_cat").prepend('Консервы');
        } else if (value == 'salt') {
            $(".header_cat").prepend('Соль и специи');
        } else if (value == 'sauces') {
            $(".header_cat").prepend('Соусы');
        } else if (value == 'breakfasts') {
            $(".header_cat").prepend('Завтраки и чипсы');
        } else if (value == 'pasta') {
            $(".header_cat").prepend('Макароны и крупы');
        } else if (value == 'nuts') {
            $(".header_cat").prepend('Орехи и масла');
        } else if (value == 'frozen') {
            $(".header_cat").prepend('Замороженные продукты');
        } else if (value == 'cooked') {
            $(".header_cat").prepend('Кулинарея');
        } else if (value == 'meatdeli') {
            $(".header_cat").prepend('Мясные деликатесы');
        } else if (value == 'meat') {
            $(".header_cat").prepend('Мясо');
        } else if (value == 'fish') {
            $(".header_cat").prepend('Рыба');
        } else if (value == 'cheese') {
            $(".header_cat").prepend('Сыры');
        } else if (value == 'bread') {
            $(".header_cat").prepend('Хлеб');
        } else if (value == 'tea') {
            $(".header_cat").prepend('Чай и кофе');
        } else if (value == 'sweet') {
            $(".header_cat").prepend('Сладости');
        } else if (value == 'cookies') {
            $(".header_cat").prepend('Печенье');
        } else if (value == 'choco') {
            $(".header_cat").prepend('Шоколад');
        }


        $(".inmoscow").empty();
        $(".header_cat").css('top', '20px');

        


        window[current] = '';
        window[current] = $(".products-wrap").html();
        $(".products-wrap").empty();
        $(".products-wrap").prepend(window[value]);
        current = value;
    });
});

$('#logo').click(function () {
    $(".header_cat").css('top', '14px');
    $(".header_cat").empty();
    $(".header_cat").prepend('<span id="first_header">Доставка продуктов за 1 час <br> <span class="inmoscow">в <a id="moscow" href="about.html"><u>центре Москвы</u></a></span></span>');
    $(".products-wrap").empty();
    $(".products-wrap").prepend('<img src="img/main.png"><a href="#top"><img id="mainimage" src="img/mainred.png"></a>');
    current = '';
});

$( ".cats" ).click(function() {
    $( ".product" ).each(function( index ) {
      var theId = $(this).attr('id');
      $(this).find('.item_count').html(sessionStorage[theId]);
      if (sessionStorage[theId] > 0) {
        $(this).find('.reduce_count').removeClass( "hidden" ).addClass( "visible" );
        $(this).find('.item_count').removeClass( "hidden" ).addClass( "visible" );
      } else {
        $(this).find('.reduce_count').removeClass( "visible" ).addClass( "hidden" );
        $(this).find('.item_count').removeClass( "visible" ).addClass( "hidden" );
      }
    });
});


