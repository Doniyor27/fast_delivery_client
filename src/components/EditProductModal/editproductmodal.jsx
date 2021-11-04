import './editproductmodal.css'

function EditProductModal () {
    return (
        <div className="edit-product-box">
            <h2 className="edit-product-header">Tahrirlash</h2>
            <div className="first-row">
                <div className="input-box">
                    <p className="input-title">Do'kon nomi</p>
                    <input type="text" placeholder="masalan: evos"/>
                </div>
                <div className="input-box">
                    <p className="input-title">Telefon raqami</p>
                    <input type="text" placeholder="+998 __ ___ __ __"/>
                </div>
            </div>
            <div className="second-row">
                <div className="input-box">
                    <p className="input-title">Long</p>
                    <input type="text" placeholder="masalan: 41.3255497471851"/>
                </div>
                <div className="input-box">
                    <p className="input-title">Lang</p>
                    <input type="text" placeholder="masalan: 41.3255497471851"/>
                </div>
            </div>
            <div className="third-row">
                <div className="input-box">
                    <p className="input-title">Manzil</p>
                    <input type="text" placeholder="masalan: To'ytepa" />
                </div>
                <div className="radio-input-box">
                    <p className="input-title">Holat</p>
                    <div className="radio-inputs">
                        <input name="status" type="radio"/> on 
                        <input name="status" type="radio"/> off
                    </div>
                </div>
            </div>
            <button className="edit-product-btn">Saqlash</button>
        </div>
    )
}

export default EditProductModal