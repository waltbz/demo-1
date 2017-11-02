$(function(){
  var curIndex = 0,
      imgLen = $(".imgList li").length;

  var autoChange = setInterval(function(){
      if(curIndex < imgLen-1){
        curIndex++;
      }else{
        curIndex = 0;
      }
      changeImg(curIndex);

  },2500);

  $(".imgIndex li").hover(function(){
    var e = $(this).text() - 1;
    clearInterval(autoChange);
    changeImg(e);
    curIndex = e;
  },function(){
    autoChangeAgain();
  });

  function autoChangeAgain(){
    autoChange = setInterval(function(){
        if(curIndex < imgLen-1){
          curIndex++;
        }else{
          curIndex = 0;
        }
        changeImg(curIndex);

    },2500);
  }

  function changeImg(num){
    var move = num * 630;
    $(".imgList").animate({left:"-"+move+"px"},500);
    $(".imgIndex").find("li").removeClass("active").eq(num).addClass("active");
  }

});
