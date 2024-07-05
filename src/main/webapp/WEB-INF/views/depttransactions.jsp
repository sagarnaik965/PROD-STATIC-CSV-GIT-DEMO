<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Header included here -->
<%@ include file="header.jsp"%>
<!--    Table starts here -->
<div class="tables">
	<div class="container ">
		<div class="col-md-2"></div>
		<div class="col-md-8" style="align-self: center; margin: 10px;">
			<table id="data" class="table table-hover table-bordered" style="font-family: Verdana;">
				<caption>
					<h4>
						<b>Transaction Details</b>
					</h4>
				</caption>
				<thead class="table-warning">
					<tr>
						<th
							style="background-color: #3e76b9; color: white; text-align: center; font-family: Verdana; font-size: 13px;"
							scope="col"><b>Department Name</b></th>
						<th
							style="background-color: #3e76b9; color: white; text-align: center; font-family: Verdana; font-size: 13px;">
							<b>Total Transactions</b>
						</th>
					</tr>
				</thead>

				<tbody>
					<c:forEach items="${deptdata}" var="entry">

						<tr style="text-align: center;">
							<td class="tdt"
								style="padding-left: 10px; text-align:left; padding: 5px; padding-left:20px ; font-family: Verdana;  font-size: 13px;">
								<a
								style="color: black;  text-decoration: none;cursor: pointer; font-family: Verdana; font-size: 13px;"
								<%-- href="/deptservicewisetransaction?deptName=${entry.key} --%>
								onclick="location.href='deptservicewisetransaction?deptName=${entry.key}&deptCode=${entry.value}'
								">&nbsp;&nbsp;
									${entry.key}</a>
							</td>
							<td
								style="padding: 3px; text-align: right; font-family: Verdana; font-size: 13px;">
								${entry.value}&nbsp;&nbsp;&nbsp;&nbsp;</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
			<br></br><br></br><br></br>
		</div>
		<div class="col-md-2"></div>
	</div>
</div>
<!--    Table ends here -->
<!-- Footer included here -->
<%@ include file="footer1.jsp"%>

<script type="text/javascript">
setTimeout(() => {
	  document.location.reload();
	}, 60000);
</script>


<script type="text/javascript">
	
	$(document).ready(function(){
	    $('#data').after('<div id="nav" style="font-size: 14px;"></div>');
	    var rowsShown = 8;
	    var rowsTotal = $('#data tbody tr').length;
	    var numPages = rowsTotal/rowsShown;
	    for(i = 0;i < numPages;i++) {
	        var pageNum = i + 1;
	        $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
	    }
	    $('#data tbody tr').hide();
	    $('#data tbody tr').slice(0, rowsShown).show();
	    $('#nav a:first').addClass('active');
	    $('#nav a').bind('click', function(){

	        $('#nav a').removeClass('active');
	        $(this).addClass('active');
	        var currPage = $(this).attr('rel');
	        var startItem = currPage * rowsShown;
	        var endItem = startItem + rowsShown;
	        $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
	        css('display','table-row').animate({opacity:1}, 300);
	    });
	});
	
	</script>