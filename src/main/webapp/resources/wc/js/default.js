// Onile Offline radio button
function showOnline() {

	document.getElementById('online').style.display = 'block';
	document.getElementById('offlinesection').style.display = 'none';

}
function showOffline() {

	document.getElementById('offlinesection').style.display = 'block';
	document.getElementById('online').style.display = 'none';
}

function showauth() {
	//alert("in show auth");

	// categoryOnline
	document.getElementById('authdropdown').style.display = 'block';
	document.getElementById('kycdropdown').style.display = 'none';
	document.getElementById('categoryOnline').style.display = 'block';

	document.getElementById("personalInformation").style.display = "block";
	document.getElementById('personalAddress').style.display = 'none';
	document.getElementById('personalFullAddress').style.display = 'none';

	document.getElementById('otprequest').style.display = 'none';
	document.getElementById('authotp').style.display = 'none';
	document.getElementById('otpkycrequest').style.display = 'none';
	document.getElementById('kycotp').style.display = 'none';

	document.getElementById('fingerauth').style.display = 'none';
	document.getElementById('irisauth').style.display = 'none';
	document.getElementById('faceauth').style.display = 'none';

	document.getElementById('fingerkyc').style.display = 'none';
	document.getElementById('iriskyc').style.display = 'none';
	document.getElementById('facekyc').style.display = 'none';

	changecatsubOnline();
	categoryChangeAuth();

	clearresult();

}

function showkyc() {
	changecatsubOnlinek();
	categoryChangeKyc();
	document.getElementById('authdropdown').style.display = 'none';
	document.getElementById('kycdropdown').style.display = 'block';
	document.getElementById('categoryOnlinek').style.display = 'none';

	document.getElementById("personalInformation").style.display = "none";
	document.getElementById('personalAddress').style.display = 'none';
	document.getElementById('personalFullAddress').style.display = 'none';

	document.getElementById('otprequest').style.display = 'none';
	document.getElementById('authotp').style.display = 'none';
	document.getElementById('otpkycrequest').style.display = 'block';
	document.getElementById('kycotp').style.display = 'none';

	document.getElementById('fingerauth').style.display = 'none';
	document.getElementById('irisauth').style.display = 'none';
	document.getElementById('faceauth').style.display = 'none';

	document.getElementById('fingerkyc').style.display = 'none';
	document.getElementById('iriskyc').style.display = 'none';
	document.getElementById('facekyc').style.display = 'none';

	$('#BioOtp').val("OTP");
	// $('#categoryOnlinek').val("FINGUREPRINT");
	clearresult();

}

var mealsByCategory = {
	DEMOGRAPHIC : [ "PERSONAL INFORMATION", "PERSONAL ADDRESS",
			"PERSONAL FULL ADDRESS" ],
	OTP : [ "OTP" ],
	BIOMETRIC : [ "FINGERPRINT", "IRIS", "FACE" ]
	 //BIOMETRIC : [ "FINGERPRINT" ]

}

function changecatOnline(value) {
	if (value.length == 0)
		document.getElementById("categoryOnline").innerHTML = "<option></option>";
	else {
		var catOptions = "";
		for (categoryId in mealsByCategory[value]) {
			catOptions += "<option>" + mealsByCategory[value][categoryId]
					+ "</option>";
			// console.log("values of second drop down: "
			// + mealsByCategory[value][categoryId])

		}
		document.getElementById("categoryOnline").innerHTML = catOptions;
	}
}

// kyc
var mealsByCategoryk = {
	OTP : [ "OTP" ],
	BIOMETRIC : [ "FINGERPRINT", "IRIS", "FACE" ]
	//BIOMETRIC : [ "FINGERPRINT" ]

}

function changecatOnlinek(value) {
	if (value.length == 0)
		document.getElementById("categoryOnlinek").innerHTML = "<option></option>";
	else {
		var catOptions = "";
		for (categoryId in mealsByCategoryk[value]) {
			catOptions += "<option>" + mealsByCategoryk[value][categoryId]
					+ "</option>";
			// console.log("values of second drop down: "
			// + mealsByCategoryk[value][categoryId])

		}
		document.getElementById("categoryOnlinek").innerHTML = catOptions;
	}
}

// Online Drop down End

