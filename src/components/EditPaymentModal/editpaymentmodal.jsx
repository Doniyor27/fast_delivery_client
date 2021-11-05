import './editpaymentmodal.css'

function EditPaymentModal () {
    return (
        <div className="edit-payment-modal-box">
            <div className="edit-payment-modal-header">
                <h2 className="edit-payment-modal-heading">Qo'shish</h2>
                <button className="edit-payment-modal-close-btn">X</button>
            </div>
            <div className="edit-payment-modal-input-box">
                <p className="edit-payment-modal-input-box-title first">Nomi</p>
                <input className="edit-payment-modal-input" type="text" placeholder="Payment name"/>
            </div>
            <div className="edit-payment-modal-input-box">
                <p className="edit-payment-modal-input-box-title second">Telegram button name</p>
                <input className="edit-payment-modal-input" type="password" placeholder="masalan: Click"/>
            </div>
            <button className="edit-payment-modal-btn">Qo'shish</button>
        </div>
    )
}

export default EditPaymentModal