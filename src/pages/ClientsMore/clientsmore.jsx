import './clientsmore.css'

function ClientsMore () {
    return (
        <div className="clients-more-box">
            <div className="clients-more-header">
                <div className="clients-more-back-box"></div>
                <h2 className="clients-more-heading">Dimitri Mirko</h2>
                <div className="clients-more-orders-time-box">
                    <p className="clients-more-orders-time-text">Buyurtma vaqti</p>
                    <h3 className="clients-more-orders-count">May 22, 11:29</h3>
                </div>
                <div className="clients-more-phone-box">
                    <p className="clients-more-phone">+998 97 565 71 73</p>
                </div>
            </div>
            <div className="clients-more-main">
                <div className="clients-more-address">
                    <div className="clients-more-address-box">
                        Manzil
                    </div>
                    <p className="clients-more-address-link">Copy address link</p>
                </div>
                <div className="clients-more-status-box">
                    <h2 className="clients-more-status-heading">Holat</h2>
                    <div className="clients-more-status">null</div>
                </div>
                <div className="clients-more-driver-box">
                    <h2 className="clients-more-driver-heading">Driver</h2>
                    <div className="clients-more-driver-autonumber">
                        01 | S 777 AA
                    </div>
                </div>
            </div>
            <div className="clients-more-table-wrapper">
                <table className="clients-more-table">
                    <tr>
                        <th>Do'kon nomi</th>
                        <th>Mahsulotlar</th>
                        <th>To'lov</th>
                        <th>Soni</th>
                        <th>Narxi</th>
                        <th>Jami</th>
                    </tr>
                    <tr>
                        <td>KFC</td>
                        <td>Tovuq qanoti</td>
                        <td>Naql pul</td>
                        <td>5</td>
                        <td>35 000</td>
                        <td>35 000</td>
                    </tr>
                    <tr>
                        <td>Oqtepa</td>
                        <td>Burger lavash</td>
                        <td>Click</td>
                        <td>1</td>
                        <td>19 000</td>
                        <td>140 054 887</td>
                    </tr>
                </table>
                <div className="clients-more-table-footer">
                    <p>Jami:</p>
                    <h2>54 000 so'm</h2>
                </div>
            </div>
        </div>
    )
}

export default ClientsMore