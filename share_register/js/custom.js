var ajax_url = 'http://192.168.1.5:8080/platform/';
var img_url = 'http://192.168.1.5:8080/platform/platform/images/';
var img_url1 = 'http://192.168.1.5:8080/platform/platform/storeLogo/';

//手机号验证
function phone_check(e) {
	var reg_phone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
	var phone = mui('#phone')[0].value;
	if('' == phone) {
		mui.toast('手机号不能为空');
	} else if(!reg_phone.test(phone)) {
		mui.toast('手机格式不正确');
		return false;
	} else {
		return true;
	}
}

//密码验证
function pwd_check(e) {
	var pwd = mui('#password')[0].value;
	var reg_pwd = /^[a-zA-Z0-9_\.]{6,12}$/;
	if('' == pwd) {
		mui.toast('密码不能为空');
	} else if(!reg_pwd.test(pwd)) {
		mui.alert('6-12位字母、数字、_或.组成', '密码格式不正确', function() {

		});
		return false;
	} else {
		return true;
	}
}

//验证码验证
function smsCode_check(e) {
	var smsCode = mui('#smsCode')[0].value;
	if('' == smsCode) {
		mui.toast('验证码不能为空');
		return false;
	} else {
		return true;
	}
}
