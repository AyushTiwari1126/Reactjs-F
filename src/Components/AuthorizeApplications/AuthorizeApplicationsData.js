
import ButtonActions from "../ButtonActions";
import AuthorizeApplicationTable from "./AuthorizeApplicationTable";

/*
props structure
{
    users:
    onAuthorize:onAuthorize([users])
    onUserChange:(users)
}

user{
    ApplicationId:
name:
checked:
nric:
updateDate:
key:
}
*/

/*
  {name: "A1031505520082144" , CustomerName: "Hafiz",  Nric: "8518112634",updateDate: "31-10-2019"},
  */
function AuthorizeApplicationData(props) {

    const onAuthorize = props.onAuthorize;
    console.log(props);

    return (
        <>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <ButtonActions items={[{id:"auth", title: "Authorize", is_primary: true }]}
                                    alignment="right"
                                    onClick={onAuthorize} />

                                <h5 className="card-title">Authorize Applications</h5>
                                <AuthorizeApplicationTable
                                users = {props.users}
                                onChange={props.onUserChange}
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AuthorizeApplicationData;
