/// Discovery 사이트 공통 JS ///

//// 전역변수 구역 ///////////////
// 스크롤사용금지 설정(0-허용,1-금지)
var scNo = 0;
//////////////////////////////

/// 전체 메뉴 배경 동영상 불러오기 ///

window.addEventListener("load", function () {
    //////////////////ctrl+C ///////////////
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
                'width': '100%',
                'height': '100%',
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
    //////////////////ctrl+C ///////////////
}); ////////// load구역 ////////////////////////
///////////////////////////////////////////////

$(function () { /// jQB ///////////////////////////
    /// 햄버거 버튼 클릭시 전체 메뉴 보이기 ///
    var hamsts = 0; //햄버거버튼상태값(0-햄버거,1-닫기)
    var prot_ham = 0; //햄버거기능 막기(0-허용,1-막기)
    $("#ham").click(function () {

        ///// 광클금지 ///////////////////////////
        if (prot_ham === 1) return false;
        prot_ham = 1;
        setTimeout(function () {
            prot_ham = 0;
        }, 300);
        /////////////////////////////////////////

        if (hamsts === 0) { //햄버거상태일때////////
            /// 스크롤막기 ///
            scNo = 1;

            /// 전체메뉴 보이기 
            $(".mbox").fadeIn(300);
            /// 햄버거 버튼 닫기버튼으로 변신!
            // 1. 첫번째바 회전하여 중앙에 위치
            // (주의!) transform: "rotate(45deg)"가 animate 에서 적용되지 않는다. 따라서 rotate플러그인을 사용하여 코딩한다! 사용법은 rotate:"각도"
            $("#ham>span").eq(0).animate({
                top: "10px",
                rotate: "45deg"
            }, 300); /// animate ///
            // 2. 중앙바 중앙으로 사라지기
            $("#ham>span").eq(1).animate({
                width: "0",
                left: "50%"
            }, 300); /// animate ///
            // 3. 세번째바 회전하여 중앙에 위치
            $("#ham>span").eq(2).animate({
                top: "10px",
                rotate: "-45deg"
            }, 300); /// animate ///

            // 상태변경하기!
            hamsts = 1; //닫기상태로!

        } /////// if문 ///////////////////////
        else if (hamsts === 1) { /// 닫기상태일때///
            /// 스크롤허용 ///
            scNo = 0;

            /// 전체메뉴 숨기기 
            $(".mbox").fadeOut(300);
            /// 햄버거 버튼 원래상태로 변신!
            // 1. 첫번째바 원위치!
            $("#ham>span").eq(0).animate({
                top: "0px",
                rotate: "0deg"
            }, 300); /// animate ///
            // 2. 중앙바 원위치!
            $("#ham>span").eq(1).animate({
                width: "100%",
                left: "0%"
            }, 300); /// animate ///
            // 3. 세번째바 원위치
            $("#ham>span").eq(2).animate({
                top: "20px",
                rotate: "0deg"
            }, 300); /// animate ///

            // 상태변경하기!
            hamsts = 0; //햄버거상태로!
        } /////// else if문 ///////////////////


    }); //// click //////////////////////////
    /////////////////////////////////////////





}); ///// jQB ///////////////////////////////////
