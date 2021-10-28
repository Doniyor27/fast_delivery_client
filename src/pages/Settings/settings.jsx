import './settings.css'

const Settings = () => {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <h1 className="heading">Available users</h1>
        <ul className="users-list">
          <li>
            <p>1. John Doe</p>
            <div className="buttons">
              <button className="edit">edit</button>
              <button className="delete">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#BE0707"/>
                  <path d="M11 21.8333C11 22.75 11.75 23.5 12.6667 23.5H19.3334C20.25 23.5 21 22.75 21 21.8333V13.5C21 12.5833 20.25 11.8333 19.3334 11.8333H12.6667C11.75 11.8333 11 12.5833 11 13.5V21.8333ZM21 9.33333H18.9167L18.325 8.74167C18.175 8.59167 17.9584 8.5 17.7417 8.5H14.2584C14.0417 8.5 13.825 8.59167 13.675 8.74167L13.0834 9.33333H11C10.5417 9.33333 10.1667 9.70833 10.1667 10.1667C10.1667 10.625 10.5417 11 11 11H21C21.4584 11 21.8334 10.625 21.8334 10.1667C21.8334 9.70833 21.4584 9.33333 21 9.33333Z" fill="white"/>
                </svg>
              </button>
            </div>
          </li>
          <li>
            <p>2. Shuhrat</p>
            <div className="buttons">
              <button className="edit">edit</button>
              <button className="delete">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#BE0707"/>
                  <path d="M11 21.8333C11 22.75 11.75 23.5 12.6667 23.5H19.3334C20.25 23.5 21 22.75 21 21.8333V13.5C21 12.5833 20.25 11.8333 19.3334 11.8333H12.6667C11.75 11.8333 11 12.5833 11 13.5V21.8333ZM21 9.33333H18.9167L18.325 8.74167C18.175 8.59167 17.9584 8.5 17.7417 8.5H14.2584C14.0417 8.5 13.825 8.59167 13.675 8.74167L13.0834 9.33333H11C10.5417 9.33333 10.1667 9.70833 10.1667 10.1667C10.1667 10.625 10.5417 11 11 11H21C21.4584 11 21.8334 10.625 21.8334 10.1667C21.8334 9.70833 21.4584 9.33333 21 9.33333Z" fill="white"/>
                </svg>
              </button>
            </div>
          </li>
          <li>
            <p>3. Ilhom</p>
            <div className="buttons">
              <button className="edit">edit</button>
              <button className="delete">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#BE0707"/>
                  <path d="M11 21.8333C11 22.75 11.75 23.5 12.6667 23.5H19.3334C20.25 23.5 21 22.75 21 21.8333V13.5C21 12.5833 20.25 11.8333 19.3334 11.8333H12.6667C11.75 11.8333 11 12.5833 11 13.5V21.8333ZM21 9.33333H18.9167L18.325 8.74167C18.175 8.59167 17.9584 8.5 17.7417 8.5H14.2584C14.0417 8.5 13.825 8.59167 13.675 8.74167L13.0834 9.33333H11C10.5417 9.33333 10.1667 9.70833 10.1667 10.1667C10.1667 10.625 10.5417 11 11 11H21C21.4584 11 21.8334 10.625 21.8334 10.1667C21.8334 9.70833 21.4584 9.33333 21 9.33333Z" fill="white"/>
                </svg>
              </button>
            </div>
          </li>
        </ul>
        <button>Qo'shish
          
        </button>
      </>
    )
  }
export default Settings