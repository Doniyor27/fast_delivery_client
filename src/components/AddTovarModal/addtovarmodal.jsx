import './addtovarmodal.css'

function AddTovarModal () {
    return (
        <div className="add-tovar-modal-box">
            <h2 className="heading">Qo'shish</h2>
            <div className="img"></div>
            <div className="first-row">
                <div className="input-box">
                    <p>Tovar nomi</p>
                    <input placeholder="masalan: Lavash Big" type="text"/>
                </div>
                <div className="input-box">
                    <p>Ma'lumot</p>
                    <input placeholder="info..." type="text"/>
                </div>
            </div>
            <div className="second-row">
                <div className="input-box">
                    <p>Narxi</p>
                    <input placeholder="masalan: 20 000" type="text"/>
                </div>
                <div className="input-box">
                    <p>Rasmga link</p>
                    <input placeholder="type the link here" type="text"/>
                </div>
            </div>
            <div className="third-row">
                <div className="radio-input-box">
                    <p className="input-title">Holat</p>
                    <div className="radio-inputs">
                        <input name="status" type="radio"/> on 
                        <input name="status" type="radio"/> off
                    </div>
                </div>
                <button className="save-button">Saqlash</button>
            </div>
        </div>
    )
}

export default AddTovarModal