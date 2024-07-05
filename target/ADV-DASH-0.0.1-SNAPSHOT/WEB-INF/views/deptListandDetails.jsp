<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="header.jsp"%>	

<div class="container text-content">
<div class="row" style=" height: auto;  ">
<div class="col-xs-offset-3 col-xs-6"> 
<br/>
	<table class="wrapper">	
					<tr data-toggle="collapse" data-target="#subheade">
						<th colspan="3"
							style="text-align: center; padding-top: 5px; padding-bottom: 5px; font-size: 13px">
							Department List</th>
					</tr>					
					<tbody id="subheader" class="collaps">
					<c:set var="count" value="0" scope="page" />
					
					<c:forEach items="${deptdata1}" var="dept" varStatus="i">
						<c:set var="count" value="${count=0 }"/>							
								<tr>
									<td class="showhr" style="width:35px"><img src="resources/images/plus.png"
										data-swap="resources/images/minus.png"></td>
									<td colspan="2"  style="font-size: 13px; color: #990000; font:bolder ;	font-family: Verdana; text-align: left;"> &nbsp;${dept.key}</td>
								</tr>
								
	   							<tr class="childrows" style="font-size: 13px; width:30px">
									<th>#</th>
									<th>Services</th>
									<th>Transactions</th>
								</tr>
								
								<c:forEach items="${dept.value}" var="entry1">
								<c:set var="count" value="${count + 1 }"/>
								<tr class="childrows" style="font-size: 13px;font-family: Verdana; ">
									<td><c:out value="${count}" /></td>
									<td style="text-align: left;"> &nbsp;<c:out value="${entry1.key}" /></td>
									<td style="text-align: right; " > <c:out value="${entry1.value}" /> &nbsp;</td>
								</tr>
								</c:forEach>											
					</c:forEach>					
					</tbody>
				</table>
				<br> <br/><br/><br/><br/><br/>				
				<br>				
	 </div>	 
	 </div>
	 </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
	 

<%@ include file="footer1.jsp"%>
	<script>
		$(document).ready(
				function() {
					$(".showhr").click(
							function() {
								$(this).closest('tr').nextUntil(
										"tr:has(.showhr)").toggle("fast",
										function() {
										});
								//$(this).find('img').toggle();
								var _this = $(this).find('img');
								var current = _this.attr("src");
								var swap = _this.attr("data-swap");
								_this.attr('src', swap).attr("data-swap",current);
							});
				});
	</script>
	
	
<script type="text/javascript">
setTimeout(() => {
	  document.location.reload();
	}, 60000);
</script>