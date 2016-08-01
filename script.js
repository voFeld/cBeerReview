var beers = [];

var addBeer = function (name, category) {


    var beer = {
        name: name,
        category: category
    };

    beers.push(beer);
    console.log(beers);
};



$('.post-beer').on('click', function(e) {
    e.preventDefault();
    var userInput = $('.user-input').val();
    var beerInput = $('.beer-input').val();

    addBeer(userInput,beerInput);
    updateBeers();
});

var updateBeers = function(){
    $('.beers-list').find('li').remove();

    for(var i = 0; i < beers.length; i++) {
        $('.beers-list').append('<li>' + beers[i].name + '\: ' + beers[i].category + '</li>');
    }
};

// Add another select to your form so that users can rate each beer from 0 to 5. Append the new information to the page.