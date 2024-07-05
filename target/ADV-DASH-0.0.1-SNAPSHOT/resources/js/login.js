		$(document)
				.ready(
						function() {
							jQuery.validator
									.addMethod(
											"validpass",
											function(value, element) {
												if (/^(?=.*[0-9])(?=.*[!@#$%^&*_\(\)])[a-zA-Z0-9!@#$%^&*_\(\)]{8,12}$/.test(value)) {
													return true;
												} else {
													return false;
												}
												;
											},
											"Your password must be at least 8 characters, must contain letters, digits and special characters.");

							$("#loginform")
									.validate(
											{
												rules : {
													password : {
														required : true,

													},
													username : {
														required : true,
													},
													captcha : {
														required : false,
													},

												},
												messages : {
													username : {
														required : "Username cannot be blank!",
													},
													password : {
														required : "Password cannot be blank!",
													},
													captcha : {
														required : "Captcha cannot be blank!",
													},

												},
												errorElement : "span",
												errorPlacement : function(
														error, element) {
													// Add the `help-block` class to the error element
													console.log(error + " "
															+ element);
													//error.addClass( "help-block" );

													if (element.prop("type") === "checkbox") {
														error
																.insertAfter(element
																		.parent("label"));
													} else {
														error
																.insertAfter(element);
													}
												},

											});

						});
