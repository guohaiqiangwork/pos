<!DOCTYPE html>
<%@ page language="java" pageEncoding="utf-8"%>
<%@ include file="/platform/common/jsp/taglibs.jsp"%>
<html>

	<head>
		<meta charset="UTF-8">
		<title>分享链接</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="${path }/module/share_register/css/mui.css" />
		<link rel="stylesheet" type="text/css" href="${path }/module/share_register/css/common.css" />
		<script src="${path }/module/share_register/js/rem_controle.js" type="text/javascript" charset="utf-8"></script>
	</head>

	<body>
		<div class="share">
			<div class="share_content">
				<form id="reg_form" action="" method="post">
					<input type="text" name="model.phone" id="phone" value="" placeholder="请输入您的手机号用于登录APP" maxlength="11" />
					<input type="password" id="password" value="" placeholder="请输入登录密码" />
					<input type="hidden" id="jiami_pwd" name="model.loginPassword" value="" />
					<input type="hidden" name="model.userProxy.code" value="${customerCode }" />
					<div class="share_verify">
						<input style="margin-bottom: 0;" type="text" name="smsCode" id="smsCode" value="" placeholder="请输入验证码" />
						<div id="get_auth_code">获取验证码</div>
					</div>
					<div class="checkbox">
						<img class="check_img" src="${path }/module/share_register/img/icon_checkbox.png" alt="" />
						<span>注册即表示您同意</span>
						<a href="#">《用户协议》</a>
					</div>
					<div class="share_btn">注册</div>
				</form>
			</div>
			<img class="bg_share_bottom" src="${path }/module/share_register/img/bg_share_bottom.png"/>
		</div>
		<script src="${path }/module/share_register/js/jquery-1.8.3.min.js"></script>
		<script src="${path }/module/share_register/js/mui.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="${path }/module/share_register/js/md5.js" type="text/javascript" charset="utf-8"></script>
		<script src="${path }/module/share_register/js/custom.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">
			//复选框
			var is_agreement="";
			$('.checkbox img,.checkbox span').click(function() {
				if($(".checkbox").find('img').attr('src') == '${path }/module/share_register/img/icon_checkbox.png') {
					$(".checkbox").find('img').attr('src', '${path }/module/share_register/img/icon_checkbox1.png');
					is_agreement=true;
				} else {
					$(".checkbox").find('img').attr('src', '${path }/module/share_register/img/icon_checkbox.png');
					is_agreement=false;
				}
			});
			//获取验证码
			$("#get_auth_code").click(function() {
				if(phone_check()) {
					var phone = mui('#phone')[0].value;
					mui.ajax('${path}/appCustomer/getSMSCode', {
						data: {
							phone: phone,
							flage: 'R'
						},
						dataType: 'json', //服务器返回json格式数据
						type: 'post', //HTTP请求类型
						timeout: 10000, //超时时间设置为10秒；
						success: function(data) {
							console.log(phone)
							if(true == data.success) {
								var time_remaining = 60;
								clearInterval(int);
								var int = self.setInterval('countdown()', 1000);
								countdown = function() {
									if(1 < time_remaining) {
										time_remaining--;
										mui('#get_auth_code')[0].setAttribute('disabled', 'disabled');
										mui('#get_auth_code')[0].innerText = time_remaining + 's后再次获取';
									} else {
										window.clearInterval(int);
										mui('#get_auth_code')[0].removeAttribute('disabled');
										mui('#get_auth_code')[0].innerText = '获取验证码';
									}
								}
							}
							if(false == data.success) {
								mui.toast(data.msg);
							}
						},
						error: function(xhr, type, errorThrown) {
							if(xhr.status != '0')
								mui.toast('服务器走丢了')
						}
					});
				} 
			});
			//注册
			$(".share_btn").click(function() {
				if(phone_check() && smsCode_check() && pwd_check()) {
					$('#jiami_pwd').val(hex_md5($('#password').val()));
					var formData= $('#reg_form').serialize();
					if(is_agreement) {
						mui.ajax('${path}/appCustomer/doRegister', {
							data: formData,
							dataType: 'json', //服务器返回json格式数据
							type: 'post', //HTTP请求类型
							timeout: 10000, //超时时间设置为10秒；
							success: function(data) {
								if(true == data.success) {
									location.href='${path}/appCustomer/goShareSuccess?customerCode=${customerCode}';
								}
								if(false == data.success) {
									mui.toast(data.msg)
								}
							},
							error: function(xhr, type, errorThrown) {
								if(xhr.status != '0')
									mui.toast('服务器走丢了')
							}
						});
					} else {
						mui.alert("请阅读并同意《用户协议》")
					}
				}
			});
		</script>
	</body>

</html>