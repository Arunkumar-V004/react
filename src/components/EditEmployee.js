import { useEffect, useState } from "react";


const EditEmployee = (props) => {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser);
    }, [props]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    };

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form onSubmit={
                                event => {
                                    event.preventDefault();
                                    if (!user.name || !user.designation) return;
                                    props.update(user.id, user);
                                }
                            }>
                                <div className="form-group">
                                    <label> Name: </label>
                                    <input className="form-control" placeholder="Name" name="name" onChange={handleInputChange} value={user.name} />
                                </div>
                                <div className="form-group pt-3 pb-3">
                                    <label> Designation: </label>
                                    <input className="form-control" placeholder="Designation" name="designation" onChange={handleInputChange} value={user.designation} />
                                </div>
                                <button className="btn btn-info">Update</button>
                                <button className="btn btn-secondary mx-3" onClick={() => {
                                    props.setEditing(false);
                                }}>Cancel</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default EditEmployee;