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


// 지도맵클릭시 팝업창
$(function(){
    $('.map .namwon').click(function(){
        $('.popup').fadeOut();
        $('.namwon-text').fadeIn();
    })

    $('.map .aewol').click(function(){
        $('.popup').fadeOut();
        $('.aewol-text').fadeIn();
       
    })

    $('.map .anduck').click(function(){
        $('.popup').fadeOut();
        $('.anduck-text').fadeIn();
       
    })

    $('.map .deajung').click(function(){
        $('.popup').fadeOut();
        $('.deajung-text').fadeIn()
       
    })

    $('.map .gujua').click(function(){
        $('.popup').fadeOut();
        $('.gujua-text').fadeIn()
       
    })

    $('.map .hankyung').click(function(){
        $('.popup').fadeOut();
        $('.hankyung-text').fadeIn()
       
    })

    $('.map .jejusi').click(function(){
        $('.popup').fadeOut();
        $('.jejusi-text').fadeIn()
       
    })

    $('.map .jungmun').click(function(){
        $('.popup').fadeOut();
        $('.jungmun-text').fadeIn()
       
    })

    $('.map .namjeju').click(function(){
        $('.popup').fadeOut();
        $('.namjeju-text').fadeIn()
       
    })

    $('.map .phoysun').click(function(){
        $('.popup').fadeOut();
        $('.phoysun-text').fadeIn()
       
    })

    $('.map .suguipo').click(function(){
        $('.popup').fadeOut();
        $('.suguipo-text').fadeIn()
    })

    $('.map .sungsan').click(function(){
        $('.popup').fadeOut();
        $('.sungsan-text').fadeIn()
       
    })

    $('.map .uodo').click(function(){
        $('.popup').fadeOut();
        $('.uodo-text').fadeIn()
       
    })

    $('.map .jochun').click(function(){
        $('.popup').fadeOut();
        $('.jochun-text').fadeIn()
       
    })

    $('.map .hanlip').click(function(){
        $('.popup').fadeOut();
        $('.hanlip-text').fadeIn()
       
    })
});

// 숙소 자바스크립트

var swiper = new Swiper('.accommodation ', {
    speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 4000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.accommodation .swiper-button-next',
        prevEl: '.accommodation .swiper-button-prev',
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
});
// 렌트카 자바스크립트
var swiper = new Swiper('.rentcarslide ', {
    speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 4000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    navigation: {//화살표 버튼
        nextEl: '.rentcarslide .swiper-button-next',
        prevEl: '.rentcarslide .swiper-button-prev',
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
});



$(function () {
    // 기본
    $("#scroller").simplyScroll({
        speed: 1,
    });
});
AOS.init();

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