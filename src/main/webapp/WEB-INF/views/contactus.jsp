<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="header.jsp"%>	
	
	<div class="container text-content">

			<div class="row">
				<div class="col-md-5 col-md-offset-1">
					<h3 class="headerColor"><spring:message code="contactus.cdacaddr1"/></h3>
					<p><spring:message code="contactus.cdacaddr2"/><br/>
					<spring:message code="contactus.cdacaddr3"/></p>
					
					<h3 class="headerColor"><spring:message code="contactus.contactperson"/></h3>
					<%-- <h4 class="headerColor"><spring:message code="contactus.advteam"/></h4> --%>
					<h4 class="headerColor">Aadhaar Data Vault Team</h4>
					<p>adv&#64;cdac&#46;in</p>

					<h4 class="headerColor"><spring:message code="contactus.jd"/></h4>
					<p>	<spring:message code="contactus.jd.desig"/>
						<spring:message code="contactus.jd.desig1"/><br/>
					</p>
				</div>
				
				<div class="col-md-6"  style="padding-left: 100px">
									<h3 class="headerColor"><spring:message code="contactus.meity.name1"/></h3>
					<p>	<spring:message code="contactus.meity.addr1"/><br/>
						<spring:message code="contactus.meity.addr2"/><br/>
						<spring:message code="contactus.meity.addr3"/> 
					</p>
 
					<h3 class="headerColor"><spring:message code="contactus.contactperson"/></h3>
					<h4 class="headerColor"><spring:message code="contactus.meity.director.name"/></h4>
					<p>	<spring:message code="contactus.meity.director.desig"/><br/>
					</p>	
				
				</div>
		</div>
	</div>

<%@ include file="footer1.jsp"%>


