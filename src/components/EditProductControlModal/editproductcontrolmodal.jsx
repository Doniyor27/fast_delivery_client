import './editproductcontrolmodal.css'

function EditProductControlModal () {
    return (
        <div className="edit-product-control-modal-box">
            <div className="edit-product-control-modal-header">
                <h2 className="edit-product-control-modal-heading">Qo'shish</h2>
                <button className="edit-product-control-modal-close-btn">X</button>
            </div>
            <p className="edit-product-control-modal-input-title">Tovar nomi</p>
            <input className="edit-product-control-modal-input" type="text" placeholder="masalan: Burger"/>
            <p className="edit-product-control-modal-radio-inputs-title">Holat</p>
            <div className="edit-product-control-modal-radio-inputs">
                <input className="edit-product-control-modal-radio-input" name="status" type="radio" /> on
                <input className="edit-product-control-modal-radio-input" name="status" type="radio" /> off
            </div>
            <button className="edit-product-control-modal-btn">Saqlash</button>
        </div>
    )
}

export default EditProductControlModal