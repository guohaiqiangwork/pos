//var ajax_url = 'http://192.168.1.5:8080/platform/';
//var img_url = 'http://192.168.1.5:8080/platform/platform/images/';
//var img_url1 = 'http://192.168.1.5:8080/platform/platform/storeLogo/';
//var img_urlcode = 'http://192.168.1.5:8080/platform/platform/qrcode/';
//var img_url_banner = 'http://192.168.1.5:8080/';

//服务器ip
var ajax_url = 'http://www.huiai.net.cn/platform/';
var img_url = 'http://www.huiai.net.cn/platform/platform/images/';
var img_url1 = 'http://www.huiai.net.cn/platform/platform/storeLogo/';
var img_urlcode = 'http://www.huiai.net.cn/platform/platform/qrcode/';
var img_url_banner = 'http://www.huiai.net.cn/';

/**
 * 银行卡卡号校验
 * @author 闫枫
 * @date 2018-09-28
 * @param {Object} e
 */
function bankCode_check(bankCode) {
	var reg_bankCode = /^[0-9]{16,21}$/;
	if('' == bankCode) {
		mui.toast('银行卡卡号不能为空');
	} else if(!reg_bankCode.test(bankCode)) {
		mui.toast('银行卡卡号只可输入16~21位长数字');
		return false;
	} else {
		return true;
	}
}
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

//推荐码验证
function Recommendcode_check(e) {
	//推荐码正则需修改
	var Recommendcode = mui('#Recommend_code')[0].value;
	var reg_Recommendcode = /^[a-zA-Z0-9]{4,6}$/;
	if('' == Recommendcode) {
		mui.toast('推荐码不能为空');
	} else if(!reg_Recommendcode.test(Recommendcode)) {
		mui.alert('4-6位字母、数字组成', '推荐码格式不正确', function() {

		});
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

//姓名等文本验证
function name_check() {
	var user_name = mui('#user_name')[0].value;
	var reg_user_name = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,6}$/;
	if('' == user_name) {
		mui.toast('收货人不能为空');
		return false;
	} else if(!reg_user_name.test(user_name)) {
		mui.toast('收货人格式不正确，可包含汉字、数字、字母，2-6位！');
		return false;
	} else {
		return true;
	}
}

function name_check_01() {
	var user_name = mui('#user_name')[0].value;
	var reg_user_name = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,6}$/;
	if('' == user_name) {
		mui.toast('联系人不能为空');
		return false;
	} else if(!reg_user_name.test(user_name)) {
		mui.toast('联系人格式不正确，可包含汉字、数字、字母，2-6位！');
		return false;
	} else {
		return true;
	}
}

function name_check_02() {
	var user_name = mui('#user_name')[0].value;
	var reg_user_name = /^[a-zA-Z0-9\u4e00-\u9fa5]{2,6}$/;
	if('' == user_name) {
		mui.toast('持卡人不能为空');
		return false;
	} else if(!reg_user_name.test(user_name)) {
		mui.toast('持卡人格式不正确，可包含汉字、数字、字母，2-6位！');
		return false;
	} else {
		return true;
	}
}

//检查是否登录
function check_log() {
	var nt = plus.networkinfo.getCurrentType();
	switch(nt) {
		case plus.networkinfo.CONNECTION_ETHERNET:
		case plus.networkinfo.CONNECTION_WIFI:
			//是否登录
			if(null == myStorage.getItem('customerId') || "" == myStorage.getItem('customerId')) {
				var btnArray = ['取消', '去登录'];
				mui.confirm('请登录后使用相关功能', '未登录', btnArray, function(e) {
					if(1 == e.index) {
						var arr = [];
						arr = window.location.toString().split("/");
						localStorage.setItem("back_url", arr[arr.length - 1]);
						location.href = 'user_login.html';
					} else {

					}
				});
				return false;
			} else {
				return true;
			}
			break;
		case plus.networkinfo.CONNECTION_CELL2G:
		case plus.networkinfo.CONNECTION_CELL3G:
		case plus.networkinfo.CONNECTION_CELL4G:
			if(null == myStorage.getItem('customerId') || "" == myStorage.getItem('customerId')) {
				var btnArray = ['取消', '去登录'];
				mui.confirm('请登录后使用相关功能', '未登录', btnArray, function(e) {
					if(1 == e.index) {
						var arr = [];
						arr = window.location.toString().split("/");
						localStorage.setItem("back_url", arr[arr.length - 1]);
						location.href = 'user_login.html';
					} else {

					}
				});
				return false;
			} else {
				return true;
			}
			break;
		default:
			location.href = "network_loss.html"
			break;
	}
}

