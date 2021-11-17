import { useEffect } from 'react'

import './suggestiontable.css'

function SuggestionTable (){
  
  useEffect( async () => {
    
    const ul = document.querySelector('#ul')
    
    const res = await fetch('http://localhost:5003/complaint')
    const data = await res.json()
    
    const array = data.data
    
    for (const i of array) {
      
      const li = document.createElement('li')
      const leftdiv = document.createElement('div')
      const contentdiv = document.createElement('div')
      const btnwrap = document.createElement('div')
      const span = document.createElement('span')
      const h5 = document.createElement('h5')
      const dateP = document.createElement('p')
      const textP = document.createElement('p')
      const reply = document.createElement('button')
      const Delete = document.createElement('button')
      
      
      
      li.classList.add('suggestions-list-item')
      leftdiv.classList.add('suggestion-left')
      contentdiv.classList.add('suggenstions-list-content')
      btnwrap.classList.add('suggestion-btn-wrap')
      span.classList.add('suggenstion-id')
      h5.classList.add('suggestions-item__title')
      dateP.classList.add('suggestions-item__date')
      textP.classList.add('suggestions-item-text')
      reply.classList.add('reply-btn')
      Delete.classList.add('delete-btn')
      
      span.textContent = i.id
      dateP.textContent = i.time
      textP.textContent = i.complaint
      h5.textContent = i.name
      Delete.textContent = 'null'
      reply.textContent = 'null'
                  
      li.appendChild(leftdiv)
      li.appendChild(textP)
      li.appendChild(btnwrap)

      leftdiv.appendChild(span)
      leftdiv.appendChild(contentdiv)

      contentdiv.appendChild(h5)
      contentdiv.appendChild(dateP)

      btnwrap.appendChild(reply)
      btnwrap.appendChild(Delete)

      ul.appendChild(li)
    }
    
    
  }, [])  
  
  return (
      <>
        <ul className="suggestions-list" id="ul">
          {/* <li className="suggestions-list-item">
            <div className="suggestion-left">
              <span className="suggenstion-id">
               22
             </span>
             <div className="suggenstions-list-content">
               <h5 className="suggestions-item__title">Bobur Ganiyev</h5>
                <p className="suggestions-item__date">01/01/2021</p>
              </div>
           </div>
             <p className="suggestions-item-text">
               Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit. Purus ornare mattis tincidunt tellus mauris malesuada facilisi  urna. Libero, feugiat volutpat diam nullam duis dui sed pulvinar. Nunc duis facilisis fringilla etiam. Lorem dignissim molestie  volutpat in dolor arcu. In vitae fusce dignissim sodales.
             </p>
           <div className="suggestion-btn-wrap">
             <button className="reply-btn">null</button>
             <button className="delete-btn">null</button>
           </div>
          </li> */}
        </ul>
      </>
  )
  }
  
  export default SuggestionTable