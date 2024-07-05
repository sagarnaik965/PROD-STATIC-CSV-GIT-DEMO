<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="header.jsp"%>
<style>
.firstNode {
    /* display: list-item;
    text-align: -webkit-match-parent; */
    padding-left: 25px;
}
</style>	
 
	
	<div class="container text-content">
	<div class="row">
		<div class="col-md-8 col-md-offset-3" style="font-size: 15px;">
			<div class="row">
				<div class="col-md-8">
				<h3 class="headerColor" style="text-align: center;">Sitemap</h3>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<ul>
			        	<li><a href="dashboard">Home</a></li>
			        	<li><a href="#">About Us</a>
							<ul class="firstNode">
								<li><a href="whatisadv">Aadhaar Data Vault (ADV)</a> </li>
							</ul>
						</li>
						<li><a href="#">Services</a>
							<ul class="firstNode">
								<li><a href="aadhaarValutAsService">Aadhaar Data Vault as a Service</a></li>
							<li><a href="aadhaardatavaultasasolution">Aadhaar Data Vault as a Solution</a></li>
							</ul>
						</li>
					</ul>
				</div>
				
				
				<div class="col-md-6">
					<ul>
			        	<li><a href="#">Contact Us</a>
							<ul class="firstNode">
								<li><a href="contactus">Contacts</a> </li>
								<li><a href="resources">Resources</a> </li>
								
							</ul>
						</li>
						<li><a href="#">Login</a>
							<ul class="firstNode">
								
								<li><a href="dashboard" target="_blank">Department</a> </li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</div>
 <%@ include file="footer1.jsp"%>

	