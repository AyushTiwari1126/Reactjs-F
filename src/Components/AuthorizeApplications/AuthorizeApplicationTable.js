
import AuthorizeApplicationTableRow from "./AuthorizeApplicationTableRow";

/*
props{
    onChange:[user]
    users:[user]


}`
*/
export default function AuthorizeApplicationTable(props) {
    const { onChange, users } = props;
   
    const getCheckedStatusForAllSelect = ()=>{
            return !users.some(user=>user.isChecked === false);
    }
    
    return (
        <>
            <div className="datatable-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">
                                <input
                                    type="checkbox"
                                    className="form-check-input" name="allSelect" checked={getCheckedStatusForAllSelect()}
                                    onChange={(e) => {
                                         const {checked} = e.target;
                                        let new_users = users.map((user) => {
                                            return { ...user, isChecked: checked };
                                        });
                                        onChange(new_users);
                                    }}
                                />
                            </th>
                            <th scope="col">Application Id</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">NRIC</th>
                            <th scope="col">Updated Date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {users.map((user, index) =>
                            <AuthorizeApplicationTableRow
                                ApplicationId={user.ApplicationId}
                                name={user.name}
                                checked={user.isChecked}
                                nric={user.nric}
                                updateDate={user.updateDate}
                                onChange={(e) => {
                                    const { checked } = e.target;
                                    const updatedUsers = users.map(a=>{
                                        if(a.ApplicationId === user.ApplicationId){
                                            return {...user, isChecked:checked};
                                        }else{
                                            return a;
                                        }
                                    });
                                    onChange(updatedUsers);
                                }}
                                key={index}
                            />
                        )
                        }


                    </tbody>
                </table>
            </div>
        </>

    );
}
