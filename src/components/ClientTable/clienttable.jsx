import { useEffect } from 'react';
import './clienttable.css'

function ClientTable() {


    useEffect( async() => {

        const res = await fetch('http://localhost:5003/users')
        const data = await res.json()
        const table = document.querySelector('.client-table')
        const arrayy = data.data
        console.log(arrayy);
        for (const i of arrayy) {
        
        // for (const i of arrayy) {
        //     // <tr className="client-table__body">
        //     //         <td className="client-table__id-content table_id-width ">6</td>
        //     //         <td className="client-table__name-content table_name-width "><a href="javascript:void(0)" className="client-name_link">Bobur Mavlonov</a></td>
        //     //         <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
        //     //         <td className="client-table__status-content table_more-width ">1</td>
        //     //     </tr>

            const tr = document.createElement('tr')
            const tdid = document.createElement('td')
            const tdname = document.createElement('td')
            const tdphone = document.createElement('td')
            const tdstatus = document.createElement('td')

            const aphone = document.createElement('a')

            tr.classList.add('client-table__body')
            tdid.classList.add('client-table__id-content', 'client-table_id-width')
            tdname.classList.add('client-table__name-content', 'client-table_name-width')
            tdphone.classList.add('client-table__phone-content', 'client-table_phone-width')
            tdstatus.classList.add('client-table__status-content', 'client-table_more-width')
            aphone.classList.add('client-table__phone-content_a')
            
            tdid.textContent = i.id
            tdname.textContent = i.name
            aphone.textContent = '+' + i.phone
            aphone.href = '#'
            tdstatus.textContent = i.count

            tdphone.appendChild(aphone)

            tr.appendChild(tdid, tdname, tdphone, tdstatus)
            tr.appendChild(tdname)
            tr.appendChild(tdphone)
            tr.appendChild(tdstatus)

            table.appendChild(tr)
        }
        const pages = Math.ceil(arrayy.length / 6)
        
    }, [])
    
    return (
        <>
            <table className="client-table">
                <tr className="client-table__header">
                    <th className="client-table__id client-table_id-width rows-hover">ID</th>
                    <th className="client-table__name client-table_name-width ">Ism</th>
                    <th className="client-table__phone client-table_phone-width ">Telefon raqam</th>
                    <th className="client-table__more client-table_more-width ">Buyurtmalar</th>
                </tr>

                {/* <tr className="client-table__body">
                    <td className="client-table__id-content client-table_id-width ">6</td>
                    <td className="client-table__name-content client-table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content client-table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content client-table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content client-table_id-width ">6</td>
                    <td className="client-table__name-content client-table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content client-table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content client-table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content client-table_id-width ">6</td>
                    <td className="client-table__name-content client-table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content client-table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content client-table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content client-table_id-width ">6</td>
                    <td className="client-table__name-content client-table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content client-table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content client-table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content client-table_id-width ">6</td>
                    <td className="client-table__name-content client-table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content client-table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content client-table_more-width ">1</td>
                </tr> */}
                


            </table>
        </>
    )
}

export default ClientTable