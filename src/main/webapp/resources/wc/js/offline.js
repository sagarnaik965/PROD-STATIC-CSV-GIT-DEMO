/*// Onile Offline radio button
function showOnline() {

	document.getElementById('online').style.display = 'block';
	document.getElementById('offlinesection').style.display = 'none';

}
function showOffline() {

	document.getElementById('offlinesection').style.display = 'block';
	document.getElementById('online').style.display = 'none';
}

function showauth() {

	document.getElementById('authdropdown').style.display = 'block';
	document.getElementById('kycdropdown').style.display = 'none';

}

function showkyc() {

	document.getElementById('kycdropdown').style.display = 'block';
	document.getElementById('authdropdown').style.display = 'none';
}

// New Drop down
// Reference: https://jsfiddle.net/fwv18zo1/
// Reference: https://jsfiddle.net/fwv18zo1/
// Reference: https://jsfiddle.net/fwv18zo1/

// Reference: https://jsfiddle.net/fwv18zo1/
// var $kycselect1 = $('#kycselect1'), $kycselect2 = $('#kycselect2'), $options
// = $kycselect2
// .find('option');
//
// $kycselect1.on('change', function() {
// $kycselect2.html($options.filter('[value="' + this.value + '"]'));
// }).trigger('change');

// Select auth and kyc
function auth() {

	document.getElementById('allonlinedropdown').style.display = 'block';
	document.getElementById('allofflinedropdown').style.display = 'none';

}
function show2() {

	document.getElementById('allofflinedropdown').style.display = 'block';
	document.getElementById('allonlinedropdown').style.display = 'none';
}

var mealsByCategory = {
	DEMOGRAPHIC : [ "PERSONAL INFORMATION", "PERSONAL ADDRESS",
			"PERSONAL FULL ADDRESS" ],
	OTP : [ "OTP" ],
	BIOMETRIC : [ "FINGUREPRINT", "IRIS", "FACE" ]

}

function changecatOnline(value) {
	if (value.length == 0)
		document.getElementById("categoryOnline").innerHTML = "<option></option>";
	else {
		var catOptions = "";
		for (categoryId in mealsByCategory[value]) {
			catOptions += "<option>" + mealsByCategory[value][categoryId]
					+ "</option>";
			console.log("values of second drop down: "
					+ mealsByCategory[value][categoryId])

		}
		document.getElementById("categoryOnline").innerHTML = catOptions;
	}
}

// kyc
var mealsByCategoryk = {
	OTP : [ "OTP" ],
	BIOMETRIC : [ "FINGUREPRINT", "IRIS", "FACE" ]

}

function changecatOnlinek(value) {
	if (value.length == 0)
		document.getElementById("categoryOnlinek").innerHTML = "<option></option>";
	else {
		var catOptions = "";
		for (categoryId in mealsByCategoryk[value]) {
			catOptions += "<option>" + mealsByCategoryk[value][categoryId]
					+ "</option>";
			console.log("values of second drop down: "
					+ mealsByCategoryk[value][categoryId])

		}
		document.getElementById("categoryOnlinek").innerHTML = catOptions;
	}
}

// Online Drop down End

// onload() function here
window.onload = function() {
	document.getElementById("kycdropdown").style.display = "none";
	document.getElementById('offlinesection').style.display = 'none';
	// document.getElementById('allofflinedropdown').style.display = 'none';
	// document.getElementById('personalAddress').style.display = 'none';
	// document.getElementById('personalFullAddress').style.display = 'none';
	// // document.getElementById('demoauthotp').style.display = 'block';
	//
	// document.getElementById('demoauthotp').style.display = 'none';
	// document.getElementById('demobioblk').style.display = 'none';
	// // document.getElementById('demobioblk').style.display = 'none';
	// // document.getElementById('result').style.display = 'none';

	// hide result div

};

// Input form
function changecatsubOnline() {
	$.each($(".categoryOnline option:selected"), function() {
		var $val = $(this).text();

		if ($val == "PERSONAL INFORMATION") {
			alert("PI");
			// document.getElementById('personalInformation').style.display =
			// 'block';

		}

		if ($val == "PERSONAL ADDRESS") {

			alert("PA");

		}

		if ($val == "PERSONAL FULL ADDRESS") {
			alert("PFA")
		}
		if ($val == "FINGUREPRINT") {
			alert("FINGUREPRINT");

		}
		if ($val == "IRIS") {
			alert("IRIS");

		}
		if ($val == "FACE") {
			alert("FACE");

		}

	});

}

// categoryOnline

function categoryChangeAuth() {
	$.each($(".categoryOnline option:selected"), function() {
		var $val = $(this).text();

		if ($val == "OTP") {
			alert("in OTP");
			document.getElementById('categoryOnline').style.display = 'hide';

		} else if ($val == "DEMOGRAPHIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('categoryOnline').style.display = 'block';

		} else if ($val == "BIOMETRIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('demobioblk').style.display = 'none';
			document.getElementById('demoauthotp').style.display = 'none';
			document.getElementById('pipapfa').style.display = 'none';
			// subCategoryChange();

		}
	});

}

// kyc otp

function categoryChangeKyc() {
	$.each($(".categoryOnlinek option:selected"), function() {
		var $val = $(this).text();

		if ($val == "OTP") {
			alert("in OTP");
			document.getElementById('categoryOnline').style.display = 'hide';

		} else if ($val == "DEMOGRAPHIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('categoryOnline').style.display = 'block';

		} else if ($val == "BIOMETRIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('demobioblk').style.display = 'none';
			document.getElementById('demoauthotp').style.display = 'none';
			document.getElementById('pipapfa').style.display = 'none';
			// subCategoryChange();

		}
	});

}

// kyc

// Input form
function changecatsubOnlinek() {
	$
			.each(
					$(".categoryOnlinek option:selected"),
					function() {
						var $val = $(this).text();

						if ($val == "FINGUREPRINT") {
							alert("in FINGUREPRINT");

						}
						if ($val == "IRIS") {
							alert("in IRIS");

						}
						if ($val == "FACE") {
							alert("in FACE");
							document.getElementById('blockdemoauthpipapfa').style.display = 'none';
							// document.getElementById('namefield').style.display
							// = 'none';
						}

					});

}

// categoryOnline

function categoryChangeAuth() {
	$.each($(".categoryOnline option:selected"), function() {
		var $val = $(this).text();

		if ($val == "OTP") {
			alert("in OTP");
			document.getElementById('categoryOnline').style.display = 'hide';

		} else if ($val == "DEMOGRAPHIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('categoryOnline').style.display = 'block';

		} else if ($val == "BIOMETRIC") {
			alert("DEMOGRAPHIC");
			document.getElementById('demobioblk').style.display = 'none';
			document.getElementById('demoauthotp').style.display = 'none';
			document.getElementById('pipapfa').style.display = 'none';
			// subCategoryChange();

		}
	});

}

// To get last value of the url
var globlasturl;
function getURL() {
	alert("The URL of this page is: " + window.location.href);

	
	 * var lurl = window.location.href; var urlsplit = lurl.split("/"); var
	 * lasturl = urlsplit[urlsplit.length - 1]; alert(lasturl);
	 * window.globlasturl = lasturl;
	 
	// single line code
	var lasturl = window.location.href.split("/").slice(-1)[0];
	window.globlasturl = lasturl;
	alert("Last part of URL :" + globlasturl);

}

// OTP hide show
$('#verify-otp').hide();
$('#request-otp').on('click', function() {
	$('#sign-in').hide();
	$('#verify-otp').show();
});
$('.fa-chevron-left').on('click', function() {
	$('#sign-in').show();
	$('#verify-otp').hide();
});

// Ajax auto refresh off
// $(document).ready(function() {
// $('#formsubmit').click(function() {
// alert("in AJAX");
// $.post("home.jsp", {
// aadharno : $('#aadharnumber').val(),
// Distname : $('#addressDist').val()
// }, function() {
// alert("hi");
// alert(aadharno);
//
// });
//
// });
// });
//
// $(document).ready(function() {
// $('#formsubmit').click(function() {
// alert("in ajax call")
// var name = $("#aadharnumber");
// var add = $("#addressDist");
// var sendButton = $("#send-button");
//
// $.ajax({
// type : 'POST',
// contentType : "application/json; charset=utf-8",
// data : JSON.stringify(parameters),
// dataType : "json",
// url : "myPage.htm",
// success : function(data) {
// stateBar.html(data.response);
// },
// error : function(data) {
// stateBar.html("Server Error.");
// }
// });
//
// });
// });

// $(document).ready(function() {
// $('#submitpa').click(function(e) {
// e.preventDefault();
// alert("IN AJAX Fun()");
// var aadhaarno = $("#aadharnumber").val();
// var distname = $("#addressDist").val();
// var value = 'Aadhar Number= ' + aadhaarno + "Dist Name: " + distname;
// alert(distname);
// alert(value);
//
// $.ajax({
//
// url : "/authparequest",
// type : "post",
// data : value,
// cache : false,
// success : function(data) {
// alert("Inside ajax sucess fun");
// $("#aadharnumber").val('');
// $("#addressDist").val('');
// alert($("#aadharnumber").val('') + $("#addressDist").val(''));
// // $("#message").html(data).slideDown('slow');
// }
// });
// });
// });
*/
function showresult() {
	document.getElementById("resultdiv").style.display = "block";
}

