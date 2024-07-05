	$(document).ready(function() {

		jQuery.validator.addMethod("alphabetonly", function(value, element) {
			if (/(^([a-zA-Z *]){3,60}$)/.test(value)) {
				return true; //
			} else if (/\S/.test(value)) {
				return true;

			} else {
				return false;
			}
			;
		}, "Only alphabets allowed");

		jQuery.validator.addMethod("namevalidation", function(value, element) {
			if (/^[a-zA-Z ]{5,30}$/.test(value)) {
				return true; //(^([a-zA-Z *]){5,30}$) 
			} else {
				return false;
			}
			;
		}, "Special Characters and numericals not allowed");
		
		
		jQuery.validator.addMethod("alphabetsOnly", function(value, element) {
			
			if (/^[a-zA-Z\s]+$/.test(value)) {
				return true; //(^([a-zA-Z *]){5,30}$) 
			} else {
				return false;
			}
			;
		}, "Special Characters and numericals not allowed");
		
		jQuery.validator.addMethod("digitsOnly", function(value, element) {
			
			if (/^[0-9]+$/.test(value)) {
				return true; //(^([a-zA-Z *]){5,30}$) 
			} else {
				return false;
			}
			;
		}, "Only Digits allowed");
		
		jQuery.validator
		.addMethod("alphanumericStartWithAlpha",
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
		
		jQuery.validator.addMethod("blankvalidation", function(value, element) {
			if (/\S/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Multiple blank space not allowed");
		jQuery.validator.addMethod("namenumericals", function(value, element) {
			if (/\S/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Multiple blank space not allowed");
		
		jQuery.validator
		.addMethod("deignationvalidation",
				function(value, element) {
					if (/^([a-zA-Z0-9 ]){3,12}$/
							.test(value)) {
						return true;
					} else {
						return false;
					}
					;
				},
				"Enter a valid designation!,should start with alphabet and special characters  are not allowed");
		
		
		jQuery.validator.addMethod("landLineNumber", function(value, element) {
			if (/^[0-9]{10,11}$/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Enter Valid Office/Landline number with STD code");
		jQuery.validator.addMethod("mobileNumber", function(value, element) {
			if (/^[6-9][0-9]{9}$/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Enter Valid mobile number without +91 !");
		
		jQuery.validator.addMethod("cityVal", function(value, element) {
			if (/(^([a-zA-Z ]){3,50}$)/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Enter Valid city name number and special character not allowed!");
		
		jQuery.validator.addMethod("pincodeVal", function(value, element) {
			if (/(^[0-9][0-9]{6}$)/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Enter Valid pin code number without blank space,numbers,special characters!");
		
		jQuery.validator.addMethod("addressVal", function(value, element) {
			if (/(^([a-zA-Z0-9-;,@/ ]){5,120}$)/.test(value)) {
				return true;
			} else {
				return false;
			}
			;
		}, "Address line should be 5 to 120 characters,special character -;,@ / are allowed.");
		
		jQuery.validator.addMethod("namevalidation", function(value, element) {
			if (/(^([a-zA-Z *]){5,30}$)/.test(value)) {
				return true; //(^([a-zA-Z *]){5,30}$) 
			} else {
				return false;
			}
			;
		}, "Special Characters and numericals not allowed");
		
		$("#updateprofile").validate({
			rules : {

				pincode : {
					required : true,
					blankvalidation : true,
					minlength:6,
					maxlength:6,
				},
				 cd_designation:{
					required: true,
					blankvalidation:true,
					minlength: 3,
					maxlength: 100,
					deignationvalidation:true,
					
				}, 
				addressLine : {
					required : true,
					blankvalidation : true,
					addressVal:true,
					maxlength: 120,
				},
				cd_phone : {
					required : true,
					blankvalidation : true,
					landLineNumber:true,
				},
				cd_mobile : {
					required : true,
					blankvalidation : true,
					minlength: 10,
					maxlength: 10,
					mobileNumber:true,

				},
				cd_name : {
					required : true,
					blankvalidation:true,
					minlength: 5,
					maxlength: 30,
					namevalidation: true,
				},
				city : {
					required : true,
					blankvalidation : true,
					minlength:3,
					maxlength:50,
					cityVal:true,
				},

			},
			messages : {
				cd_name : {
					required : "Name cannot be blank!",
					minlength:"Name Should be min 5 characters!",
					maxlength:"Name Should be max 30 characters!",
					namevalidation:"Special Characters and numericals not allowed",
				},
				cd_designation : {
					required : "Designation cannot be blank!",
					alphanumericStartWithAlpha:"Designation Should not contains only numbers!",
					minlength:"Designation Should be min 3 characters!",
					maxlength: "Designation Should be max 12 characters!",
					deignationvalidation:"Enter a valid designation!,should start with alphabet and special characters  are not allowed",
				},
				cd_mobile : {
					required : "Mobile number cannot be blank!",
					minlength:"min length should be 10!",
					maxlength:"max length should be 10!",
					mobileNumber:"Enter Valid mobile number without +91 !",
				},
				city : {
					required : "City name cannot be blank!",
					minlength:"City name should be min 3 Characters!",
					maxlength:"City name should be max 500 Characters!",
					cityVal:"Enter Valid city name number and special character not allowed!",
				},
				cd_phone : {
					required : "Phone number cannot be blank!",
					landLineNumber:"Enter Valid Office/Landline number with STD code"
				},
				addressLine : {
					required : "Address cannot be blank!",
					maxlength: "Address Line should be max 120 Characters!",
					addressVal:"Address line should be 5 to 120 characters,special character -;,@ / are allowed.",

				},
				pincode : {
					required : "Pincode cannot be blank!",
					minlength:"min length should be 6!",
					maxlength:"max length should be 6!",
				}
			},
			errorElement : "span",
			errorPlacement : function(error, element) {
				console.log(error + " " + element);

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("label"));
				} else {
					error.insertAfter(element);
				}
			},

		});
	});

	$("input").focus(function() {
		$("#e1").hide();
		$("#e2").hide();
	});
