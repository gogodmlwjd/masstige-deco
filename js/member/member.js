// My Item 회원가입 페이지 JS //


$(function () { /// jQB //////////////////////
    
    //////////////// 약관동의 전체 체크박스 체크시/////////////////////////
    // 대상: 모두 동의 체크박스(#chk_all)
    // 기능: 체크박스 체크시 전체 체크기능
    // 이벤트: 체크박스 체크 변경시 change이벤트 발생!
    $("#chk_all").change(function(){
        // 체크박스 체크여부 가져오기
        var chk = $(this).prop("checked");
        // attr("checked")은 상태값을 리턴 못함
        // prop(속성명) -> prop("checked")
        // 상태값 리턴 true/false
        console.log("전체체크상태:"+chk);
        
        // true/false 상태에 따라 개별 체크박스를 모두 체크하거나 체크해제함
        // 개별 체크박스 공통 class는 .chk
        $(".chk").prop("checked", chk);
        // $(".chk").attr("checked", chk); -> attr도 설정은 됨! 위에서처럼 값을 읽어오지는 못함
        // prop(속성명,속성값) - 속성 설정 방법
        // attr(속성명,속성값) -> 값 설정시 이것도 작동함
        
        
    }); /////////////// change ///////////////////////
    
    //// 개별 체크박스 체크 변경시 ///////////
    // 대상: 개별체크박스 공통 class : .chk
    // 이벤트: change
    $(".chk").change(function(){
        // 1. 개별 체크박스 체크 여부 알아내기
        var chk = $(this).prop("checked");
        console.log("상태:"+chk);
        
        // 2. 만약 false면 전체 체크박스 체크 풀기
        if(!chk){ // !(not)연산자로 false면 true로 뒤집기
            $("#chk_all").prop("checked",false);
        } ///////////if ////////////////
        // 3. 개별 체크박스 체크 true일 때 개별 체크 개수가 3개이면 전체체크
        else{
            // 개별체크박스의 true개수 카운트하기
            var num = 0;
            // 개별체크박스의 개수만큼 돌아라! each()
            $(".chk").each(function(idx,ele){
                // idx - 순번(0부터)
                // ele - 해당요소자신(this와 같음)
                // 1. 개별박스의 true/false 여부를 변수에 담는다
                var csts = $(ele).prop("checked");
                //console.log(csts);
                
                // 2. 상태값이 true이면 num변수를 1씩증가
                if(csts) num++;
                // 최대 3
                
            }); ///////////////// each //////////////////////
            
            console.log("개별체크개수:"+num);
            
            // 개별체크개수가 3이면 전체체크박스 체크하기
            if(num === 3) {
                $("#chk_all").prop("checked",true);
            } ///// if /////////////////////
                    
            
        } //////////// else ////////////////
        
    }); //////////// change //////////////
    
    
    
    /////////////////////////////////////////////////////////////////
    /// 동의버튼 클릭시 필수체크요소를 모두 체크한 경우
    // 대상: #btnY(동의버튼)
    $("#btnY").click(function(){
        // 조건: 3개 중 필수만 체크되면 통과!
        // .chk 인 것 중 0번째, 1번째!
        if($(".chk").eq(0).prop("checked") && 
          $(".chk").eq(1).prop("checked")){
            //console.log("요기~~!");
            
            // 1. 동의/비동의 박스 숨기기(입력양식보이기)
            $("#conf").fadeOut(300);             
            
        } /////////// if ///////////////////////
        else{ // 필수체크항목 모두 체크 안한경우
            alert("모든 필수 항목에 체크하셔야 합니다~!")
        } ////////// else ///////////////////////
        
    }); //////////// click /////////////////////
    
    
    ///// 비동의 버튼을 클릭하면 index 페이지로 돌아가기
    $("#btnN").click(function(){
        alert("약관이 마음에 안드십니까? 안녕히가세요^^")
        location.href = "index.html";
    }); ///////// click /////////////////
    
    
    
    
    
    /*
    [ 입력폼의 유효성검사 ]
    1. 원리 : 입력창에 클릭 또는 탭하여 입력 가능상태일때 포커스상태임
        이때 다른곳을 클릭하면 포커스가 나간 상태임. 이것을 블러상태
        -> 이벤트명 : blur
        (반대 이벤트는 focus)
        블러이벤트를 이용하여 유효성 검사를 진행한다.
    2. 이벤트 대상선정 : input[type=text][id!=email2], input[type=password]
    - 검사할 대상에서 이메일 뒷주소는 제외해야함
    - != 같지않음, [][] 두가지 속성 모두인것 : 제이쿼리전용
    */

    // blur() 메서드는 블러이벤트가 발생할때 실행됨

    $("input[type=text][id!=email2], input[type=password]")
        .blur(function () {

            // 불러가 발생한 요소의 아이디
            var cid = $(this).attr("id");
            // 블러가 발생한 요소의 값
            var cv;
            // 이름일 경우(cid==="mnm")는 앞뒤공백제거(trim)
            // 그밖의 경우는 모든공백제거(grospace 함수)
            if (cid === "mnm")
                cv = $(this).val().trim();
            else
                cv = grospace($(this).val());
            // val() 메서드는 입력한 값을 가져옴
            // trim() 메서드는 문자의 앞뒤공백제거함!
            // 공백제거에 대한 검증
            // -> 앞뒤공백만 제거: 이름 같은 경우 중간 공백 필요~(trim처리)
            // -> 모든 공백 제거: 아이디, 이메일,비밀번호 등 (공백제거함수)

            // 공백제거후 입력창에 반영하기!
            $(this).val(cv);

            // 블러이벤트 발생확인
            console.log("왜blur?" + cid + "/" + cv);

            ////////////////////////////////////////////////////////////////////////////////
            /// 1. 빈값일 경우 "필수입력" 메시지 띄우기~!
            if (cv === "") {
                $(this).siblings(".msg").text("필수입력"); //siblings 나를 제외한 다른 형제들
                pass = false; //불통과!
            } ////// if ////////////////////////////////////////////////


            /// 2. 아이디 유효성 검사하기 /////////////////////////
            else if (cid === "mid") {
                // 아이디 검사 함수 호출하기
                // 아이디는 영문자로 시작하는 6~10자 영문자 또는 숫자
                // console.log("아이디검사:"+validReg(cv,cid));

                // 통과(true)일 경우
                if (validReg(cv, cid)) {
                    $(this).siblings(".msg")
                        .html('<b style="color:green">훌륭한 아이디네요~!</b>');
                } ////// if ////////////////
                // 불통과(false)일 경우
                else {
                    $(this).siblings(".msg")
                        .text("아이디는 영문자로 시작하는 6~10자 영문자 또는 숫자");
                    pass = false; //불통과!
                } ///////////// else ////////////////////



            } /////////////// else if ///////////////////////////

            // 3. 비밀번호 검사하기 //////////////////////////
            else if (cid === "mpw") {

                // 비밀번호 검사 함수 호출하기
                // 특수문자,문자,숫자 포함 형태의 5~15자리 이내의 암호 정규식
                // console.log("비번검사:"+validReg(cv,cid));

                // 불통과(false)일 경우
                if (!validReg(cv, cid)) {
                    $(this).siblings(".msg")
                        .text("특수문자,문자,숫자 포함 형태의 5~15자리");
                    pass = false; //불통과!
                } ////// if ////////////////
                // 통과(true)일 경우
                else {
                    $(this).siblings(".msg").empty();
                } ///////////// else ////////////////////


            } ///////////// else if //////////////////////////


            // 4. 비밀번호 확인 검사
            else if (cid === "mpw2") {

                // 비밀번호입력값과 비밀번호확인 입력값의 동일여부확인
                // 같지 않으면 메시지 띄우기
                if (cv !== $("#mpw").val()) {
                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다.");
                pass = false; //불통과!
                } //////////// if문 /////////////////
                // 통과(true)일 경우
                else {
                    $(this).siblings(".msg").empty();
                } ///////////// else ////////////////////


            } //////// else if ///////////////////////////




            ////////////////////////////////////////////////////////////////////////////////
            //// 빈값 통과시 ////////
            else {
                $(this).siblings(".msg").empty(); //empty() 메서드는 문자열 지우기
            }

        }); ///////blur /////////////////////////////////
    /////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// 키보드 입력시 이메일 체크하기 /////////////////////////////
    // 키보드 관련 이벤트: keypress, keyup, keydown
    // 1. keypress: 키가 눌려졌을 때
    // 2. keydown: 키가 내려갔을 때
    // 3. keyup: 키가 올라왔을 때
    // 과연 글자가 입력되는 순간 어떤 이벤트를 적용해야 할까?
    // keyup 이벤트는 바로 글자가 전달됨

    //이벤트 대상 : #email, #email2
    $("#email1, #email2").on("keyup", function () {

        // 앞쪽 이메일 내용 읽어오기
        var eml1 = $("#email1").val();
        console.log("내용:" + eml1);

        // 뒤쪽 이메일 주소 읽어오기
        // #email1이면 선택박스값(#seleml)을, 
        // #email2이면 그 값을 입력받음
        // 조건연산자 -> 비?집:놀이동산;
        var ev = $(this).attr("id") === "email1" ? $("#seleml").val() : $("#email2").val();

        console.log("이메일 뒷주소:" + ev);

        // 선택박스가 "free"이면 #email2의 값을 읽어간다
        if ($("#seleml").val() === "free") {
            ev = $("#email2").val();
        }

        // 이메일 전체주소 만들기
        var comp = eml1 + "@" + ev;
        //console.log("전체주소:"+comp);
        //console.log("검사결과:"+validReg(comp,"eml"));

        // 검사결과
        var res = validReg(comp, "eml");

        ///// 이메일 검사 결과 메세지 찍기
        if (res) { //통과
            $("#email1").siblings(".msg").html("<b style='color:green'>적합한 이메일 형식입니다.</b>");
        } ///// if //////////////
        else { //불통과
            $("#email1").siblings(".msg").text("맞지않는 이메일 형식입니다.");
            pass = false; //불통과!
        } ///// else ///////////////// 




    }); ///////// keyup ////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// 선택박스 변경시 이메일 검사//////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////
    // 검사시점: 선택박스 변경할 때
    // 이벤트: change
    // 이벤트대상: #seleml
    $("#seleml").change(function () {

        // 앞쪽 이메일 내용 읽어오기
        var eml1 = $("#email1").val();


        // 선택박스 선택값 읽어오기
        var sv = $(this).val();
        console.log("선택값:" + sv);

        // 3가지상태가 있음!
        // (1) init - 선택하세요 
        // (2) free - 직접입력
        // (3) 이메일주소 선택
        if (sv === "init") { // "선택하세요"
            $("#email1").siblings(".msg").text("이메일 옵션선택 필수!");

            $("#email2").fadeOut(500); //숨기기
            pass = false; //불통과!
        } ///// if /////////////////
        else if (sv === "free") { // "직접입력"
            $("#email2").fadeIn(500); // 보이기
        } ///// else if ////////////
        else { // 이메일주소선택
            $("#email2").fadeOut(500); // 숨기기

            // 이메일 전체주소 만들기
            var comp = eml1 + "@" + sv;
            //console.log("전체주소:"+comp);
            //console.log("검사결과:"+validReg(comp,"eml"));

            // 검사결과
            var res = validReg(comp, "eml");

            ///// 이메일 검사 결과 메세지 찍기
            if (res) { //통과
                $("#email1").siblings(".msg").html("<b style='color:green'>적합한 이메일 형식입니다.</b>");
            } ///// if //////////////
            else { //불통과
                $("#email1").siblings(".msg").text("맞지않는 이메일 형식입니다.");
            pass = false; //불통과!
            } ///// else ///////////////// 

        } ///// else ///////////////



    }); /////////// change ///////////////////



    ////////////////////////////////////////////////////////////////////////
    //////////////// 가입하기(submit)버튼 클릭시 //////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    // 전체검사의 원리:
    // 전역변수 pass를 설정하여 true를 주고
    // 검사 중간에 불통과일 경우 false로 값을 변경한다
    // 유효성 검사 결과는 최종적인 pass의 값에 의한다!
    // 이벤트 강제 발생하기! - 이미 세팅된 blur이벤트를 발생한다
    ////////////////////////////////////////////////////////////////////////
    var pass; //검사결과
    $("#btnj").click(function (e) { // e- 이벤트 전달변수
        // 1. 서브밋페이지 전송막기
        e.preventDefault();

        // 2. pass 변수에 통과여부 true세팅하기
        pass = true;

        // 3. 입력창 blur이벤트 발생시키기 : 

        // (1)대상: $("input[type=text][id!=email2], input[type=password]")
        // -> trigger("blur")
        $("input[type=text][id!=email2], input[type=password]").trigger("blur");

        // (2)대상: #seleml
        // -> trigger("change")
        $("#seleml").trigger("change");

        // (3)대상: #email1, #email2
        // -> trigger("keyup")
        // 조건: #email2는 선택박스가 "free"일때 검사
        if ($("#seleml").val() === "free")
            $("#email2").trigger("keyup");
        else
            $("#email1").trigger("keyup");


        ////////////// 검사 결과
        console.log("통과여부:" + pass);
        
        // 검사통과시 메시지 띄우고 로그인페이지로 가기
        if(pass){ //통과시
            // 원래는 여기서 DB입력페이지로 넘겨준다!
            // 회원정보 입력 성공시 메시지를 띄운다.
            alert("회원가입을 축하드립니다!(^^)");
            // 로그인페이지로 이동
            location.replace("login.html")
            //location.href 는 이전 입력된 페이지로 돌아갈 수 있다
            // 보안상 이전페이지로 못돌아가게하려면
            // location.replace("주소")를 사용!!!!!!!!!!! 
        }///////// if ///////////////////
        else{ //불통과시
            alert("입력을 수정하세요!")
        } //////// else /////////////


    }); ////////////////// click //////////////////////////






}); //////// jQB ////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


