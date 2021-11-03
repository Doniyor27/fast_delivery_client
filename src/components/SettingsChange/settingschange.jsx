import './settingschange.css'

function SettingsDrivers () {
    return (
        <>
            <h2 className="heading">Change client info</h2>
            <div className="first-row">
                <div className="input-box">
                    <p className="input-text">Nomi</p>
                    <input className="input company-name" placeholder="Kompaniya nomi" type="text"/>
                </div>
                <div className="input-box">
                    <p className="input-text">Media link</p>
                    <input className="input media-link" placeholder="Media uchun link kiriting" type="text"/>
                </div>
                <div className="input-box">
                    <p className="input-text">Yetkazib berish narxi</p>
                    <input className="input delivery-price" placeholder="masalan: 10 000 so'm" type="number"/>
                </div>
            </div>
            <div className="second-row">
                <div className="input-box">
                    <p className="input-text">Katalog link</p>
                    <input className="input catalog-link" placeholder="Katalog uchun link kiriting" type="text"/>
                </div>
                <div className="input-box">
                    <p className="input-text">Telefon raqam</p>
                    <input className="input phone-number" placeholder="+998 __ ___ __ __" type="tel"/>
                </div>
                <button className="update-btn">Yangilash</button>
            </div>
        </>
    )
}

export default SettingsDrivers