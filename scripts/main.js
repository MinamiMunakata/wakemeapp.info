$(".tab_label").on("click", function () {
  var $index = $(this).index();
  console.log($index);
  $(".tab_label").removeClass("active");
  $(".panel").removeClass("active");
  $(this).addClass("active");
  $(".panel").eq($index).addClass("active");

});