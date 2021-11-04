import './addproductcontrolmodal.css'

function AddProductControlModal () {
    return (
        <div className="add-product-control-modal-box">
            <div className="add-product-control-modal-header">
                <h2 className="add-product-control-modal-heading">Qo'shish</h2>
                <button className="add-product-control-modal-close-btn">X</button>
            </div>
            <p className="add-product-control-modal-input-title">Tovar nomi</p>
            <input className="add-product-control-modal-input" type="text" placeholder="masalan: Burger"/>
            <p className="add-product-control-modal-radio-inputs-title">Holat</p>
            <div className="add-product-control-modal-radio-inputs">
                <input className="add-product-control-modal-radio-input" name="status" type="radio" /> on
                <input className="add-product-control-modal-radio-input" name="status" type="radio" /> off
            </div>
            <button className="add-product-control-modal-btn">Saqlash</button>
        </div>
    )
}

export default AddProductControlModal