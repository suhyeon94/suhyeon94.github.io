
/*전체적으로 동작할 스크립트*/
//inside.php에서 정보 가져오기
$(function(){
	$.get("inside.php?what=phone", function(data) {
		$(".mobile").html(data);
	});
	$.get("inside.php?what=mail", function(data) {
		$(".mail").html(data);
		$(".mail").attr("href","mailto:"+data);
	});
	$.get("inside.php?what=add", function(data) {
		$(".add").html(data);
	});
});
$(function(){
	//윈도우 로드 이벤트
	$(window).on("load resize",function(){
		
	
	
	var $body = $("html,body");
	var $moveBtn = $(".to_top_bottom"); //아래/위로 가기 버튼
	var $homeBtn = $(".to_home"); //홈으로 가기 버튼
	
	var moveToSwitch = true; //true = 아래로, false = 위로
	var bodyHeight = $(document).height();
	//0410 - 기존 body.height에서 document로 변경 (body로 하면 윈도로드 전에 값을 가져와서 body height = window height가 되는 참사 발생....)
	//0503 - 기존 document.ready안에 있었으나 모두 window.load 안에 넣음 (더 정확함!)
	
	
	//맨 위로 가는 함수
	function moveTop(timeVal){
		var time = 800; //속도 기본값
		if(timeVal!=null){
			time = timeVal; //값이 있으면 그 값이 time이 됩니다
		}
		$body.stop().animate({scrollTop:0},time);
	}
	//맨 아래로 가는 함수 
	function moveBottom(timeVal){
		var time = 800; //속도 기본값
		if(timeVal!=null){
			time = timeVal; //값이 있으면 그 값이 time이 됩니다
		}
		$body.stop().animate({scrollTop:bodyHeight},time);
	}
	
	//이동 버튼 클릭 이벤트
	$moveBtn.on("click",function(evt){	
		evt.preventDefault();
		if(moveToSwitch == false){
			//위로 가는 것으로 활성화
			moveTop();
		}else{
			//아래로 가는 것으로 활성화
			moveBottom();
		}
	});
	
	//문서 2/3이상 스크롤 시 맨 위/아래 버튼 전환 함수
	var scrollBottom = 0;
	var scrollOverBodyHeight = (bodyHeight/3)*2
	function toTop_or_toBottom(){
		scrollBottom = $(window).scrollTop()+$(window).height();
		if ( scrollBottom >= scrollOverBodyHeight ){
			//아래->위로 변환
			moveToSwitch = false;
			$moveBtn.addClass("go_top");
		}else{
			//위->아래로 변환
			moveToSwitch = true;
			$moveBtn.removeClass("go_top");
		}
	}
	
				
	$(window).on("scroll",function(){
		toTop_or_toBottom()
	});
	
	
		toTop_or_toBottom();
	
});
	
	/*
	 ****** 시크릿 메뉴!
	 170510 임시로 추가, 나중에 코드 예쁘게 정리하기!*/
	
	var letter = {
		"title":"E P I L O G U E",
		"desc":"먼저 이 메뉴를 클릭해 주셔서 감사합니다.<br/>이 콘텐츠는 포트폴리오와 관련이 없는, 감사 인사를 담고 있습니다.",
		"cont": [
			
			"반년 간 같이 수업 들은 스디반! 시간 빠르다 빠르다 늘 하는 말이지만 저한테는 이 6개월이 너무 빨랐어요.<br/>더 배우고 싶은 것도, 더 얘기 나눠보고 싶은 것도 많이 있는데...ㅠㅠㅠ아쉬워요ㅠㅠ<br/>함께 한 시간들 정말 소중하게 생각하고 있습니다!! 시간을 되돌려도 전 이거 다시 할 거에요ㅋㅋㅋ<br/>",
		  	"스디 수업 들으면서 배운 게 많아요. 이제 와서 말하는 거지만 전 매일 수업 들으러 가는 게 진짜 좋았어요. 같이 고민하고 궁리하고 그러면서 성장하는 게 느껴져서 즐거웠습니다. 프로젝트 하나 끝날 때마다 레벨업하는 기분? 무엇보다 함께 하는 것의 즐거움을 깨닫게 해주셔서 정말로 감사합니다.<br/>",
			"맏언니로 같이 있으면 든든했던 선미 언니. 뭐든 열심히 잘 해서 쪼오끔 많이 부러웠던 지안 언니. 함께 있으면 즐거움 긍정 기운이 뿜어져 나오던 류희 언니. 안 그런 척 하면서 우리 반에서 제일 성실했던 애솔 언니. 항상 간식 나눠주면서 배려심 넘쳤던 미성 언니. 완전 어른스럽고 척척 일 잘해내던 소민씨. 막내인 듯 막내아닌 반장이던 나까지. <br/>",
			"스디 일곱 명 모두 함께 끝까지 할 수 있어서 행복했습니다 :D<br/>모두들, 너무너무 존경스럽고 고맙습니다!!!"
		]
	} //end of var letter
		$("#wrap").append('<div class="secretcont"><strong class="jp"></strong><p class="desc"><p><div><p></p><p></p><p></p><p></p></div><a href="#" class="clse"></a></div>')
	
	$(".secretcont strong").html(letter.title).css("display","block"); //제목 가져오기
	$(".secretcont .desc").html(letter.desc); //설명 가져오기
	$(".secretcont div p").eq(0).html(letter.cont[0]); //내용 가져오기 - 첫 번째
	$(".secretcont div p").eq(1).html(letter.cont[1]); //내용 가져오기 - 두 번째
	$(".secretcont div p").eq(2).html(letter.cont[2]); //내용 가져오기 - 세 번째	
	$(".secretcont div p").eq(3).html(letter.cont[3]); //내용 가져오기 - 네 번째	
    //라이트박스 띄우기
	$(".secretmnu").on("click",function(evt){
		evt.preventDefault();
		$(".secretcont").stop().fadeIn(600,function(){
			$(".secretcont strong").stop().fadeIn(600,function(){
				$(".secretcont .desc").eq(0).stop().fadeIn(800,function(){
					$(".secretcont div p").stop().fadeIn(900);
				});
			});
		});
	}); //클릭이벤트 종료
	//라이트박스 닫는 함수
	function CloseSecretModal(){
		$(".secretcont").fadeOut(300);
	}
	//닫기 버튼 클릭 시
	$(".secretcont a.clse").on("click",function(evt){
		evt.preventDefault();
		CloseSecretModal();
		return false;
	});
	//모달창 버블링 방지
	$(".secretcont").on("click",function(evt){
		evt.stopPropagation();
	});
	
	//레쥬메 다운로드 170511 추가
	$(".resume>a").on("click",function(evt) {
		evt.preventDefault(); 
	   // window.location.href = 'files/resume_NaYoungKim.pdf';
	   window.open('files/resume_NaYoungKim.pdf','_blank');
	});
		
	
	
	
});