var globlasturl;
// onload() function here
window.onload = function() {
	//alert('onload');

	// Function to hide messages div if it is empty
	if ($('#messages').html() == "") {
		document.getElementById('messages').style.display = 'none';
	}

	if ($('#errormessages').html() == "") {
		document.getElementById('errormessages').style.display = 'none';
	}

	// To keep auth and kyc selected
	var radioValue = document.getElementById("radioValue").value;
	if (radioValue == "AUTHENTICATION") {
		setDropDown();
	}
	if (radioValue == "KYC") {
		setDropDownKYC();
	}

	// blockdemoauthpipapfa
	// personalInformation
	// personalAddress
	// personalFullAddress
	//	
	// otp
	// otprequest
	// authotp
	// kycotp
	//	

	// biometric

	// blockbiometricauth
	// fingerauth
	// irisauth
	// faceauth

	// blockbiometrickyc
	// fingerkyc
	// iriskyc
	// facekyc
	// clearresult();

	fadeoutresult();

	var lasturl = window.location.href.split("/").slice(-1)[0];
	//alert(lasturl);
	window.globlasturl = lasturl;

	if (globlasturl == "" || globlasturl == "authpirequest"
			|| globlasturl == "wchome") {
		// alert("PA");
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById("personalInformation").style.display = "block";

	}
	if (globlasturl == "authparequest") {
		// alert("PA");
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById('personalAddress').style.display = 'block';
	}
	if (globlasturl == "authpfarequest") {
		// alert("PFA");
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById('personalFullAddress').style.display = 'block';

	}

	if (globlasturl == "otprequest") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";

		// On otp failed
		onOtpReqFailed = document.getElementById("showotptextbox").value;
		if (onOtpReqFailed == null || onOtpReqFailed == "") {
			// alert("onotpfailed" + onOtpReqFailed);
			document.getElementById('otprequest').style.display = 'block';
		} else {
			document.getElementById('otprequest').style.display = 'none';
			document.getElementById('authotp').style.display = 'block';
		}
	}

	if (globlasturl == "otpkycrequest") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'none';
		document.getElementById("kycdropdown").style.display = "block";
		document.getElementById("categoryOnlinek").style.display = "none";

		// On otp failed
		onOtpReqFailed = document.getElementById("showotptextbox").value;
		// alert("onotpfailed" + onOtpReqFailed);
		if (onOtpReqFailed == null || onOtpReqFailed == "") {
			// alert("onotpfailed" + onOtpReqFailed);
			document.getElementById('otpkycrequest').style.display = 'block';
		} else {
			document.getElementById('otpkycrequest').style.display = 'none';
			document.getElementById('kycotp').style.display = 'block';
		}
	}

	if (globlasturl == "authfingerprint" || globlasturl == "biometric") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById('fingerauth').style.display = 'block';
	}
	// authiris

	if (globlasturl == "authiris") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById('irisauth').style.display = 'block';
	}

	if (globlasturl == "authface") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById("categoryOnline").style.display = "block";
		document.getElementById('faceauth').style.display = 'block';
	}
	if (globlasturl == "otpauth") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'block';
		document.getElementById("kycdropdown").style.display = "none";
		document.getElementById('otprequest').style.display = 'block';
	}
	if (globlasturl == "otpkyc") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'none';
		document.getElementById("kycdropdown").style.display = "block";
		document.getElementById('categoryOnlinek').style.display = 'none';
		document.getElementById('otpkycrequest').style.display = 'block';
	}
	if (globlasturl == "kycfingerprint") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'none';
		document.getElementById("kycdropdown").style.display = "block";
		document.getElementById('fingerkyc').style.display = 'block';
	}
	if (globlasturl == "kyciris") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'none';
		document.getElementById("kycdropdown").style.display = "block";
		document.getElementById('iriskyc').style.display = 'block';
	}
	if (globlasturl == "kycface") {
		allvaluesid();
		document.getElementById('authdropdown').style.display = 'none';
		document.getElementById("kycdropdown").style.display = "block";
		document.getElementById('facekyc').style.display = 'block';
	}

	// document.getElementById('meal').value = "xyz";
	// var s = document.getElementById("meal");
	// s.selectedIndex = s.options.length - 1;

};

