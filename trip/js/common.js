"use strict"
//滚动窗口，头部导航条固定
$(window).scroll(function(){
            if($(window).scrollTop()>=100){
              $("header .search-wrapper").addClass("fixed");
                $("header .page-top").slideUp("300");
                $("header .input-wrapper").slideUp("300");
                $("#slider-box").css("marginTop","50px");
                $("#side-bar").slideDown(300)

            }else{
                $("header .search-wrapper").removeClass("fixed")
                $("header .page-top").slideDown("300");
                $("header .input-wrapper").slideDown("300");
                $("#slider-box").css("marginTop","0");
                $("#side-bar").slideUp(300)
            }
        });

 //二维码点击掩藏和显示
 $(".app a").click(function(){
  if($(".app a[data-status='1']").length!=0){
    $("#two-code").fadeIn();
    $(this).attr("data-status","0").addClass("hover");

  }else{
    $("#two-code").fadeOut();
    $(this).attr("data-status","1").removeClass("hover");
  }
 })
 //选择语言
 $("#language .dropdown-menu").on("click","p",function(e){
  e.preventDefault();
  var lgg=$(this).clone().replaceAll("#lgg-btn>p");
})