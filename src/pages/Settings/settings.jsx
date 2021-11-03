import SettingsNestedLink from '../../components/SettingsNestedLink/settingsnestedlink.jsx'
import SettingsUsersList from '../../components/SettingsUsersList/settingsuserslist.jsx'
import SettingsChange from '../../components/SettingsChange/settingschange.jsx'
import SettingsDrivers from '../../components/SettingsDrivers/settingsdrivers.jsx'
import SettingsPayment from '../../components/SettingsPayment/settingspayment.jsx'

function Settings () {
  return (
    <>  
      <SettingsNestedLink/>
      <SettingsDrivers/>
    </>
  )
}



export default Settings