function showpadata() {
	document.getElementById("personalInformation").style.display = "none";
	document.getElementById("personalAddress").style.display = "block";

}

function showHide() {
	var div = document.getElementById(result);
	if (div.style.display == 'none') {
		div.style.display = '';
	} else {
		div.style.display = 'none';
	}
}

// offline js
//
$(document).ready(function() {
	$("#clear").click(function() {
		$('#result').empty();
	});
});

/*
 * $(document).ready(function() { $('input[type="file"]').change(function() {
 * alert("A file has been selected."); }); });
 */

/*
 * function validate_fileupload(fileName) { var allowed_extensions = new
 * Array("jpg","png","PNG","JPEG"); var file_extension =
 * fileName.split('.').pop().toLowerCase(); // split function will split the
 * filename by dot(.), and pop function will pop the last element from the array
 * which will give you the extension as well. If there will be no extension then
 * it will return the filename.
 * 
 * for(var i = 0; i <= allowed_extensions.length; i++) {
 * if(allowed_extensions[i]==file_extension) { alert("valid file extension");
 * return true; // valid file extension } } alert("Not a valid file extension");
 * return false; }
 */

//validate qrcode image 
$('#check').change(
		function() {
			var fileExtension = [ 'jpeg', 'jpg', 'PNG', 'png' ];
			if ($.inArray($(this).val().split('.').pop().toLowerCase(),
					fileExtension) == -1) {
				alert("Only '.jpeg','.jpg','.PNG' formats are allowed.");
				return false;
			}
		});

