 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      //动画元素css类（默认为wow）
    animateClass: 'animated', // 动画css类（默认为动画）
    offset:       0,          // 触发动画时到元素的距离（默认值为0）
    mobile:       true,       // 移动设备上的触发动画（默认为true）以异步方式作用
    live:         true        // 加载的内容（默认为true）
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });



