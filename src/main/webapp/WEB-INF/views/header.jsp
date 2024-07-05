<!DOCTYPE html>
<%@page import="org.springframework.web.filter.ShallowEtagHeaderFilter"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html>
<%
//START : Fix for Action Spoofing (Clickjacking)
response.addHeader("X-FRAME-OPTIONS", "DENY");
//END : Fix for Action Spoofing (Clickjacking)	 
response.setHeader("Cache-Control", "no-cache");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", -1);
response.setHeader("X-Content-Type-Options", "nosniff");
response.setHeader("Set-Cookie", "key=value; HttpOnly; SameSite=strict");
/*  response.setHeader("Content-Security-Policy", "default-src 'self'"); */
response.setHeader("x-xss-protection", "1");
response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
response.setHeader("X-Download-Options", "noopen");
response.setHeader("X-Content-Security-Policy",
		"default-src 'self'; script-src 'self' cdnjs.cloudflare.com maxcdn.bootstrapcdn.com cdn.jsdelivr.net ajax.googleapis.com; style-src 'self' maxcdn.bootstrapcdn.com cdnjs.cloudflare.com; img-src 'self'; font-src cdnjs.cloudflare.com");
%>


<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" type="image/x-icon"
	href="resources/images/advlogo.png" />

<title>Aadhaar Data Vault</title>

<script src="resources/js/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="resources/js/jquery.bootstrap.newsbox.min.js"
	type="text/javascript"></script>
<script src="resources/js/Chart.min.js" type="text/javascript"></script>
<script src="resources/js/bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="resources/css/bootstrap.css">
<link rel="stylesheet" href="resources/css/font-awesome.min.css">
<link rel="stylesheet" href="resources/css/bootstrap-theme.min.css">
<link href="resources/css/site.css" rel="stylesheet" type="text/css">
<script src="resources/js/Chart.min.js" type="text/javascript"></script>


<style type="text/css">
html, body {
	margin: 0;
	padding: 0;
	height: 100%;
}

#wrapper {
	min-height: 100%;
	position: relative;
}

#content {
	padding-bottom: 80px; /* Height of the footer element */
}

/* #footer {
	width: 100%;
	height: 80px;
	
	
	position:fixed;
	bottom: 0;
	left: 0;
	
} */

label.error {
	color: red;
}

.childrows {
	display: none;
}

.wrapper {
	font-size: medium;
	font-style: normal;
	font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
	border-collapse: collapse;
	width: 100%;
}

.wrapper td {
	border: 1px solid #ddd;
	padding: 4px;
	text-align: center;
}

.wrapper th {
	border: 1px solid #ddd;
	padding: 8px;
}

.wrapper tr:hover {
	background-color: #ddd;
}

.wrapper th {
	padding-top: 6px;
	padding-bottom: 6px;
	text-align: center;
	background-color: #3e76b9;
	color: white;
}
</style>


<style>
.canvasjs-chart-credit {
	display: none;
}

#imageFB, #imageTw, #imageLn, #imageCd, #imagePwd, #imageOtp, #imageTkn,
	#imageBio, #imageEmblm, #imageLogo {
	background: url('resources/images/websiteImages.png');
}

.row {
	margin-left: 0px;
	margin-right: 0px;
}

.navbar-default {
	background-color: #3e76b9;
	border-color: #e7e7e7;
}

.navbar-default .navbar-brand {
	color: #595d5f;
}

.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus
	{
	color: #ffffff;
	background-color: #3e76b9;
}

.navbar-default .navbar-text {
	color: #595d5f;
}

.navbar-default .navbar-nav>li>a {
	color: #595d5f;
}

.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a:focus
	{
	color: #3e76b9;
}

.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a:focus
	{
	color: #ffffff;
	background-color: #3e76b9;
}

.navbar-default .navbar-nav>li>.dropdown-menu {
	color: #505050;
	background-image: -webkit-linear-gradient(top, #f0f0f0 0, #f8f8f8 100%);
	background-image: linear-gradient(to bottom, #f0f0f0 0, #f8f8f8 100%);
	background-repeat: repeat-x;
}

.navbar-default .navbar-nav>li>.dropdown-menu>li>a {
	color: #505050;
}

.navbar-default .navbar-nav>li>.dropdown-menu>li>a:hover,
	.navbar-default .navbar-nav>li>.dropdown-menu>li>a:focus {
	color: #ffffff;
	background-color: #3e76b9;
}

.dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
	background-image: -webkit-linear-gradient(top, #3e76b9 0, #3e76b9 100%);
	background-image: linear-gradient(to bottom, #3e76b9 0, #3e76b9 100%);
	background-repeat: repeat-x;
	/*  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5', endColorstr='#ffe8e8e8', GradientType=0); */
	background-color: #3e76b9;
}

.navbar-default .navbar-nav>li>.dropdown-menu>li>.divider {
	background-color: #e7e7e7;
}

.navbar-default .navbar-nav .open .dropdown-menu>.active>a,
	.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,
	.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus {
	color: #595d5f;
}

.navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:hover,
	.navbar-default .navbar-nav>.active>a:focus {
	color: #595d5f;
}

.navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:hover,
	.navbar-default .navbar-nav>.open>a:focus {
	color: #ffffff;
	background-color: #3e76b9;
}

.navbar-default .navbar-toggle {
	border-color: #e7e7e7;
}

.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus
	{
	background-color: #e7e7e7;
}

.navbar-default .navbar-toggle .icon-bar {
	background-color: #505050;
}

.navbar-default .navbar-collapse, .navbar-default .navbar-form {
	border-color: #505050;
}

.navbar-default .navbar-link {
	color: #505050;
}

.navbar-default .navbar-link:hover {
	color: #ffffff;
}

@media ( max-width : 767px) {
	.navbar-default .navbar-nav .open .dropdown-menu>li>a {
		color: #595d5f;
	}
	.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,
		.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus {
		color: #595d5f;
	}
	.navbar-default .navbar-nav .open .dropdown-menu>.active>a,
		.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,
		.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus {
		color: #595d5f;
		background-color: #e7e7e7;
	}
}

.line1 {
	text-align: center;
	padding: 0px 10px 0px 10px;
	margin: 0px 0px 0px 0px;
}

.count {
	width: 100%;
	text-align: center;
	font-size: 30px;
	color: #1995bf;
	padding: 0px 0px 0px 0px;
	margin: 2px 0px 0px 0px;
	height: 1em;
}

.footer {
	background-color: #3e76b9;
	color: #F5F5F5;
}

.line2 {
	font-size: 20px;
	text-align: center;
	width: 100%;
	padding: 5px 10px 0px 15px;
	margin: 0px 10px 5px 0px;
	color: #5c5c5c;
}

* {
	margin: 0;
	padding: 0;
}

div {
	display: block;
}

.clear {
	clear: both;
}

#draggable {
	margin: 0px 0px 0px 0px;
	padding: 15px 5px 5px 5px;
	height: 180px;
	z-index: 1;
	width: 100%;
}

#dashboard {
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-transition: all 1.0s linear;
	transition: all 1.0s linear;
	height: 75px;
}

.loadable {
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	position: absolute;
	width: 100%;
	margin: 0px 10px 0px 0px;
}

#a {
	-webkit-transform: rotateY(-180deg);
	transform: rotateY(-180deg);
	-webkit-animation: mymovebackA 8s infinite;
	animation: mymovebackA 8s infinite;
}

#b {
	display: block;
	box-sizing: border-box;
	-webkit-animation: mymoveA 8s infinite;
	animation: mymoveA 8s infinite;
}

#c {
	-webkit-transform: rotateX(-180deg);
	transform: rotateX(-180deg);
	-webkit-animation: mymovebackB 8s infinite;
	animation: mymovebackB 8s infinite;
}

#d {
	display: block;
	box-sizing: border-box;
	-webkit-animation: mymoveB 8s infinite;
	animation: mymoveB 8s infinite;
}

