import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit,FiSearch } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";


const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3000/employee/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:3000/employee").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Friends Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add Friend</Link>
                    </div>
                    <table className="table table-bordered  table-striped ">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Department</td>
                                <td>Email</td>
                                <td>Country</td>
                                <td>Phone</td>
                                <td>Website</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.lastname}</td>
                                        <td>{item.department}</td>
                                        <td>{item.email}</td>
                                        <td>{item.country}</td>
                                        <td>{item.phone}</td>
                                        <td><a href="">{item.website}</a></td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success"><FiEdit/></a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger"><RiDeleteBin6Fill/></a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary"><FiSearch/></a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;