$(document).ready(function(){
 
    function showClock() {
        let clock = moment().format('hh:mm:ss');
              
        return $('#clock').html(clock);
      }
    setInterval(function(){
        showClock();
    },100);
    
    if  (window.location.pathname == '/portfolio-3.html')
    
    {
        // Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
            ,responsive: true
          });


          console.log(window.location.pathname);

    };
 
    // Posts
    if (window.location.pathname == '/portfolio-3.html'){
        
        const today = moment().subtract(1, 'hour');
        const today1 = moment().subtract(2, 'hour');
        const today2 = moment().subtract(40, 'hour');
        let posts = [
          {
              title: 'Article Title 1',
              // date: moment().format("MMM Do YY"),
              date: 'Posted ' + moment(today).fromNow(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo.' 
          },
          {
              title: 'Article Title 2',
              // date: moment().format("MMM Do YY"),
              date:'Posted ' + moment(today).fromNow(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo.' 
          },
          {
              title: 'Article Title 3',
              date:'Posted ' + moment(today1).fromNow(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo.' 
          },
          {
              title: 'Article Title 4',
              date:'Posted ' + moment(today2).fromNow(),
              content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet malesuada erat, ac ullamcorper justo.' 
          }
        ];
  
        posts.forEach((item, index) => {
          var post = `
              <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <p>
                      ${item.content}
                  </p>
                  <a href="#" class="button-more">Read More</a>
              </article>
          `;
  
          $("#posts").append(post);
      });	
    };
      
     
    let theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href","assets/css/green-style-portfolio-3.css");
    });
    $("#to-red").click(function(){
        theme.attr("href","assets/css/red-style-portfolio-3.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href","assets/css/blue-style-portfolio-3.css");
    });


    // Scroll to Top
	$('.top').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});


        // fake login (localstorage)
        $("#login form").submit(function(){
            let form_name= $("#form_name").val();
            localStorage.setItem("form_name",form_name);

        });

        let form_name= localStorage.getItem("form_name");

        if (form_name != null && form_name != "undefined" ) {      
            let about_p = $("#about p");      
            about_p.html("<br><strong>Welcome "+ form_name+"</strong>");
            // about_p.append("<a href='#' id='logout'> Logout </a>")
            about_p.append("<a href='#' id='logout' class='btn btn-default btn-sm'><span  class='glyphicon glyphicon-log-out'></span> Log out</a>");
            

          $("#login").hide();
          $("#logout").click(function(){
            localStorage.clear();
            location.reload(); 
          });
        };

        if (window.location.pathname == '/about-portfolio-3.html'){
            $("#accordion").accordion();
            
        };



        if (window.location.pathname == '/contact-portfolio-3.html'){
            $("#contact_form").validate({
                rules: {
                  name : {
                    required: true,
                    minlength: 3
                  },
                  surname: {
                    required: true,
                    minlength: 4
                  },
                  email : {
                    required: true
                  },
                  age: {
                    required: true,
                    number: true,
                
                  } 
                },
                messages : {
                    name: {
                      minlength: "Name should be at least 3 characters",
                      required: "Please enter your name"
                    },
                    surname: {
                        required: "Please enter your last name"
                    },
                    email: {
                      email: "The email should be in the format: abc@domain.tld"
                    }
                    
                }
              });
        };

        
});