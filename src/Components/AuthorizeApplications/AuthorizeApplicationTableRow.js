

/*
ApplicationId:
name:
checked:
nric:
updateDate:
onChange:
key:
*/

export default function AuthorizeApplicationTableRow(props) {

    const { ApplicationId, name, nric, updateDate, checked, onChange } = props;
    return(
        <tr className="align-middle" key={ApplicationId}>
            <input
                type="checkbox"
                className="form-check-input mx-2 my-3 border-1"
                name={ApplicationId}
                checked={checked}
                onChange={onChange}
            />
            <td>{ApplicationId}</td>
            <td>{name}</td>
            <td>{nric}</td>
            <td>{updateDate}</td>
        </tr>
    );
}