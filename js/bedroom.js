/// 서브메뉴 사이트 공통 JS ///

var pm = location.href;

//2. 물음표가 있어야 자를 수 있으므로 이것을 체크한다!
// indexOf(문자열) 찾는 문자열순번 리턴하는 내장함수
// 만약 찾는 문자열이 없을 경우엔 -1을 리턴한다! 이것을 없는지 여부를 걸러냄
console.log("물음표체크:" + pm.indexOf("?"));

if (pm.indexOf("?") === -1) {
    // 물음표 파라미터 없이 들어온경우 첫페이지로 돌아가!
    location.href = "tester_page.html";
} //// if ////////////////////

pm = pm.split("?")[1].split("=")[1];
pm = Number(pm); //숫자형으로 변환(혹시모를 에러)

console.log(pm);




$(function () { /////////jQB ///////////////////////////////
    console.log("서브 사이트 로딩완료!");

    //// 전역변수 구역 ///////////////
    // 스크롤사용금지 설정(0-허용,1-금지)
    var scNo = 0;
    //////////////////////////////


    /******************** 현재 문제점 : width가 울렁거림 *******************************/

    ////////// 스크롤 이벤트 함수/////////////////////////////////////////////

    // 헤더 높이값
    var headerH = $(".top").height();
    console.log("헤더높이:" + headerH);

    // 사이드메뉴 너비
    var sideMW = $("#side_menu_wrap").width();
    console.log("사이드메뉴너비:" + sideMW);

    // 전체 콘텐츠랩 너비
    var conW = $("#bedroom_content_wrap").width();
    console.log("컨텐츠너비:" + conW);

    // 탑메뉴 변경 실행여부 체크 상태변수
    var tChange = 0; // 0 : 실행전 , 1 : 실행후

    ///////////배너 밀어주기///////////
    //    $("#bedroom_content_area").css({
    //        marginTop: 0
    //    }); //////css/////////////
    /////////////////////////////////


    $("#side_menu_wrap").find("div").hide();
    ///////////////////////////////////////////////////////////////////////
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        console.log("스크롤위치:" + scTop);
        /////////////////////////////////////////////
        ///////// 헤더 스크롤 이벤트 //////////////////


        ///// 탑메뉴 상단에 고정하기 ////////
        // 위치 : 기존헤더 크기를 넘어갈때
        if (scTop > headerH && tChange === 0) {
            tChange = 1; //잠금(한번만 실행)
            //console.log("헤더변경!");
            $("#side_menu_wrap").animate({
                width: "15%"
            }, 200, function () {
                console.log("tbox늦게 나타나기");
                $("#side_menu_wrap").find("div").delay(400).fadeIn(600);
            });
            $("#bedroom_content_wrap").animate({
                width: "85%"
            }, 200); //// css ///////


            $("#bedroom_content_wrap").css({
                top: -headerH
            }); //// css /////////

        } ///// if ////////////////////////
        //// 맨위로 돌아갈때 원상복구하기 /////
        else if (scTop < (headerH - 100) && tChange === 1) {
            tChange = 0; // 잠금(반대로!)
            //console.log("헤더변경!");
            $("#side_menu_wrap").animate({
                width: "0%"
            }, 100, function () {
                console.log("tbox늦게 나타나기");
                $("#side_menu_wrap").find("div").delay(100).fadeOut(100);
            });
            $("#bedroom_content_wrap").animate({
                width: "100%"
            }, 100, function () {
                $("#bedroom_content_wrap").delay(300).animate({
                    top: 0
                }); //// css /////////
            }); //// css ///////


        } /////// else if /////////////////////
        ///////////////////////////////////////

        ///////// 헤더 스크롤 이벤트 //////////////////
        /////////////////////////////////////////////

        ////////////////////////////////////////////
        ///// 스크롤 무빙 이벤트 /////////////////////


    }); /////// scroll ////////////


    // 카테고리명
    var cat;
    // 데이터 셋팅
    var ginfo = {
        "bed_room": [ //배열 8개
            {
                "가구이름": "완존편해침대",
                "가격": "200,000"
            },
            {
                "가구이름": "완존편해침대2",
                "가격": "300,000"
            },
            {
                "가구이름": "완존편해침대3",
                "가격": "500,000"
            },
            {
                "가구이름": "완존편해침대4",
                "가격": "230,000"
            },
            {
                "가구이름": "완존편해침대5",
                "가격": "540,000"
            },
            {
                "가구이름": "완존편해침대6",
                "가격": "120,000"
            },
            {
                "가구이름": "완존편해침대7",
                "가격": "870,000"
            },
            {
                "가구이름": "완존편해침대8",
                "가격": "60,000"
            }
        ],
        "living_room": [ //배열 6개
            {
                "가구이름": "조아조아식탁1",
                "가격": "30,000"
            },
            {
                "가구이름": "조아조아식탁2",
                "가격": "300,000"
            },
            {
                "가구이름": "조아조아식탁3",
                "가격": "80,000"
            },
            {
                "가구이름": "조아조아식탁4",
                "가격": "200,000"
            },
            {
                "가구이름": "조아조아식탁5",
                "가격": "770,000"
            },
            {
                "가구이름": "조아조아식탁6",
                "가격": "50,000"
            }
        ],
    }; //// ginfo객체 ////////////
    
    
    /******!중요! html이 깨짐으로 setLink를 설정해줘야한다!!!******/
    var setLink = function () {

        // 아이템 클릭시 상세페이지 넘어가기 ///
        // 대상: .sub_prouct_list a
        // 카테고리별 상세페이지는 하나씩만 만든다!
        // 따라서 cat 변수에 담긴 분류만 상세페이지로 넘긴다!
        $(".sub_prouct_list a").click(function (e) {
            e.preventDefault();

            location.href = "detailpage.html?cat=" + cat;
        }); //////// click /////////////////////////

    }; //////////// setLink함수 ////////

    
    
    


    //// 카테고리 메뉴 클릭시 리스트 변경하기 ///
    $(".sub_menu_list a,.gnb a,.side_menu_list a")
        .click(function (e) {
            e.preventDefault();

            var idx = $(this).parent().index(); //부모li순번
            console.log("순번:" + idx);


            cat = $("span", this).text();

            // 예외처리
            if (cat === "ABOUT US") location.href = "aboutus.html";

            cat = cat.toLowerCase(); //모든영문자 소문자변환
            //(전부대문자변환은 toUpperCase())
            cat = cat.replace(" ", "_"); //공백을 언더바로 교체
            console.log("카테고리:" + cat);
            // 카테고리명은 곧 내가 만든 폴더명과 같다!

            // 이미 있는 리스트를 돌면서 이미지를 변경함

            // forIn문: 셋팅된 배열/객체의 수만큼 돈다!
            // 대상: .sub_prouct_content
            var tg = $(".sub_prouct_content");
            tg.html(""); //내부파일 비우기!

            for (var x in ginfo[cat]) {
                console.log(ginfo[cat][x]["가구이름"] + "^" + ginfo[cat][x]["가격"]);

                //내부요소추가!
                tg.append(
                    '<dl class="sub_prouct_list bedroom_list">' +
                    '     <a href="detailpage.html">' +
                    '        <dt>' +
                    //'            <img src="images/'+cat+'/'+(x+1)+'.jpg" alt="침대1">' +
                    '            <img src="images/' + cat + '/1.jpg" alt="침대1">' +
                    '         </dt>' +
                    '         <dd>' +
                    '            <h5 class="Product_name">' + ginfo[cat][x]["가구이름"] + '</h5>' +
                    '             <h6 class="price">' + ginfo[cat][x]["가격"] +
                    '               <span class="tit_color">WON</span></h6>' +
                    '        </dd>' +
                    '    </a>' +
                    '</dl>'
                );



            } //// forIn문 ///////////////



            // 메뉴 동시 변경하기
            $(".sub_menu_list li").eq(idx).find("span").addClass("on")
                .parent().siblings().find("span").removeClass("on");

            $(".gnb li").eq(idx).find("a").addClass("on")
                .parent().siblings().find("a").removeClass("on");

            $(".side_menu_list li").eq(idx).find("a").addClass("on")
                .parent().siblings().find("a").removeClass("on");


            // 하단 타이틀 변경하기
            $(".sub_prouct_tit span").text($("span", this).text());
            // 타이틀 이미지 변경하기
            $(".sub_prouct_tit img").attr("src", "images/new_arrival_icon_0" + (idx + 1) + ".png");
            // 타이틀 아이템개수출력
            var cnt = 10;
            if (ginfo[cat]) cnt = ginfo[cat].length;
            $(".sub_prouct_tit small").text("(" + cnt + ")");


            // 새로운 html에 링크 설정 다시하기!(중요!!!)
            setLink();



        }); ///////// click //////////////////


    // 최초로딩시 첫페이지 호출하기(넘어온 순번을 넣는다!)
    $(".sub_menu_list li").eq(pm).find("a").trigger("click");




    // 최초 링크설정
    setLink();





}); ///// jQB ///////////////////////////////////
