$(function () { /////////jQB ///////////////////////////////
    console.log("로딩완료!");

    //////////////////// 헤더 스크롤 이벤트 JS //////////////////////////////


    // 윈도우 넓이 값
    var wize = window.outerWidth;

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

        // 770 이하인지 if문으로 확인(나중에 모바일 최소 사이즈로 변경!)
        if (wize <= 770) {
            //console.log('현재 브라우저 크기가 770px 이하');
            if (scTop >= 0) {
                tChange = 1; //잠금(한번만 실행)
                //console.log("먹히는건가?");
                $(".top").removeClass("newTop");
            }

            //            $("#main_ban").css({
            //                marginTop: 0
            //            }); //////css/////////////



            /////////////// 모바일 화면에서는 about_right_box 글씨 보이게 /////////////////////////////////////////////////
            var pos1, pos2;

            var initSet = function () {
                // 타겟5
                $(".about_right_box").css({
                    opacity: 1,
                    transition: "all 0.3s ease-out"
                });
                pos1 = $(".about_right_box").offset().top;
                //console.log("A위치:" + pos1);

                // 5번타겟(1,2) //
                $(".about_right_box h4").css({
                    opacity: 1,
                    transition: "all 0.8s ease-out"
                });
                $(".about_right_box p").css({
                    opacity: 1,
                    transition: "all 0.8s ease-out 0.5s"
                });
                $(".about_btn").css({
                    opacity: 1,
                    transition: "all 0.8s ease-out 0.8s"
                });
                pos2 = $(".about_right_box").offset().top;
                //console.log("B위치:" + pos2);

            }; /////// initSet 함수 ///////////

            initSet();
            /////////////////////////////////////////////////////
        } //////////////////////if //////////////////

    }); /////// scroll ////////////

    if (wize <= 770) {
        $(".shop_list_wrap").css({
            top: headerH
        }); /// css ////////
        $(".shop_list_wrap").css({
            paddingTop: "20px"
        }) /// css ///////////
        $(".slxbtn").css({
            marginTop: "20px"
        }) /// css ///////////
    } //////////////////////if //////////////////



    // 드래그 대상: .npbox>ul
    var move = $(".npbox>ul");

    // 위치이동 한계설정 ////

    // 첫번째 한계값
    var fpt = move.width();
    // 마지막 한계값
    var lpt = move.width() / 2;

    // 움직이는 박스(.npbox>ul)의 left값 구하기
    var mpos = move.offset().left;

    // 취소할 사이즈
    var cncdwiz = 1130


    //console.log("현재left:" + mpos);

    $(window).resize(function () {
        // width값을 가져오기
        var width_size = window.outerWidth;
        if (width_size <= 770) {
            $(".top").removeClass("newTop");
            console.log('현재 브라우저 크기가 770px 이하로 변경!');
            $(".shop_list_wrap").css({
                top: headerH
            }); /// css ////////

        } //////////////////////if //////////////////

    }); /// resize //////////
    
    
    
    
    ///// 드래거블 ///////////////////////////////////////////
    //        else(width_size > 770) {
    //            $(".top").addClass("newTop");
    //            console.log('현재 브라우저 크기가 770px 초과로 변경!');
    //            $(".shop_list_wrap").css({
    //                top: 120 px
    //            }); /// css ////////
    //        } //////////////////////if //////////////////



    //
    //    if (wize <= 1440) {
    //        //console.log("1440 이하!");
    //
    //        $(".npbox>ul").draggable({
    //                axis: "x" //x축고정
    //            })
    //            // 트랜지션 설정
    //            .css({
    //                transition: "all .4s ease-out"
    //            })
    //
    //        //화면한계시에 위치고정 코드
    //        $("html,body").on("mousedown mouseup mousemove touchstart touchend touchmove", function () {
    //            //console.log("마우스냐 터치냐");
    //
    //            // 2. 처음 한계값 체크 후 위치고정하기
    //            if (mpos > lpt) {
    //                move.css({ //한계값 고정!
    //                    left: 0
    //                }); /// css ////////
    //
    //            } ///// if /////////////////////////
    //            // 3. 마지막 한계값 체크 후 위치고정하기!
    //            // left위치값은 마이너스임! -lpt
    //            else if (mpos < -lpt) {
    //
    //                move.css({ // 한계값 고정!
    //                    left: 0
    //                });
    //            } /// else if ////////////////////
    //
    //        }); /////// 마우스, 터치 이벤트 //////////////
    //    } /// if /////
    ////    else if (wize <= 1130){
    ////        console.log("이사이즈에서도 취소!");
    ////        $(".npbox>ul").draggable("option", "disabled", true);
    ////    }
    //    else { // 1400 초과 일때 취소
    //        //console.log("드래거블 취소!");
    //        $(".npbox>ul").draggable("option", "disabled", true);
    //    }
}); ///////// jQB ////////////////////////////////////////////
////////////////////////////////////////////////////////////
