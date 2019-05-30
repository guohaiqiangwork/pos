<!DOCTYPE html>
<%@ page language="java" pageEncoding="utf-8"%>
<%@ include file="/platform/common/jsp/taglibs.jsp"%>
<html>

	<head>
		<meta charset="UTF-8">
		<title>注册成功</title>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<link rel="stylesheet" type="text/css" href="${path }/module/share_register/css/mui.css" />
		<link rel="stylesheet" type="text/css" href="${path }/module/share_register/css/common.css" />
		<script src="${path }/module/share_register/js/rem_controle.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<div class="share">
			<%-- <header class="mui-bar mui-bar-nav">
				<a href="${path}/appCustomer/goShareLink?customerCode=${customerCode}" class="mui-icon right">
					<img class="scan" src="${path }/module/share_register/img/icon_close_white.png" alt="" />
				</a>
			</header> --%>
			<div class="share_content">
				<div class="share_img"><img class="img" src="${path }/module/share_register/img/bg_share_success.png" /></div>
				<div class="share_text">恭喜您注册成功</div>
				<div id="download" class="share_btn">下载APP</div>
			</div>
		
			<img class="bg_share_bottom" src="${path }/module/share_register/img/bg_share_bottom.png" />
		</div>
		<div class="mask"><img class="mask_img" src="${path }/module/share_register/img/weixin_lead(1).png" alt="" /></div>
	</body>
	<script src="${path }/module/share_register/js/jquery-1.8.3.min.js"></script>

	<script type="text/javascript">
		window.onload = function() {
			if(isWeixin()) {
				$(".mask").show();
				/* $(".mask").click(function() {
					$(".mask").hide()
				}); */
			} else {
				$("#download").click(function() {
					window.open();
				});
			}
		}
		//判断是否在微信中打开
		function isWeixin() {
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i) == "micromessenger") {
				return true; //微信打开
			} else if(ua.match(/qq/i) == "qq") {
				return true; //QQ打开
			} else if(ua.match(/WeiBo/i) == "weibo") {
				return true; //微博打开
			} else {
				return false;
			}
		}
	</script>

</html>