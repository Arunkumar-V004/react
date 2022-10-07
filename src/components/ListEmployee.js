const ListEmployee = (props) => {
    console.log('tesssssssssssssssssssssss', props)
    
    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>designation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.users.length > 0 ? (
                            props.users.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.designation}</td>
                                    <td>
                                        <button onClick={() => { props.editUser(data) }} className="btn btn-info">Update</button>
                                        <button style={{ marginLeft: "10px" }} onClick={() => props.deleteUser(data.id)} className="btn btn-danger">Delete </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="text-center" colSpan={3}>No users found</td>
                            </tr>
                        )}


                    </tbody>
                </table>

            </div>

        </div>

    )
}

export default ListEmployee;