<%-- <%@ page isELIgnored="false" %> --%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html >
<%
	//START : Fix for Action Spoofing (Clickjacking)
	response.addHeader("X-FRAME-OPTIONS", "DENY");
	//END : Fix for Action Spoofing (Clickjacking)	 
	response.setHeader("Cache-Control", "no-cache");
	response.setHeader("Pragma", "no-cache");
	response.setDateHeader("Expires", -1);
	/* response.setHeader("Access-Control-Allow-Origin","*"); */
	response.setHeader("Set-Cookie", "key=value; HttpOnly;  SameSite=strict");	
	response.setHeader("X-Content-Type-Options","nosniff");
	response.setHeader("x-xss-protection", "1");
	response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
	response.setHeader("X-Download-Options", "noopen");
	response.setHeader("X-Content-Security-Policy", "default-src 'self'; script-src 'self' cdnjs.cloudflare.com maxcdn.bootstrapcdn.com cdn.jsdelivr.net ajax.googleapis.com; style-src 'self' maxcdn.bootstrapcdn.com cdnjs.cloudflare.com; img-src 'self'; font-src cdnjs.cloudflare.com" );
	
%>

<head>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" type="image/x-icon" href="resources/images/advlogo.png">

<title>Aadhaar Data Vault</title>

<script src="resources/js/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="resources/js/jquery.bootstrap.newsbox.min.js"	type="text/javascript"></script>
<script src="resources/js/Chart.min.js" type="text/javascript"></script>
<script src="resources/js/bootstrap.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="resources/css/bootstrap.css">
<link rel="stylesheet" href="resources/css/font-awesome.min.css">
<link rel="stylesheet" href="resources/css/bootstrap-theme.min.css">
<link href="resources/css/site.css" rel="stylesheet" type="text/css">
<script src="resources/js/Chart.min.js" type="text/javascript"></script>


<link rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
	integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
	crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="resources/css/w3css.css" />	
<link rel="stylesheet" href="resources/css/chatbotstyle.css" />
<link rel="stylesheet" href="resources/css/holder.css" />


	
<style type="text/css">

html,
body {
	margin:0;
	padding:0;
	height:100%;
}


#wrapper {
	min-height:100%;
	position:relative;
}

#content {
	padding-bottom:80px; /* Height of the footer element */
}
/* #footer {
	width:100%;
	height:80px;
	position:absolute;
	bottom:0;
	left:0;
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


#imageFB,#imageTw, #imageLn, #imageCd, #imagePwd, #imageOtp, #imageTkn, #imageBio, #imageEmblm, #imageLogo {
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
	color:#3e76b9;
}


.navbar-default .navbar-nav>li>a:hover, .navbar-default .navbar-nav>li>a:focus {
   color: #ffffff;
	background-color: #3e76b9;
}

.navbar-default .navbar-nav>li>.dropdown-menu {
	color: #505050;
	background-image: -webkit-linear-gradient(top,#f0f0f0 0,#f8f8f8 100%);
    background-image: linear-gradient(to bottom,#f0f0f0 0,#f8f8f8 100%);
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
    background-image: -webkit-linear-gradient(top,#3e76b9 0,#3e76b9 100%);
    background-image: linear-gradient(to bottom,#3e76b9 0,#3e76b9 100%);
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
@-webkit-keyframes mymoveA { 
	10% {
		-webkit-transform: rotateX(0deg);
		}
	
	50% {
		-webkit-transform:rotateX(180deg);  
		}
	70%{
		-webkit-transform:rotateX(180deg);  
		}
	100%{
		-webkit-transform:rotateX(0deg);  
		}
}

@-webkit-keyframes mymovebackA { 
	10% {
		-webkit-transform: rotateX(-180deg);
		}
	50%{
		-webkit-transform: rotateX(0deg);  
		}
	70%{
		-webkit-transform: rotateX(0deg);  
		}
	100%{
		-webkit-transform: rotateX(-180deg);  
		}
}

@keyframes mymoveA { 
	10% {
		transform: rotateX(0deg);
		}
	50%{
		transform: rotateX(180deg);  
		}
	70%{
		transform: rotateX(180deg);  
		}
	100%{
		transform: rotateX(0deg);  
		}
}

@keyframes mymovebackA { 
	10% {
		transform: rotateX(-180deg);
		}
	50%{
		transform:rotateX(0deg);  
		}
	70%{
		transform: rotateX(0deg);  
		}
	100%{
		transform:rotateX(-180deg);  
		}
}

/* Y directional movement */
/* Chrome, Safari, Opera */
@-webkit-keyframes mymoveB { 
10% {
	-webkit-transform: rotateY(0deg);
}

50%{
-webkit-transform: rotateY(180deg);  
}
70%{
-webkit-transform:rotateY(180deg);  
}
100%{
-webkit-transform:rotateY(0deg);  
}
}

