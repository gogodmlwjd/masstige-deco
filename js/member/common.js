// My Item 공통 JS ////

/// jQB ///////////////////////////////////
$(function () {

    // 로고 애니메이션 클래스 넣기
    // 이미 만들어진 애니메이션을 class 넣기하여 작동시킨다
    // 5초 간격으로 클래스 넣기, 지우기
    // 애니메이션 대상: #rball, #cam, #tt

    setInterval(function () {

        // 클래스 지우기
        $("#rball,#cam,#tt").removeClass();

        // 클래스 삭제 후 조금의 시간차가 필요
        // setTimeout()

        // css의 애니메이션에서 infinite로 안하는 이유는, infinite로 할 경우에는 delay가 한번만 적용이 됨. 따라서 제이쿼리로 적용해줘야 함 
        setTimeout(function () {
            //1. 빨간공애니
            $("#rball").addClass("rball");
            //2. 카멜레온
            $("#cam").addClass("cam");
            //3. 혀날름
            $("#tt").addClass("tt");
        }, 100);
        

    }, 5000);


}); ///////// jQB ///////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////
