import { useEffect } from 'react';

import './ordertable.css'



function OrderTables() {

    useEffect( async () => {

        const table = document.querySelector('.orders-table')

        const res = await fetch('http://localhost:5003/orders')
        const data = await res.json()

        const array = data.data

        for (const i of array) {

            // <tr className="orders-table__body">
            //     <td className="orders-table__id-content table_id-width ">6</td>
            //     <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
            //     <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
            //     <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
            //     <td className="orders-table__price-content table_price-width ">2000000</td>
            //     <td className="orders-table__location-content table_location-width ">null</td>
            //     <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
            //     <td className="orders-table__status-content table_status-width ">buyurtma</td>
            //     <td className="orders-table__more-content table_more-width "><button>...</button></td>
            // </tr>
            
            const tr = document.createElement('tr')
            const tdid = document.createElement('td')
            const tddate = document.createElement('td')
            const tdname = document.createElement('td')
            const tdphone = document.createElement('td')
            const tdprice = document.createElement('td')
            const tdlocation = document.createElement('td')
            const tddriver = document.createElement('td')
            const tdstatus = document.createElement('td')
            const tdmore = document.createElement('td')
            const tdnamea = document.createElement('a')
            const tdphonea = document.createElement('a')
            const btnwrap = document.createElement('td')
            const tdbtn = document.createElement('button')


            tr.classList.add('orders-table__body')

            tdid.classList.add('orders-table__id-content', 'table_id-width')
            tddate.classList.add('orders-table__date-content', 'table_date-width')
            tdname.classList.add('orders-table__name-content', 'table_name-width')
            tdphone.classList.add('orders-table__phone-content', 'table_phone-width')
            tdprice.classList.add('orders-table__price-content', 'table_price-width')
            tdlocation.classList.add('orders-table__location-content', 'table_location-width')
            tddriver.classList.add('orders-table__driver-content', 'table_driver-width')
            tdstatus.classList.add('orders-table__status-content', 'table_status-width')
            tdmore.classList.add('orders-table__more-content', 'table_more-width')
            tdnamea.classList.add('order-name__link')
            tdphonea.classList.add('order-phone__link')
            btnwrap.classList.add('orders-table__more-content', 'table_more-width')

            // car_number: "01 765 tm"
            // id: 14
            // name: "Fayzulla"
            // phone: "99362327273"
            // price: "240.00"
            // product_count: 2
            // status: "qabul"
            // time: "Wednesday, November 10, 2021 2:00 PM"
            
            tdid.textContent = i.id
            tddate.textContent = i.time
            tdprice.textContent = i.price
            tdlocation.textContent = 'null'
            tddriver.textContent = i.car_number
            tdstatus.textContent = i.status
            tdnamea.textContent = i.name
            tdphonea.textContent = i.phone
            tdbtn.textContent = '...'

            tdnamea.href = '#'
            tdphonea.href = 'tel:'+i.phone

            tdname.appendChild(tdnamea)
            tdphone.appendChild(tdphonea)

            tr.appendChild(tdid)
            
            tr.appendChild(tddate)
            tr.appendChild(tdname)
            tr.appendChild(tdphone)
            tr.appendChild(tdprice)
            tr.appendChild(tdlocation)
            tr.appendChild(tddriver)
            tr.appendChild(tdstatus)
            tr.appendChild(btnwrap)
            btnwrap.appendChild(tdbtn)
            table.appendChild(tr)

        }
        
        console.log(data);

    }, [])
    
    return (
        <>
            <table className="orders-table">
                <tr className="orders-table__header">
                    <th className="orders-table__id table_id-width rows-hover">ID</th>
                    <th className="orders-table__date table_date-width ">Sana</th>
                    <th className="orders-table__name table_name-width ">Ism</th>
                    <th className="orders-table__phone table_phone-width ">Telefon raqam</th>
                    <th className="orders-table__price table_price-width ">Narxi</th>
                    <th className="orders-table__location table_location-width ">Manzil</th>
                    <th className="orders-table__driver table_driver-width ">Driver</th>
                    <th className="orders-table__status table_status-width ">Holat</th>
                    <th className="orders-table__more table_more-width ">Batafsil</th>
                </tr>

                {/* <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>

                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr>
                <tr className="orders-table__body">
                    <td className="orders-table__id-content table_id-width ">6</td>
                    <td className="orders-table__date-content table_date-width ">May 22, 11:29</td>
                    <td className="orders-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">Bobur Mavlonov</a></td>
                    <td className="orders-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">+998901234567</a></td>
                    <td className="orders-table__price-content table_price-width ">2000000</td>
                    <td className="orders-table__location-content table_location-width ">null</td>
                    <td className="orders-table__driver-content table_driver-width ">NOT SELECTED</td>
                    <td className="orders-table__status-content table_status-width ">buyurtma</td>
                    <td className="orders-table__more-content table_more-width "><button>...</button></td>
                </tr> */}
                
            </table>
        </>
    )
}

export default OrderTables