/* X directional movement */
/* Chrome, Safari, Opera */
@
-webkit-keyframes mymoveA { 10% {
	-webkit-transform: rotateX(0deg);
}

50




%
{
-webkit-transform




:




rotateX


(




180deg




)


;
}
70




%
{
-webkit-transform




:




rotateX


(




180deg




)


;
}
100




%
{
-webkit-transform




:




rotateX


(




0deg




)


;
}
}
@
-webkit-keyframes mymovebackA { 10% {
	-webkit-transform: rotateX(-180deg);
}

50




%
{
-webkit-transform




:




rotateX


(




0deg




)


;
}
70




%
{
-webkit-transform




:




rotateX


(




0deg




)


;
}
100




%
{
-webkit-transform




:




rotateX


(




-180deg




)


;
}
}
@
keyframes mymoveA { 10% {
	transform: rotateX(0deg);
}

50




%
{
transform




:




rotateX


(




180deg




)


;
}
70




%
{
transform




:




rotateX


(




180deg




)


;
}
100




%
{
transform




:




rotateX


(




0deg




)


;
}
}
@
keyframes mymovebackA { 10% {
	transform: rotateX(-180deg);
}

50




%
{
transform




:




rotateX


(




0deg




)


;
}
70




%
{
transform




:




rotateX


(




0deg




)


;
}
100




%
{
transform




:




rotateX


(




-180deg




)


;
}
}

/* Y directional movement */
/* Chrome, Safari, Opera */
@
-webkit-keyframes mymoveB { 10% {
	-webkit-transform: rotateY(0deg);
}

50




%
{
-webkit-transform




:




rotateY


(




180deg




)


;
}
70




%
{
-webkit-transform




:




rotateY


(




180deg




)


;
}
100




%
{
-webkit-transform




:




rotateY


(




0deg




)


;
}
}
@
-webkit-keyframes mymovebackB { 10% {
	-webkit-transform: rotateY(-180deg);
}

50




%
{
-webkit-transform




:




rotateY


(




0deg




)


;
}
70




%
{
-webkit-transform




:




rotateY


(




0deg




)


;
}
100




%
{
-webkit-transform




:




rotateY


(




-180deg




)


;
}
}
@
keyframes mymoveB { 10% {
	transform: rotateY(0deg);
}

50




%
{
transform




:




rotateY


(




180deg




)


;
}
70




%
{
transform




:




rotateY


(




180deg




)


;
}
100




%
{
transform




:




rotateY


(




0deg




)


;
}
}
@
keyframes mymovebackB { 10% {
	transform: rotateY(-180deg);
}

50




%
{
transform




:




rotateY


(




0deg




)


;
}
70




%
{
transform




:




rotateY


(




0deg




)


;
}
100




%
{
transform




:




rotateY


(




-180deg




)


;
}
}

/*END OF Newly added CSS*/
.top_head {
	background: #f7f7f7;
	display: block;
	border-bottom: 1px solid #ebebeb;
	height: 30px;
	font-size: 1.2em;
}

.navbar-brand small {
	display: block;
	font-size: 18px;
	padding-top: 7px;
}

.goi-logo {
	/* margin-top: 10px; */
	padding-top: 2px;

	/* padding-left: 70px;
	padding-right: 10px;
	border-right-style: solid;
	border-right-color: #c5c5c5;
	border-right-width: 1px; */
}

.ep-logo {
	margin-top: 5px;
	padding: 10px 0px 0px 30px;
}

#ePramaantext {
	padding-top: 7px;
	padding-left: 18px;
	margin-top: 10px;
	font-size: 30px;
	color: #3e6e2c;
}

@media ( max-width : 480px) {
	#ePramaantext {
		display: none;
	}
	#ePramaantext small {
		display: none;
	}
}

@media ( min-width : 768px) {
	.row-eq-height {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		flex-direction: row;
	}
}

