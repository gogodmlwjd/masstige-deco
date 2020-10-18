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
//            $("#side_menu_wrap").animate({
//                width: "0%"
//            }, 100, function () {
//                console.log("tbox늦게 나타나기");
//                $("#side_menu_wrap").find("div").delay(100).fadeOut(100);
//            });
            $("#side_menu_wrap").find("div").fadeOut(400,function (){
                //console.log("영역 사라져라 얍!");
                $("#side_menu_wrap").animate({
                    width: "0%"
                },100); //// css /////////
            }); //// css ///////
            
            $("#bedroom_content_wrap").animate({
                width: "100%"
            }, 600, function () {
                $("#bedroom_content_wrap").delay(300).animate({
                    top: 0
                }); //// animate /////////
            }); //// animate ///////

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
                 "가구이름": "뉴레트로 슈퍼싱글 침대<br>[메트릭스 제외]",
                 "가격": "419,000"
            },
            {
                 "가구이름": "뉴레트로 뷰로 화장대",
                "가격": "417,000"
            },
            {
                "가구이름": "뉴레트로 6칸 와이드 서랍장",
                "가격": "380,000"
            },
            {
                "가구이름": "뉴레트로 와이드 전신거울",
                "가격": "234,000"
            },
            {
                "가구이름": "뉴레트로 더블 캐비닛 B",
                "가격": "124,100"
            },
            {
                "가구이름": "뉴레트로 사이드랙",
                "가격": "13,600"
            },
            {
                 "가구이름": "뉴레트로 화장대 세트",
                "가격": "348,000"
            },
            {
                 "가구이름": "뉴레트로 더블 캐비닛 A",
                "가격": "146,000"
            }
        ],
        "living_room": [ //배열 6개
            {
                "가구이름": "빈스 3인소파(베이지)",
                "가격": "759,000"
            },
            {
                "가구이름": "빈스 3인소파(브라운)",
                "가격": "759,000"
            },
            {
                "가구이름": "파티나 멀티 캐비닛 1100",
                "가격": "419,000"
            },
            {
                "가구이름": "파티나 사이드 콘솔",
                "가격": "194,000"
            },
            {
                "가구이름": "파티나 2단소파 테이블",
                "가격": "770,000"
            },
            {
                "가구이름": "파티나 AV 장식장 1800",
                "가격": "434,000"
            }
        ],
        "dining_room": [ //배열 11개
            {
                "가구이름": "루아드 다이닝 테이블",
                "가격": "357,000"
            },
            {
                "가구이름": "루아드 테이블 4인세트",
                "가격": "926,000"
            },
            {
                "가구이름": "루아드 테이블 2인세트",
                "가격": "637,000"
            },
            {
                "가구이름": "루아드 유리 장식장",
                "가격": "542,000"
            },
            {
                "가구이름": "루아드 코너 장식장",
                "가격": "364,000"
            },
            {
                "가구이름": "루아드 사이드보드",
                "가격": "645,000"
            },
            {
                "가구이름": "타볼로 우드슬랩 테이블 6인체어 세트 골드V",
                "가격": "1,608,000"
            },
            {
                "가구이름": "레노바티오 테수토 소파식탁세트 R",
                "가격": "1,452,000"
            },
            {
                "가구이름": "마이 시그니처 런더너 원목 테이블 4인체체어세트(빈티지)",
                "가격": "730,000"
            },
            {
                "가구이름": "마이 시그니처 런더너 원목 테이블(빈티지)",
                "가격": "410,000"
            }
        ],
        "home_office": [ //배열 7개
            {
                "가구이름": "플란타 매거진랙",
                "가격": "183,000"
            },
            {
                "가구이름": "파티나 데스크 1200",
                "가격": "290,000"
            },
            {
                "가구이름": "뉴레트로 스퀘어 북 캐비넷",
                "가격": "322,000"
            },
            {
                "가구이름": "뉴레트로 스퀘어 데스크",
                "가격": "418,000"
            },
            {
                "가구이름": "뉴레트트로 데스크 체어",
                "가격": "155,100"
            },
            {
                "가구이름": "뉴레트로 슈페리어 데스크",
                "가격": "327,100"
            },
            {
                "가구이름": "루아드 데스크",
                "가격": "237,800"
            }
        ],
        "living_deco": [ //배열 5개
            {
                "가구이름": "루아드 스퀘어 탁상시계",
                "가격": "41,000"
            },
            {
                "가구이름": "루아드 플랫 벽시계",
                "가격": "78,000"
            },
            {
                "가구이름": "타볼로 우드슬랩 시계",
                "가격": "81,000"
            },
            {
                "가구이름": "뉴마카롱 메모",
                "가격": "18,000"
            },
            {
                "가구이름": "뉴마카롱 건빵-BUN(수납장L)",
                "가격": "238,000"
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
                console.log(Number(x)+1);

                //내부요소추가!
                tg.append(
                    '<dl class="sub_prouct_list bedroom_list">' +
                    '     <a href="detailpage.html">' +
                    '        <dt>' +
                    '            <img src="images/'+cat+'/'+(Number(x)+1)+'.jpg" alt="침대1">' +
                    //'            <img src="images/' + cat + '/1.jpg" alt="침대1">' +
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
//            $(".sub_menu_list li").eq(idx).find("span").addClass("on")
//                .parent().siblings().find("span").removeClass("on");

            $(".sub_menu_list li").eq(idx).find("a").addClass("on")
                .parent().siblings().find("a").removeClass("on");
        
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
