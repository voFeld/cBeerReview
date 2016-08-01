var beers = [];
var ratings = [];

var addBeer = function (name, category, rating) {


    var beer = {
        name: name,
        category: category,
        rating: rating
    };

    beers.push(beer);
    console.log(beers);
};



$('.post-beer').on('click', function(e) {
    e.preventDefault();
    var userInput = $('.user-input').val();
    var beerInput = $('.beer-input').val();
    var ratingInput = $('.rating-input').val();

    addBeer(userInput,beerInput,ratingInput);
    updateBeers();
});

var updateBeers = function(){
    $('.beers-list').find('li').remove();

    for(var i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + '\: ' + beers[i].category + ' ' + beers[i].rating + '</li>');
    }
};

var clicked = 0;

$('.item-sort').on('click', function(e){
    e.preventDefault();
    $('.beers-list').find('li').remove();

    if(clicked === 0) {
        clicked = 1;
        beers = beers.sort(function (a, b) {
            return a.rating.localeCompare(b.rating);
        });
    } else {
        clicked = 0;
        beers = beers.sort(function (a, b) {
            return b.rating.localeCompare(a.rating);
        });
    }

    updateBeers();
});
