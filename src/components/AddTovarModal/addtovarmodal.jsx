import './addtovarmodal.css'

function AddTovarModal () {
    return (
        <div className="add-tovar-modal-box">
            <div className="add-tovar-modal-header">
                <h2 className="add-tovar-modal-heading">Qo'shish</h2>
                <button className="add-tovar-modal-close-btn">X</button>
            </div>
            <div className="add-tovar-modal-wrapper">
                <div className="add-tovar-modal-img"></div>
                <div className="add-tovar-modal-form">
                    <div className="add-tovar-modal-first-row">
                        <div className="add-tovar-modal-input-box">
                            <p className='add-tovar-modal-input-box-title'>Tovar nomi</p>
                            <input className="add-tovar-modal-input" type="text" />
                        </div>
                        <div className="add-tovar-modal-input-box">
                            <p className='add-tovar-modal-input-box-title'>Ma'lumot</p>
                            <input className="add-tovar-modal-input" type="text" />
                        </div>
                    </div> 
                    <div className="add-tovar-modal-second-row">
                        <div className="add-tovar-modal-input-box">
                            <p className='add-tovar-modal-input-box-title'>Narxi</p>
                            <input className="add-tovar-modal-input" type="text" />
                        </div>
                        <div className="add-tovar-modal-input-box">
                            <p className='add-tovar-modal-input-box-title'>Rasmga link</p>
                            <input className="add-tovar-modal-input" type="text" />
                        </div>
                    </div> 
                    <div className="add-tovar-modal-third-row">
                        <div className="add-tovar-modal-radio-input-box">
                            <p className="add-tovar-modal-input-title">Holat</p>
                            <div className="add-tovar-modal-radio-inputs">
                                <input name="status" type="radio"/> on 
                                <input name="status" type="radio"/> off
                            </div>
                        </div>
                        <button className="add-tovar-modal-btn">Saqlash</button>    
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default AddTovarModal