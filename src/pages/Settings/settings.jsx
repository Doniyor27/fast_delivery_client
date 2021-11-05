import SettingsNestedLink from '../../components/SettingsNestedLink/settingsnestedlink.jsx'
// import SettingsUsersList from '../../components/SettingsUsersList/settingsuserslist.jsx'
// import SettingsChange from '../../components/SettingsChange/settingschange.jsx'
// import SettingsDrivers from '../../components/SettingsDrivers/settingsdrivers.jsx'
// import SettingsPayment from '../../components/SettingsPayment/settingspayment.jsx'
// import AddCategoryModal from '../../components/AddCategoryModal/addcategorymodal.jsx'
// import EditCategoryModal from '../../components/EditCategoryModal/editcategorymodal.jsx'
// import AddProductModal from '../../components/AddProductModal/addproductmodal.jsx'
// import AddTovarModal from '../../components/AddTovarModal/addtovarmodal.jsx'
// import AddProductControlModal from '../../components/AddProductControlModal/addproductcontrolmodal.jsx'
import AddUserModal from '../../components/AddUserModal/addusermodal.jsx'
import AddDriverModal from '../../components/AddDriverModal/adddrivermodal.jsx'
import AddPaymentModal from '../../components/AddPaymentModal/addpaymentmodal.jsx'
import EditPaymentModal from '../../components/EditPaymentModal/editpaymentmodal.jsx'

function Settings () {
  return (
    <>  
      <SettingsNestedLink/>
      <EditPaymentModal/>
    </>
  )
}



export default Settings