@-webkit-keyframes mymovebackB { 
10% {
	-webkit-transform: rotateY(-180deg);
}
50%{
-webkit-transform: rotateY(0deg);  
}
70%{
-webkit-transform: rotateY(0deg);  
}
100%{
-webkit-transform:rotateY(-180deg);  
}
}

@keyframes mymoveB { 10% {
	transform: rotateY(0deg);
}
50%{
transform: rotateY(180deg);  
}
70%{
transform:rotateY(180deg);  
}
100%{
transform:rotateY(0deg);  
}
}

@keyframes mymovebackB { 
10% {
	transform: rotateY(-180deg);
}
50%{
transform:rotateY(0deg);  
}
70%{
transform: rotateY(0deg);  
}
100%{
transform:rotateY(-180deg);  
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
	font-size:30px;
	color:#3e6e2c;
}

@media ( max-width : 480px) {  
	#ePramaantext { 
		display: none;
	}
	#ePramaantext small{ 
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
	
	#imageCarousel{
		padding: 0px;
	}
	
	#footerAlign{
		text-align: center;
	}
	#footernavigation{
		text-align: center;
	}
	
	#footerList{
		padding: 5px 0px 0px 0px;
	}
	
	#footerList li{
		display: block;
		content: " ";
	} 
}

@media only screen and (min-width: 601px) {

	#footernavigation li:not(:first-child):before {
	    content: " | ";
	    padding: 0px 3px 0px 3px;
	}
	
	#footerList li{
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




.ministry,.ministry:hover {
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

#imagePwd{
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

#imageBio{
	background-position: -389px -1px; 
	width: 66px;
	height: 85px;
}

#imageLogo{
	background-position: -450px -107px; 
	width: 90px;
	height: 75px;
}

#imageEmblm{

}

.footerRight{
	text-align: right;
}


