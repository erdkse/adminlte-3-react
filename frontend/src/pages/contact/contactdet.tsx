import React from 'react';
import {ContentHeader} from '@components';

const Contact = () => {
  return (
    <center>
<div className="content mt-3">

  
<div className="card">
<div className="card-header">
    <strong>Contact Details</strong>
</div>
<div className="card-body card-block">
    <form action="list_mobile" method="post"  className="form-horizontal">
        <center>


        <div className="col">
<div className="col-sm-7">
<div className="col-12 col-md-9">
                  <select
                    id="elect"
                    key="kk"
                    data-placeholder="Choose a Nomination Roll"
                    className="standardSelect form-control"
                    onChange={(e) => getcontdet(e)}
                  >
                    <option value="0" key="0">
                      Select Institute
                    </option>
                    {enames.map((enm, index) => (
                      <option value={enm.ename} key={enm.id}>
                        {enm.ename}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
  
<br/>
        <button type="submit" id="submit" className="btn btn-primary btn-sm">
            <i className="fa fa-dot-circle-o"></i> Submit
        </button>

        <button type="reset" className="btn btn-danger btn-sm">
            <i className="fa fa-ban"></i> Reset
        </button>
        </center>   
</form>
</div>
</div>
				        </div>
                        </center>
  );
};

export default Contact
