$("a").click(function() {
  alert ('a');
  check();
  });

function check(){
    var myFlag = 0;

    // 入力項目を設定
    if(document.myForm.yearField.value === "") {
        myFlag = 1;
        if (document.myForm.yearField.value < 1582) {
            window.alert('年は1582以上の値を入力してください');
            return false;
        }
    } else if (document.myForm.monthField === "") { // m(month)の入力チェック
        myFlag = 1;
        if (document.myForm.yearField.value > 12 || document.myForm.yearField.value < 1) {
            window.alert('月は1~12の整数を入力して下さい');
            return false;
        }
    } else if (document.myForm.dayField === "") { // d(day)の入力チェック
        myFlag = 1;
        if (document.myForm.dayField.value < 0 || document.myForm.dayField.value > 31) {
            window.alert('日は1~31の整数を入力して下さい');
            return false;
        }
    }

    var myDay =  document.myForm.dayField.value;
    var myMonth = document.myForm.monthField.value;
    var myYear = document.myForm.monthField.value;

    switch(myMonth) {
        case '1':
        myMonth = '13';
        myYear--;
        break;

        case '2':
        myMonth = '14';
        myYear--;
        break;
    }

    if (flag) { // もし未記入の項目があったら
        window.alert('未記入の項目があります');
        return false;
    } else {
        decide(myYear, myDay, myMonth);
    }
}
