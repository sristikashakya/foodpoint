Zomato.init("54690d2d3df4125efff3dde6594981f8");

$(function(){
    $.ajax({
      url: 'https://api.zomato.com/v1/restaurant.json/773?api_key={54690d2d3df4125efff3dde6594981f8}',
      data: {"query": "McDonald's"}
    })
    .done(function(data){
      let htmlString = "";
    });
  })