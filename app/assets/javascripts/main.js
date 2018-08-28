Zomato.init("54690d2d3df4125efff3dde6594981f8");

$(function(){
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?api_key={AIzaSyCEApYzDYMDbSzQ1hKxbZdVPfoeGHkLBb8}',
      data: {"query": "restaurants+in+Sydney"}
    })
    .done(function(data){
      let htmlString = "";
    });
  })