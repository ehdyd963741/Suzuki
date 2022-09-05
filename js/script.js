$(document).ready(function(){
  // 1. 상단 영역을 저장한다.(.header)
  // 2. 상단 영역의 높이를 파악한다. (54px)
  //   : jQuery.height(??)
  // 3. window scroll 을 했을 때
  //   : let scY = 윈두우 스크롤바의 높이 체크
  //   : 만약에 상단 영역의 높이보다 크면? 작으면
  //   :  add / remove 클래스를 적용합니다.
  // 4. 새로 고침했을 때도 위 동작이 작동되도록 합니다.
  
});

window.onload = function () {
    // visual 슬라이드
    new Swiper('.sw-visual', {
      spaceBetween: 30,
      effect: "fade",  
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1000,
      navigation: {
        prevEl: '.sw-visual-prev',
        nextEl: '.sw-visual-next'
      },
      pagination: {
        el: '.sw-visual-pg',
        clickable: true,
      }
    });

    new Swiper('.sw-goods', {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      speed: 1000,
      navigation: {
        prevEl: '.sw-goods-prev',
        nextEl: '.sw-goods-next'
      },
    });
}