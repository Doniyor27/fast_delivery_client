import './editdrivermodal.css'

function EditDriverModal () {
    return (
        <div className="edit-driver-modal-box">
            <div className="edit-driver-modal-header">
                <h2 className="edit-driver-modal-heading">Qo'shish</h2>
                <button className="edit-driver-modal-close-btn">X</button>
            </div>
            <div className="edit-driver-modal-first-row">
                <div className="edit-driver-modal-input-box">
                    <p className="edit-driver-modal-input-title">Driver name</p>
                    <input className="edit-driver-modal-input" placeholder="Name" type="text" />
                </div>
                <div className="edit-driver-modal-input-box">
                    <p className="edit-driver-modal-input-title">D.O.B.</p>
                    <input className="edit-driver-modal-input" placeholder="masalan: 22.11.1999" type="text" />
                </div>
            </div>
            <div className="edit-driver-modal-second-row">
                <div className="edit-driver-modal-input-box">
                    <p className="edit-driver-modal-input-title">Telefon raqami</p>
                    <input className="edit-driver-modal-input" placeholder="+998 __ ___ __ __" type="text" />
                </div>
                <div className="edit-driver-modal-input-box">
                    <p className="edit-driver-modal-input-title">Avtoraqam</p>
                    <input className="edit-driver-modal-input" placeholder="masalan: 20 C 777 BB" type="text" />
                </div>
            </div>
            <div className="edit-driver-modal-third-row">
                <div className="edit-driver-modal-input-box">
                    <p className="edit-driver-modal-input-title">Turi</p>
                    <input className="edit-driver-modal-input" placeholder="masalan: Tico" type="text" />
                </div>
                <div className="edit-driver-modal-radio-input-box">
                    <p className="edit-driver-modal-radio-input-title">Holat</p>
                    <div className="edit-driver-modal-radio-inputs">
                        <input name="status" type="radio"/> on 
                        <input name="status" type="radio"/> off
                    </div>
                </div>
            </div>
            <button className="edit-driver-modal-btn">Qo'shish</button>
        </div>
    )
}

export default EditDriverModal