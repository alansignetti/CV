$(document).ready(function(){
 
    
    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
        ,responsive: true
      });
  
    // Posts
    
      const today = moment().subtract(1, 'hour')
      const today1 = moment().subtract(2, 'hour')
      const today2 = moment().subtract(40, 'hour')
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
                <a href="#" class="button-more">Leer más</a>
            </article>
        `;

        $("#posts").append(post);
    });	
     
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
    $('.subir').click(function(e){
        e.preventDefault();
        // $('html, body').animate({
        //     scrollTop: 0
        // },500);

        $('html, body').animate({
            scrollTop: 0
          }, 2000); // for all browsers
          
        return false;
    });

});