/*
 * function myFunction() { var x = document.getElementById("myDIV"); if
 * (x.style.display === msg) { x.style.display = "none"; } else {
 * x.style.display = "block"; } }
 */

/*
 * $(document).ready(function(){ var show_btn=$('.show-modal'); var
 * show_btn=$('.show-modal'); //$("#testmodal").modal('show');
 * 
 * show_btn.click(function(){ $("#testmodal").modal('show'); }) });
 * 
 * $(function() { $('#element').on('click', function( e ) { Custombox.open({
 * target: '#testmodal-1', effect: 'fadein' }); e.preventDefault(); }); });
 */

/*
 * $('button').click(function(){ $('.pop-up').addClass('open'); });
 * 
 * $('.pop-up .close').click(function(){ $('.pop-up').removeClass('open'); });
 */

$("validatemobilefunc").click(function() {

	alert(document.getElementById(UIDdataPoimobile).value);

});


//hide emailid and passcode details 
$('#myModalemail').on('hidden.bs.modal', function () {
	  // do something…
	
	
	$("#emailsuccsessr").remove();
	$('#UIDdataPoiemail').val("");
	$('#passcode').val("");
})

//validate xml file emailid with passcode 
$("#emailvalidate").click(
		function() {
			var email = $("#UIDdataPoiemail").val();
			if(email == null || email ==""){
				return false;
			}
			$.ajax({
				type : 'POST',
				data : {
					email : $("#UIDdataPoiemail").val(),
					passcode : $("#passcode").val(),
					emailref : $("#emailrefrence").val(),
					emailhash : $('#emailhash').val()
				},
				url : "validateemail",
				success : function(data) {
					console.log(data);
					$("#emailsuccsessr").remove();
					
					if(data == "success"){
						$("#emailsuccsess").append(
								"<span class='alert alert-success' id='emailsuccsessr' style='color:green;'>Verified Email id </span>");
					}else{
						$("#emailsuccsess").append(
								"<span class='alert alert-danger' id='emailsuccsessr' style='color:red;'>Invalid Email id/Passcode</span>");
					}
					
				
				},
					error : function(data) {
					//stateBar.html("Server Error.");

				}
			});

		});



