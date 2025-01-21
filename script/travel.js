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
// aos나오는속도
AOS.init({
  duration: 1200 //aos 나타나는 속도
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
// 비쥬얼 자바스크립트

var swiper = new Swiper('.visual_text', {
  speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 4000,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },

  loop: true,//슬라이드 무한반복
});
var swiper = new Swiper('.visual_img_slide', {

  speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 4000,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.visual_img_slide .swiper-button-next',
    prevEl: '.visual_img_slide .swiper-button-prev',
  },
  pagination: {//블릿 버튼
    el: '.visual_img_slide .swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

// 취향따라 떠나는 여행 스와이퍼 슬라이드
var swiper = new Swiper('.travel_slide .travel_slide_inner', {
  slidesPerView: 3,//보여지는 갤러리 수
  speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
    delay: 4000,//자동으로 넘어가기 전 머무르는 시간
    disableOnInteraction: false,
  },

  loop: true,//슬라이드 무한반복
  navigation: {//화살표 버튼
    nextEl: '.travel_slide .swiper-button-next',
    prevEl: '.travel_slide .swiper-button-prev',
  },
});


// 이색체험
var swiper = new Swiper('.Experience_slide', {
  slidesPerView: 3,
  speed: 1000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
  autoplay: {
      delay: 4000,//자동으로 넘어가기 전 머무르는 시간
      disableOnInteraction: false,
  },
  loop: true,//슬라이드 무한반복
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
