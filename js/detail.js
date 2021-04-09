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
            "오리지널리티를 살린 곡면엣지포인트와 집성 무늬목을 수작업으로 붙여<br>풍부한 무늬결이 표현되어있는 데니쉬감성의 라운드형 테이퍼드 다리의 슈퍼싱글 침대",
            // 색상
            " one (natural brown)",
            "419,000",
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
    "living_room": {
        "텍스트": [
            // 텍스트1
            "living room",
            // 텍스트1
            "빈스 3인소파(베이지)",
            // 텍스트1
            "빈스",
            // 텍스트1
            "빈스 3인소파(베이지)",
            // 텍스트1
            "759,000",
            // 제품소개
            "미니멀리즘을 바탕으로 한 군더더기 없는 일체형 소파",
            // 색상
            " one (beige)",
            "759,000",
            "BEANS",
            "미니멀리즘 일체형 소파<br>넓은 면적의 팔걸이<br>곡선형으로 부드러움이 돋보이는 디자인",
            "BEANS",
            "Minimalism interior",
            "점, 선, 면의<br><b>간결한 조형과 컬러</b>",
            "미니멀리즘을 바탕으로 한 군더더기 없는 일체형 소파",
            "눈에 띄는 화려한 컬러보다 익숙하면서 포근함을 느낄 수 있는<br>따뜻한 컬러로 포인트를 주었습니다.",
            "넓은 면적의 팔걸이로 편안한 거치 가능",
            "미니멀리즘",
            "미니멀리즘은 단순함과 간결함이란 최소의 요소를 가지고 최대의<br>효과를 발휘하는 사고방식이자 미적 표현기법이기도 합니다.<br>건축, 패션, 음악 등의 예술, 디자인 분야에서도 유행하고 있습니다.<br>빈스의 제품은 미니멀리즘의 특징이 그대로 살아있습니다.",
            "빈스 3인소파(베이지)",
            "중국",
            "w2100xd800xh690(mm)",
            "패브릭, 우레탄, S-밴드",
            "베이지"
            
        ],
        "이미지": [
            // 이미지
            "url(images/sofa/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(images/sofa/preview/preview_04.jpg) no-repeat center / cover",
            // 이미지
            "url(images/sofa/preview/sofa_02.png) no-repeat center / cover",
            // 큰이미지
            "url(images/sofa/preview/preview_01.jpg) no-repeat center / cover",
            // 색상
            "url(images/sofa/color_deteil.jpg) no-repeat center / cover",
            
            // 디테일이미지1
            "url(images/sofa/dt_page_01.jpg) no-repeat center / cover",
            // 엣지
            "url(images/sofa/edge_detail.jpg) no-repeat right / cover",
            // 디테일이미지2
            "url(images/sofa/dt_page_02.jpg) no-repeat center / cover",
            // 제품 상세컷
            "url(images/sofa/detail_01.jpg) no-repeat  center / cover",
            // 제품 상세컷2
            "url(images/sofa/detail_02.jpg) no-repeat  center / cover",
            // 제품 이미지
            "url(images/sofa/sofa_02.jpg) no-repeat  center / cover",
            // 디테일이미지3
            "url(images/sofa/dt_page_bg.jpg) no-repeat center / cover",
            // 제품 이미지
            "url(images/sofa/sofa_01.jpg) no-repeat center/ cover",
            // 제품 색상
            "url(images/sofa/color_deteil.jpg) no-repeat center / cover",
        ]
    }, ////////// living_room 객체 /////
    
    // dining room ///////////////////
    "dining_room": {
        "텍스트": [
            // 텍스트1
            "dining room",
            // 텍스트1
            "루아드 다이닝 테이블",
            // 텍스트1
            "루아드",
            // 텍스트1
            "루아드 다이닝 테이블",
            // 텍스트1
            "357,000",
            // 제품소개
            "앤틱과 모던의 조화",
            // 색상
            " one (DEEP BROWN)",
            "357,000",
            "ROIDE",
            "건축구조가 연상되는<br>대치와 비례가 균형적인<br>바로크 스타일의 모던가구 디자인",
            "ROIDE",
            "Begins of Neo-Antique",
            "세련되고 우아한<br><b>바로크 스타일 모던가구</b>",
            "부드러운 라운드 쉐입으로 디자인 조형 강조",
            "앤틱 스타일의 몰딩이 가미된 앳지 디자인",
            "견고함을 더해주고 조형미를 살린 매트골드 스틸 바",
            "Neo-Antique",
            "루아드의 미학은 앤틱과 모던의 조화입니다<br>복잡하고 화려한 디테일보다는 조형미를 살려 우아함을 강조했습니다.<br>바로크 스타일의 미드센츄리 모던가구의 안정적인 발란스와<br>세련된 위엄이 어우러진 새로운 조형은 루아드만의 특징입니다.",
            "루아드 다이닝 테이블",
            "인도네시아",
            "w1200xd750xh740(mm)",
            "다리 - 마호가니 원목<br>/ 상판 - 민디무늬목,MDF",
            "딥 브라운"
        ],
        "이미지": [
            // 이미지
            "url(images/table/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(images/table/preview/preview_03.jpg) no-repeat center / cover",
            // 이미지
            "url(images/table/preview/table_02.png) no-repeat center / cover",
            // 큰이미지
            "url(images/table/preview/preview_01.jpg) no-repeat center / cover",
            // 색상
            "url(images/table/color_deteil.jpg) no-repeat center / cover",
            
            // 디테일이미지1
            "url(images/table/dt_page_01.jpg) no-repeat center / cover",
            // 엣지
            "url(images/table/edge_detail.jpg) no-repeat right / cover",
            // 디테일이미지2
            "url(images/table/dt_page_02.jpg) no-repeat center / cover",
            // 제품 상세컷
            "url(images/table/detail_01.jpg) no-repeat  center / cover",
            // 제품 상세컷2
            "url(images/table/detail_02.jpg) no-repeat  center / cover",
            // 제품 이미지
            "url(images/table/table_02.jpg) no-repeat  center / cover",
            // 디테일이미지3
            "url(images/table/dt_page_bg.jpg) no-repeat center / cover",
            // 제품 이미지
            "url(images/table/table_01.jpg) no-repeat center,50% / cover",
            // 제품 색상
            "url(images/table/color_deteil.jpg) no-repeat center / cover",
        ]
    }, ////////// dining_room 객체 /////
    
    // home office ///////////////////
    "home_office": {
        "텍스트": [
            // 텍스트1
            "home office",
            // 텍스트1
            "플란타 매거진랙",
            // 텍스트1
            "플란타",
            // 텍스트1
            "플란타 매거진랙",
            // 텍스트1
            "183,000",
            // 제품소개
            "자연을 닮은 가구",
            // 색상
            " one (natural brown)",
            "183,000",
            "PLANTA",
            "미드센츄리 스타일의<br>내츄럴 질감과 조형<br>색상이 오롯이 담겨있는 디자인",
            "PLANTA",
            "Planta Series",
            "미드센츄리 특유의 색감",
            "반듯한 대칭라인과 단순화된 파트들의 세련된 조화",
            "나무의 결과 무늬, 질감등의 물성을 살린 정교함",
            "자연을 옮겨 담은 듯한 편안하고 헬시한 디자인",
            "Planta Series",
            "식물과 나무는 자연입니다.<br>자연은 우리에게 여유와 평온함을 선사합니다.<br>이 자연의 일부를 집안에 옮기면 어떨까요?<br>자연을 닮은 가구, 플란타의 내츄럴한 질감과 조형을 느껴보세요.",
            "플란타 매거진랙",
            "인도네시아",
            "w450xd35xh630(mm)",
            "다리 - 마호가니 원목<br>/ 상판 - 민디무늬목,MDF",
            "내추럴 브라운"
        ],
        "이미지": [
            // 이미지
            "url(images/magazine/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(images/magazine/preview/preview_03.jpg) no-repeat center / cover",
            // 이미지
            "url(images/magazine/preview/magazine_02.png) no-repeat center / cover",
            // 큰이미지
            "url(images/magazine/preview/preview_01.jpg) no-repeat center / cover",
            // 색상
            "url(images/magazine/color_deteil.jpg) no-repeat center / cover",
            
            // 디테일이미지1
            "url(images/magazine/dt_page_02.jpg) no-repeat center / cover",
            // 엣지
            "url(images/magazine/edge_detail.jpg) no-repeat right / cover",
            // 디테일이미지2
            "url(images/magazine/dt_page_01.jpg) no-repeat center / cover",
            // 제품 상세컷
            "url(images/magazine/detail_01.jpg) no-repeat  center / cover",
            // 제품 상세컷2
            "url(images/magazine/detail_02.jpg) no-repeat  center / cover",
            // 제품 이미지
            "url(images/magazine/magazine_02.jpg) no-repeat  center / cover",
            // 디테일이미지3
            "url(images/magazine/dt_page_bg.jpg) no-repeat center / cover",
            // 제품 이미지
            "url(images/magazine/magazine_01.jpg) no-repeat center,50%/ cover",
            // 제품 색상
            "url(images/magazine/color_deteil.jpg) no-repeat center / cover",
        ]
    }, ////////// home office 객체 /////
    
    // living deco ///////////////////
    "living_deco": {
        "텍스트": [
            // 텍스트1
            "living deco",
            // 텍스트1
            "루아드 플랫 벽시계",
            // 텍스트1
            "루아드",
            // 텍스트1
            "루아드 플랫 벽시계",
            // 텍스트1
            "78,000",
            // 제품소개
            "앤틱과 모던의 조화",
            // 색상
            " one (DEEP BROWN)",
            "78,000",
            "ROIDE",
            "건축구조가 연상되는<br>대치와 비례가 균형적인<br>바로크 스타일의 모던가구 디자인",
            "ROIDE",
            "Begins of Neo-Antique",
            "세련되고 우아한<br><b>바로크 스타일 모던가구</b>",
            "엔틱 몰딩이 가미된 라운드 바디 디자인",
            "사선으로 전면에 입체감이 더해진 패널 디테일",
            "미니멀한 매트골드 컬러의 시분침",
            "Neo-Antique",
            "루아드의 미학은 앤틱과 모던의 조화입니다<br>복잡하고 화려한 디테일보다는 조형미를 살려 우아함을 강조했습니다.<br>바로크 스타일의 미드센츄리 모던가구의 안정적인 발란스와<br>세련된 위엄이 어우러진 새로운 조형은 루아드만의 특징입니다.",
            "루아드 플랫 벽시계",
            "한국",
            "w300xh300xd30(mm)",
            "원목",
            "딥 브라운"
        ],
        "이미지": [
            // 이미지
            "url(images/clock/preview/preview_02.jpg) no-repeat center / cover",
            // 이미지
            "url(images/clock/preview/preview_03.jpg) no-repeat center / cover",
            // 이미지
            "url(images/clock/preview/clock_01.png) no-repeat center / cover",
            // 큰이미지
            "url(images/clock/preview/preview_01.jpg) no-repeat center / cover",
            // 색상
            "url(images/clock/color_deteil.jpg) no-repeat center / cover",
            
            // 디테일이미지1
            "url(images/clock/dt_page_01.jpg) no-repeat center / cover",
            // 엣지
            "url(images/clock/edge_detail.jpg) no-repeat right / cover",
            // 디테일이미지2
            "url(images/clock/dt_page_02.jpg) no-repeat center / cover",
            // 제품 상세컷
            "url(images/clock/detail_01.jpg) no-repeat  center / cover",
            // 제품 상세컷2
            "url(images/clock/detail_02.jpg) no-repeat  center / cover",
            // 제품 이미지
            "url(images/clock/clock_02.jpg) no-repeat  center / cover",
            // 디테일이미지3
            "url(images/clock/dt_page_bg.jpg) no-repeat center / cover",
            // 제품 이미지
            "url(images/clock/clock_01.jpg) no-repeat center,50% / cover",
            // 제품 색상
            "url(images/clock/color_deteil.jpg) no-repeat center / cover"
        ]
    }, ////////// home office 객체 /////

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
