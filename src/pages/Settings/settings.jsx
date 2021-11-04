import SettingsNestedLink from '../../components/SettingsNestedLink/settingsnestedlink.jsx'
import SettingsUsersList from '../../components/SettingsUsersList/settingsuserslist.jsx'
import SettingsChange from '../../components/SettingsChange/settingschange.jsx'
import SettingsDrivers from '../../components/SettingsDrivers/settingsdrivers.jsx'
import SettingsPayment from '../../components/SettingsPayment/settingspayment.jsx'
import AddCategoryModal from '../../components/AddCategoryModal/addcategorymodal.jsx'
import EditCategoryModal from '../../components/EditCategoryModal/editcategorymodal.jsx'

function Settings () {
  return (
    <>  
      <SettingsNestedLink/>
      <EditCategoryModal/>
    </>
  )
}



export default Settings