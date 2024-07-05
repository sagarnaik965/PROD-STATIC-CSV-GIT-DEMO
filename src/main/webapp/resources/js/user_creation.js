	$(document)
			.ready(
					function() {

						jQuery.validator.addMethod("validemail", function(
								value, element) {
							//^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@" + "(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$
							if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
									.test(value)) {
								return true;
							} else {
								return false;
							}
							;
						}, "Invalid Email-Id");
						jQuery.validator
								.addMethod("alphabet",
										function(value, element) {
											if (/^[a-zA-Z]+[a-zA-Z .0-9]+$/
													.test(value)) {
												return true;
											} else {
												return false;
											}
											;
										},
										"Only alphanumerics are allowed, should start with alphabets");

						$("#adduser")
								.validate(
										{
											rules : {
												deptName : {
													required : true,
													alphabet : true,
													maxlength : 30,
													minlength : 5
												},
												email : {
													required : true,
													validemail : true

												},

											},
											messages : {
												deptName : {
													required : "Department name cannot be blank!",
													minlength : "Minimum 5 characters required!",
													maxlength : "Maximum 30 characters allowed!"
												},
												email : {
													required : "e-mail Id cannot be blank!",
													email : "Enter a valid Email-Id!"
												},
											},
											errorElement : "span",
											errorPlacement : function(error,
													element) {
												// Add the `help-block` class to the error element
												console.log(error + " "
														+ element);
												//error.addClass( "help-block" );

												if (element.prop("type") === "checkbox") {
													error.insertAfter(element
															.parent("label"));
												} else {
													error.insertAfter(element);
												}
											},
											highlight : function(element,
													errorClass, validClass) {
												$(element).parents(".col-sm-5")
														.addClass("has-error")
														.removeClass(
																"has-success");
											},
											unhighlight : function(element,
													errorClass, validClass) {
												$(element)
														.parents(".col-sm-5")
														.addClass("has-success")
														.removeClass(
																"has-error");
											}
										});
					});

	$("input").focus(function() {
		//  alert("asdad");
		$("#e1").hide();
		$("#e2").hide();
	});
