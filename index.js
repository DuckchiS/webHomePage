var str_id = "";
var str_pw = "";
var input_id;
var input_pw;
var divX;

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    divX = document.getElementById("x");
}

function login(){
    var local_id = input_id.value;
    var local_pw = input_pw.value;
    if(local_id == "cat1234" && local_pw == 1234){
        divX.innerHTML = local_id + " 회원 님 반갑습니다."
    } else{
        alert("로그인 실패");
    }
}

var clock;

window.onload = function(){
    clock=document.getElementById("clock_box");
    setInterval(x, 1000);  // 타이머 시작
}

// ㅇㅇㅇㅇ년 ㅇㅇ월 ㅇㅇ일 ㅇㅇ시 ㅇㅇ분 ㅇㅇ초 ㅇㅇㅇ 밀리초

function x(){
    var now = new Date();
    var result = 
        now.getFullYear() + "년 " 
        + now.getMonth() + "월 "
        + now.getDate() + "일 "
        + now.getHours() + "시 "
        + now.getMinutes() + "분 "
        + now.getSeconds() + "초 ";
    clock.innerHTML = result;
}