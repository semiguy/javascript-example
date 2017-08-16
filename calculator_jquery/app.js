// 변수 선언
//var inp = document.forms['cal'];
//var input = inp.getElementsByTagName('input');
//var cls_btn = document.getElementsByClassName('cls_btn')[0];
//var result_btn = document.getElementsByClassName('result_btn')[0];
var $inp = $('form[name=cal]');
var $input = $inp.find('input');
var $cls_btn = $('.cls_btn');
var $result_btn = $('.result_btn');
var $result = $inp.find('input[name=result]');


// 계산기 초기화
function clr() {
    //inp['result'].value = 0;
    $result.val(0);
};

// 계산기 입력 처리
function calc(value) {
    // 입력이 들어가면 0을 지움
    /*
    if (inp['result'].value == 0) {
        inp['result'].value = '';
    }
    */
    // 입력이 들어가면 0을 지움
    if ($result.val() == 0) {
        $result.val('');
    }

    // 입력 값을 결과창에 출력
    //inp['result'].value += value;
    var val = $result.val() + value;
    $result.val(val);
};

// 계산 결과 처리
function my_result() {
    //var result = document.forms['cal']['result'];
    //var calc = eval(result.value);
    var calc = eval($result.val());

    // 결과 창에 표시
    //inp['result'].value = calc;
    $result.val(calc);
};

// 이벤트 핸들러
// -------------------------------------------------------------------
// 숫자 및 사칙연산 버튼
//for (var i = 0; i < input.length; i++) {
    // 숫자와 사칙 연산자만 입력 처리
    //if (input[i].value != '=' && input[i].value != 'clear') {
        //input[i].onclick = function () {
            //calc(this.value);
        //}
    //}
//};
$('input').click(function () {
    var $input_value = $(this).val();

    // 숫자와 사칙 연산만 입력 처리
    if ($input_value != '=' && $input_value != 'clear') {
        calc($input_value);
    }
})

// 초기화 버튼
/*
cls_btn.onclick = function () {
    clr();
};
*/
$('.cls_btn').click(function () {
    clr();
});

// 결과 버튼
/*
result_btn.onclick = function () {
    try {
        my_result();
    } catch (err) {
        var result = inp['result'];
        result.value = '입력오류';
    }
};
*/
$('.result_btn').click(function () {
    try {
        my_result();
    } catch (err) {
        $result.val('입력 오류');
    }
});