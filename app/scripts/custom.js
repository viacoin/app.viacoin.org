

$(document).ready(function() {

    /* ---------------------------------------------- /*
     * WOW ANIMATION
     /* ---------------------------------------------- */
    new WOW().init();
    /* ---------------------------------------------- /*
     * Scroll top
     /* ---------------------------------------------- */

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scroll-up').addClass('scroll-top-show');
        } else {
            $('.scroll-up').removeClass('scroll-top-show');
        }
    });


    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-60
  }, 700);
    });


    /* Auto close navbar on click (mobile menu) */

    $('.navbar-nav > li > a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });



    /* Change navbar class on collapse/uncollapse in its top position */

    $('.wrapper .navbar-collapse').on('show.bs.collapse', function () {
        $('.navbar.js-navbar-top').toggleClass('navbar-default navbar-inverse');
        $('.navbar').toggleClass('js-toggleClass js-noToggleClass');
    });

    $('.wrapper .navbar-collapse').on('hide.bs.collapse', function () {
        $('.navbar.js-navbar-top').toggleClass('navbar-default navbar-inverse');
        $('.navbar').toggleClass('js-toggleClass js-noToggleClass');
    });

    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });


    particlesJS('particles-js', {
        'particles': {
            'number': {
                'value': 180,
                'density': {
                    'enable': true,
                    'value_area': 800
                }
            },
            'color': {
                'value': '#00e'
            },
            'shape': {
                'type': 'circle',
                'stroke': {
                    'width': 0,
                    'color': '#000000'
                },
                'polygon': {
                    'nb_sides': 5
                },
                'image': {
                    'src': 'img/github.svg',
                    'width': 100,
                    'height': 100
                }
            },
            'opacity': {
                'value': 0.1,
                'random': false,
                'anim': {
                    'enable': false,
                    'speed': 1,
                    'opacity_min': 0,
                    'sync': false
                }
            },
            'size': {
                'value': 1,
                'random': true,
                'anim': {
                    'enable': false,
                    'speed': 40,
                    'size_min': 0.1,
                    'sync': false
                }
            },
            'line_linked': {
                'enable': true,
                'distance': 150,
                'color': '#ffffff',
                'opacity': 0.4,
                'width': 1
            },
            'move': {
                'enable': true,
                'speed': 2,
                'direction': 'none',
                'random': false,
                'straight': false,
                'out_mode': 'out',
                'bounce': false,
                'attract': {
                    'enable': false,
                    'rotateX': 600,
                    'rotateY': 1200
                }
            }
        },
        'interactivity': {
            'detect_on': 'canvas',
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'grab'
                },
                'onclick': {
                    'enable': true,
                    'mode': 'push'
                },
                'resize': true
            },
            'modes': {
                'grab': {
                    'distance': 140,
                    'line_linked': {
                        'opacity': 1
                    }
                },
                'bubble': {
                    'distance': 400,
                    'size': 140,
                    'duration': 2,
                    'opacity': 8,
                    'speed': 23
                },
                'repulse': {
                    'distance': 200,
                    'duration': 0.4
                },
                'push': {
                    'particles_nb': 4
                },
                'remove': {
                    'particles_nb': 2
                }
            }
        },
        'retina_detect': true
    });

 $(function() {
            $.ajax({
                dataType: "json",
                url: "https://api.coinmarketcap.com/v1/ticker/viacoin/",
               success: function(data) {
                   var rank = data[0].rank;
                   var price = parseFloat(data[0].price_usd).toFixed(2);
                    document.getElementById("stats-rank").innerHTML = rank;
                   document.getElementById("stats-price").innerHTML = '$' + price;
                }
            });
        });


});
