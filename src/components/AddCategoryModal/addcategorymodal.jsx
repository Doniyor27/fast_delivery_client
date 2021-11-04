import './addcategorymodal.css'

function AddCategoryModal () {
    return (
        <div className="add-category-box">
            <button className="add-category-close-btn">X</button>
            <h2 className="add-category-header">Qo'shish</h2>
            <p className="add-category-input-text">Kategoriya nomi</p>
            <input className="add-category-input" type="text" placeholder="masalan: texnika" />
            <p className="add-category-radio-text">Holat</p>
            <div className="buttons">
                <input className="add-category-radio" name="status" type="radio" checked/> on
                <input className="add-category-radio" name="status" type="radio"/> off
            </div>
            <button className="add-category-button">Qo'shish</button>
        </div>
    )
}

export default AddCategoryModal