//全局变量
var customerId = null;
var user_type = null;
if(null != myStorage.getItem('customerId')) {
	customerId = myStorage.getItem('customerId');
	if(null != myStorage.getItem('Customer_info')) {
		user_type = myStorage.getItem('Customer_info').type;
		user_state = myStorage.getItem('Customer_info').state;
	}
}

if(null != myStorage.getItem('customerId') && "" != myStorage.getItem('customerId')) {
	setTimeout(function() {
		checkother_log();
	}, 3000);
}

function checkother_log() {
	mui.plusReady(function() {
		//		console.log(plus.push.getClientInfo().clientid)
		mui.ajax(ajax_url + 'appCustomer/checkLog', {
			data: {
				customerId: customerId,
				pushMsgClientid: plus.push.getClientInfo().clientid
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				//				console.log(data.success)
				//				console.log(data.msg)
				if(true == data.success) {
					setTimeout(function() {
						checkother_log();
					}, 3000);
				}
				if(false == data.success) {
					if('need_login' == data.msg) {
						mui.alert('您的账号在其它设备登录，继续使用需重新登录', '', function() {
							myStorage.clear();
							location.href = 'user_login.html';
							return false;
						});
					}
				}
			},
			error: function(xhr, type, errorThrown) {
				if(xhr.status != '0')
					mui.toast('服务器走丢了')
			}
		});
	});
}

//支付loading
function pay_loading() {
	var pay_loading = '<div class="open_box_loading">' +
		'<div class="open_box_loading_title">' +
		'<img src="img/three-dots.svg"/>' +
		'<div class="open_box_text">加载中</div>' +
		'</div>' +
		'</div>';
	$('body').append(pay_loading);
}

//时间戳转时间
function timestampToTime(timestamp) {
	var date = new Date(timestamp);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-';
	D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
	s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return Y + M + D + h + m + s;
}
//系统获取时间戳转时间
function myDateToTime(myDate) {
	//今日
	Y = myDate.getFullYear() + '-';
	M = (myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)) + '-';
	D = (myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()) + ' ';
	//	h = (myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()) + ':';
	//	m = (myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()) + ':';
	//	s = (myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds());
	//	return Y + M + D + h + m + s;
	return Y + M + D;
}

//function myDateToTime_01(myDate) {
//	//昨日
//	Y = myDate.getFullYear() + '-';
//	M = (myDate.getMonth() < 9 ? '0' + (myDate.getMonth() + 1) : (myDate.getMonth() + 1)) + '-';
//	D = (myDate.getDate() - 1 < 10 ? '0' + (myDate.getDate() - 1) : (myDate.getDate() - 1)) + ' ';
//	return Y + M + D;
//}

//获取URL？传参内容
function getQueryString(name) {
	var result = window.location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	if(result == null || result.length < 1) {
		return "";
	}
	return result[1];
}

