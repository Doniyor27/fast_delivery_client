import './settings.css'

const Settings = () => {
  return (
    <>
      <div className="pages">
        <div className="item"><a href="http://localhost:3000/settings/users">Users</a></div>
        <div className="item"><a href="http://localhost:3000/settings/drivers">Drivers</a></div>
        <div className="item"><a href="http://localhost:3000/settings/infos">Infos</a></div>
        <div className="item"><a href="http://localhost:3000/settings/payment">Payment</a></div>
      </div>
    </>
  )
}



export default Settings