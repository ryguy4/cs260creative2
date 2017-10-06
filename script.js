
  var myurl= "http://api.icndb.com/jokes/random?exclude=[explicit]";
  function getJoke(){
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(data) {
		var joke = data['value']['joke'];
		//var everything ="<img src=\"norris1.jpg\" alt=\"\" /><h2><span>"+joke+"</span></h2>";
		
		$("#jokeGoesHere").html(joke);
    }
  });
  }
