	$(document)
			.ready(
					function() {
						//var data = eval('${userstatus}');
						//console.log(data);
						var table = $('#example')
								.DataTable(
										{

											"aaData" : data,
											"aoColumns" : [
													{
														"mData" : 'id',
														'name' : 'dept_id'
													},
													{
														"mData" : "deptName",
														"mRender" : function(
																data, type,
																full) {
															//return "<a href='#' class='link-details'>"
															//		+ data
															//		+ "</a>"
															return "<a>"+data+"</a>"
														}
													},
													{
														"mData" : "userName"
													},
													{
														"mData" : "auaCode",
														"className" : "text-center"

													}, ],

											/* ,"columnDefs": [ {
											    className: 'dt-body-center',
											     targets:   2,
											     defaultContent: "<button>Click!</button>"
											 } ]  */

											'columnDefs' : [
													{

														'targets' : 0,
														'checkboxes' : {
															'selectRow' : true
														}
													},
													{
														'targets' : 4,
														"mData" : "loginStatus",
														"mRender" : function(
																data, type,
																full) {
															if (data == true) {
																return '<center><input disabled="disabled"  class="btn btn-success toggle-on " type="checkbox" name="loginStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="mini" checked="true"></center>';
																//return '<center><span class="label label-success">Active</span></center>';
															} else {
																return '<center><input disabled="disabled" class="btn btn-danger toggle-on" type="checkbox" name="loginStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="mini" ></center>';
																//return '<center><span class="label label-danger">Inactive</span></center>';
															}
														}
													},
													{
														'targets' : 5,
														"mData" : "authStatus",
														"mRender" : function(
																data, type,
																full) {
															if (data == true) {
																return '<center><input disabled="disabled"  class="btn btn-success toggle-on" type="checkbox" name="authStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" checked="true" data-size="mini"></center>';
															} else {
																return '<center><input disabled="disabled" class="btn btn-danger toggle-on" type="checkbox" name="authStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="mini"></center>';
															}
														}
													},
													{
														'targets' : 6,
														"mData" : "otpStatus",
														"mRender" : function(
																data, type,
																full) {
															if (data == true) {
																return '<center><input disabled="disabled" class="btn btn-success toggle-on" type="checkbox" name="otpStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" checked="true" data-size="mini"></center>';
															} else {
																return '<center><input disabled="disabled" class="btn btn-danger toggle-on" type="checkbox" name="otpStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="mini"></center>';
															}
														}
													},
													{
														'targets' : 7,
														"mData" : "ekycStatus",
														"mRender" : function(
																data, type,
																full) {
															if (data == true) {
																return '<center><input disabled="disabled" class="btn btn-success toggle-on" type="checkbox" name="ekycStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" checked="true" data-size="mini"></center>';
															} else {
																return '<center><input disabled="disabled" class="btn btn-danger toggle-on" type="checkbox" name="ekycStatusList" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="mini"></center>';
															}
														}
													},
													/* 	{
															"targets" : 4,
															"mData" : "validTill",
															"mRender" : function(
																	data, type,
																	full) {

																if (data == null) {
																	return '<input disabled="disabled"  style="width:98px;font-size:14px"  autocomplete="off" class="form-control " name="validTill" placeholder="Vaild Till" />';
																} else {

																	var date = new Date(
																			data);
																	var day = date
																			.getDate();
																	
																	if (day < 10)
																		day = '0'
																				+ day;
																	
																	var month = date
																			.getMonth() + 1;
																	if (month < 10)
																		month = '0'
																				+ month;
																	var yyyy = date
																			.getFullYear();
																	var stringDate = day
																			+ '/'
																			+ month
																			+ '/'
																			+ yyyy;
																	data = stringDate;

																	return '<input disabled="disabled"  style="width:98px;font-size:14px"  autocomplete="off" class="form-control " name="validTill" placeholder="Vaild Till" value='+data+' />';
																}
															}

														},
														{
															"width" : "20%",
															"targets" : 4
														}, */
													{
														"width" : "100px",
														"targets" : 3
													},
													{
														"className" : "dt-center",
														"targets" : "_all"
													}

											],
											"paging" : false,

											'select' : {
												'style' : 'multi'
											},
											'order' : [ [ 1, 'asc' ] ],

											"initComplete" : function(settings,
													json) {
												/* $('input[name="validTill"')
														.datepicker({
															changeMonth: true,
												            changeYear: true,
												            dateFormat: 'dd/mm/yy',
												            minDate : new Date(),
														}); */
												//alert('DataTables has finished its initialisation.');
											}

										});
						var csrfParameter = $("meta[name='_csrf_parameter']")
								.attr("content");
						var csrfHeader = $("meta[name='_csrf_header']").attr(
								"content");
						var csrfToken = $("meta[name='_csrf']").attr("content");
						var headers = {};
						headers[csrfHeader] = csrfToken;

						$("#example tbody").on(
								'click',
								'.link-details',
								function() {
									var dept_details = table.row(
											$(this).parents('tr')).data();
									var data = {};
									data[csrfParameter] = csrfToken;
									data["userName"] = dept_details.userName;
									$.ajax({
										url : 'deptdetails',
										type : 'POST',
										data : data, //'userName='+dept_details.userName,
										dataType : 'html'
									}).done(function(data) {

										$('#dynamic-content').html('');
										$('#dynamic-content').html(data);

									});
									$("#DescModal").modal('show');
								});

						$('#login_active, #login_deactive')
								.on(
										'click',
										function(e) {
											// var rows_selected = table.column(0).checkboxes.selected();

											var tableControl = document
													.getElementById('example');
											var obj = new Array();
											var returnVar = true;

											$('.dt-checkboxes:checked',
													tableControl)
													.each(
															function() {

																acCodeElement = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.next()
																		.text();

																if (acCodeElement == null
																		|| acCodeElement == '') {
																	var auaCode = $(
																			this)
																			.parent()
																			.next()
																			.next()
																			.next()
																			.children()
																			.val();
																} else
																	var auaCode = acCodeElement;

																/* var validDate = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.next()
																		.next()
																		.children()
																		.val(); */

																//	alert("validDate :"+ validDate);
																/* if (auaCode == null
																		|| auaCode == '') {
																	alert('Please enter valid AUA Code');
																	returnVar = false;
																	return false;
																}else */

																/* if(validDate==null || validDate =='')
																{
																	alert('Please enter correct Vaild Till Date');
																	returnVar = false;
																	return false;
																} */

																/* if (auaCode != 'AUA Code') {
																	obj
																			.push(auaCode);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'auacodes')
																							.attr(
																									'id',
																									'auacodes')
																							.val(
																									auaCode));
																} */

																var username = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.text();

																	//alert("username :"+username );
																if (username != 'Username') {
																	obj
																			.push(username);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'users')
																							.attr(
																									'id',
																									'users')
																							.val(
																									username));
																}

																//loginStatusValueList
																var loginStatusVal = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="loginStatusList"]')
																		.prop(
																				"checked");

																if (loginStatusVal != 'Login Status') {
																	obj
																			.push(loginStatusVal);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'loginStatusValueList')
																							.attr(
																									'id',
																									'loginStatusVal')
																							.val(
																									loginStatusVal));
																}

																//authStatusValueList
																var authStatusValueList = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="authStatusList"]')
																		.prop(
																				"checked");

																if (authStatusValueList != 'Login Status') {
																	obj
																			.push(loginStatusVal);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'authStatusValueList')
																							.attr(
																									'id',
																									'authStatusValueList')
																							.val(
																									authStatusValueList));
																}
																//otpStatusValueList
																var otpStatusValueList = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="otpStatusList"]')
																		.prop(
																				"checked");

																if (otpStatusValueList != 'Login Status') {
																	obj
																			.push(otpStatusValueList);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'otpStatusValueList')
																							.attr(
																									'id',
																									'otpStatusValueList')
																							.val(
																									otpStatusValueList));
																}
																//ekycStatusValueList
																var ekycStatusValueList = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="ekycStatusList"]')
																		.prop(
																				"checked");

																if (ekycStatusValueList != 'Login Status') {
																	obj
																			.push(ekycStatusValueList);

																	$(
																			'#frm-example')
																			.append(
																					$(
																							'<input>')
																							.attr(
																									'type',
																									'hidden')
																							.attr(
																									'name',
																									'ekycStatusValueList')
																							.attr(
																									'id',
																									'ekycStatusValueList')
																							.val(
																									ekycStatusValueList));
																}

																/* var dateValueList = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="validTill"]')
																		.val(); */
																//alert(dateValueList);
																/* 		if (dateValueList != 'Valid Till') {
																			obj
																					.push(dateValueList);

																			$(
																					'#frm-example')
																					.append(
																							$(
																									'<input>')
																									.attr(
																											'type',
																											'hidden')
																									.attr(
																											'name',
																											'dateValueList')
																									.attr(
																											'id',
																											'dateValueList')
																									.val(
																											dateValueList));
																		} */

															});
											//console.log(obj); // Write it to the console

											//console.log(rows_selected);
											//alert("");

											/* $
													.each(
															rows_selected,
															function(index,
																	rowId) {
																$(
																		'#frm-example')
																		.append(
																				$(
																						'<input>')
																						.attr(
																								'type',
																								'hidden')
																						.attr(
																								'name',
																								'users')
																						.attr(
																								'id',
																								'users')
																						.val(
																								rowId));

															});
											 */

											if (!returnVar)
												return false;

											if ($('#users').val() != null) {
												$('#frm-example').submit();
											} else {
												alert("Please select atleast 1 department.");
												return false;
											}

										});
						//logic to add
						$('input[type="checkbox"]')
								.click(
										function() {

											var tableControl = document
													.getElementById('example');

											var accode;
											var acCodeElement;
											var loginStatusElement;

											$('input:checkbox:checked',
													tableControl)
													.each(
															function() {

																if ($(this)
																		.attr(
																				'name') == 'loginStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'authStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'ekycStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'otpStatusList') {
																	//alert("skipping others");
																} else {
																	acCodeElement = $(
																			this)
																			.parent()
																			.next()
																			.next()
																			.next();

																	/* var $row = $(this).closest('tr');
																	 var $checkboxes = $row.find('input:checkbox');
																	 $checkboxes.each(function(i, elem) {
																		 $(this).attr('disabled', false);
																	 }); */
																	$(this)
																			.parent()
																			.parent()
																			.find(
																					'*')
																			.attr(
																					'disabled',
																					false);
																	/*  $(this).parent().parent()
																	    .children().each(function (){
																			$(this).prop("disabled", true);
																		}); 
																	 */

																	/* $(this)
																			.parent()
																			.parent()
																			.find('*').each(function (){
																				$(this).attr('disabled', false);
																			}); 
																	 */

																	/* if (acCodeElement
																			.text() == '-') {
																		acCodeElement
																				.text('');
																		acCodeElement
																				.append($(
																						'<input style="width:100px" placeholder="SA Code">')
																						.attr(
																								'name',
																								'accode')
																						.val(
																								''));
																	} */

																	//	favorite =  favorite + innertext ;
																	//.removeClass("disabled");
																	//loginStatusElement.prop('disabled', false);
																}
															});

											$("input:checkbox:not(:checked)",
													tableControl)
													.each(
															function() {

																if ($(this)
																		.attr(
																				'name') == 'loginStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'authStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'ekycStatusList'
																		|| $(
																				this)
																				.attr(
																						'name') == 'otpStatusList') {

																} else {

																	$(this)
																			.parent()

																			.next()
																			.next()
																			.next()
																			.find(
																					'*')
																			.attr(
																					'disabled',
																					true);
																	$(this)
																			.parent()
																			.next()
																			.next()
																			.next()
																			.next()

																			.find(
																					'*')
																			.attr(
																					'disabled',
																					true);
																	$(this)
																			.parent()
																			.next()
																			.next()
																			.next()
																			.next()
																			.next()

																			.find(
																					'*')
																			.attr(
																					'disabled',
																					true);
																	$(this)
																			.parent()
																			.next()
																			.next()
																			.next()
																			.next()
																			.next()

																			.next()
																			.find(
																					'*')
																			.attr(
																					'disabled',
																					true);

																	$(this)
																			.parent()
																			.next()
																			.next()
																			.next()
																			.next()
																			.next()
																			.next()
																			.next()

																			.find(
																					'*')
																			.attr(
																					'disabled',
																					true);

																	acCodeElement = $(
																			this)
																			.parent()
																			.next()
																			.next()
																			.next();

																	if (acCodeElement
																			.text() == '') {

																		acCodeElement
																				.text('-');

																	}
																}
															});

										});
						//logic to add
						document.getElementById("example").rows[1].cells[0].innerHTML = 'Check';

						$(function() {
							$(
									'[name="loginStatusList"],[name="authStatusList"],[name="ekycStatusList"],[name="otpStatusList"]')
									.bootstrapToggle({
										on : 'Active',
										off : 'Deactive',
										onstyle : 'success',
										offstyle : 'danger',

									});
						});

						/*  $(function() {
							$('input[name="validTill"').daterangepicker({
								singleDatePicker : true,
								showDropdowns : true,
								locale : {
									format : 'DD-MM-YYYY'
								},
								maxDate : new Date(),

							});
						});  */

					});