@media only screen and (max-width: 980px) {
	#goitext {
		display: none;
	}
	#newsTicker {
		padding-top: 10px;
	}
	#imageCarousel {
		padding: 0px;
	}
	#footerAlign {
		text-align: center;
	}
	#footernavigation {
		text-align: center;
	}
	#footerList {
		padding: 5px 0px 0px 0px;
	}
	#footerList li {
		display: block;
		content: " ";
	}
}

@media only screen and (min-width: 601px) {
	#footernavigation li:not(:first-child):before {
		content: " | ";
		padding: 0px 3px 0px 3px;
	}
	#footerList li {
		display: inline;
	}
}

.carasouelPadding {
	padding: 0px 0px 0px 10px;
}

.navbar {
	min-height: 32px !important
}

.navbar-fixed-top {
	min-height: 90px;
}

.navbar-nav>li>a {
	padding-top: 0px;
	padding-bottom: 0px;
	/* line-height: 80px; */
}

@media ( max-width : 980px) {
	.navbar-nav>li>a {
		line-height: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
	}
}

.ministry, .ministry:hover {
	color: #595d5f;
}

#imageFB {
	background-position: -31px -130px;
	width: 35px;
	height: 34px;
}

#imageLn {
	background-position: -121px -130px;
	width: 34px;
	height: 37px;
}

#imageTw {
	background-position: -214px -129px;
	width: 37px;
	height: 37px;
}

#imageCd {
	background-position: -11px -223px;
	width: 316px;
	height: 40px;
}

#imagePwd {
	background-position: -12px -19px;
	width: 73px;
	height: 47px;
}

#imageOtp {
	background-position: -147px -5px;
	width: 47px;
	height: 73px;
}

#imageTkn {
	background-position: -267px -3px;
	width: 49px;
	height: 69px;
}

#imageBio {
	background-position: -389px -1px;
	width: 66px;
	height: 85px;
}

#imageLogo {
	background-position: -450px -107px;
	width: 90px;
	height: 75px;
}

#imageEmblm {
	
}

.footerRight {
	text-align: right;
}

.mainNav a:link, a:HOVER, a:ACTIVE, a:VISITED {
	text-decoration: none;
}

<!--
CSS


 


