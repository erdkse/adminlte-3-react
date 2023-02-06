import React from 'react'

const AltArr = () => {
  return (

      <form>
        <center>
             <h2 className="thead-dark text-uppercase bg-lightblue">Alternate Arrangement</h2>
             </center>
            <div id="table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-10"><div className="dataTables_length" id="table_length"><label>Show <select name="table_length" aria-controls="table" className="custom-select custom-select-sm form-control form-control-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div></div><div className="col-sm-12 col-md-2"><div id="table_filter" className="dataTables_filter"><label alignItems='left'>Search:<input type="search" className="form-control form-control-sm" placeholder="" aria-controls="table"/></label></div></div></div><div className="row"><div className="col-sm-12">
            <table id="table" className="table table-striped table-bordered dataTable no-footer" role="grid" aria-describedby="table_info" cellSpacing={0} width="100%"> 
           <thead>
           <tr role="row"><th className="sorting_asc" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Sl No: activate to sort column descending"> Sl No</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Faculty: activate to sort column ascending"> Faculty</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Subject Code: activate to sort column ascending"> Subject Code</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Hours: activate to sort column ascending"> Hours</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Day: activate to sort column ascending"> Day</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending"> Date</th><th className="sorting" tabIndex={0} aria-controls="table" rowSpan={1} colSpan={1} aria-label="Action: activate to sort column ascending"> Action</th></tr>
             </thead>
             <tbody>
            

            <tr className="odd"><td valign="top" colSpan={7} className="dataTables_empty"><center>No data available in table</center></td></tr></tbody>


            </table></div></div> 
            <div className="row"><div className="col-sm-12 col-md-10"><div className="dataTables_info" id="table_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries </div></div><div className="col-sm-12 col-md-2"><div className="dataTables_paginate paging_simple_numbers" id="table_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="table_previous"><a href="#" aria-controls="table" data-dt-idx="0" tabIndex={0} className="page-link">Previous</a></li><li className="paginate_button page-item next disabled" id="table_next"><a href="#" aria-controls="table" data-dt-idx="1" tabIndex={0} className="page-link">Next</a></li></ul></div></div></div></div>


{/* <script src="https://hrms.secab.org/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="https://hrms.secab.org/assets/datatables/js/jquery.dataTables.min.js"></script>
<script src="https://hrms.secab.org/assets/datatables/js/dataTables.bootstrap.js"></script>


<script type="text/javascript"> */}



<div className="modal fade" id="modal_form" role="dialog">
<div className="modal-dialog card">
<div className="modal-content">
<div className="modal-header">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"></span></button>
    <h3 className="modal-title">Leave Form</h3>
</div>
<div className="modal-body card-body" >
    
        <input type="hidden" value="" name="id"/> 
         <div className="card">
                <div className="card-header">
                    <strong>Leave Form</strong> 
                </div>
<div>

<h4>A PHP Error was encountered</h4>

<p>Severity: Notice</p>
<p>Message:  Use of undefined constant php - assumed 'php'</p>
<p>Filename: faculty/fapproval.php</p>
<p>Line Number: 367</p>


<p>Backtrace:</p>






<p>
File: E:\vhosts\secab.org\hrms.secab.org\application\views\salman\faculty\fapproval.php<br />
Line: 367<br />
Function: _error_handler			</p>








<p>
File: E:\vhosts\secab.org\hrms.secab.org\application\controllers\salman\Leave.php<br />
Line: 514<br />
Function: view			</p>






<p>
File: E:\vhosts\secab.org\hrms.secab.org\index.php<br />
Line: 315<br />
Function: require_once			</p>




</div>
                <div className="card-body card-block">
                
                
                

                <div className="form-group">
                        <label className=" form-control-label">Select Leave</label>
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-usd"></i></div>
                            <select name="ltp" id="leave" className="form-control">
                                                                <option value="0">Please select Leave type</option>
                                                                
                                                              
                                                                
                                                            </select>
                        </div>
                      
                    </div>
               


                
                    <div className="form-group">
                        <label className=" form-control-label">From Date</label>
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                            <input type="text" name="fdp" id="fdp" className="form-control datepicker hasDatepicker"/>
                        </div>
                       
                    </div>
                
            
            
                     <div className="form-group">
                        <label className=" form-control-label">To Date</label>
                        <div className="input-group">
                            <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                            <input type="text" name="tdp" id="tdp" className="form-control datepicker hasDatepicker"/>
                        </div>
                       
                    </div>
                
                <div className="card-footer">
                                                <button type="submit" id="apl1" className="btn btn-success btn-sm">
                                                    <i className="fa fa-dot-circle-o"></i> Submit
                                                </button>
                                                <button type="reset" className="btn btn-danger btn-sm">
                                                    <i className="fa fa-ban"></i> Reset
                                                </button>
                                            </div>
            </div>
                    
            					
    
                    
                    <div className="card">
                     <div className="card-header">
                    <strong>Alternate Arrengment</strong>
                </div>
              </div>
            </div>
</div>
<div className="modal-footer">
    <button type="button" id="btnSave" className="btn btn-primary">Save</button>
    <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
</div>
</div>
</div>



</div>


</form>
  )
}

export default AltArr
