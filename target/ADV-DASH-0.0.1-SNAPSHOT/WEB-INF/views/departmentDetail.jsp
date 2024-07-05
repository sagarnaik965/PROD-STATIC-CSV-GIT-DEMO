 <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html lang="en">


<!-- Navigation -->
<body>
	<div id="wrapper">
		<!--  Dashboard header start -->
		<%@ include file="header.jsp"%>
		<!--  dashboard header end -->

		<!--    Table starts here -->
		<div class="container">
			<div class="col-md-3"></div>
			<div class="col-md-6" style="align-self: center; margin: 10px">
				<table id="data" class="table table-hover table-bordered"
					style="width: 500px;font-family: Verdana;">
					<caption>
						<h4>
							<b>Services Details</b>
						</h4>
					</caption>
					<thead class="table-warning">
						<tr>
							<th rowspan="2"
								style="background-color: #3e76b9; color: white; text-align: left; text-transform: capitalize; font-family: Verdana; font-size: 13px;"
								scope="col">&nbsp;Department Name &nbsp; ::<strong
								style="text-shadow: 2px 1px black; font-family: Verdana;font-size: 14px;">&nbsp;${deptname}</strong>
							</th>
						</tr>
					</thead>
					<tbody>
						<c:forEach items="${DeptandService}" var="entry">
							<tr>
								<%-- <td
									style="padding: 3px; text-align: left; text-transform: uppercase; font-family: Verdana; font-size: 13px;">&nbsp;&nbsp;${entry.value.getApp_name()}</td> --%>
							<td
									style="padding: 3px; text-align: left; text-transform: uppercase; font-family: Verdana; font-size: 13px;">&nbsp;&nbsp;${entry}</td>
							
							</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<div class="col-md-3"></div>
		</div>
		<!--    Table ends here -->
	</div>
	<!-- Footer included here -->
	<%@ include file="footer1.jsp"%>

	<script		src="/resources/js/jquery-3.5.1.min.js;epssid=EC494A6CE0856C5D78045C730DEAE074"></script>
	<script src="resources/js/jquery.bootstrap.newsbox.min.js"		type="text/javascript"></script>
	<script type="text/javascript" src="resources/js/jquery.lazy.min.js"></script>
	<!-- <script src="resources/js/bootstrap.min.js"></script> -->
	<!-- <script src="resources/js/jquery.canvasjs.min.js"></script> -->
	
	<script type="text/javascript">
setTimeout(() => {
	  document.location.reload();
	}, 30000);
</script>


	<script type="text/javascript">
		$(document)
				.ready(
						function() {
							$('#data')
									.after(
											'<div id="nav" style="font-size: 14px;"></div>');
							var rowsShown = 8;
							var rowsTotal = $('#data tbody tr').length;
							var numPages = rowsTotal / rowsShown;
							for (i = 0; i < numPages; i++) {
								var pageNum = i + 1;
								$('#nav').append(
										'<a href="#" rel="'+i+'">' + pageNum
												+ '</a> ');
							}
							$('#data tbody tr').hide();
							$('#data tbody tr').slice(0, rowsShown).show();
							$('#nav a:first').addClass('active');
							$('#nav a').bind(
									'click',
									function() {

										$('#nav a').removeClass('active');
										$(this).addClass('active');
										var currPage = $(this).attr('rel');
										var startItem = currPage * rowsShown;
										var endItem = startItem + rowsShown;
										$('#data tbody tr').css('opacity',
												'0.0').hide().slice(startItem,
												endItem).css('display',
												'table-row').animate({
											opacity : 1
										}, 300);
									});
						});
	</script>
</body>
</html>