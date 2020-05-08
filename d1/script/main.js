$(document).ready(function(){
    var intv=setInterval(function(){nextAni();},3400);
    function nextAni(){
        $(".img_box").not(":animated").animate({"margin-left":"-100%"},800,function(){
           $(".img_box li").eq(0).appendTo($(".img_box"));
            $(".img_box").css("margin-left","0%");
        });
    }
    function prevAni(){
        $(".img_box li").eq(2).prependTo($(".img_box"));
        $(".img_box").css("margin-left","-100%");
        $(".img_box").not(":animated").animate({"margin-left":"0%"},800);
    }
    $(".next_btn").click(function(){
       clearInterval(intv);
        nextAni();
        intv=setInterval(function(){nextAni();},3400);
    });
    $(".prev_btn").click(function(){
       clearInterval(intv);
        prevAni();
        intv=setInterval(function(){nextAni();},3400);
    });
});