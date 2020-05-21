
   $(window).resize(function() { 
      if($(window).width()>768) { 
      var wd=parseInt($(".main").width());
        var intv=setInterval(function(){
           intAni(); 
        }, 4000);
        function intAni(){
            $(".slide").not(":animated").animate({"margin-left":-wd+"px"}, 1000, function(){
                $(".slide > li").eq(0).appendTo($(".slide"));
                $(".slide").css("margin-left", "0px");
                $(".num_btn li").eq(0).appendTo($(".num_btn"));
                $(".num_btn button").removeClass("on");
                $(".num_btn li").eq(0).find("button").addClass("on");
            });
        }
        $(".num_btn .btn").on("click",function(){
         var but =parseInt($(this).attr("data-value"))*wd;//0,200,400,600
          $(".slide").animate({"margin-left":"-"+but+"px"},1000);
          $(".num_btn .btn").removeClass("on");
          $(this).addClass("on");
      });
      }
       $(".toggle").click(function() { //.lst_btn버튼을 클릭하면
                $(".mleft").addClass("on"); //.lst_box에 on이라는 클래스를 추가해라 left:0%
            });
            $(".m_close").click(function() { //닫기 버튼 클릭하면
                $(".mleft").removeClass("on"); //.lst_box에 on이라는 클래스를 삭제해라. left:-110%
            });//오른쪽 사이드 메뉴
     
  });