.mainNav a:link, a:HOVER , a:ACTIVE, a:VISITED   {
  text-decoration:  none;
  } 
  
  .hugeM1 {
  font-size: 25px
  }
  
  <!--  CSS added-->
  
 @media (max-width: 980px) {
    .navbar-header {
        float: none;
    }
    .navbar-left,.navbar-right {
        float: none !important;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }
    .navbar-collapse.collapse {
        display: none!important;
    }
    .navbar-nav {
        float: none!important;
        margin-top: 7.5px;
    }
    .navbar-nav>li {
        float: none;
    }
    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .collapse.in{
        display:block !important;
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
    
    /* style making dropdown access wit hoverable */
    
.dropdown-content li:hover {background-color: #ddd;}

.dropdown:hover .dropdown-menu {display: block;}

.dropdown:hover .dropdown-toggle {}


.goog-tooltip {
    display: none !important;
}
.goog-tooltip:hover {
    display: none !important;
}
.goog-text-highlight {
    background-color: transparent !important;
    border: none !important; 
    box-shadow: none !important;
}


</style>

</head>


<!-- Navigation -->


<body>
<div id="wrapper"  ">
	
	<!--  Dashboard header start -->
	
	<div id="header">

	<nav class="navbar navbar-static-top ep-main-header" style="border: 0px;background-color: #fefefe;" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header pull-left">
				<a class="navbar-brand ep-logo" href="/">
					<img src="resources/images/advlogo.png" alt="ADV Logo"/ > 
				</a>
    				<a class="navbar-brand ministry"  id="goitext"  style="font-size: 20px;  font-weight: bold;font-family: sans-serif;padding-top: 7px; margin-top: 20px; padding-left: 18px;">
                                        <spring:message code="header.adv"></spring:message>
                                </a>
				 <a class="navbar-brand ep-logo"  target="_blank" href="https://www.g20.org/en/" style="margin-top: 15px">
                                        <img src="resources/images/GS20.jpg" alt="GS20 Logo"/>
                                </a>

				
			</div>
			
			<div class="pull-right">				
			   <a class="navbar-brand ministry"  id="goitext" style="font-size: 20px;  font-weight: bold;font-family: sans-serif;padding-top: 7px; margin-top: 10px; padding-left: 18px;">
					<spring:message code="header.heading"></spring:message> <small style="text-align: right;font-size:17px; font-family: sans-serif;padding-top: 0px;font-weight: lighter;"><spring:message code="header.gov"></spring:message></small>
					
				</a>
				
				<a class="navbar-brand goi-logo ministry" target="_blank" href="https://www.meity.gov.in/"> 
					<img src="resources/images/gov_ind6.png" alt="GOI Logo">
				</a>
		 </div>
			
		</div>
	</nav>
	
	
	
	<nav class="navbar navbar-default" role="navigation" style="border-radius:0px;"> 
	 <div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
				</button> 
	</div>
			
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
 				<ul class="nav navbar-nav navbar-left" style="font-family: sans-serif;font-weight:normal; ">
					<li><a href="/"> <svg style="margin-top: 5px" width="22" height="22"  viewBox="0 0 16 16" class="bi bi-house-door" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"  d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                  <path fill-rule="evenodd"  d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                </svg></a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><spring:message code="menu.aboutus" /><b class="caret"></b></a>
						<ul class="dropdown-menu" style="text-transform: none;">
							<li><a href="whatisadv"><spring:message code="nav.whatisadv"></spring:message> </a></li>
						</ul>
					</li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"><spring:message code="menu.services" /> <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="aadhaarValutAsService"><spring:message code="nav.advasservice"></spring:message> </a></li>
							<li><a href="aadhaardatavaultasasolution"><spring:message code="nav.advassolution"></spring:message> </a></li>
						</ul></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> <span class="glyphicon glyphicon-earphone"></span>
							<spring:message code="menu.contactus" /><b class="caret"></b></a>
						<ul class="dropdown-menu">							
							<li><a href="contactus"><spring:message code="nav.contact"></spring:message> </a></li>
							<li><a href="resources"><spring:message code="nav.resources"></spring:message> </a></li>
								
														
						</ul></li>
						
						

						<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> <span class="glyphicon glyphicon-user"></span>
							<spring:message	code="menu.login" /> <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a target="_blank" href="https://advservice.epramaan.gov.in/department/Demo"><spring:message	code="menu.login.department" /> </a></li>
						</ul></li>
					
				
				</ul> 
				
				<div class="pull-right">
				
			        <form class="navbar-form" role="search" style="padding: 0px;margin-top: 0px;margin-bottom: 0px;">
			       <ul class="nav navbar-nav navbar-left" style="font-family: sans-serif;font-weight:normal; text-transform:capitalize;">			  
			       		<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">
			       		<spring:message	code="menu.chooselang" />
			       		 <b class="caret"></b></a>
						<ul class="dropdown-menu">
										<li><a href="#"><spring:message
													code="menu.english" /> </a></li>
										
									</ul></li>	
									
									
					</ul>		
					
					
					<div class="input-group">
				            <input type="text" class="form-control" style="height: 30px;" placeholder="Search" name="q">
				            <div class="input-group-btn">
				                <button class="btn" type="submit" style="height: 30px;background-color : #e47d34;"><i class="glyphicon glyphicon-search" style="color: white;"></i></button>
				            </div>
				        </div>
				        </form>
	    			</div>
			</div>
	</nav>
	<div class="container-fluid"> 
		<hr style=" display: block;  border: 0; border-top: 5px solid #3e76b9; padding: 0; margin-top: 5px;margin-bottom: 5px;">
	</div>
</div>
<!--  dashboard header end -->


<div id="content">

<div class="container-fluid">
	<div class="row row-eq-height">
		<div class="col-md-8 carasouelPadding" id="imageCarousel">
		
			<div id="citizenCarousel" class="carousel slide" data-ride="carousel" >
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>	
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>	
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>
					<li data-target="#citizenCarousel" data-slide-to="0" class=""></li>	
								
					<!-- <li data-target="#citizenCarousel" data-slide-to="2" class=""></li> -->
				</ol>

				<!-- Wrapper for slides -->
				<div class="carousel-inner" role="listbox">
				<div class="item active">						
						<img class="lazy" src="resources/images/m1.jpg" style="width: 1350px; height: 300px;" data-hasqtip="true">
					</div>
					<div class="item ">						
						<img class="lazy" src="resources/images/advcarausal.jpeg" style="width: 1350px; height: 300px;" data-hasqtip="true">
					</div> 
					 <div class="item ">
                                                <img class="lazy" src="resources/images/ADVcrausal.jpg" style="width: 1350px; height: 300px;" data-hasqtip="true">
                                        </div>

					 <div class="item ">
                                                <img class="lazy" src="resources/images/G20.jpg" style="width: 1350px; height: 300px;" data-hasqtip="true">
                                        </div>

					<div class="item ">						
						<img class="lazy" src="resources/images/finalone (1).png" style="width: 1350px; height: 300px;" data-hasqtip="true">
					</div> 
					<div class="item ">						
						<img class="lazy" src="resources/images/advcarousal2.jpeg" style="width: 1350px; height: 300px;" data-hasqtip="true">
					</div> 
					
					
					
				</div>
				<!-- Left and right controls -->
				<a class="left carousel-control" href="#citizenCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a> <a class="right carousel-control" href="#citizenCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>

<div class="col-md-4" id="newsTicker1">
						<div class="panel panel-default">
							<div class="panel-heading">
								<span class="glyphicon glyphicon-flag"></span><b>Latest
									Updates</b>
							</div>
							<div class="panel-body" style="padding-bottom: 5px;">
								<div class="row">
								
								<!-- <marquee class="marq" onmouseover="stop()"
												onmouseout="start()" bgcolor="" direction="left" loop=""
												style="color: blue">
												<a href="https://forms.gle/farpVwKUtNJk6n1s8" target="_blank" style="text-decoration: none">
												Register here for upcoming workshop on 17th March at SETS Chennai.
												</a>
											</marquee> -->
											
									<div class="col-xs-12">
									
										<div class="holder">
											
											<ul id="ticker01">
												<c:forEach var="data" items="${workshopdata}">

													<li style="border-bottom-style: ridge;">${data}</li>

												</c:forEach>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
</div>


<!-- /.container fluid-->
<div class="container-fluid" style="padding-bottom: 10px;">
	<!-- <div class="row"> -->
	<div class="col-md-8" style="padding-right: 0px;">
		<!-- <div class="row"> -->
		<div class="col-md-12" style="padding-left: 0px; padding-right: 0px;">
			<div class="panel panel-default">
				<div class="panel-heading" style="background-image: -webkit-linear-gradient(top, #f0f0f0 0, #f8f8f8 100%); background-image: linear-gradient(to bottom, #f0f0f0 0, #f8f8f8 100%); background-repeat: repeat-x;">
					<b style="color: #3e6e2c;">Aadhaar Data Vault :</b> Unique Identification Authority of India mandates the secure storage of residents Aadhaar numbers in a separate repository known as Aadhaar Data Vault. &nbsp; <a href="description" style="color: #3e76b9">More info</a>
				</div>
			</div>



		</div>
		

 	
 		
		<div class="col-md-4" style="padding-top: 0px; padding-left: 0px;">
		
			<div class="panel" style="-webkit-box-shadow: none; box-shadow: none; border: 2px solid #e47d34;">
				<div class="panel-heading" style="color: #e47d34;">
					<div class="row">
						<div class="col-xs-2">
							<i class="fa fa-line-chart fa-4x"></i>
						</div>
						<div class="col-xs-10 text-right">
							<div id="dashboard" class="shadow">
							<div class="widget-inner loadable" id="c" onclick="location.href='deptLists';" style="cursor: pointer;">
								<div class="widget-inner loadable" id="c"  style="cursor: pointer;">
									<div class="hugeM1" id="dept1"></div>
									<div class="hugeM3">
										<spring:message code="dashboard.statistics.department"></spring:message>
									</div>
								</div>
								</div>
								<div class="widget-inner loadable" id="d" onclick="location.href='deptLists';" style="cursor: pointer;">
								<div class="widget-inner loadable" id="d"  style="cursor: pointer;">
									<div class="hugeM1" id="dept2"></div>
									<div class="hugeM3">
										<spring:message code="dashboard.statistics.department"></spring:message>
									</div>									
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
 	
 
 
 <div class="col-md-4" style="padding-top: 0px; padding-left: 0px;">
			<div class="panel" style="-webkit-box-shadow: none; box-shadow: none; border: 2px solid #d9534f;">
				<div class="panel-heading" style="color: #d9534f;">
					<div class="row">
						<div class="col-xs-2">
							<i class="fa fa-institution fa-4x"></i>
						</div>
						<div class="col-xs-10 text-right">
							<div id="dashboard" class="shadow">
							<div class="widget-inner loadable" id="a" onclick="location.href='deptandServicecount';" style="cursor: pointer;">
								<div class="widget-inner loadable" id="a"  style="cursor: pointer;">
									<div class="hugeM1" id="serv1"></div>
									<div class="hugeM3">
										<spring:message code="dashboard.statistics.service"></spring:message>
									</div>
								</div>
								</div>
							<div class="widget-inner loadable" id="b" onclick="location.href='deptandServicecount';" style="cursor: pointer;">
								<div class="widget-inner loadable" id="b"  style="cursor: pointer;">
									<div class="widget-inner loadable" id="b" style="cursor: pointer;">
										<div class="hugeM1" id="serv2"></div>
										<div class="hugeM3">
											<spring:message code="dashboard.statistics.service"></spring:message>
										</div>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="col-md-4" style="padding-top: 0px; padding-right: 5px; padding-left: 0px;">
			<div class="panel" style="-webkit-box-shadow: none; box-shadow: none; border: 2px solid #3e6e2c;">
				<div class="panel-heading" style="color: #3e6e2c;">
					<div class="row">
						<div class="col-xs-2">
							<i class="fa fa-bar-chart-o fa-4x"></i>
						</div>
						<div class="col-xs-10 text-right">
							<div id="dashboard" class="shadow">
							<div class="widget-inner loadable" id="c" 
							onclick="location.href='depttransactions';" style="cursor: pointer;">
								<div class="loadable" id="c"  style="cursor: pointer;">
									<div class="hugeM1" id="txn1" ></div>
									<div class="hugeM3">
										<spring:message code="dashboard.statistics.transaction"></spring:message>
									</div>
								</div>
								</div>
								<div class="widget-inner loadable" id="d" onclick="location.href='depttransactions';" style="cursor: pointer;">
								<div class="loadable" id="d"  style="cursor: pointer;">
									<div class="hugeM1" id="txn2" ></div>
									<div class="hugeM3">
										<spring:message code="dashboard.statistics.transaction"></spring:message>
									</div>
								</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		<!--  </div> -->
		<!-- </div> -->
	</div>

	
	 <div class="col-md-4 col-sm-12 col-xs-12" >
	  
     
		
		<div class="panel panel-white" style="border: 0; box-shadow: none;">
			<div class="panel-heading" style="padding: 0px 0px 150px 0px;">

				<div class="row">
					<div class="col-xs-12 col-sm-12 text-right">
						<div id="dashboard" class="shadow">
							<div class="loadable" id="c">
								<div class="line2">
								<spring:message code="dashboard.chart.monthly"></spring:message>
								</div>
								<div class="col" >
									<canvas id="myChartformonth" style="width:100%;max-width:450px"></canvas>
								</div>
							</div>
							<div class="loadable" id="d">
								<div class="line2">
								<spring:message code="dashboard.chart.weekly"></spring:message>								
								</div>
									<div class="col" >
									<canvas id="myChartfordays" style="width:100%;max-width:450px"></canvas>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
     
		
		
	</div>
	
	<!-- /.row -->
	</div>



</div>
</div>
</div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/>


  <%@ include file="Chatbot.jsp"%>
  <%@ include file="footer1.jsp"%>  
<script>
		
		jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.04
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = 1;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true);
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;		
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				  jQuery(this).stop();
				},
				function(){
				  var offset = jQuery(this).offset();
				  var residualSpace = offset.top + stripHeight;
				  var residualTime = residualSpace/settings.travelocity;
				  scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $("ul#ticker01").liScroll();
});
	</script>


