import './adddrivermodal.css'

function AddDriverModal () {
    return (
        <div className="add-driver-modal-box">
            <div className="add-driver-modal-header">
                <h2 className="add-driver-modal-heading">Qo'shish</h2>
                <button className="add-driver-modal-close-btn">X</button>
            </div>
            <div className="add-driver-modal-first-row">
                <div className="add-driver-modal-input-box">
                    <p className="add-driver-modal-input-title">Driver name</p>
                    <input className="add-driver-modal-input" placeholder="Name" type="text" />
                </div>
                <div className="add-driver-modal-input-box">
                    <p className="add-driver-modal-input-title">D.O.B.</p>
                    <input className="add-driver-modal-input" placeholder="masalan: 22.11.1999" type="text" />
                </div>
            </div>
            <div className="add-driver-modal-second-row">
                <div className="add-driver-modal-input-box">
                    <p className="add-driver-modal-input-title">Telefon raqami</p>
                    <input className="add-driver-modal-input" placeholder="+998 __ ___ __ __" type="text" />
                </div>
                <div className="add-driver-modal-input-box">
                    <p className="add-driver-modal-input-title">Avtoraqam</p>
                    <input className="add-driver-modal-input" placeholder="masalan: 20 C 777 BB" type="text" />
                </div>
            </div>
            <div className="add-driver-modal-third-row">
                <div className="add-driver-modal-input-box">
                    <p className="add-driver-modal-input-title">Turi</p>
                    <input className="add-driver-modal-input" placeholder="masalan: Tico" type="text" />
                </div>
                <div className="add-driver-modal-radio-input-box">
                    <p className="add-driver-modal-radio-input-title">Holat</p>
                    <div className="add-driver-modal-radio-inputs">
                        <input name="status" type="radio"/> on 
                        <input name="status" type="radio"/> off
                    </div>
                </div>
            </div>
            <button className="add-driver-modal-btn">Qo'shish</button>
        </div>
    )
}

export default AddDriverModal