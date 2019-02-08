 	var movieindex = 0;

  	var movieList = ['https://www.larissatech.com/test/sLarissaWarning1.mov','https://www.larissatech.com/test/sLarissaWarning2.mov','https://www.larissatech.com/test/sLarissaWarning3.mov','https://www.larissatech.com/test/sLarissaWarning4.mov','https://www.larissatech.com/test/sLarissaWarning5.mov','https://www.larissatech.com/test/sLarissaWarning6.mov','https://www.larissatech.com/test/sLarissaWarning7.mov']

  	function nextMovie() {
  		// increase index by 1 (if possible)
  		if (movieindex<movieList.length-1) {movieindex++;};
  		// load the movie
  		loadMovie(movieList[movieindex]);
  	}

  	function loadMovie(mName) {
  		document.getElementById('myvideo').src = mName;
  		document.getElementById('myvideo').play();
  		let _x = document.getElementById("top_buttons_ms");
      _x.style.display = 'none';
  	}

  	function previousMovie() {
  		if (movieindex>0) {movieindex--;};
  		loadMovie(movieList[movieindex]);
      let _x = document.getElementById("top_buttons_ms");
      _x.style.display = 'none';
  	}

  	
    
    function myMovieEndHandler() {
      let _x = document.getElementById("top_buttons_ms");
      _x.style.display = 'inline';
    }

    function TurnMovieScreenOn() {
      document.getElementById('movie_menu_with_buttons').style.display = 'inline';
      document.getElementById('top_buttons_ms').style.display = 'none';
      document.getElementById('myvideo').addEventListener('ended',myMovieEndHandler,false);
    }


    $(document).ready(function() {
	    document.getElementById('myvideo').addEventListener('ended',myMovieEndHandler,false);
    });