<script type="text/javascript">
setTimeout(() => {
	  document.location.reload();
	}, 60000);
</script>
 
 
 
<script type="text/javascript">

function digits_count(n) {
	  var count = 0;
	  if (n >= 1) ++count;

	  while (n / 10 >= 1) {
	    n /= 10;
	    ++count;
	  }

	  return count;
	}

function myCallback(response) {
	 result = response;	                 
	  // Do whatever you need with result variable
	  var yValues = result.data;
	  var xValues = result.Labels;	 
		 var maxValue  = Math.max.apply(null, result.data);		
		  var digits  = 1;
		  var multiplier  = 1;
		  digits = digits_count(maxValue);
		  
		  while(digits>1)
			  {
			  multiplier=multiplier*10;
			  digits--;
			  }
		  if(peak<90)
			  {
			  var peak=Math.max.apply(null, result)+200;
			  }
		  //var peak=Math.max.apply(null, result)+multiplier;
		
	  new Chart("myChartformonth", {
	    type: "line",
	    data: {
	      labels: xValues,
	      datasets: [{
	        fill: false,
	        lineTension: 0,
	        backgroundColor: "rgba(255, 255, 255,1.0)",
	       //borderColor: "rgba(138, 158, 138,1.0)",
	        borderColor: "rgb(255, 99, 132)",
	        data: yValues
	       
	      }]
	    },
	    options: {
	      legend: {display: false},
	      scales: {
	        yAxes: 
					[ {
						
						label:yValues,
						ticks: {
							//stepSize:maxValue/4,
						    callback: function(label, index, labels) {
						       // return label/1000+'k';
						    	return Intl.NumberFormat().format(label);
						    }
						}
					} ],
				}
			}
		});
	}

	$.ajax({
		type : "GET",
		url : "Chartformonth",
		datatype : "json",
		success : myCallback,
	});