//hide mobile no and passcode details 
$('#myModalmobile').on('hidden.bs.modal', function () {
	  // do something…
	
	
	$("#mobilesuccsessr").remove();
	$('#UIDdataPoimobile').val("");
	$('#passcodem').val("");
})

//validate xml file mobile no with passcode 
$("#mobilevalidate").click(
		function() {
			var mobile = $("#UIDdataPoimobile").val();
			if(mobile == null || mobile ==""){
				return false;
			}


			// alert("hi bro");
			$.ajax({
				type : 'POST',
				data : {
					mobile : $("#UIDdataPoimobile").val(),
					passcodem : $("#passcodem").val(),
					mobileref : $("#mobilerefrence").val(),
					mobilehash : $('#mobilehash').val()
				},
				url : "validatemobile",
				success : function(data) {
					console.log(data);
					$("#mobilesuccsessr").remove();
					/*if(data == "success"){
						$("#mobilesuccsess").append(
								"<span class='alert alert-success' id='mobilesuccsessr'>Verified Mobile No</span>").fadeIn();
						setTimeout(function() {
									$('#mobilesuccsessr').fadeOut("slow");
								}, 4000 );
					}else{
						$("#mobilesuccsess").append(
								"<span class='alert alert-danger' id='mobilesuccsessr'>Invalid Mobile_No or Passcode</span>").fadeIn();
						setTimeout(function() {
									$('#mobilesuccsessr').fadeOut("slow");
								}, 4000 );
					}*/
					
					if(data == "success"){
						$("#mobilesuccsess").append(
								"<span class='alert alert-success' id='mobilesuccsessr' style='color:green;'>Verified Mobile No</span>");
					}else{
						$("#mobilesuccsess").append(
								"<span class='alert alert-danger' id='mobilesuccsessr' style='color:red;'>Invalid Mobile No/Passcode</span>");
					}
					
					
					/*if(data.success == "verified email id" || "please enter valid email id / Passcode"){ // if true (1)
					      setTimeout(function(){// wait for 5 secs(2)
					           location.reload(); // then reload the page.(3)
					      }, 20000); 
					   }*/
					
				},
				error : function(data) {
					//stateBar.html("Server Error.");

				}
			});

		});


/*function(data){
	  if(data.succsess == "verified email id"){
	        $('#mobilesuccsess').append(
							"<span id='mobilesuccsessr'>"
									+ data + "</span>").html('<div id="alertFadeOut" style="color: green">verified email id</div>'); // Diplay message with a fadeout
	                      $('#alertFadeOut').fadeOut(3000, function () {
	                          $('#alertFadeOut').text('');
	                      }); 
	    }
	 }*/