/*////////////////////////////////////////////
    함수명: grospace(get rid of space)
    기능: 문자의 모든 공백을 제거하여 리턴함
*/ ////////////////////////////////////////////
function grospace(val) { // val - 전달변수(처리할문자값)
    var newval = val.replace(/\s/g, "");
    // replace("바꾸고싶은값","바꿀값")
    // 바꾸고 싶은값을 정규식으로 써줘야 모두 찾아서 바꾼다!
    // 슬래쉬 사이에 값을 쓰고 g 플래그를 사용하여 모두 찾아준다!
    // 스페이스는 정규식에서 \s로 표시한다
    //      /\s/g -> 스페이스를 모두 찾아라!

    // 변경된 값을 리턴한다!
    return newval; // 호출한 곳으로 변경된값을 가지고 돌아간다!

} ////// grospace ///////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////





/*////////////////////////////////////////
    함수명:validReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말자!-싸면 문자가됨)
*/ ////////////////////////////////////////
function validReg(val, cid) {
    // val - 검사할 값, cid - 처리구분아이디
    //console.log(val+"/"+cid);

    // 정규식 변수
    var reg;

    switch (cid) {
        case "mid": //아이디
            reg = /^[a-z0-9]{6,10}$/g;
            //아이디는 영문자로 시작하는 6~10자 영문자 또는 숫자
            break;
        case "mpw": //비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=\*]).*$/;
            //특수문자,문자,숫자 포함 형태의 5~15자리 이내의 암호 정규식
            //특수문자중 \* (역슬래쉬별)은 특수문자 처리임 - 그냥 *은 모든 이라는 뜻으로 사용되기 때문
            break;
        case "eml": //이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            break;

    } ///// switch case문 ///////

    //console.log("정규식:"+reg);
    // 검사결과 리턴
    // test(값) 값을 검사하여 
    // true/false 리턴하는 JS내장함수
    return reg.test(val);

} ///////////// validReg 함수 //////////////
//////////////////////////////////////////
//////////////////////////////////////////
