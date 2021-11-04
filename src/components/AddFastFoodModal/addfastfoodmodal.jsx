import './addfastfoodmodal.css'

function AddFastFoodModal () {
    return (
        <div className="add-fast-food-box">
            <button className="add-fast-food-close-btn">X</button>
            <h2 className="add-fast-food-header">Qo'shish</h2>
            <p className="add-fast-food-input-text">Tovar nomi</p>
            <input className="add-fast-food-input" type="text" placeholder="masalan: Burger" />
            <p className="add-fast-food-radio-text">Holat</p>
            <div className="buttons">
                <input className="add-fast-food-radio" name="status" type="radio" checked/> on
                <input className="add-fast-food-radio" name="status" type="radio"/> off
            </div>
            <button className="add-fast-food-button">Saqlash</button>
        </div>
    )
}

export default AddFastFoodModal