$(function () { /////// jQB ///////////////////////
    console.log("스크롤 액션 로딩완료!");

    // 스크롤 타겟 위치셋팅
    var pos1, pos2, pos3;

    var initSet = function () {
        // 1번타겟
        $(".sec_num.fir").css({
            top: "-30px",
            transition: "all 0.8s ease-out"
        }); //// css ///////////

        pos1 = $(".sec_num.fir").offset().top;
        console.log("1위치:" + pos1);

        // 2번타겟
        $(".sec_num.sec").css({
            top: "-30px",
            transition: "all 0.8s ease-out"
        }); //// css ///////////

        pos2 = $(".sec_num.fir").offset().top;
        console.log("2위치:" + pos1);

        // 2번타겟
        $(".sec_num.thi").css({
            top: "-30px",
            transition: "all 0.8s ease-out"
        }); //// css ///////////

        pos3 = $(".sec_num.fir").offset().top;
        console.log("3위치:" + pos1);

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
        if (scTop > pos1 - 200 && scTop < pos1 + 200) {

            //타겟 1-1
            $(".sec_num.fir").css({
                top: "-84px",
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
        if (scTop > pos2 - 50 && scTop < pos2 + 50) {

            //타겟 2
            $(".sec_num.sec").css({
                top: "-84px",
                opacity: 1
            });
        } //////// if //////////////////


        // 타겟3
        if (scTop > pos3 - 10 && scTop < pos3 + 10) {

            //타겟 3
            $(".sec_num.thi").css({
                top: "-84px",
                opacity: 1
            });

        } //////// if //////////////////

        ///// 스크롤 무빙 이벤트 //////////////////////
        ////////////////////////////////////////////


    }); /////// scroll ////////////

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
