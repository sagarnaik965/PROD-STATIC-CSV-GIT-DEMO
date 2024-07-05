<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
<title>Aadhaar Data vault</title>
</head>


<%@ include file="header.jsp"%>

<body>
 

	<div class="container" style="margin-left: 0px; margin-top: 20px">
		<div class="col-md-3"></div>
		<div class="col-md-6" ">


			<h3> Form</h3>

			<form method="POST" action="/Mail">
				<div class="form-group">
					<label for="exampleInputEmail1">Email address</label> <input
						type="email" class="form-control" id="exampleInputEmail1"
						placeholder="Enter Email" name="uemail">
				</div>
				<div class="form-group">
					<label for="exampleInputdetails">WorkShop details</label> <input
						type="text" class="form-control" id="exampleInputdetails"
						placeholder="Workshop details" name="workshop">
				</div>

				<div class="form-group">
					<label for="exampleInputdate">Date </label> <input type="date"
						class="form-control" id="exampleInputdate" placeholder="Date"
						name="detail">
				</div>

				<button type="submit" class="btn btn-default">Submit</button>
			</form>

		</div>
		<div class="col-md-3"></div>
	</div>


</body>
<%@ include file="footer1.jsp"%>





</html>