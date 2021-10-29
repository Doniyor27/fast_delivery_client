import './ordermodal.css'

function orderModal () {
    return (
        <div class="box">
            <button class="close-button">X</button>
            <h2 class="heading">Holatni o'zgartirish</h2>
            <ul class="select-list">
                <li class="select-list-option">
                    <p>buyurtma</p>
                </li>
                <li class="select-list-option">
                    <p>qabul</p>
                </li>
                <li class="select-list-option">
                    <p>yetkazish</p>
                </li>
                <li class="select-list-option">
                    <p>yakun</p>
                </li>
                <li class="select-list-option">
                    <p>bekor</p>
                </li>
            </ul>
            <button class="save-button">Saqlash</button>
        </div>
    )
}