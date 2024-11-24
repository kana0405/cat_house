$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open"); 
  });

  $("#mask").on("click", function () {
    $("header").removeClass("open");
  });

  $("#navi a").on("click", function () {
    $("header").removeClass("open");
  });

})

 /*=================================================
  アコーディオン
  ===================================================*/
$(function() {
  /* クリックイベントを設定 */
  $('.title').on('click', function() {
    $(this).next().slideToggle();
    $(this).toggleClass('open');
  });
});