import { Link } from 'react-router-dom';

import SidebarButton from '../../components/SidebarButton/SidebarButton.js'

import {
  OverwievIcon,
  TicketsIcon,
  IdeasIcon,
  ContactsIcon,
  SettingsIcon,
} from '../../assets/icons/icons.js'

import './Saidbar.scss'
import { useState } from 'react';

import '../../assets/styles/main.css'

const Saidbar = () => {

  const [activePage, setActivePage] = useState('');

  return (
    <div className="Sidebar">   
    <div className="btn-wrap">
    <div className="top-btn">
    <Link to="orders" onClick={() => setActivePage('orders')}>
        <SidebarButton title="Buyurtmalar" icon={<OverwievIcon/>} active={activePage == 'orders'}/>
      </Link>
      <Link to="clients" onClick={() => setActivePage('clients')}>
        <SidebarButton title="Mijozlar" icon={<TicketsIcon/>} active={activePage == 'clients'}/>
      </Link>
      <Link to="products" onClick={() => setActivePage('products')}>
        <SidebarButton title="Mahsulotlar" icon={<IdeasIcon/>} active={activePage == 'products'}/>
      </Link>
      <Link to="suggests" onClick={() => setActivePage('suggests')}>
        <SidebarButton title="Takliflar" icon={<ContactsIcon/>} active={activePage == 'suggests'}/>
      </Link>

    </div>

      <div className="last-btn">
      <Link to="settings" onClick={() => setActivePage('settings')}>
        <SidebarButton title="Sozlamalar" icon={<SettingsIcon/>} active={activePage == 'settings'}/>
      </Link>
      </div>
    </div>
      
    </div>
  )
}

export default Saidbar;