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

//    메인배너 스와이퍼 슬라이드
const swiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  effect: 'coverflow',
  coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      stretch: 70,
  },
  autoplay: {
      delay: 3000, // 슬라이드 전환 간격 (3초)
      disableOnInteraction: false, // 사용자가 슬라이드와 상호작용해도 자동 재생 유지
  },
});
// md추천 심플리 스크롤
$(function () {
  // 기본
  $("#scroller").simplyScroll({
      speed: 1,
  });
});

// 타임세일 타이머

function startTimer(timerId, duration) {
  let remainingTime = duration;

  function updateTimer() {
      if (remainingTime > 0) {
          const hours = String(Math.floor(remainingTime / 3600)).padStart(2, "0");
          const minutes = String(Math.floor((remainingTime % 3600) / 60)).padStart(2, "0");
          const seconds = String(remainingTime % 60).padStart(2, "0");

          $(`#${timerId} .hours`).html(hours);
          $(`#${timerId} .minutes`).html(minutes);
          $(`#${timerId} .seconds`).html(seconds);

          remainingTime--;
      } else {
          resetTimer(timerId, duration); // 타이머 초기화 후 다시 시작
      }
  }

  const timerInterval = setInterval(updateTimer, 1000);

  function resetTimer(timerId, newDuration) {
      clearInterval(timerInterval); // 현재 타이머 종료
      startTimer(timerId, newDuration); // 새로운 타이머 시작
  }

  updateTimer(); // 즉시 업데이트
}

// 타이머 초기화 시간 (초 단위)
const baseDuration = 2 * 3600 + 30 * 60 + 24; // 2시간 30분 24초
const duration1 = baseDuration * 0; // 첫 번째 타이머는 즉시 시작
const duration2 = baseDuration; // 두 번째 타이머는 9024초 뒤
const duration3 = baseDuration * 2; // 세 번째 타이머는 18048초 뒤

// 각각의 타이머 시작
startTimer("timer1", baseDuration);
startTimer("timer2", baseDuration + 9024);
startTimer("timer3", baseDuration + 10849);


// 탭메뉴
$(function () {
  $('.tabcontent > div').hide();
  $('.tabnav a').click(function () {
    $('.tabcontent > div').hide().filter(this.hash).fadeIn();
    $('.tabnav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':eq(0)').click();
});

// 탑버튼
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
AOS.init({
  duration: 1200 //aos 나타나는 속도
});
