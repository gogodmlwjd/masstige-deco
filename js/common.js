$(function () { /////////jQB ///////////////////////////////
    console.log("공통사항 로딩완료!");
    
    //X버튼
    var XBTN = $(".xbtn").find("a")
    
    ///// 로그인창 클릭, 활성화 ////////////////////////
    $(".login_btn").click(function (e) {
        e.preventDefault(); // 튀는거 방지
        
        $(".login_wrap").fadeIn();
        $("body").css({
            overflowY: "hidden"
        }); /// css //////
    }); ///// click //////////////////////
    XBTN.click(function(e){
        
        e.preventDefault(); // 튀는거 방지
        $(".login_wrap").fadeOut();
        $("body").css({
            overflowY: "auto"
        }); /// css ///////
    }); //// click ///////////////////////
}); ///////// jQB ////////////////////////////////////////////
////////////////////////////////////////////////////////////
