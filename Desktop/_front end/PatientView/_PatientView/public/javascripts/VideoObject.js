    function MovieObject(_movieUrl) {
      this.url = _movieUrl;
      this.pvclass = 'movie';
    }

    MovieObject.prototype._load = function() {
      
      $("#movie_menu_with_buttons").fadeIn(500);
      //document.getElementById('movie_menu_with_buttons').style.display = 'inline'

      document.getElementById('myvideo').src = this.url;
      setTimeout(function(){ document.getElementById('myvideo').play();}, 500);
    }

    MovieObject.prototype._hide = function() {
      document.getElementById('movie_menu_with_buttons').style.display = 'none'
    }
