$( document ).ready(function() {
    //function to get cookie value
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    $( "#switchTheme" ).click(function() {
      $("html").toggleClass("dark");
      if (getCookie("theme") == "dark"){
          document.cookie = "theme=light; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
      } else{
          document.cookie = "theme=dark; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/";
      }
      
    });
})