</script>
 
  
<script type="text/javascript">

function digits_count(n) {
	  var count = 0;
	  if (n >= 1) ++count;
	  while (n / 10 >= 1) {
	    n /= 10;
	    ++count;
	  }
	  return count;
	}
	


function myCallback(response) {	
	 result = response;	            
	  // Do whatever you need with result variable
	  var yValues = result.data;
	  var xValues = result.Labels;	  
	  // var peak=Math.max.apply(null, result)+100;
		 //console.log(Math.max.apply(null, result)); 
		 var maxValue  = Math.max.apply(null, result);		 
		  var digits  = 1;
		  var multiplier  = 1;
		  digits = digits_count(maxValue);
		  
		  while(digits>1)
			  {
			  multiplier=multiplier*10;
			  digits--;
			  }
		  if(peak<90)
			  {
			  var peak=Math.max.apply(null, result)+200;
			  }
		  //var peak=Math.max.apply(null, result)+multiplier;

	  new Chart("myChartfordays", {
	    type: "line",
	    data: {
	      labels: xValues,
	      datasets: [{
	        fill: false,
	        lineTension: 0,
	        backgroundColor: "rgba(255, 255, 255,1.0)",
	       //borderColor: "rgba(138, 158, 138,1.0)",
	        borderColor: "rgba(255, 140, 0)",
	        data: yValues
	       
	      }]
	    },
	    options: {
	      legend: {display: false},
	      scales: {
	        yAxes: [	        	
	        	 
					{
						label:yValues,
						ticks: {
						    callback: function(label, index, labels) {
						       // return label/1000+'k';						      
						    	return Intl.NumberFormat().format(label);
						    }
						}
					}

					],
				}
			}
		});
	}

	$.ajax({
		type : "GET",
		url : "chartfordays",
		datatype : "json",
		success : myCallback,
	});