/*
 * $('#myModalmobile').on('hidden.bs.modal', function () {
 * $(this).find('form').trigger('reset'); })
 */


/*window.onscroll = function() {myFunction()};

var navbar = document.getElementById("result");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/


//qrcode ka validation below
//hide qrcode mobileno  details once done 
$('#myModalmobile').on('hidden.bs.modal', function () {
	  // do something…
	
	$("#mobilesuccsessr").remove();
	$('#UIDdataPoimobile').val("");
})

//validate qrcode with mobileno  verified or not 
$("#QRmobilevalidate").click(
		function() {
			var mobile = $("#UIDdataPoimobile").val();
			if(mobile == null || mobile ==""){
				return false;
			}

			
			$.ajax({
				type : 'POST',
				data : {
					mobile : $("#UIDdataPoimobile").val(),
					mobileref : $("#mobilerefrence").val(),
					mobilehash : $('#mobilehash').val()
				},
				url : "QRvalidatemobile",
				success : function(data) {
					console.log(data);
					$("#mobilesuccsessr").remove();
					/*if(data == "success"){
						$("#mobilesuccsess").append(
								"<span class='alert alert-success' id='mobilesuccsessr'>Verified Mobile No</span>").fadeIn();
						setTimeout(function() {
									$('#mobilesuccsessr').fadeOut("slow");
								}, 4000 );
					}else{
						$("#mobilesuccsess").append(
								"<span class='alert alert-danger' id='mobilesuccsessr'>Invalid Mobile_No or Passcode</span>").fadeIn();
						setTimeout(function() {
									$('#mobilesuccsessr').fadeOut("slow");
								}, 4000 );
					}*/
					
					if(data == "success"){
						$("#mobilesuccsess").append(
								"<span class='alert alert-success' id='mobilesuccsessr' style='color:green;'>Verified Mobile No</span>");
					}else{
						$("#mobilesuccsess").append(
								"<span class='alert alert-danger' id='mobilesuccsessr' style='color:red;'>Invalid Mobile No</span>");
					}
					
					
					/*if(data.success == "verified email id" || "please enter valid email id / Passcode"){ // if true (1)
					      setTimeout(function(){// wait for 5 secs(2)
					           location.reload(); // then reload the page.(3)
					      }, 20000); 
					   }*/
					
				},
				error : function(data) {
					//stateBar.html("Server Error.");

				}
			});

		});



//hide qrcode email id details once done 
$('#myModalemail').on('hidden.bs.modal', function () {
	  // do something…
	
	$("#emailsuccsessr").remove();
	$('#UIDdataPoiemail').val("");
})

//validate qrcode with email id verified or not 
$("#QRemailvalidate").click(
		function() {
			var email = $("#UIDdataPoiemail").val();
			if(email == null || email ==""){
				return false;
			}
			$.ajax({
				type : 'POST',
				data : {
					email : $("#UIDdataPoiemail").val(),
					emailref : $("#emailrefrence").val(),
					emailhash : $('#emailhash').val()
					
				},
				url : "QRvalidateemail",
				success : function(data) {
					console.log(data);
					$("#emailsuccsessr").remove();
					
					if(data == "success"){
						$("#emailsuccsess").append(
								"<span class='alert alert-success' id='emailsuccsessr' style='color:green;'>Verified Email id </span>");
					}else{
						$("#emailsuccsess").append(
								"<span class='alert alert-danger' id='emailsuccsessr' style='color:red;'>Invalid Email Id</span>");
					}
					
//					$("#emailsuccsess").append(
//							"<span id='emailsuccsessr' style='color:red;'>"
//									+ data + "</span>");

					//$('#UIDdataPoiemail').val("");
					//$('#passcode').val("");
					/*if(data.success == "verified email id"){}*/
				
				},
					error : function(data) {
					//stateBar.html("Server Error.");
 
				}
			});

		});