function setDropDown() {
	// alert("In dropdown")
	radiobtn = document.getElementById("authradio");
	radiobtn.checked = true;

	var firstDropDownValue = document.getElementById("firstDropDownJsp").value;
	// alert("First value: "+firstDropDownValue);
	// On page reload second drop down should not be null
	if (firstDropDownValue == null || firstDropDownValue == "") {
		// alert("inside IF loop");
		firstDropDownValue = "DEMOGRAPHIC";
	}
	changecatOnline(firstDropDownValue);
	changecatOnlinek(firstDropDownValue);
	var firstDropDownId = document.getElementById("DemoOtpBio");

	// alert(pavalue);

	var len = firstDropDownId.options.length;
	// alert("len" + len);
	for (var i = 0; i < len; i++) {
		// alert(selectBox.options[i].value);
		if (firstDropDownId.options[i].value == firstDropDownValue) {
			firstDropDownId.options[i].selected = true;
			// alert("OTP");
			break;
		}
	}

	var secondDropDownValue = document.getElementById("secondDropDownJsp").value;
	var secondDropDownId = document.getElementById("categoryOnline");

	var len = secondDropDownId.options.length;
	// alert("len" + len);
	for (var i = 0; i < len; i++) {
		// alert("Second DD value: " + secondDropDownId.options[i].value);
		if (secondDropDownId.options[i].value == secondDropDownValue) {
			secondDropDownId.options[i].selected = true;
			// alert("OTP");
			break;
		}

	}

	if (firstDropDownValue != "" && secondDropDownValue != "") {
		// document.getElementById("result").style.display = "block";
		$("div.result").show();
	}

}

function setDropDownKYC() {
	// alert("In dropdown")
	radiobtn = document.getElementById("kycradioi");
	radiobtn.checked = true;

	var firstDropDownValue = document.getElementById("firstDropDownJsp").value;
	// alert("First value: "+firstDropDownValue);
	// On page reload second drop down should not be null
	if (firstDropDownValue == null || firstDropDownValue == "") {
		// alert("inside IF loop");
		firstDropDownValue = "BIOMETRIC";
	}
	changecatOnlinek(firstDropDownValue);
	var firstDropDownId = document.getElementById("BioOtp");

	// alert(pavalue);

	var len = firstDropDownId.options.length;
	// alert("len" + len);
	for (var i = 0; i < len; i++) {
		// alert(selectBox.options[i].value);
		if (firstDropDownId.options[i].value == firstDropDownValue) {
			firstDropDownId.options[i].selected = true;
			// alert("OTP");
			break;
		}
	}

	var secondDropDownValue = document.getElementById("secondDropDownJsp").value;
	var secondDropDownId = document.getElementById("categoryOnlinek");

	var len = secondDropDownId.options.length;
	// alert("len" + len);
	for (var i = 0; i < len; i++) {
		// alert("Second DD value: " + secondDropDownId.options[i].value);
		if (secondDropDownId.options[i].value == secondDropDownValue) {
			secondDropDownId.options[i].selected = true;
			// alert("OTP");
			break;
		}

	}

}

// Input form
function changecatsubOnline() {
	$
			.each(
					$(".categoryOnline option:selected"),
					function() {
						var $val = $(this).text();

						if ($val == "PERSONAL INFORMATION") {
							// alert("PI");
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';

							document.getElementById("personalInformation").style.display = "block";
						}

						if ($val == "PERSONAL ADDRESS") {
							// alert("PA");
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';
							document.getElementById('personalAddress').style.display = 'block';

						}

						if ($val == "PERSONAL FULL ADDRESS") {
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';
							document.getElementById('personalFullAddress').style.display = 'block';
						}
						if ($val == "FINGERPRINT") {
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';
							document.getElementById('fingerauth').style.display = 'block';

						}
						if ($val == "IRIS") {
							// alert("IRIS");
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';
							document.getElementById('irisauth').style.display = 'block';
						}
						if ($val == "FACE") {
							allvaluesid();
							document.getElementById('authdropdown').style.display = 'block';
							document.getElementById('categoryOnline').style.display = 'block';
							document.getElementById('faceauth').style.display = 'block';
						}

					});

}

// kyc otp

