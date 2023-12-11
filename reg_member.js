var str_id = "";
var str_pw = "";
var input_id;
var input_pw;
var input_repw;
var input_name;
var input_email;
var input_tel1;
var input_tel2;
var input_tel3;
var ipSexes;
var divX;

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_repw = document.getElementById("re_pw");
    input_name = document.getElementById("name");
    input_email = document.getElementById("email");
    input_tel1 = document.getElementById("tel_1")
    input_tel2 = document.getElementById("tel_2");
    input_tel3 = document.getElementById("tel_3");
    ipSexes = document.getElementsByName("sex");
    divX = document.getElementById("x");
}


function check(){
    var local_id = input_id.value;
    var local_pw = input_pw.value;
    var local_repw = input_repw.value;
    var local_name = input_name.value;
    var local_email = input_email.value;
    var local_tel1 = input_tel1.value;
    var local_tel2 = input_tel2.value;
    var local_tel3 = input_tel3.value;

    for(var i = 0; i < ipSexes.length; i++){
        if(ipSexes[i].checked == true){
            var sex = ipSexes[i].value;
        }
    }

    if(local_id.length < 4){
        alert("id는 4글자 이상 12자 이하로만 입력하세요.");
    }
    else if(local_pw.length < 6){
        alert("pw는 6글자 이상 15자 이하로만 입력하세요.");
    }
    else if(local_id == local_pw){
        alert("아이디와 비밀번호가 같으면 안됩니다. 다시 입력하세요.");
    }
    else if(local_pw != local_repw){
        alert("비밀번호가 일치하지 않습니다. 다시 입력하세요.");
    }
    else if(local_name.length < 2){
        alert("이름은 2글자 이상 6자 이하로만 입력하세요.");
    }
    else if(local_email.length < 10){
        alert("이메일은 10글자 이상 입력하세요.");
    }
    else if(local_tel2.length < 4 || local_tel3.length < 4){
        alert("전화번호를 입력하세요.")
    }
    else{
        alert("회원 가입 성공");
        alert("아이디: " + local_id + " 비밀번호: " + local_pw + " 이름: " + local_name + 
        " 이메일: " + local_email + " 성별: " + sex + " 전화번호: " + local_tel1 + "-" + local_tel2 + "-"+ local_tel3);
    }
}