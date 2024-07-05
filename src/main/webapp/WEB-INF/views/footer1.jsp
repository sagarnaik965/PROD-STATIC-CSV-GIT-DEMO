<!DOCTYPE html>
<%@page import="org.springframework.web.filter.ShallowEtagHeaderFilter"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<html >
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
	href="resources/images/advlogo2.ico" />

<title>Aadhaar Data Vault</title>

</head>








<div id="footer"  style="position: fixed;bottom: 0px; width: 100%;"> 
<div class="container-fluid">
	
		
		<div class="row footer" style="padding-top: 5px;">
			<div class="col-md-3" id="footerAlign" style="height: 40px;">
				<a href="https://www.cdac.in/" target="_blank">
				<img class="img-rounded" id="imageCd" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" align="left">
				</a>
					

			</div>
			
		
			<div id="footernavigation" class="col-md-7 text-center" style="padding-top:12px;">

				<ul id="footerList" style="margin-bottom: 0px; font-size: 13px"> 
					<li onclick="location.href='sitemap';" style="cursor: pointer;"><spring:message code="footer.sitemap"></spring:message></li>
					<li onclick="location.href='help';" style="cursor: pointer;"><spring:message code="footer.help"></spring:message></li>
					<li onclick="location.href='disclaimer';" style="cursor: pointer;"><spring:message code="footer.disclaimer"></spring:message></li>
					<li onclick="location.href='copyright';" style="cursor: pointer;"><spring:message code="footer.copyright"></spring:message></li>
					<li onclick="location.href='hyperlinking';" style="cursor: pointer;"><spring:message code="footer.hyperlink"></spring:message></li>
					<li onclick="location.href='privacy';" style="cursor: pointer;"><spring:message code="footer.privacy"></spring:message></li>
					<li onclick="location.href='terms';" style="cursor: pointer;"><spring:message code="footer.terms"></spring:message></li>
				</ul>

			</div>
			
				<!-- Footer -->
			<div class="col-md-2 footerRight" style="padding-top:7px;" id="footerAlign">

				<ul class="list-inline" style="margin-bottom: 0px;">
					<li style="padding-bottom: 0px;"><a href="https://www.facebook.com/ePramaan" target="_blank"><img id="imageFB" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></a></li>
					<li style="padding-bottom: 0px;"><a href="https://www.linkedin.com/in/epramaan-c-dac-102713252/" target="_blank"><img id="imageLn" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></a></li>
					<li style="padding-bottom: 0px;"><a href="https://twitter.com/epramaan" target="_blank"><img id="imageTw" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"></a></li>
				</ul>
				


			</div>
		
		</div>
		<div class="row footer" style="font-size: 10px">
			<hr style="margin-top: 5px; margin-bottom: 5px;">
			<div class="col-md-3 text-left" id="footerAlign">
			<!-- Visitors: <span id="visited">2431162</span>  -->
			</div>
			
			<div class="col-md-6 text-center" id="footerAlign">
			<spring:message code="footer.copyrightinfo"></spring:message>
				
			</div>
			<div class="col-md-3 text-right" id="footerAlign">
				<!-- Last updated on : 23/03/2017 -->
			</div>
			
		</div>
		
		<div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">              
		      <div class="modal-body">
		      	<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
		        <img src="" class="imagepreview" style="width: 100%;">
		      </div>
		    </div>
		  </div>
		</div>
		
		
		<div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		    <div class="modal-dialog">
		      <div class="modal-content">
		        <div class="modal-body">
		          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
		          <iframe width="100%" height="350" src="" frameborder="0" allowfullscreen=""></iframe>
		        </div>
		      </div>
    </div>
  </div>
		
	</div>
	</div>
	</html>
	
