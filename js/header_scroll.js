$(function () { /////////jQB ///////////////////////////////
    console.log("로딩완료!");
    
    //////////////////// 헤더 스크롤 이벤트 JS //////////////////////////////
    
    // 헤더 높이값
    var headerH = $(".top").height();
    //console.log("헤더높이:" + headerH);


    ///////////배너 밀어주기///////////
    $("#main_ban,#detail_content_wrap").css({
        marginTop: headerH
    }); //////css/////////////

    // 탑메뉴 변경 실행여부 체크 상태변수
    var tChange = 0; // 0 : 실행전 , 1 : 실행후


    ////////// 스크롤 이벤트 함수/////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        //console.log("스크롤위치:" + scTop);
        /////////////////////////////////////////////
        ///////// 헤더 스크롤 이벤트 //////////////////

        /////////////////////////////////

        ///// 탑메뉴 상단에 고정하기 ////////
        // 위치 : 기존헤더 크기를 넘어갈때
        if (scTop > headerH && tChange === 0) {
            tChange = 1; //잠금(한번만 실행)
            //console.log("헤더변경!");

            // 1.탑메뉴(.top)에 미리 셋팅된 class를 넣어서 디자인변경
            // 새로운 클래스 .newTop
            $(".top").addClass("newTop")
                // 2. css 포지션 fixed로 변경하고 위쪽에 숨기기
                .css({
                    position: "fixed",
                    top: "-120px"
                })
                // 3.애니메이션으로 top값 0으로 등장
                .animate({
                    top: "0"
                }, 600, "easeOutQuart");

            $(".main_ban").css({
                marginTop: "0"
            }); //////css/////////////

            $(".shop_list_wrap").css({
                paddingTop: "20px"
            }) /// css ///////////
            $(".slxbtn").css({
                marginTop: "20px"
            }) /// css ///////////

        } ///// if ////////////////////////
        //// 맨위로 돌아갈때 원상복구하기 /////
        else if (scTop < (headerH - 100) && tChange === 1) {
            tChange = 0; // 잠금(반대로!)
            // 1. 먼저 위로 숨기기 애니메이션
            $(".top").animate({
                top: "-160px"
            }, 100, "easeOutQuart", function () {
                //애니후
                // 2. 원래 포지션위치 변경하기
                $(this).animate({
                    position: "absolute",
                    top: "0"
                }).removeClass("newTop"); //3.클래스제거
            }); //////// animate ////////////

            $(".main_ban").css({
                marginTop: headerH
            }); //////css/////////////
            

            $(".shop_list_wrap").css({
                paddingTop: "60px"
            }) /// css ///////////
            $(".slxbtn").css({
                marginTop: "60px"
            }) /// css ///////////

        } /////// else if /////////////////////
        ///////////////////////////////////////

        ///////// 헤더 스크롤 이벤트 //////////////////
        /////////////////////////////////////////////

        ////////////////////////////////////////////
        ///// 스크롤 무빙 이벤트 /////////////////////
    }); /////// scroll ////////////


}); ///////// jQB ////////////////////////////////////////////
////////////////////////////////////////////////////////////