function categoryChangeKyc() {
	$.each($(".categoryOnlinek option:selected"), function() {
		var $val = $(this).text();
		// alert("categoryChangeKyc():" + $val);

		if ($val == "OTP") {
			// alert("in OTP kyc");
			allvaluesid();
			document.getElementById("kycdropdown").style.display = "block";
			document.getElementById('otpkycrequest').style.display = 'block';
			document.getElementById('categoryOnlinek').style.display = 'none';
		} else if ($val == "FINGERPRINT") {
			// alert("BIO");
			allvaluesid();
			document.getElementById('categoryOnlinek').style.display = 'block';
			document.getElementById("kycdropdown").style.display = "block";
			document.getElementById('fingerkyc').style.display = 'block';

		}
	});

}

// kyc

// Input form
function changecatsubOnlinek() {
	$.each($(".categoryOnlinek option:selected"), function() {
		var $val = $(this).text();

		if ($val == "FINGERPRINT") {
			// alert("in Fing");
			allvaluesid();
			document.getElementById("kycdropdown").style.display = "block";
			document.getElementById('fingerkyc').style.display = 'block';

		}
		if ($val == "IRIS") {
			// alert("in IRIS");
			allvaluesid();
			document.getElementById("kycdropdown").style.display = "block";
			document.getElementById('iriskyc').style.display = 'block';

		}
		if ($val == "FACE") {
			// alert("in FACE");
			allvaluesid();
			document.getElementById("kycdropdown").style.display = "block";
			document.getElementById('facekyc').style.display = 'block';
		}

	});

}

// categoryOnline

function categoryChangeAuth() {
	$
			.each(
					$(".categoryOnline option:selected"),
					function() {
						var $val = $(this).text();
						// alert($val);

						if ($val == "OTP") {
							// alert("categoryChangeAuth(): in DEMOGRAPHIC");

							// categoryOnline
							allvaluesid();
							document.getElementById('otprequest').style.display = 'block';

							// alert("INSIDE OTP");

						}
						if ($val == "PERSONAL INFORMATION") {
							allvaluesid();
							document.getElementById("categoryOnline").style.display = "block";
							document.getElementById("personalInformation").style.display = "block";

						}
						if ($val == "FINGERPRINT") {
							allvaluesid();
							document.getElementById("categoryOnline").style.display = "block";
							document.getElementById('fingerauth').style.display = 'block';
						}
					});

}

