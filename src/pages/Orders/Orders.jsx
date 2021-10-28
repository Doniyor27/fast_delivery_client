import OrderTable from '../../components/OrderTable/ordertable.jsx'
import '../../assets/icons/icons.js'
import './orders.css'

const Orders = () => {
  return (
    <div className="orders-wrapper">
      <select className="select">
        <option className="selectOption">Barchasi</option>
        <option>Barchasi</option>
        <option>Barchasi</option>
      </select>
      
      <OrderTable/>
    </div>
  )
}

export default Orders