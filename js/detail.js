var pm = location.href;

//2. 물음표가 있어야 자를 수 있으므로 이것을 체크한다!
// indexOf(문자열) 찾는 문자열순번 리턴하는 내장함수
// 만약 찾는 문자열이 없을 경우엔 -1을 리턴한다! 이것을 없는지 여부를 걸러냄
console.log("물음표체크:" + pm.indexOf("?"));

if (pm.indexOf("?") === -1) {
    // 물음표 파라미터 없이 들어온경우 첫페이지로 돌아가!
    location.href = "bedroom.html?pno=0";
} //// if ////////////////////

pm = pm.split("?")[1].split("=")[1];

console.log(pm);



/// 셋팅변수
var setInfo = {
    // bed room ///////////////////
    "bed_room": {
        "텍스트": [
            // 카테고리
            "bed room",
            // 제품명
            "뉴레트로 슈퍼싱글 침대[메트릭스 제외]",
            // 브랜드
            "뉴트로",
            // 제품명
            "[SALE] 뉴레트로 슈퍼싱글 침대[메트릭스 제외]",
            // 가격
            "419,000",
            // 제품소개
            "오리지널리티를 살린 곡면엣지포인트와 집성 무늬목을 수작업으로 붙여 풍부한 무늬결이 표현되어있는 데니쉬감성의 라운드형 테이퍼드 다리의 슈퍼싱글 침대",
            // 색상
            " one (natural brown)",
            "NEW RETRO",
            "엣지있는 실루엣 라인<br>데니쉬 감성의 내츄럴 허니 컬러<br>모던 스칸디나비안 무드",
            "NEW RETRO",
            "Again, Retro Chic!",
            "Restoration<br>of Retro Heritage",
            "데니쉬 감성의 내츄럴 허니의 레트로와<br>자연스러운 나무의 매력을 살린<br>내츄럴 브라운의 뉴레트로",
            "집성 무늬목을 수작업으로 붙여<br>표현한 풍부한 무늬결",
            "오리지널리티를 살린 곡면<br>엣지포인트",
            "레트로 헤리티지의 복원",
            "기존의 오리지널 데니쉬 감성에서<br>뉴레트로 시리즈는 북유럽 특유의 조형성은 살리되<br>자연친화적이고 헬시한 최신 트렌드에 어울리도록<br>내츄럴 브라운 컬러와 풍부한 나뭇결의 질감을 구현했습니다.",
            "뉴레트로 소파테이블",
            "인도네시아",
            "w1200xd600xh380(mm)",
            "다리 - 마호가니원목<br>/ 기타 - 민디집성무늬목,MDF",
            "내추럴 브라운"
        ],
        "이미지": [
            // 이미지
            "url(images/bed_room/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(images/bed_room/preview/preview_03.jpg) no-repeat center / cover",
            // 이미지
            "url(images/bed_room/preview/preview_04.png) no-repeat center / cover",
            // 큰이미지
            "url(images/bed_room/preview/preview_01.jpg) no-repeat center / cover",

        ]
    }, ////////// bed_room 객체 /////
    // living room ///////////////////
/*
    "living_room": {
        "텍스트": [
            // 텍스트1
            "ㅎㅎㅎ살어리",
            // 텍스트1
            "ㅎㅎㅎ살어리랏다",
            // 텍스트1
            "ㅎㅎㅎ청산에",
            // 텍스트1
            "ㅎㅎㅎ살어리랏다",
            // 텍스트1
            "ㅎㅎㅎ얄라리얄라"
        ],
        "이미지": [
            // 이미지
            "url(../images/detail_sample/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(../images/detail_sample/preview/preview_03.jpg) no-repeat center / cover",
            // 이미지
            "url(../images/detail_sample/preview/preview_04.png) no-repeat center / cover",
            // 큰이미지
            "url(../images/detail_sample/preview/preview_01.jpg) no-repeat center / cover",

        ]
    }, ////////// living_room 객체 /////
*/

}; ////// setInfo //////////




$(function () { /////////jQB ///////////////////////////////
    console.log("상세페이지 로딩완료!");






    // 변경할 텍스트
    var tgd = $(".tgd");
    // 변경할 이미지
    var tgi = $(".tgi");

    console.log("개수:" + tgd.length + "^" + tgi.length);




    /// 데이터 셋팅하기 
    // 텍스트 데이터 셋팅
    for(var i=0; i< tgd.length; i++){
//        tgd.eq([i]).text(setInfo[pm]["텍스트"][i]);
        tgd.eq(i).html(setInfo[pm]["텍스트"][i]);
    } ////// for /////////////////

    // 이미지 데이터 셋팅
    for(var i=0; i< tgi.length; i++){
        tgi.eq([i]).css({background:setInfo[pm]["이미지"][i]});
    } ////// for /////////////////









    $(".preview_thumbnail a").click(function (e) {
        e.preventDefault();

        // 클릭한 썸네일 배경이미지
        var cbgi = $(this).css("background-image");
        console.log(cbgi);

        // 변경할 큰 배경이미지
        var tgbgi = $(".main_preview").css("background-image");
        console.log(tgbgi);

        // 이미지 바꿔치기
        $(this).css({
            "background-image": tgbgi
        });
        $(".main_preview").css({
            "background-image": cbgi
        });

    }); /////////// click ///////////////////////



    ///////////// 수량증감 버튼 클릭시 계산함수 호출하기 ///////////
    jQuery(".opt_btns>a").click(function (e) {
        e.preventDefault();

        var idx = $(this).index(); //이미지순번
        console.log(idx);
        // 상품합계함수호출(idx가 0이면 수량증가, 1이면 수량감)
        sumit(idx);
    }); /////////// click ///////////////////////
    ////////////////////////////////////////////




}); ///////// jQB ////////////////////////////////////////////
////////////////////////////////////////////////////////////



///////////////수량증감함수///////////////////////
var num = 1;

function sumit(sts) { //alert(sts);
    if (sts == 0) num++;
    else num--;
    if (num == 0) num = 1; //한계수
    var target = document.getElementById("sum");
    target.innerText = num;

    //가격계산
    var price = document.querySelector("#gprice"); //기본가격
    var total = document.querySelector("#total"); //토탈
    //	price = price.innerHTML.split(",");
    //	price = price[0]+price[1].replace("원","");//숫자만추출	
    console.log(price.innerText);
    price = price.innerText.replace(/,/g, ""); //숫자만추출
    console.log(price);
    price = Number(price) * num; //토탈계산
    console.log(price);
    price = numberWithCommas(price); //점찍어서 오기
    console.log(price);
    total.innerText = price;
}


//정규식함수(숫자 세자리마다 콤마해주는 기능)
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