function allvaluesid() {
	document.getElementById("categoryOnline").style.display = "none";
	// document.getElementById('authdropdown').style.display = 'none';
	// document.getElementById("kycdropdown").style.display = "none";
	document.getElementById('offlinesection').style.display = 'none';

	document.getElementById("personalInformation").style.display = "none";
	document.getElementById('personalAddress').style.display = 'none';
	document.getElementById('personalFullAddress').style.display = 'none';

	document.getElementById('otprequest').style.display = 'none';
	document.getElementById('authotp').style.display = 'none';
	document.getElementById('otpkycrequest').style.display = 'none';
	document.getElementById('kycotp').style.display = 'none';

	document.getElementById('fingerauth').style.display = 'none';
	document.getElementById('irisauth').style.display = 'none';
	document.getElementById('faceauth').style.display = 'none';

	document.getElementById('fingerkyc').style.display = 'none';
	document.getElementById('iriskyc').style.display = 'none';
	document.getElementById('facekyc').style.display = 'none';
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

function aadhaar_vid_content(value) {
	// alert(value);
	var text = value;
	// alert("Text value: " + text);
	if (text.length < 12 || text.length == 13 || text.length == 14
			|| text.length == 15) {
		// text == "";
		// alert('Please enter valid UID/VID');
		document.getElementById("submitbtnPI").disabled = true;
		$('#aadharnumberPI').css('border-color', 'red');

		document.getElementById("submitbtnPA").disabled = true;
		$('#aadharnumberPA').css('border-color', 'red');

		document.getElementById("submitbtnPFA").disabled = true;
		$('#aadharnumberPFA').css('border-color', 'red');

		document.getElementById("submitbtnOtp").disabled = true;
		$('#aadharnumberOtp').css('border-color', 'red');

		// aadharnumberKycOtp
		document.getElementById("submitbtnKycOtp").disabled = true;
		$('#aadharnumberKycOtp').css('border-color', 'red');

		// auth fingerprint
		document.getElementById("btnauthfin").disabled = true;
		$('#anauthfin').css('border-color', 'red');

		// auth IRIS
		document.getElementById("btnauthiris").disabled = true;
		$('#anauthiris').css('border-color', 'red');

		// auth FACE
		document.getElementById("btnauthface").disabled = true;
		$('#anauthface').css('border-color', 'red');

		// KYC Finger
		document.getElementById("btnkycfin").disabled = true;
		$('#ankycfin').css('border-color', 'red');

		// KYC IRIS
		document.getElementById("btnkyciris").disabled = true;
		$('#ankyciris').css('border-color', 'red');

		// KYC Face
		document.getElementById("btnkycface").disabled = true;
		$('#ankycface').css('border-color', 'red');

		return false;
	} else
		(text.length == 12 || text.length == 16)
	{
		document.getElementById("submitbtnPI").disabled = false;
		$('#aadharnumberPI').css('border-color', '#ced4da');

		document.getElementById("submitbtnPA").disabled = false;
		$('#aadharnumberPA').css('border-color', '#ced4da');

		document.getElementById("submitbtnPFA").disabled = false;
		$('#aadharnumberPFA').css('border-color', '#ced4da');

		document.getElementById("submitbtnOtp").disabled = false;
		$('#aadharnumberOtp').css('border-color', '#ced4da');

		document.getElementById("submitbtnKycOtp").disabled = false;
		$('#aadharnumberKycOtp').css('border-color', '#ced4da');

		document.getElementById("btnauthfin").disabled = false;
		$('#anauthfin').css('border-color', '#ced4da');

		document.getElementById("btnauthfin").disabled = false;
		$('#anauthfin').css('border-color', '#ced4da');

		document.getElementById("btnauthiris").disabled = false;
		$('#anauthiris').css('border-color', '#ced4da');

		document.getElementById("btnauthface").disabled = false;
		$('#anauthface').css('border-color', '#ced4da');

		document.getElementById("btnkycfin").disabled = false;
		$('#ankycfin').css('border-color', '#ced4da');

		document.getElementById("btnkyciris").disabled = false;
		$('#ankyciris').css('border-color', '#ced4da');

		document.getElementById("btnkycface").disabled = false;
		$('#ankycface').css('border-color', '#ced4da');

		return true;
	}

}

// Validate Otp input value
function validate_otp_input(value) {
	// alert("validate_otp_input: " + value);
	var text = value;
	// alert("Text value: " + text);
	if (text.length > 6 || text.length < 6) {

		// aadharnumberKycOtp
		document.getElementById("request-otp").disabled = true;
		$('#otpvalue').css('border-color', 'red');

		document.getElementById("btnotpkyc").disabled = true;
		$('#pinvalueotpkyc').css('border-color', 'red');

		return false;
	} else
		(text.length == 6)
	{

		document.getElementById("request-otp").disabled = false;
		$('#otpvalue').css('border-color', '#ced4da');

		document.getElementById("btnotpkyc").disabled = false;
		$('#pinvalueotpkyc').css('border-color', '#ced4da');

		return true;
	}

}

// Reloder

$(window).on('load', function() {
	//alert("win load");
	// makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(50).fadeOut('fast'); // will fade out the white DIV
	// that covers the website.
	$('body').delay(50).css({
		'overflow' : 'visible'
	});
	
})

// Clear
function clearresult() {
	$('#result').empty();

}

// Test
function showjsvalue() {
	alert("default.js");
	document.getElementById("messages").innerHTML = "Message from JS";
	response = "respose from js";
	alert(response);
}

// message btn
// $("#warning-btn").click(function() {
// $("div.warning").fadeIn(300).delay(1500).fadeOut(4000);
// });

// Set time to result div
function fadeoutresult() {
	// $("#resultdiv").delay(30000).fadeOut(800);
}

// //Reloder
// $(window).on('load', function() { // makes sure the whole site is loaded
// $('#status').fadeOut(); // will first fade out the loading animation
// $('#preloader').delay(30).fadeOut('fast'); // will fade out the white DIV
// // that covers the website.
// $('body').delay(10).css({
// 'overflow' : 'visible'
// });
// })
//
// // Clear
// function clearresult() {
// $('#result').empty();
//
// }
//
// // Test
// function showjsvalue() {
// alert("default.js");
// document.getElementById("messages").innerHTML = "Message from JS";
// response = "respose from js";
// alert(response);
// }
//
// // message btn
// // $("#warning-btn").click(function() {
// // $("div.warning").fadeIn(300).delay(1500).fadeOut(4000);
// // });
//
// function messages() {
// alert("IN message");
// // document.getElementById("messages").innerHTML = "Message from JS";
// // alert("messages value "+ document.getElementById("messages").value);
// $("div.warning").fadeIn(300).delay(1500).fadeOut(4000);
// }
//
// // Set time to result div
// function fadeoutresult() {
// $("#resultdiv").delay(30000).fadeOut(800);
// }


function validateAuthFingerprint() {
	//alert(uid);
	
	clearresult();

	var anauthfin = document.getElementById("anauthfin").value;
	if (anauthfin == "" || anauthfin == null) {
		// alert("please set aadhaar number");
		aadhaar_vid_content(anauthfin);
		return false;

	}
	document.getElementById("uid2").value=anauthfin;
	//alert('uid 2==>'+document.getElementById("uid2").value);
	document.getElementById("cat2").value='authfingerprint';
	var af_env = document.getElementById("af_env").value;
	var af_biometricType = document.getElementById("af_biometricType").value;
	var af_fcount = document.getElementById("af_fcount").value;
	var af_biometricPosition = document.getElementById("af_biometricPosition").value;

	// To clear result div
	capture(af_env, af_biometricType, af_fcount, af_biometricPosition);
	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("anauthfin").value = "";
		return false;
	} else
		return true;

}

