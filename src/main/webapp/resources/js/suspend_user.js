$(document).ready(function(){
	var table = $('#example').DataTable( {
		  "aaData": data,
		  "aoColumns": [
			{"mData": 'id'},
			  {
	               "mData": "deptName",
		            "mRender": function ( data, type, full ) {
		            //return "<a href='#' class='link-details'>"+data+"</a>"
				return "<a>"+data+"</a>"
		             }
	            },
		    { "mData": "userName"},
		  ],
		  "paging":true,
	        
	        'columnDefs': [
	            {
	               'targets': 0,
	               'checkboxes': {
	                  'selectRow': true
	               }
	            },
	            {
		               'targets': 3,
		               "mData": "loginStatus",
			             "mRender": function ( data, type, full ) {
			            	 if(data == true) {
			            		 return '<center><span class="label label-success">Active</span></center>';
			            	 }else{
			               		return '<center><span class="label label-danger">Inactive</span></center>';
			            	 }
			             }
		            },
	            { "width": "20%", "targets": 3 },
	            {"className": "dt-center", "targets": "_all"} 

	            
	         ],

	         'select': {
	            'style': 'multi'
	         },
	         'order': [[1, 'asc']]
	         
		});
	var csrfParameter = $("meta[name='_csrf_parameter']").attr("content");
	var csrfHeader = $("meta[name='_csrf_header']").attr("content");
	var csrfToken = $("meta[name='_csrf']").attr("content");
	var headers = {};
	headers[csrfHeader] = csrfToken;
	
	$("#example tbody").on('click','.link-details', function(){
		var dept_details = table.row( $(this).parents('tr') ).data();
		var data = {};
		data[csrfParameter] = csrfToken;
		data["userName"] = dept_details.userName;
		$.ajax({
	          url: 'deptdetails',
	          type: 'POST',
	          data:data, //'userName='+dept_details.userName,
	          dataType: 'html'
	     }).done(function(data){
		
	   $('#dynamic-content').html(''); 
        $('#dynamic-content').html(data);
			
	     });
	     $("#DescModal").modal('show');
	});
	
	
	
	
	  $('#login_active, #login_deactive').on('click', function(e){
		  var rows_selected = table.column(0).checkboxes.selected();
		
		  $.each(rows_selected, function(index, rowId){
		        $('#frm-example').append(
			             $('<input>')
			                .attr('type', 'hidden')
			                .attr('name', 'users')
			                .attr('id', 'users')
			                .val(rowId)
			         );
		        
		  });
		  
		  if($('#users').val() != null){
			  $('#frm-example').submit();
		  }else{
			  alert("Please select atleast 1 department.");
			  return false;
		  }
	  
	  });
} );

