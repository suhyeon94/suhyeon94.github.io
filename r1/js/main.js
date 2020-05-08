 $(document).ready(function() {
     
            
        $(".p_sub_wrap").hide();
         $(".pnav_wrap").hover(function(){//2
            $(this).parent().find(".p_sub_wrap").stop().slideDown();
            $(this).parent().hover(function(){//#nav 서브가 슬라이드 다운된 상태를 유지하고 있게 함. {안에} 아무것도 안써줘도 slideDown()
                
            },function(){//마우스가 아웃되면
               $(this).parent().find(".p_sub_wrap").stop().slideUp();
            }); 

         });/*PC버전 네비게이션*/
     
       var intv=setInterval(function(){nextAni();},4000);
        function nextAni(){
            $(".slider").not(":animated").animate({"margin-left":"-100%"},800,function(){
            $(".slider li").eq(0).appendTo($(".slider"));
            $(".slider").css("margin-left","0%");
            });
        }
        function prevAni(){
            $(".slider li").eq(2).prependTo($(".slider"));
            $(".slider").css("margin-left","-100%");
            $(".slider").not(":animated").animate({"margin-left":"0%"},800);
        }/*슬라이드 좌우 넘김*/
       $(".right_button").click(function(){
           clearInterval(intv);
           nextAni();
           intv=setInterval(function(){nextAni();},4000);
       });
       $(".left_button").click(function(){
           clearInterval(intv);
           prevAni();
           intv=setInterval(function(){nextAni();},4000);
       });/*슬라이드 버튼 제어*/
     
            $(".bars_01").click(function() { //.lst_btn버튼을 클릭하면
                $(".mnav").addClass("on"); //.lst_box에 on이라는 클래스를 추가해라 left:0%
            });
            $(".xi-close").click(function() { //닫기 버튼 클릭하면
                $(".mnav").removeClass("on"); //.lst_box에 on이라는 클래스를 삭제해라. left:-110%
            });/*모바일버전 사이드 메뉴*/
            $(".xi_sch_02").click(function(){
                $(".srh_pop_wrap").fadeIn();
            });
            $(".pop_close").click(function(){
                $(".srh_pop_wrap").fadeOut();
            });
        }); 
