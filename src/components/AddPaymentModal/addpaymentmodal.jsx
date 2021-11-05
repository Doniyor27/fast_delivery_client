import './addpaymentmodal.css'

function AddPaymentModal () {
    return (
        <div className="add-payment-modal-box">
            <div className="add-payment-modal-header">
                <h2 className="add-payment-modal-heading">Qo'shish</h2>
                <button className="add-payment-modal-close-btn">X</button>
            </div>
            <div className="add-payment-modal-input-box">
                <p className="add-payment-modal-input-box-title first">Nomi</p>
                <input className="add-payment-modal-input" type="text" placeholder="Payment name"/>
            </div>
            <div className="add-payment-modal-input-box">
                <p className="add-payment-modal-input-box-title second">Telegram button name</p>
                <input className="add-payment-modal-input" type="password" placeholder="masalan: Click"/>
            </div>
            <button className="add-payment-modal-btn">Qo'shish</button>
        </div>
    )
}

export default AddPaymentModal