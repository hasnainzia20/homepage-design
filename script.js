
$(document).on("ready", function () {
    $(".regular").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: null,
            // prevArrow: false,
            // $nextArrow: 0,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: null,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: null,
          }
        }
      ]
    });



    $(".lazy").slick({
      lazyLoad: "ondemand", // ondemand progressive anticipated
      infinite: true,
    });

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      mobileFirst: true,
    

      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: null,
            autoplay: true,
            // prevArrow: false,
            // $nextArrow: 0,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: null,
            autoplay: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: null,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: null,
          }
        },

        {
          breakpoint: 390,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: null,
          }
        }
      ]
    });

    $('.responsive').slick({
      // dots: true,
      // infinite: false,
      // speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });

  
  update_users_count();
function update_users_count() {
    $('#count-1 span').animate({counter: 94}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      },
      complete: update_users_count
    }),
    $('#count-2 span').animate({counter: 2334}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      },
      complete: update_users_count
    }),
    $('#count-3 span').animate({counter: 126}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      },
      complete: update_users_count
    }),
    $('#count-4 span').animate({counter: 32}, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
      },
      complete: update_users_count
    });
  };
  
  // update_users_count();
  // function update_users_count() {
  //   $('#count-3 span').animate({
  //     counter: 126
  //   }, {
  //     duration: 6000,
  //     easing: 'swing',
  //     step: function(now) {
  //       $(this).text(Math.ceil(now));
  //     },
  //     complete: update_users_count
  //   });
    
  // };
  
  // update_users_count();
  // function update_users_count() {
  //   $('#count-4 span').animate({
  //     counter: 260
  //   }, {
  //     duration: 6000,
  //     easing: 'swing',
  //     step: function(now) {
  //       $(this).text(Math.ceil(now));
  //     },
  //     complete: update_users_count
  //   });
  // };
  
  // update_users_count();
  // update_users_count();