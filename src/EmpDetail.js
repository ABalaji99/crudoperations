import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://vercel.com/abalaji99/crudsops/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Friends Create</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>The Employee name is : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Department is : {empdata.department}</h5>
                        <h5>Email is : {empdata.email}</h5>
                        <h5>Country is : {empdata.country}</h5>
                        <h5>Phone is : {empdata.phone}</h5>
                        
                        <h5>Website is : <a href="">{empdata.website}</a></h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;