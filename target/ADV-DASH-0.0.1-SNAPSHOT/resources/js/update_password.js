	$( document ).ready( function () {
		
		jQuery.validator.addMethod("validpass", function(value, element) 
				{
			if (/^(?=.*[0-9])(?=.*[!@#$%^&*_\(\)])[a-zA-Z0-9!@#$%^&*_\(\)]{8,12}$/.test(value)) {
		        return true;  
		    } else {
		        return false;  
		    };
		}, "Your password must be at least 8 characters, must contain letters, digits and special characters.");
		
	/*	
		jQuery.validator.addMethod("notEqualTo",
				function(value, element, param) {
				    var notEqual = true;
				    value = $.trim(value);
				    for (i = 0; i < param.length; i++) {
				        if (value == $.trim($(param[i]).val())) { notEqual = false; }
				    }
				    return this.optional(element) || notEqual;
				},
				"New Password should not be same as old password."
				);
*/		
		 $.validator.addMethod("notEqualTo", function(value, element, param) {
		       return this.optional(element) || value != $(param).val();
		 }, 'Old password and new password cannot be same.');

		
		$( "#updatepassword" ).validate( {
			rules: {
				oldPassword:{ 
					required: true,
				},		
				newPassword:{ 
					required: true,
					minlength:6,
					validpass:true,
					notEqualTo:'#oldPassword',
					
				},	
				confirmPassword:{ 
					required: true,
					equalTo: "#newPassword"
				}	
			},
			messages: {
				oldPassword: {
					required:"Old Password cannot be blank!"
				},
				newPassword: {
					required:"New Password cannot be blank!",
					minlength:"Minimum Eight characters required!",
				},
				confirmPassword: {
					required:"Confirm Password cannot be blank!",
					equalTo: "New Password and Confirm password did not match!"
				}
			},
			errorElement: "span",
			errorPlacement: function ( error, element ) {
				// Add the `help-block` class to the error element
				console.log(error+" "+element );
				//error.addClass( "help-block" );

				if ( element.prop( "type" ) === "checkbox" ) {
					error.insertAfter( element.parent( "label" ) );
				} else {
					error.insertAfter( element );
				}
			},
			highlight: function ( element, errorClass, validClass ) {
				$( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
			},
			unhighlight: function (element, errorClass, validClass) {
				$( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
			}
		} );
		
		
	});
	

	$("input").focus(function(){
		 //  alert("asdad");
			 $("#e1").hide();
			 $("#e2").hide();
		});

