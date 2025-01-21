// 마우스커서
const cursor = document.querySelector('#cursor');
    const cursorCircle = cursor.querySelector('.cursor__circle');

    const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
    const pos = { x: 0, y: 0 }; // cursor's coordinates
    const speed = 0.1; // between 0 and 1

    const updateCoordinates = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);

    function getAngle(diffX, diffY) {
      return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
      const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
      );
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
      const rotate = 'rotate(' + angle + 'deg)';
      const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

      cursor.style.transform = translate;
      cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const cursorModifiers = document.querySelectorAll('a');

    cursorModifiers.forEach(curosrModifier => {
      curosrModifier.addEventListener('mouseenter', function () {
        cursor.classList.add('cursor_on');
      });

      curosrModifier.addEventListener('mouseleave', function () {
        cursor.classList.remove('cursor_on');
      });
    });
// 해더
$(function () {
    //숨긴 메뉴 보이기 
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta 
        if (Math.abs(lastScrollTop - st) <= delta) return;

        // If they scrolled down and are past the navbar, add class .nav-up. 
        // This is necessary so you never see what is "behind" the navbar. 
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down 
            $('header').addClass('nav-up');
        } else {
            // Scroll Up 
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up');
            }
        }

        lastScrollTop = st;
    }
});


var mySwiper = new Swiper('.visual', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  autoplay:{
                delay:4000 //1초의 딜레이를 주고 자동 재생된다
            },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

$('.start').click(function(){
  mySwiper.autoplay.start();
});
$('.stop').click(function(){
  mySwiper.autoplay.stop();
});

// 탑버튼
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('.top_bt').fadeIn();
  } else {
      $('.top_bt').fadeOut();
  }
});

$('.top_bt').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400);
  return false;
});

// aos나오는속도
AOS.init({
  duration: 1200 //aos 나타나는 속도
});
