$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");
    
    

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


        // 타겟2 
        $(".neavl_tit").css({
            left: "300px",
            opacity: 0,
            transition: "all 0.8s ease-out"
        });
        pos2 = $(".neavl_tit").offset().top;
        console.log("2위치:" + pos2);






    }; /////// initSet 함수 ///////////

    // 초기화함수 호출하기
    initSet();




    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);

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



    }); /////// scroll ////////////
    
    
    
    /// 신상품
    
    $(".new_product_list_box").hide();
    $(".BED_ROOM").show();
    
    $(".new_menu_list li a").click(function(e){
        e.preventDefault();
        
        var txt = $("span",this).text().replace(" ","_");
        console.log(txt);
        
        // 클릭된 메뉴 이름과 같은 class만 보이기(나머지 숨기기)
        $(".new_product_list_box").hide();
        $("."+txt).show();
        
        
        // 메뉴 디자인 변경 class 넣기(.new_menu_list_on)
        $("span",this).addClass("new_menu_list_on")
        .parents("li").siblings().find("span").removeClass();
        
    }); ///////// click /////////////////////

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////