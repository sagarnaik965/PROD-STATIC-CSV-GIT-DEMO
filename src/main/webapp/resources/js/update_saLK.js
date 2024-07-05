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
															return "<a href='#' class='link-details'>"
																	+ data
																	+ "</a>"
														}
													},
													{
														"mData" : "auaCode"
													},
													{
														"mData" : "lk",
														"className" : "text-center",
														"mRender" : function(
																data, type,
																full) {
															return '<input disabled="disabled" type="text" value="'+data+'" class="form-control" style="width:300px;font-size:14px" name="salk" "/>'

														}
													} ],

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
														"targets" : 4,
														"mData" : "validity",
														"mRender" : function(
																data, type,
																full) {

															if (data == null) {
																return '<input disabled="disabled"  style="width:98px;font-size:14px"  autocomplete="off" class="form-control " name="validTill" placeholder="Vaild Till" />';
															} else {

																console.log(data);

																var date = new Date(
																		data);
																console.log(date);
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
																//data = stringDate;
																//console.log(data);

																return '<input disabled="disabled"  style="width:98px;font-size:14px"  autocomplete="off" class="form-control " name="validTill" placeholder="Vaild Till" value='+data+' />';
															}
														}

													},
													/* {
														"width" : "20%",
														"targets" : 4
													},
													{
														"width" : "100px",
														"targets" : 3
													} */
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
												$('input[name="validTill"')
														.datepicker(
																{
																	changeMonth : true,
																	changeYear : true,
																	dateFormat : 'dd/mm/yy',
																	minDate : new Date(),
																});
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

											$('input:checkbox:checked',
													tableControl)
													.each(
															function() {

																var salk = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.next()
																		.children()
																		.val();

																if (salk == null
																		|| salk == '') {
																	alert('Please enter vaild license key');
																	returnVar = false;
																	return false;
																}

																var validDate = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.next()
																		.next()
																		.children()
																		.val();

																if (validDate == null
																		|| validDate == '') {
																	alert('Please enter correct validity');
																	returnVar = false;
																	return false;
																}

																var username = $(
																		this)
																		.parent()
																		.next()
																		.next()
																		.text();

																//	alert("username :"+username );
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
																
																
																if (salk != 'Access Code') {
																	obj
																			.push(salk);

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
																									'salk')
																							.attr(
																									'id',
																									'salk')
																							.val(
																									salk));
																}


																var dateValueList = $(
																		this)
																		.parent()
																		.parent()
																		.find(
																				'[name="validTill"]')
																		.val();
																//alert(dateValueList);

																if (dateValueList != 'Valid Till') {
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
																}

															});

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
																				'name') == 'loginStatusList') {
																	alert("skipping others");
																} else {
																	acCodeElement = $(
																			this)
																			.parent()
																			.next()
																			.next()
																			.next();

																	$(this)
																			.parent()
																			.parent()
																			.find(
																					'*')
																			.attr(
																					'disabled',
																					false);
																}
															});

											$("input:checkbox:not(:checked)",
													tableControl)
													.each(
															function() {

																if ($(this)
																		.attr(
																				'name') == 'loginStatusList') {

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

																	acCodeElement = $(
																			this)
																			.parent()
																			.next()
																			.next()
																			.next();

																}
															});

										});
						//logic to add
						document.getElementById("example").rows[0].cells[0].innerHTML = 'Check';

					});
