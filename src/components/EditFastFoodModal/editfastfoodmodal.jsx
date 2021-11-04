import './editfastfoodmodal.css'

function EditFastFoodModal () {
    return (
        <div className="edit-fast-food-box">
            <button className="edit-fast-food-close-btn">X</button>
            <h2 className="edit-fast-food-header">Qo'shish</h2>
            <p className="edit-fast-food-input-text">Tovar nomi</p>
            <input className="edit-fast-food-input" type="text" placeholder="masalan: Burger" />
            <p className="edit-fast-food-radio-text">Holat</p>
            <div className="buttons">
                <input className="edit-fast-food-radio" name="status" type="radio" checked/> on
                <input className="edit-fast-food-radio" name="status" type="radio"/> off
            </div>
            <button className="edit-fast-food-button">Saqlash</button>
        </div>
    )
}

export default EditFastFoodModal