//底部导航
mui('.mui-bar-tab').on('tap', '.tab', function(e) {
	var url = this.href;
	if('Nav_Applytools' == this.dataset.name) {
		//申请机具
		if(check_log()) {
			if(null != myStorage.getItem('Customer_info')) {
				user_type = myStorage.getItem('Customer_info').type;
				user_name = myStorage.getItem('Customer_info').name;
				if(user_name == null) {
					var btnArray = ['取消', '去实名'];
					mui.confirm('您还没有实名认证', '未实名', btnArray, function(e) {
						if(1 == e.index) {
							location.href = "user_real_name.html";
						} else {

						}
					});
				} else {
					//未实名，判断是否有类型
					if(null != user_type) {
						window.location.href = url;
					} else {
						var btnArray = ['取消', '去选择'];
						mui.confirm('您还没有选择身份类型', '无身份类型', btnArray, function(e) {
							if(1 == e.index) {
								location.href = "user_identity.html";
							} else {

							}
						});
					}
				}

			}

		} else {

		}
	} else if('Nav_Personalcenter' == this.dataset.name) {
		if(null != myStorage.getItem('Customer_info')) {
			user_type = myStorage.getItem('Customer_info').type;
			if(1 == user_type) {
				location.href = "Nav_Personalcenter_Partners.html";
			} else if(2 == user_type || 3 == user_type) {
				location.href = "Nav_Personalcenter_Agent.html";
			} else {
				location.href = "Nav_Personalcenter_Agent.html";
			}
		} else {
			location.href = "Nav_Personalcenter_Agent.html"
		}
	} else {
		location.href = url;
	}
	$('.mui-bar .custom_active').find('.mui-tab-label').css("color", "#20BEFF");
});

//个人中心--切换页面
mui('body').on('tap', '.go_url', function() {
	var url = this.dataset.url;
	if(undefined !== url) {
		if("Personalcenter_Setting" == this.dataset.name || "Personalcenter_login" == this.dataset.name) {
			location.href = url;
		} else if(check_log()) {
			user_name = myStorage.getItem('Customer_info').name;
			if(user_name == null) {
				var btnArray = ['取消', '去实名'];
				mui.confirm('您还没有实名认证', '未实名', btnArray, function(e) {
					if(1 == e.index) {
						location.href = "user_real_name.html";
					} else {

					}
				});
			} else if(user_type == null) {
				//实名，判断是否有类型
				var btnArray = ['取消', '去选择'];
				mui.confirm('您还没有选择身份类型', '无身份类型', btnArray, function(e) {
					if(1 == e.index) {
						location.href = "user_identity.html";
					} else {

					}
				});
			} else {
				//合伙人未缴纳押金
				if(2 == user_type && 1 == user_state) {
					mui.alert("请耐心等待\n管理员正在为您开通权限", " ", "知道了")
				} else {
					if("btn_withdraw" == this.dataset.name) {
						//提现
						if(myStorage.getItem('Customer_info').moneyState == 1) {
							if(myStorage.getItem('Customer_info').bankCardList.length == 0) {
								var btnArray = ['取消', '绑定'];
								mui.confirm("您当前还没有绑定银行卡", ' ', btnArray, function(e) {
									if(e.index == 1) {
										location.href = "bank_card_list.html"
									} else {

									}
								});
							} else {
								if(null==myStorage.getItem('Customer_info').faceImgString || '' == myStorage.getItem('Customer_info').faceImgString){
									location.href="user_Face_recognition.html?key=withdrawal";
								}else{
									location.href = "user_Face_recognition_bank.html";
								}
							}
						} else {
							mui.alert("您的账户已被冻结")
						}

					} else if("Personalcenter_myprofit" == this.dataset.name) {
						if(mui.os.plus) {
							var buttonTit = [{
								title: "闪电宝"
							}, {
								title: "闪POS"
							}];
							plus.nativeUI.actionSheet({
								cancel: "取消",
								buttons: buttonTit
							}, function(b) { /*actionSheet 按钮点击事件*/
								switch(b.index) {
									case 0:
										break;
									case 1:
										location.href='Personalcenter_myprofit.html'
										break;
									case 2:
										location.href='Personalcenter_myprofit_pos.html'
										break;
									default:
										break;
								}
							})
						}
					}else if("Personalcenter_statistics" == this.dataset.name) {
						if(mui.os.plus) {
							var buttonTit = [{
								title: "闪电宝"
							}, {
								title: "闪POS"
							}];
							plus.nativeUI.actionSheet({
								cancel: "取消",
								buttons: buttonTit
							}, function(b) { /*actionSheet 按钮点击事件*/
								switch(b.index) {
									case 0:
										break;
									case 1:
										location.href='Personalcenter_statistics.html?postype=1'
										break;
									case 2:
										location.href='Personalcenter_statistics.html?postype=2'
										break;
									default:
										break;
								}
							})
						}
					} else {
						location.href = url;
					}
				}
			}
		}
	}
});