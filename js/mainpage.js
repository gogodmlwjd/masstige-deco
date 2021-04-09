$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    ///////////////////////////////////////////
    //////////////// 배너 /////////////////////

    console.log("로딩완료!");
    // 배너 이미지 이동 대상: 배너박스(.main_banslide)
    var tg = $(".main_banslide");

    /*///////////////////////////////////////
        함수명: goSlide
        기능 : 슬라이드 방향별 이동 
    */ ///////////////////////////////////////

    // 광클금지 변수
    var sprot = 0; //0-허용,1-금지
    // 슬라이드 순번 변수
    var sno = 0;
    //슬라이드 개수 변수
    var scnt = tg.find("li").length;
    console.log("슬개수:" + scnt);
    //////////////////////////////////////////
    var goSlide = function (seq, dir) {


        //// seq-순번, dir-방향(0-왼쪽,1-오른쪽)
        console.log("이동방향" + dir);

        // 오른쪽 전달값이 1이므로 true
        if (dir === 1) {

            //슬라이드 순번 증가
            sno++;
            if (sno === scnt) sno = 0; //한계수(처음으로)

        } /////////if ///////////////
        // 왼쪽 전달값이 0 이므로 false (else로 처리!)
        else if (dir === 0) {

            //슬라이드 개수 감소 
            sno--;
            if (sno === -1) sno = scnt - 1; // 한계수 (마지막번호로!)

        } ///////// else if//////////////
        else { // 블릿으로 이동 ////
            sno = seq;
        } //// 블릿으로 이동 //////////////


        //해당순번 li에 class="on" 지정하기
        tg.find("li").eq(sno).addClass("on")
            .siblings().removeClass("on");

        // 블릿변경
        chgbtn();


    }; ////////////////// goSlide 함수 ////////////////
    /////////////////////////////////////////////////

    /*///////////////////////////////////////
        함수명: autoCall
        기능 : 자동호출기능
    */ ///////////////////////////////////////
    var autoI; //인터벌용변수
    var autoCall = function () {

        console.log("자동넘김!");

        //4초 간격으로 슬라이드 함수 호출
        autoI = setInterval(function () {
            goSlide(-1, 1);
        }, 5000); ////// 인터발함수 //////

    }; ////////////////// autoCall 함수 ////////////////
    /////////////////////////////////////////////////

    /*///////////////////////////////////////
        함수명: clearAuto
        기능 : 자동넘김 지우기
    */ ///////////////////////////////////////
    var autoT; //타임아웃용변수
    var clearAuto = function () {
        console.log("자동지워라!");

        // 인터발 지우기
        clearInterval(autoI);
        // 타임아웃지우기(실행쓰나미방지!!!!)
        clearTimeout(autoT);

        // 재실행호출 셋팅(3초후 한번실행 셋팅!)
        autoT = setTimeout(autoCall, 3000);

    }; ////////////////// clearAuto 함수 ////////////////
    /////////////////////////////////////////////////

    /// 자동 넘김 함수 호출!
    autoCall();
    chgbtn();


    /// 블릿 클릭시 /////////////////
    $("#slide_btn li").click(function () {
        var idx = $(this).index();
        goSlide(idx, 2);
        // 뒤 전달값은 0,1이 아닌값으로 보낸다!

        // 자동넘김 지우기
        clearAuto();

    }); ////////// click ///////////////


    /*///////////////////////////////////
        함수명: chgbtn
        기능: 블릿 현재페이지에 맞게 변경하기
    ///////////////////////////////////////////////*/
    function chgbtn() {

        /// 블릿변경하기 - class="on" 주기
        $("#slide_btn li").eq(sno).addClass("on")
            .siblings().removeClass("on");

    } ////////////////////////////////////// chgMenu 함수 /////////////////


    // 스크롤 타겟 위치셋팅
    var pos1, pos2;

    var initSet = function () {
        // 1번타겟(1)
        $(".intro_side_tit").css({
            top: "0",
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        pos1 = $(".intro_side_tit").offset().top;
        console.log("1위치:" + pos1);

        // 1번타겟(2,3)
        $(".intro_left_wrap h3").css({
            position: "relative",
            left: "100px",
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        $(".intro_left_wrap p").css({
            position: "relative",
            left: "100px",
            opacity: 0,
            transition: "all 0.8s ease-out 0.5s"
        });

        // 1번타켓(4)
        $(".intro_btn").css({
            position: "relative",
            left: "100px",
            opacity: 0,
            transition: "all 0.8s ease-out 0.7s"
        });



        // 타겟2 
        $(".neavl_tit").css({
            left: "300px",
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        pos2 = $(".neavl_tit").offset().top;
        console.log("2위치:" + pos2);



        // 타겟3 
        $(".main_chair").css({
            left: "420px",
            opacity: 0,
            transition: "all 0.8s ease-out 0.8s"
        });
        pos3 = $(".main_chair").offset().top;
        console.log("3위치:" + pos3);



        // 타겟4 
        $(".intro_right_wrap").css({
            top: "300px",
            opacity: 0,
            transition: "all 0.8s ease-out 1s"
        });
        pos4 = $(".intro_right_wrap").offset().top;
        console.log("4위치:" + pos4);


        // 타겟5
        $(".about_right_box").css({
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        pos5 = $(".about_right_box").offset().top;
        console.log("5위치:" + pos5);

        // 5번타겟(1,2) //
        $(".about_right_box h4").css({
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        $(".about_right_box p").css({
            opacity: 0,
            transition: "all 0.8s ease-out 0.5s"
        });
        $(".about_btn").css({
            opacity: 0,
            transition: "all 0.8s ease-out 0.8s"
        });



    }; /////// initSet 함수 ///////////

    // 초기화함수 호출하기
    initSet();


    ////////// 스크롤 이벤트 함수/////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        //console.log("스크롤위치:" + scTop);

        ////////////////////////////////////////////
        ///// 스크롤 무빙 이벤트 /////////////////////

        // 타겟1등장
        if (scTop > pos1 - 400 && scTop < pos1 + 400) {

            //타겟 1-1
            $(".intro_side_tit").css({
                top: "340px",
                opacity: 1
            });

            //타겟 1-2,1-3
            $(".intro_left_wrap h3,.intro_left_wrap p").css({
                left: "0",
                opacity: 1
            });

            //타겟 1_4
            $(".intro_btn").css({
                left: "0",
                opacity: 1
            });
        } //////// if //////////////////
        //        else { // 원위치
        //            $(".intro_side_tit").css({
        //                top: "0",
        //                opacity: 0
        //            });
        //        } /////// else //////////////////


        // 타겟2
        if (scTop > pos2 - 400 && scTop < pos2 + 400) {

            //타겟 2
            $(".neavl_tit").css({
                left: "0",
                opacity: 1
            });
        } //////// if //////////////////


        // 타겟3
        if (scTop > pos3 - 600 && scTop < pos3 + 600) {

            //타겟 3
            $(".main_chair").css({
                left: "56px",
                opacity: 1
            });

        } //////// if //////////////////

        // 타겟4
        if (scTop > pos4 - 400 && scTop < pos4 + 400) {

            //타겟 4
            $(".intro_right_wrap").css({
                top: "0",
                opacity: 1
            });

        } //////// if //////////////////


        // 타겟5
        if (scTop > pos5 - 400 && scTop < pos5 + 400) {

            //타겟 5
            $(".about_right_box,.about_right_box h4,.about_right_box p,.about_btn").css({
                opacity: 1
            });

        } //////// if //////////////////


        ///// 스크롤 무빙 이벤트 //////////////////////
        ////////////////////////////////////////////


    }); /////// scroll ////////////



    /// 신상품

    $(".new_product_list_box").hide();
    $(".BED_ROOM").show();

    $(".new_menu_list li a").click(function (e) {
        e.preventDefault(); // 튀는거 방지

        var txt = $("p", this).text().replace(" ", "_");
        console.log(txt);

        // 클릭된 메뉴 이름과 같은 class만 보이기(나머지 숨기기)
        $(".new_product_list_box").hide();
        $("." + txt).show();


        // 메뉴 디자인 변경 class 넣기(.new_menu_list_on)
        $("p", this).addClass("new_menu_list_on")
            .parents("li").siblings().find("p").removeClass("new_menu_list_on");

    }); ///////// click /////////////////////

    var youT = $(".youtube").attr("allow")


    ///////////////////////////////////////////////////////////////////
    //////////// 유튜브 버튼 클릭시 동영상 재생 ///////////////////////////
    $(".youtube_btn").click(function (e) {
        e.preventDefault(); // 튀는거 방지

        $(this).fadeOut(400).next("h4").fadeOut(600);
        $(".about_left_box").fadeOut(1400);

        //        var youTstart=youT.replace("autoplay","autoplay=1");
        //        $(".youtube").attr("allow",youTstart);
        //        
        //        var temp = $(".youtube").attr("src");
        //        console.log(temp);
        //        $(".youtube").attr("src",temp+"?autoplay=1");

        var videos = document.getElementsByClassName("youtubeP");
        for (var i = 0; i < videos.length; i++) {
            var player;
            var youtube = videos[i];
            var iframe = document.createElement("iframe");
            var geturl = youtube.getAttribute("data-url")
            iframe.setAttribute("src",
                "https://www.youtube.com/embed/" + geturl +
                "?enablejsapi=1&html5-1");
            iframe.setAttribute('frameborder', 0);
            youtube.appendChild(iframe);
            youtube.onPlayerReady = function (event) {
                event.target.mute();
            }
            player = new YT.Player(youtube, {
                playerVars: {
                    'width': '400px',
                    'height': '300px',
                    'autoplay': 1,
                    'controls': 0, //하단 컨트롤바 없애기
                    'showinfo': 0, //상단 정보바 없애기
                    'cc_load_policy': 0, //자막해제
                    'iv_load_policy': 3, //영상위에 뜨는 홍보영상 안보이게 하기
                    'autohide': 1,
                    'wmode': 'opaque',
                    'loop': 1,
                    'mute': 1,
                    'rel': 0,
                    'playlist': geturl
                },
                videoId: geturl,
                events: {
                    'onReady': youtube.onPlayerReady
                }
            });
            //player
        } /// for문 ////
    }); //// youtube click ////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////



    ///////////////////////////////////////////////////////////////////
    /////////// 팝업창 이벤트//////// ///////////////////////////////////


    //    // 스크롤 숨기기 이벤트 ////
    //    var schide = $("body").css({
    //        overflowY: "hidden"
    //    }); /// css //////
    //
    //    ///스크롤 막기 이벤트///
    //    var scstop = $("body").on('scroll touchmove mousewheel', function (event) {
    //        event.preventDefault();
    //        event.stopPropagation();
    //        return false;
    //    });
    //    ///스크롤 막기 풀기 이벤트///
    //    var scmove = $("body").off('scroll touchmove mousewheel');




    // 이벤트 팝업창
    $(".even_list_box").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(".event_popup").fadeIn();
        $("body").css({
            overflowY: "hidden"
        }); /// css //////

        ///스크롤 내리기 막기 이벤트///
        $("body").on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

    }); //////// click ///////////////////////
    $(".exbtn").click(function () {
        $(".event_popup").fadeOut();
        
        $("body").css({
            overflowY: "auto"
        }); /// css //////
        ///스크롤 막기 풀기 이벤트///
        $("body").off('scroll touchmove mousewheel');
    }); //////// click ///////////////////////


    $(".storoes_popup").hide();

    $(".store_banner").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(".storoes_popup").fadeIn();
    }); /// click /////////////////////////

    $(".storexbtn").click(function () {
        $(".storoes_popup").fadeOut();
    }); //// click ////////////////////////
}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
