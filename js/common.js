$(function () { /////////jQB ///////////////////////////////
    console.log("공통사항 로딩완료!");





    //////////// gnb 클릭시 항목별로 이동! ////////////////////////////
    $(".gnb a").click(function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        //                
        if (idx === 5) {
            location.href = "aboutus.html";
        } //// if /////////////
        else {
            location.href = "bedroom.html?idx=" + idx;
        } //////// else /////////////////////

    }); ///////// click //////////////






    ///////////// 검색 아이콘 클릭시 활성화 ///////////////////
    $(".search_btn").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(this).find("img")
            .animate({
                left: "24px",
                opacity: 0
            }, 400); /// animate /////

        $("#search").css({
            width: "30vw"
        }); /// css //////
        $(".sxbtn").fadeIn(1000);
    }); //// click ///////////////////

    $(".sxbtn").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(this).fadeOut();
        $("#search").css({
            width: "0"
        }); /// css //////
        $(".search_btn").find("img")
            .animate({
                left: "0",
                opacity: "1"
            }, 400); /// animate ////


    }); //// click ///////////////////



    // 헤더 높이값
    var headerH = $(".top").height();
    //console.log("헤더높이:" + headerH);

    var NhaderH = $(".newTop").height();



    $(".slxbtn").css({
            marginTop: "60px"
        }) /// css ///////////
        .hide();

    $(".shop_btn").click(function (e) {
        e.preventDefault(); // 튀는거 방지

        $(".shop_list_wrap").stop().animate({
            right: "0"
        }); /// animate ///////
        $(".slxbtn").fadeIn(3400);
    }); ///// click //////////////////////

    $(".slxbtn").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(this).fadeOut();
        $(".shop_list_wrap").animate({
            right: "-36%"
        }); /// animate ///////
    }); ///// click //////////////////////

    //X버튼
    var XBTN = $(".xbtn").find("a")

    ///// 로그인창 클릭, 활성화 ////////////////////////
    $(".login_btn").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        $(".login_wrap").fadeIn();
        $("body").css({
            overflowY: "hidden"
        }); /// css //////

        ///스크롤 내리기 막기 이벤트///
        $("body").on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    }); ///// click //////////////////////

    XBTN.click(function (e) {

        e.preventDefault(); // 튀는거 방지
        $(".login_wrap").fadeOut();
        $("body").css({
            overflowY: "auto"
        }); /// css ///////
    }); //// click ///////////////////////

    ///////////////// 메뉴 클릭시 이미지 변경 ///////////////////////////////
    $(".bdr").click(function () {
        $(".subpg_ban").css({
            "background": "url(images/sub_page/bed_room_ban.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center"
        }); ////css ///////// 
    }); /// click ////////
    $(".lvr").click(function () {
        $(".gnb a").hasClass("on");
        $(".subpg_ban").css({
            "background": "url(images/sub_page/livingroom_ban.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center"
        }); ////css ///////// 
    }); /// click ////////
    $(".dnr").click(function () {
        $(".subpg_ban").css({
            "background": "url(images/sub_page/dinning_room_ban.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center"
        }); /// css

    }); /// click ////////
    $(".hof").click(function () {
        $(".subpg_ban").css({
            "background": "url(images/sub_page/homeoffice_ban.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center"
        }); /// css
    }); /// click ////////
    $(".lbd").click(function () {
        $(".subpg_ban").css({
            "background": "url(images/sub_page/livingdeco_ban.jpg)",
            "background-repeat": "no-repeat",
            "background-position": "center"
        }); /// css
    }); /// click ////////



    // 모바일 버전 버튼
    $(".hamburger_btn").click(function (e) {
        event.preventDefault();
        $(".hamburger_wrap").animate({
            left: "0"
        }, 600); /// animate////
        $(".ham_xbtn").animate({
            opacity: "1"
        }, 800); /// animate////
    }); /// click ////////
    
    $(".ham_xbtn").click(function () {
        $(".hamburger_wrap").animate({
            left: "-70%"
        }, 600); /// animate////
        $(this).animate({
            opacity: "0"
        }, 800); /// animate////
    }); /// click ////////////
}); ///////// jQB ////////////////////////////////////////////
////////////////////////////////////////////////////////////
