import './clientsinner.css'
import ClientsInnerTable from '../../components/ClientsInnerTable/clientsinnertable.jsx'

const ClientsInner = () => {
    return (
        <>
            <div className="clients-inner-header">
                <div className="clients-inner-back-box"></div>
                <h2 className="clients-inner-heading">Dimitri Mirko</h2>
                <select className="clients-inner-select">
                    <option>Barchasi</option>
                    <option>Barchasi</option>
                    <option>Barchasi</option>
                </select>
                <div className="clients-inner-orders-count-box">
                    <p className="clients-inner-order-count-text">Jami:</p>
                    <h3 className="clients-inner-orders-count">4ta buyurtma</h3>
                </div>
                <div className="clients-inner-phone-box">
                    <p className="clients-inner-phone">+998 97 565 71 73</p>
                </div>
            </div>
            <ClientsInnerTable/>
        </>
    )
}

export default ClientsInner