</script>
 
 
 


<script type="text/javascript">

/* code for newstcikers  */
    $(function () {
    	
    	$(".video").click(function () {
            var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC;
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.close').click(function () {
                $(theModal + ' iframe').attr('src', '');
            });
         });

    	$('.pop').on('click', function() {
    		$('.imagepreview').attr('src', $(this).find('img').attr('src'));
    		$('#imagemodal').modal('show');   
    	});
    	
         $("#demo3").bootstrapNews({
            newsPerPage: 4,
            autoplay: true,
            onToDo: function () {
                //console.log(this);
            }
        }); 
        
    	 
      
    });
</script>

<script>
$(document).ready(function() {
    // Attach a click event handler to the button
   
        // Make an AJAX request
        $.ajax({
            url: "https://advservice.epramaan.gov.in/PortalDataIgnite/ignite/counts", // Replace with your API endpoint
            type: "GET", // or "POST" or other HTTP methods
            dataType: "text", // The expected data type of the response
            success: function(data) {
                // Handle successful response
               /*  $("#result").html(JSON.stringify(data)); */
               const arrCounts = data.split(',');
            	$('#dept1').text(arrCounts[1]); 
            	$('#dept2').text(arrCounts[1]);
            	$('#serv1').text(arrCounts[2]);
		    	$('#serv2').text(arrCounts[2]); 
		    	$('#txn1').text(arrCounts[0]);
			    $('#txn2').text(arrCounts[0]); 
            },
            error: function(xhr, status, error) {
                // Handle error              
                console.error("Error:", status, error);
            }
        });
   
});
</script>



 <script type="text/javascript">
 $(document).ready(function() {
	    $('.navbar a.dropdown-toggle').on('click', function(e) {
	        var $el = $(this);
	        var $parent = $(this).offsetParent(".dropdown-menu");
	        $(this).parent("li").toggleClass('open');

	        if(!$parent.parent().hasClass('nav')) {
	            $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
	        }
	        $('.nav li.open').not($(this).parents("li")).removeClass("open");
	        return false;
	    });
	    
	   // initialize();
	});
 
 

 
				/*  $.ajax({
					    type: 'GET',
					    url: 'count',
					    dataType: 'json',
					    success: function(data) { 
					  
					    	$('#dept1').text(data); 
					    	$('#dept2').text(data);
					    }				 
				 });
				 
				 
				 
				 $.ajax({
					    type: 'GET',
					    url: 'count',
					    dataType: 'json',
					    success: function(data) {					    	
					    }			 
				 });
				 
				 
				 
				 $.ajax({
					    type: 'GET',
					    url: 'totalaccount',
					    dataType: 'json',
					    success: function(data) { 					   
					    	$('#serv1').text(data);
					    	$('#serv2').text(data); 
					    }				 
				 });
				 
				 
				
				 $.ajax({
					    type: 'GET',
					    url: 'totaltranscount',
					    dataType: 'json',
					    success: function(data) { 					    	
					        $('#txn1').text(data);
					        $('#txn2').text(data); 
					    }				 
				 }); */
				
			

		function onClick(e) {
			var month =  monthData[parseInt(e.dataPoint.x)].month;
			document.getElementById('monthData').value = month;
			document.getElementById("formmonth").submit();
			
		}

		
		$(document).ready(
				function() {

					$(document).delegate('*[data-toggle="lightbox"]', 'click',
							function(event) {
								event.preventDefault();
								$(this).ekkoLightbox();
					});
				});
		
			function refreshcaptcha() {
		       var image = document.getElementById("captchaImage");
		       image.setAttribute("src", "captcha.png?"+(new Date()).getTime());
		   }
</script>





<span style="position: absolute; left: 0px; top: -20000px; padding: 0px; margin: 0px; border: none; white-space: pre; line-height: normal; font-family: monospace, &quot;Courier New&quot;, Courier; font-size: 10px; font-weight: bold; display: none;">Mpgyi</span></body></html>
