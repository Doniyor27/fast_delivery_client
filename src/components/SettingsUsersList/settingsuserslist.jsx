import { useEffect } from 'react'
import './settingsuserslist.css'

const SettingsUsersList = () => {

  useEffect( async () => {
  
    const ul = document.querySelector('#ul')
    
    const res = await fetch('http://localhost:5003/admin')
    const data = await res.json()
    
    const array = data.data
    let counter = 0
    
    for (const i of array) {
      console.log(i);
      
      const li = document.createElement('li')
      const p = document.createElement('p')
      const btnwrap = document.createElement('div')
      const editbtn = document.createElement('button')
      const Delete = document.createElement('button')
      const span = document.createElement('p')
      const span2 = document.createElement('span')
      // const leftdiv = document.createElement('div')
      // const contentdiv = document.createElement('div')
      // const h5 = document.createElement('h5')
      // const textP = document.createElement('p')
      
      
      
      li.classList.add('users-list-item')
      // p.classList.add('suggestions-item__date')
      btnwrap.classList.add('buttons')
      editbtn.classList.add('edit-button')
      Delete.classList.add('delete-button')
      
      span.textContent = counter + 1 + '. ' + i.name
      Delete.textContent = 'd'
      editbtn.textContent = 'e'
      // span2.textContent = i.name
      
      p.appendChild(span)
      li.appendChild(p)
      li.appendChild(btnwrap)
      p.appendChild(span2)

      p.appendChild(span)

      btnwrap.appendChild(Delete)
      btnwrap.appendChild(editbtn)
    
      ul.appendChild(li)
    }
    
    
  }, [])

  return (
    <>
      <h2 className="available-users">Available users</h2>
      <ul className="users-list" id="ul">
        {/* <li className="users-list-item">
          <p>1. John Doe</p>
          <div className="buttons">
            <button className="edit-button">e</button>
            <button className="delete-button">d</button>
          </div>
        </li> */}
      </ul>
      <button className="add-button">Qo'shish +</button>
    </>
  )
}



export default SettingsUsersList