added--
>
@media ( max-width : 980px) {
	.navbar-header {
		float: none;
	}
	.navbar-left, .navbar-right {
		float: none !important;
	}
	.navbar-toggle {
		display: block;
	}
	.navbar-collapse {
		border-top: 1px solid transparent;
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
	}
	.navbar-fixed-top {
		top: 0;
		border-width: 0 0 1px;
	}
	.navbar-collapse.collapse {
		display: none !important;
	}
	.navbar-nav {
		float: none !important;
		margin-top: 7.5px;
	}
	.navbar-nav>li {
		float: none;
	}
	.navbar-nav>li>a {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.collapse.in {
		display: block !important;
	}
	.navbar-nav .open .dropdown-menu {
		position: static;
		float: none;
		width: auto;
		margin-top: 0;
		background-color: transparent;
		border: 0;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
}

.error {
	color: red;
	/*font-weight: bold;*/
}

.dropdown-content li:hover {
	background-color: #ddd;
}

.dropdown:hover .dropdown-menu {
	display: block;
}

.dropdown:hover .dropdown-toggle {
	
}
</style>

</head>


<!-- Navigation -->


<body>
	<!-- <div id="wrapper"> -->
	<div id="header">

		<nav class="navbar navbar-static-top ep-main-header"
			style="border: 0px; background-color: #fefefe;" role="navigation">
			<div class="container-fluid">
				<div class="navbar-header pull-left">

					<!-- <a class="navbar-brand goi-logo" href="#"><img
					src="images/emblem4.png" /> </a> -->
					<a class="navbar-brand ep-logo" href="/"> <!-- <img src="images/logo82.png" /> 
					<img id="imageLogo" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/> -->
						<img src="resources/images/advlogo.png" alt="ADV Logo" />
                                         </a>
                                         <a class="navbar-brand ministry"  id="goitext"  style="font-size: 20px;  font-weight: bold;font-family: sans-serif;padding-top: 7px; margin-top: 20px; padding-left: 18px;">
                                        <spring:message code="header.adv"></spring:message>
                                	</a>
					 <a class="navbar-brand ep-logo"  target="_blank" href="https://www.g20.org/en/" style="margin-top: 15px">
                                        <img src="resources/images/GS20.jpg" alt="GS20 Logo"/>
                                </a>


				</div>

				<div class="pull-right">
					<a class="navbar-brand ministry" id="goitext"
						style="font-size: 20px; font-weight: bold; font-family: sans-serif; padding-top: 7px; margin-top: 10px; padding-left: 18px;">
						<%-- <spring:message code="header.heading"></spring:message> --%>
						<spring:message code="header.heading"></spring:message> <small
						style="text-align: right; font-size: 17px; font-family: sans-serif; padding-top: 0px; font-weight: lighter;"><spring:message
								code="header.gov"></spring:message></small>
					</a> <a class="navbar-brand goi-logo ministry" target="_blank"
						href="https://www.meity.gov.in/"> <img
						src="resources/images/gov_ind6.png" alt="GOI Logo" />
					</a>
				</div>

			</div>
			<!-- /.container -->
		</nav>

		<nav class="navbar navbar-default" role="navigation"
			style="border-radius: 0px;">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse"
					data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span
						class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse"
				id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav navbar-left"
					style="font-family: sans-serif; font-weight: normal;">
					<!-- <li><a href="dashboard"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li> -->
					<li><a href="/"> <svg style="margin-top: 5px" width="22"
								height="22" viewBox="0 0 16 16" class="bi bi-house-door"
								fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
									d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" />
                  <path fill-rule="evenodd"
									d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                </svg></a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"><spring:message code="menu.aboutus" /><b
							class="caret"></b></a>
						<ul class="dropdown-menu" style="text-transform: none;">
							<li><a href="whatisadv"><spring:message
										code="nav.whatisadv"></spring:message> </a></li>
						</ul></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"><spring:message code="menu.services" />
							<b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="aadhaarValutAsService"><spring:message
										code="nav.advasservice"></spring:message> </a></li>
							<li><a href="aadhaardatavaultasasolution"><spring:message
										code="nav.advassolution"></spring:message> </a></li>
						</ul></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"> <span
							class="glyphicon glyphicon-earphone"></span> <spring:message
								code="menu.contactus" /><b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="contactus"><spring:message
										code="nav.contact"></spring:message> </a></li>
							<li><a href="resources"><spring:message
										code="nav.resources"></spring:message> </a></li>
							

						</ul></li>



					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"> <span class="glyphicon glyphicon-user"></span>
							<spring:message code="menu.login" /> <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<!-- <li><a href="https://authenticate.epramaan.gov.in/" target="_blank">User</a></li> -->
							<li><a target="_blank" href="https://advservice.epramaan.gov.in/department/Demo"><spring:message
										code="menu.login.department" /> </a></li>
						</ul></li>




				</ul>

				<div class="pull-right">

					<form class="navbar-form" role="search"
						style="padding: 0px; margin-top: 0px; margin-bottom: 0px;">
						<ul class="nav navbar-nav navbar-left"
							style="font-family: sans-serif; font-weight: normal; text-transform: capitalize;">
							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown"><spring:message
										code="menu.chooselang" /> <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a href="#"><spring:message code="menu.english" />
									</a></li>
									<%-- <li><a href="?lang=hi"><spring:message
													code="menu.hindi" />
										</a></li> --%>


								</ul></li>

						</ul>


						<div class="input-group">
							<input type="text" class="form-control" style="height: 30px;"
								placeholder="Search" name="q">
							<div class="input-group-btn">
								<button class="btn" type="submit"
									style="height: 30px; background-color: #e47d34;">
									<i class="glyphicon glyphicon-search" style="color: white;"></i>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</nav>




		<div class="container-fluid">
			<hr
				style="display: block; border: 0; border-top: 5px solid #3e76b9; padding: 0; margin-top: 5px; margin-bottom: 5px;" />
		</div>
	</div>

	<!-- </div> -->
</body>
</html>



