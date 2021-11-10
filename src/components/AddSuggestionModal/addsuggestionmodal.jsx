import './addsuggestionmodal.css'

function AddSuggestionModal () {
    return (
        <div className="add-suggestion-modal-box">
            <div className="add-suggestion-modal-header">
                <h2 className="add-suggestion-modal-heading">Javob yo'llang</h2>
                <button className="add-suggestion-modal-close-btn">X</button>
            </div>
            <input className="add-suggestion-modal-input" type="text" placeholder="Assalomu alaykum, ..."/>
            <button className="add-suggestion-modal-btn">Yuborish</button>
        </div>
    )
}

export default AddSuggestionModal