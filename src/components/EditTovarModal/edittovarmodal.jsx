import './edittovarmodal.css'

function EditTovarModal () {
    return (
        <div className="edit-tovar-modal-box">
            <div className="edit-tovar-modal-header">
                <h2 className="edit-tovar-modal-heading">Tahrirlash</h2>
                <button className="edit-tovar-modal-close-btn">X</button>
            </div>
            <div className="edit-tovar-modal-wrapper">
                <div className="edit-tovar-modal-img"></div>
                <div className="edit-tovar-modal-form">
                    <div className="edit-tovar-modal-first-row">
                        <div className="edit-tovar-modal-input-box">
                            <p className='edit-tovar-modal-input-box-title'>Tovar nomi</p>
                            <input className="edit-tovar-modal-input" type="text" />
                        </div>
                        <div className="edit-tovar-modal-input-box">
                            <p className='edit-tovar-modal-input-box-title'>Ma'lumot</p>
                            <input className="edit-tovar-modal-input" type="text" />
                        </div>
                    </div> 
                    <div className="edit-tovar-modal-second-row">
                        <div className="edit-tovar-modal-input-box">
                            <p className='edit-tovar-modal-input-box-title'>Narxi</p>
                            <input className="edit-tovar-modal-input" type="text" />
                        </div>
                        <div className="edit-tovar-modal-input-box">
                            <p className='edit-tovar-modal-input-box-title'>Rasmga link</p>
                            <input className="edit-tovar-modal-input" type="text" />
                        </div>
                    </div> 
                    <div className="edit-tovar-modal-third-row">
                        <div className="edit-tovar-modal-radio-input-box">
                            <p className="edit-tovar-modal-input-title">Holat</p>
                            <div className="edit-tovar-modal-radio-inputs">
                                <input name="status" type="radio"/> on 
                                <input name="status" type="radio"/> off
                            </div>
                        </div>
                        <button className="edit-tovar-modal-btn">Saqlash</button>    
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default EditTovarModal