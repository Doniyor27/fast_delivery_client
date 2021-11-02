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

      <h2 className="available-users">Available users</h2>
      <ul className="users-list">
        <li className="users-list-item">
          <p>1. John Doe</p>
          <div className="buttons">
            <button className="edit-button">e</button>
            <button className="delete-button">d</button>
          </div>
        </li>
        <li className="users-list-item">
          <p>2. Shuhrat</p>
          <div className="buttons">
            <button className="edit-button">e</button>
            <button className="delete-button">d</button>
          </div>
        </li>
        <li className="users-list-item">
          <p>3. Ilhom</p>
          <div className="buttons">
            <button className="edit-button">e</button>
            <button className="delete-button">d</button>
          </div>
        </li>
      </ul>
      <button className="add-button">Qo'shish +</button>
    </>
  )
}



export default Settings