import './clientsmore.css'

function ClientsMore () {
    return (
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
    )
}

export default ClientsMore