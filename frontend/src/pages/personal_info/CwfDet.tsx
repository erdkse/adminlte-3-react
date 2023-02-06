import React from 'react'
import {Gatekeeper} from 'gatekeeper-client-sdk';

  //   try {
  //     const response = await Gatekeeper.getProfile();
  //     dispatch(loadUser(response));
  //     await sleep(1000);
  //     setIsAppLoaded(true);
  //   } catch (error) {
  //     dispatch(logoutUser());
  //     await sleep(1000);
  //     setIsAppLoaded(true);
  //   }
  // };
  // useEffect(() => {
  //   fetchProfile();
    // return () => {
       
    //   };
    // }, []);
function CwfDet() {
  return (
    <div>
        <div id="print" className="card card-body">
    <h2 align="center">
        SECAB INOVATION AND INCUBATION CENTRE    </h2>

    <table className="table table-bordered font-weight-bold mt-3">
        <thead className="bg-lightblue head">
            <tr className="text-center">
                <td colSpan={4}>Name : MOHAMMAD AZEEM MANIYAR</td>
                <td colSpan={4}>Department : SOFTWARE DEVELOPMENT CELL</td>
            </tr>
            <tr>
                <th>sl no</th>
                <th>applied on</th>
                <th>deduction started </th>
                <th>loan amount</th>
                <th>paid amount</th>
                <th>balance</th>
                <th>Witness</th>
            </tr>
        </thead>
        <tbody>
                    </tbody>
    </table>

    <div id="result"></div>
    </div>
    </div>
)
}

export default CwfDet