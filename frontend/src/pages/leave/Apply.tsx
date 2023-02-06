import React from 'react'

const Apply = () => {
  return (


<div className="">
    <div className="row">
        <div className="col-sm-12">
            <div className="card table-wrapper animated fadeIn">
                <div className=" card-header bg-warning"><strong>Leave Details</strong></div>
                <div className="card-body ">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th text-align='center'>Leave Type</th>
                                <th text-align='center'>Total</th>
                                <th text-align='center'>Applied</th>
                                <th text-align='center'>Taken</th>
                                <th text-align='center'>Available</th>
                            </tr>
                        </thead>
                        <tbody><tr>
                            <td text-align='center'>Casual Leave</td>
                            <td text-align='center'>
                                12                            </td>
                            <td text-align='center'>
                                0                            </td>
                            <td text-align='center'>
                                3                            </td>
                            <td text-align='center'>
                                9                            </td>
                        </tr>
                        <tr>
                            <td text-align='center'>Emergency Leave</td>
                            <td text-align='center'>
                                3                            </td>
                            <td text-align='center'>
                                0                            </td>
                            <td text-align='center'>
                                2                            </td>
                            <td text-align='center'>
                                1                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
        </div>
        <br/>
        <div className="col-sm-12">
            <div className="card table-wrapper animated fadeIn">
                <div className="card-header bg-info"><strong>Leave Form</strong></div>
                <form method="post" id="upload_form" encType="multipart/form-data" action="https://hrms.secab.org/gous/leave_c/leaveApplied">
				<input type="hidden" name="role" id="role" value="SDC"/><input type="hidden" name="cod" id="cod" value="0"/><input type="hidden" name="teach_od" id="teach_od" value="0"/>                    <div className="card-body card-block">
                        <div className="form-group">
                            <label className=" form-control-label">Select Leave</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-usd"></i></div>
                                <select name="ltp" id="leave" className="form-control" required>
                                    <option value="">Please select Leave type </option>
                                    <option value="compoff"> Comp off </option>
                                    <option value="Casual Leave">Casual Leave</option><option value="Emergency">Emergency</option><option value="Loss of Pay">Loss of Pay</option><option value="Maternity Leave">Maternity Leave</option><option value="On Duty">On Duty</option><option value="Paternity Leave">Paternity Leave</option>                                </select>
                            </div>
                        </div>
                        <div id="hfday">

                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="half" className="half" id="full" value="Fullday" checked/> Full Day<br/>
                            </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="radio" name="half" className="half" id="half" value="Halfday"/> Half Day<br/>
                        </div>
						                        <div className="form-group" id="df">
                            <label className=" form-control-label">From Date </label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                
                                <input min="2023-01-11" required type="date" name="fdp" id="fdp" className="form-control"/>
                                <br/>
                                <h6 className="text-danger col-sm-12 mt-3 " id="errorFromDate"></h6>
                            </div>
                        </div>
                        <div className="form-group" id="dt">
                            <label className=" form-control-label">To Date</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-calendar"></i></div>

                                <input min="2023-01-11" type="date" name="tdp" id="tdp" className="form-control"/>
                            </div>
                        </div>

                        <div id="alternateArrangement">

                        </div>


                        <div id="comp">
                            <label className=" form-control-label">Worked Date:</label>
                            <select id="workd" name="workd" className="form-control">
                                <option value="">Select Worked Date</option>
                                                            </select>
                            <br/>
                            <div className="form-group">
                                <label className=" form-control-label">Leave Date:</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                    <input type="date" name="compd" id="compd" className="form-control"/>
                                </div>
                            </div>

                            <div>
                                <label className=" form-control-label">Alternate Arrangement:</label>
                                <select id='alt' name='alt' className="form-control"></select>
                                    <option value=''>Select Alternate staff</option>
									<select id="cls1" name="compflty[]" className="form-control"> <option value="">Please select  arrangement</option>
                                    <option value="785|0|0|0|0|1|0|0|cmpo|SHYJU K R">SHYJU K R</option><option value="840|0|0|0|0|1|0|0|cmpo|syeda bushra">syeda bushra</option><option value="828|0|0|0|0|1|0|0|cmpo|sirajahmad sali">sirajahmad sali
</option><option value="829|0|0|0|0|1|0|0|cmpo|saba dange ">saba dange </option><option value="282|0|0|0|0|1|0|0|cmpo|s s hariyal">s s hariyal</option><option value="629|0|0|0|0|1|0|0|cmpo|Naseema.H.Athani">Naseema.H.Athani</option><option value="661|0|0|0|0|1|0|0|cmpo|Shabanam K Shaikh">Shabanam K Shaikh</option><option value="303|0|0|0|0|1|0|0|cmpo|shantaling kanni">shantaling kanni</option><option value="317|0|0|0|0|1|0|0|cmpo|mohammed moshin mirajkar">mohammed moshin mirajkar</option><option value="316|0|0|0|0|1|0|0|cmpo|lalsab lakondi">lalsab lakondi</option><option value="318|0|0|0|0|1|0|0|cmpo|janulla khan ">janulla khan </option><option value="319|0|0|0|0|1|0|0|cmpo|munir ahmed babarchi">munir ahmed babarchi</option><option value="328|0|0|0|0|1|0|0|cmpo|moulali kannur  ">moulali kannur  </option><option value="322|0|0|0|0|1|0|0|cmpo|a d takkalki">a d takkalki</option><option value="338|0|0|0|0|1|0|0|cmpo|bashir chatarki">bashir chatarki</option><option value="353|0|0|0|0|1|0|0|cmpo|zakir honutagi">zakir honutagi</option><option value="384|0|0|0|0|1|0|0|cmpo|r a punekar">r a punekar</option><option value="385|0|0|0|0|1|0|0|cmpo|md irfan karnal">md irfan karnal</option><option value="814|0|0|0|0|1|0|0|cmpo|Mehboob Lathi">Mehboob Lathi</option><option value="196|0|0|0|0|1|0|0|cmpo|shahid  inamdar">shahid  inamdar</option><option value="284|0|0|0|0|1|0|0|cmpo|md rafiq darga">md rafiq darga</option><option value="311|0|0|0|0|1|0|0|cmpo|aleemullah s muddebihal">aleemullah s muddebihal</option><option value="309|0|0|0|0|1|0|0|cmpo|mehaboob punekar">mehaboob punekar</option><option value="356|0|0|0|0|1|0|0|cmpo|nasir khan">nasir khan</option><option value="336|0|0|0|0|1|0|0|cmpo|naseema a attar">naseema a attar</option><option value="335|0|0|0|0|1|0|0|cmpo|shehnaz begum">shehnaz begum</option><option value="800|0|0|0|0|1|0|0|cmpo|Maksudahmad Fatepur">Maksudahmad Fatepur</option><option value="811|0|0|0|0|1|0|0|cmpo|Tabasum Guledgudd">Tabasum Guledgudd</option><option value="351|0|0|0|0|1|0|0|cmpo|rashid ahmed itagi">rashid ahmed itagi</option><option value="352|0|0|0|0|1|0|0|cmpo|md hanif m kannur">md hanif m kannur</option><option value="715|0|0|0|0|1|0|0|cmpo|abbasali bagawan">abbasali bagawan</option><option value="362|0|0|0|0|1|0|0|cmpo|goutam drobogol">goutam drobogol</option><option value="364|0|0|0|0|1|0|0|cmpo|md yaseen bagewadi">md yaseen bagewadi</option><option value="762|0|0|0|0|1|0|0|cmpo|Santosh nagesh bulbule">Santosh nagesh bulbule</option><option value="821|0|0|0|0|1|0|0|cmpo|Wahid kazi">Wahid kazi</option><option value="340|0|0|0|0|1|0|0|cmpo|sungauvva kamde">sungauvva kamde</option><option value="433|0|0|0|0|1|0|0|cmpo|moseen maniyar">moseen maniyar</option><option value="721|0|0|0|0|1|0|0|cmpo|SADIK MUJAWAR">SADIK MUJAWAR</option><option value="676|0|0|0|0|1|0|0|cmpo|Wasim Babarchi">Wasim Babarchi</option><option value="675|0|0|0|0|1|0|0|cmpo|Tohid Bagwan">Tohid Bagwan</option><option value="687|0|0|0|0|1|0|0|cmpo|JAWAD AHAMED">JAWAD AHAMED</option><option value="739|0|0|0|0|1|0|0|cmpo|Sachin Pande">Sachin Pande</option><option value="305|0|0|0|0|1|0|0|cmpo|mohammed arif naikodi">mohammed arif naikodi</option><option value="325|0|0|0|0|1|0|0|cmpo|Rajesab Husensab Ilkal">Rajesab Husensab Ilkal</option><option value="324|0|0|0|0|1|0|0|cmpo|fahim jahagirdar">fahim jahagirdar</option><option value="347|0|0|0|0|1|0|0|cmpo|mohammed abid imaratwale">mohammed abid imaratwale</option><option value="348|0|0|0|0|1|0|0|cmpo|abdulsab h ilkal">abdulsab h ilkal</option><option value="439|0|0|0|0|1|0|0|cmpo|sayed bagwan">sayed bagwan</option><option value="265|0|0|0|0|1|0|0|cmpo|syeda bushra">syeda bushra</option><option value="176|0|0|0|0|1|0|0|cmpo|sayeda mudabbira">sayeda mudabbira</option><option value="172|0|0|0|0|1|0|0|cmpo|gousulazam rafugar">gousulazam rafugar</option><option value="173|0|0|0|0|1|0|0|cmpo|mohammedsohail patel">mohammedsohail patel</option><option value="248|0|0|0|0|1|0|0|cmpo|samiullah ranibennur">samiullah ranibennur</option><option value="272|0|0|0|0|1|0|0|cmpo|khawajamoinuddin bawakhan">khawajamoinuddin bawakhan</option><option value="694|0|0|0|0|1|0|0|cmpo|SAYYEDA HUMERA QUADRI">SAYYEDA HUMERA QUADRI</option><option value="751|0|0|0|0|1|0|0|cmpo|Karishma m mujawar">Karishma m mujawar</option><option value="199|0|0|0|0|1|0|0|cmpo|jamaluddin junaidi">jamaluddin junaidi</option>                                </select>

                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <label className=" form-control-label">Punch In:</label>
                                    <p className="form-control" id="pin"></p>
                                </div>
                                <div className="col-6">
                                    <label className=" form-control-label">Punch Out:</label>
                                    <p className="form-control" id="pout"></p>
                                </div>
                            </div>
							<div className="form-group " id="commpoffup">
                            </div> 
                           <div>
                               <center> <button type="submit" className="btn btn-primary mr-3 rounded" id="sub" name="Sub">Submit</button></center>
                            </div>

                        </div>

                        <div className="form-group" id="description">
                            <label className=" form-control-label">Description</label>
                            <div className="input-group">
                                <div className="input-group-addon"><i className="fa fa-file"></i></div>
                                <textarea typeof="text" name="desc" id="desc" className="form-control" required></textarea>
                            </div>
                        </div>

                        <div id="odResult">

                        </div>

                        <center>
                            <button type="submit" className="submit rounded btn btn-success btn-sm">
                                <i className="fa fa-dot-circle-o"></i> Submit
                            </button>
                            <button type="reset" className="submit ml-3 rounded btn btn-danger btn-sm" >
                                <i className="fa fa-stop-circle" aria-hidden="true"></i> reset
                            </button>
                        </center>

                    </div>


                </form>
            </div>
        </div>
    </div>
</div>


)
}

export default Apply
