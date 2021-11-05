import './addusermodal.css'

function AddUserModal () {
    return (
        <div className="add-user-modal-box">
            <div className="add-user-modal-header">
                <h2 className="add-user-modal-heading">Qo'shish</h2>
                <button className="add-user-modal-close-btn">X</button>
            </div>
            <div className="add-user-modal-input-box">
                <p className="add-user-modal-input-box-title first">Login</p>
                <input className="add-user-modal-input" type="text"/>
            </div>
            <div className="add-user-modal-input-box">
                <p className="add-user-modal-input-box-title second">Password</p>
                <input className="add-user-modal-input" type="password"/>
            </div>
            <button className="add-user-modal-btn">Qo'shish</button>
        </div>
    )
}

export default AddUserModal