function validateAuthIris() {
	clearresult();

	var anauthiris = document.getElementById("anauthiris").value;
	if (anauthiris == "" || anauthiris == null) {
		aadhaar_vid_content(anauthiris);
		return false;

	}

	var ai_env = document.getElementById("ai_env").value;
	var ai_biometricType = document.getElementById("ai_biometricType").value;
	var ai_fcount = document.getElementById("ai_fcount").value;
	var ai_biometricPosition = document.getElementById("ai_biometricPosition").value;

	capture(ai_env, ai_biometricType, ai_fcount, ai_biometricPosition);

	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("anauthiris").value = "";
		return false;
	} else
		return true;

}

function validateAuthFace() {
	clearresult();

	var anauthface = document.getElementById("anauthface").value;
	if (anauthface == "" || anauthface == null) {
		aadhaar_vid_content(anauthface);
		return false;

	}

	var aface_env = document.getElementById("aface_env").value;
	var aface_biometricType = document.getElementById("aface_biometricType").value;
	var aface_fcount = document.getElementById("aface_fcount").value;
	var aface_biometricPosition = document
			.getElementById("aface_biometricPosition").value;

	// To clear result div
	capture(aface_env, aface_biometricType, aface_fcount,
			aface_biometricPosition);
	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("anauthface").value = "";
		return false;
	} else
		return true;

}

function validateKycFinger() {
	clearresult();

	var ankycfin = document.getElementById("ankycfin").value;
	if (ankycfin == "" || ankycfin == null) {
		aadhaar_vid_content(ankycfin);
		return false;

	}
	document.getElementById("uid2").value=ankycfin;
	document.getElementById("cat2").value='kycfingerprint';
	var kf_env = document.getElementById("kf_env").value;
	var kf_ver = document.getElementById("kf_ver").value;
	var kf_type = document.getElementById("kf_type").value;
	var kf_rc = document.getElementById("kf_rc").value;
	var kf_de = document.getElementById("kf_de").value;
	var kf_lr = document.getElementById("kf_lr").value;
	var kf_pfr = document.getElementById("kf_pfr").value;
	var kf_biometricType = document.getElementById("kf_biometricType").value;
	var kf_count = document.getElementById("kf_count").value;
	var kf_biometricPositions = document
			.getElementById("kf_biometric_positions").value;

	captureForEkyc(kf_env, kf_ver, kf_type, kf_rc, kf_lr, kf_de, kf_pfr,
			kf_biometricType, kf_count, kf_biometricPositions);

	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("ankyciris").value = "";
		return false;
	} else
		return true;

}

