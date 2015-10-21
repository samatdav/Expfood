json = json.sort(function(a, b) {
    return parseFloat((new Date(a.createdAt)).getTime()) - parseFloat((new Date(b.createdAt)).getTime());
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
    
    window[json[i].category]  += '<div class="product-wrap"> <div class="product" id="' + json[i].objectId + '"> <a href="#" data-toggle="modal" data-target="#idt' + json[i].objectId + '"> <div class="product_img"> <span class="helper"></span> <img class="" src="' + json[i].img_sm + '"> </a> </div> <button class="item_count visible btn count btn-dark-blue btn-small-med btn-trans">'+sessionStorage[json[i].objectId]+'</button> <div class="action"> <div> <button href="javascript:void(0)" class="reduce_count visible btn minus btn-dark-blue btn-small-med btn-trans">-</button> <button href="javascript:void(0)" class="increase_count btn add btn-dark-blue btn-small-med btn-trans">Добавить</button> </div> </div> <div class="desc"> <div class="name"> <p class="product-name">' + json[i].product_name + '</p> </div>  <div class="price"> <p class="product-price">' + Math.floor(json[i].price*1.1 + json[i].weight*0.01) + '<span class="kop">00</span></p> </div> <div class="product-howmuch">'+ json[i].amount +' </div></div> </div> </div>';

    } else {
        // console.log('2');
    window[json[i].category]  += '<div class="product-wrap"> <div class="product" id="' + json[i].objectId + '">  <a href="#" data-toggle="modal" data-target="#idt' + json[i].objectId + '"> <div class="product_img"> <span class="helper"></span> <img class="" src="' + json[i].img_sm + '">  </div> </a><button class="item_count hidden btn count btn-dark-blue btn-small-med btn-trans">'+sessionStorage[json[i].objectId]+'</button> <div class="action"> <div> <button href="javascript:void(0)" class="reduce_count hidden btn minus btn-dark-blue btn-small-med btn-trans">-</button> <button href="javascript:void(0)" class="increase_count btn add btn-dark-blue btn-small-med btn-trans">Добавить</button> </div> </div> <div class="desc"> <div class="name"> <p class="product-name">' + json[i].product_name + '</p> </div>  <div class="price"> <p class="product-price">' + Math.floor(json[i].price*1.1 + json[i].weight*0.01) + '<span class="kop">00</span></p> </div><div class="product-howmuch">'+ json[i].amount +' </div> </div> </div> </div>';

    }


}


for (i = 0; i < json.length; i++) { 

    consist = '';
    ctitles = json[i].ctitles;
    cvalues = json[i].cvalues;

    for (x = 0; x < ctitles.length; x++) { 
        consist+=('<div class="product_card_prop_item mb5"> <div class="product_card_prop_item_title">'+ctitles[x]+'</div> <div class="product_card_prop_item_value">'+cvalues[x]+'</div> <div class="clear"></div> </div>');
    }
    // window[json[i].category] += '1';
    window[json[i].category]  += '<div class="modal fade bs-example-modal-lg" id="idt' + json[i].objectId + '" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true"> <div class="modal-dialog modal-lg"> <div class="modal-content row"> <div class="row"> <div class="popup-image";> <span class="popup-helper"></span> <img class="popimg" src="' + json[i].img_sm + '"> </div> <div class="popup-name"> <p class="popup-title" id="myModalLabel">' + json[i].product_name + '</p> <div class="popup-price"> ' + Math.floor(json[i].price*1.1 + json[i].weight*0.01) + '<span class="kop">00</span> <span class="popup-rub">'+num2word(Math.floor(json[i].price),words)+'</span> </div> <div class="popup-mass"> '+ json[i].amount +'</div> </div> </div> <hr> <div class="row"> <div class="popup-description"> <strong>Описание</strong> <br> <div class="description-text">' + json[i].description + '</div> </div> <div class="product_card_props f32">'+ consist +' </div> </div> </div> </div> </div>';
    // console.log(consist);

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


