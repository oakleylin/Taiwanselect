// 確保在 jQuery 載入後執行
$(document).ready(function() {
  const $slider = $('#homepageSlider');
  
  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    fade: true,
    cssEase: 'linear',
    // 指定自定義的箭頭
    prevArrow: '.custom-fullscreen-slider-wrapper .slick-prev',
    nextArrow: '.custom-fullscreen-slider-wrapper .slick-next'
  });
});

/* 👇 就是這行！剛剛不小心寫成 css，請換成這行正確的 js 網址 👇 */
{{ require_js("https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js", "footer") }}