function validateKycIris() {
	clearresult();

	var ankyciris = document.getElementById("ankyciris").value;
	if (ankyciris == "" || ankyciris == null) {
		aadhaar_vid_content(ankyciris);
		return false;

	}

	var ki_env = document.getElementById("ki_env").value;
	var ki_ver = document.getElementById("ki_ver").value;
	var ki_type = document.getElementById("ki_type").value;
	var ki_rc = document.getElementById("ki_rc").value;
	var ki_de = document.getElementById("ki_de").value;
	var ki_lr = document.getElementById("ki_lr").value;
	var ki_pfr = document.getElementById("ki_pfr").value;
	var ki_biometricType = document.getElementById("ki_biometricType").value;
	var ki_count = document.getElementById("ki_count").value;
	var ki_biometricPositions = document
			.getElementById("ki_biometric_positions").value;

	captureForEkyc(ki_env, ki_ver, ki_type, ki_rc, ki_lr, ki_de, ki_pfr,
			ki_biometricType, ki_count, ki_biometricPositions);

	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("ankycfin").value = "";
		return false;
	} else
		return true;

}

function validateKycFace() {
	clearresult();

	var ankycface = document.getElementById("ankycface").value;
	if (ankycface == "" || ankycface == null) {
		aadhaar_vid_content(ankycface);
		return false;

	}

	var kface_env = document.getElementById("kface_env").value;
	var kface_ver = document.getElementById("kface_ver").value;
	var kface_type = document.getElementById("kface_type").value;
	var kface_rc = document.getElementById("kface_rc").value;
	var kface_de = document.getElementById("kface_de").value;
	var kface_lr = document.getElementById("kface_lr").value;
	var kface_pfr = document.getElementById("kface_pfr").value;
	var kface_biometricType = document.getElementById("kface_biometricType").value;
	var kface_count = document.getElementById("kface_count").value;
	var kface_biometricPositions = document
			.getElementById("kface_biometric_positions").value;

	captureForEkyc(kface_env, kface_ver, kface_type, kface_rc, kface_lr,
			kface_de, kface_pfr, kface_biometricType, kface_count,
			kface_biometricPositions);

	$("#messages").fadeIn(200).delay(1500).fadeOut(1000);

	if ($('#biometricResponse').is(':empty')) {
		// if (biometricResponse == null || biometricResponse == "") {
		document.getElementById("ankycface").value = "";
		return false;
	} else
		return true;

}

function onSuccessCapture(response){ 
	console.log('Success Capture : ' + response);
	document.getElementById("biometricResponse").value=response;
	var uid=document.getElementById("uid2").value;
	//alert('uid2 in callback::'+uid);
	var cat=document.getElementById("cat2").value
	document.getElementById("authf").action ="../client/"+cat;
    	document.getElementById("authf").submit();
}
function onFailureCapture(errorInfo) { 
	console.log('Failure Capture : ' + errorInfo); 
}

$('.aa').on('click',function(e){
	var id =$(this).attr('id');
	var n="milind";
	console.log('id of element::',id);
	var f = new FontFace("pass", "url(../resources/wc/fonts/password.ttf)", {});
	console.log('f:::',f);
    	f.load().then(function (loadedFace) {
    	console.log('loaded font',loadedFace);
	console.log('name',id);
        document.fonts.add(loadedFace);
        var fptags = document.getElementById(id);
	console.log('fptags',fptags);
        fptags.style.fontFamily = "pass, sans-serif";
    });
	console.log('after aadharnumberPI click');
	
});

/*$('.aa').click(function($this){
	console.log('aadharnumberPI click');
	//var f = new FontFace("pass", "url(https://jsbin-user-assets.s3.amazonaws.com/rafaelcastrocouto/password.ttf)", {});
	var f = new FontFace("pass", "url(../resources/wc/fonts/password.ttf)", {});
	console.log('f:::',f);
 	   f.load().then(function (loadedFace) {
    	//console.log('after loading font');
        document.fonts.add(loadedFace);
        var fptags = document.getElementById('aadharnumberPI');
	//var fptags = document.getElementsByClassName('aa');
        fptags.style.fontFamily = "pass, sans-serif";
    });
		console.log('after aadharnumberPI click');
})*/

// Ajax call auth pi request

/*
 * $("#submitbtnPI") .click( function() { var aadharNumber =
 * $("#aadharnumberPI").val(); var name = $("#name").val(); alert("hi...");
 * 
 * $.ajax({ type : 'POST', data : { aadharnumber : $("#aadharnumberPI").val(),
 * name : $("#name").val() }, url : "authpirequest", success : function(data) {
 * console.log(data); alert(data); }, error : function(data) { //
 * stateBar.html("Server Error."); alert(data); } });
 * 
 * });
 */
