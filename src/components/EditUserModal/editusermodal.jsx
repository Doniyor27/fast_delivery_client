import './editusermodal.css'

function EditUserModal () {
    return (
        <div className="edit-user-modal-box">
            <div className="edit-user-modal-header">
                <h2 className="edit-user-modal-heading">Qo'shish</h2>
                <button className="edit-user-modal-close-btn">X</button>
            </div>
            <div className="edit-user-modal-input-box">
                <p className="edit-user-modal-input-box-title first">Login</p>
                <input className="edit-user-modal-input" type="text"/>
            </div>
            <div className="edit-user-modal-input-box">
                <p className="edit-user-modal-input-box-title second">Password</p>
                <input className="edit-user-modal-input" type="password"/>
            </div>
            <button className="edit-user-modal-btn">Qo'shish</button>
        </div>
    )
}

export default EditUserModal