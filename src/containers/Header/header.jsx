import SidebarLogoIcon from '../../assets/images/icons/logo.png'

import './header.css'
import '../Sidebar/Saidbar.scss'

const Header = () => {
  return (
    <div className="header_wrap">
      <div className="header_left">
        <a href="javascript:void(0)" className="sidebar-logo">
          <img src={SidebarLogoIcon} alt="logo" className="logo-icon"/>
          <h2 className="logo-text">Fast delivery</h2>
        </a>

        <input type="search" className="search_user" placeholder="Mijozni qidiring"/>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39C15.44 5.61 13.12 3.39 10.32 3.05C6.09001 2.53 2.53002 6.09 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.5C5.00002 7.01 7.01002 5 9.50002 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.50002 14Z" fill="#FFFFFF"/>  
        </svg>

      
      </div>

      <div className="user_control">
          <a className="user_img" href="http://localhost:3000/login">
            <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.57881" cy="5.77803" r="4.77803" stroke="#2E3444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z" stroke="#2E3444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        <a class="text" href="">John Doe</a>
        <svg className="svg" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.12 1.29L6 5.17L9.88 1.29C10.27 0.899998 10.9 0.899998 11.29 1.29C11.68 1.68 11.68 2.31 11.29 2.7L6.7 7.29C6.31 7.68 5.68 7.68 5.29 7.29L0.700001 2.7C0.310001 2.31 0.310001 1.68 0.700001 1.29C1.09 0.909998 1.73 0.899998 2.12 1.29V1.29Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </div>
  )
}

export default Header