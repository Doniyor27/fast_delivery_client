import './clienttable.css'

function ClientTable() {

    async function test () {
        const token = document.cookie.split('=')[1].split(';')[0]
        console.log(token);
        const res = await fetch('http://localhost:5003/admin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({token: token})
        })

        const data = await res.json()

        const table = document.querySelector('.client-table')

        const arrayy = data.data
        
        // for (const i of arrayy) {
        //     // <tr className="client-table__body">
        //     //         <td className="client-table__id-content table_id-width ">6</td>
        //     //         <td className="client-table__name-content table_name-width "><a href="javascript:void(0)" className="client-name_link">Bobur Mavlonov</a></td>
        //     //         <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
        //     //         <td className="client-table__status-content table_more-width ">1</td>
        //     //     </tr>

        //     console.log(i);
        //     const tr = document.createElement('tr')
        //     const tdid = document.createElement('td')
        //     const tdname = document.createElement('td')
        //     const tdphone = document.createElement('td')
        //     const tdstatus = document.createElement('td')

        //     tr.classList.add('client-table__body')
        //     tdid.classList.add('client-table__id-content', 'table_id-width')
        //     tdname.classList.add('client-table__name-content', 'table_name-width')
        //     tdphone.classList.add('client-table__phone-content', 'table_phone-width')
        //     tdstatus.classList.add('client-table__status-content', 'table_more-width')

        //     tdid.textContent = i.name
        //     tdname.textContent = i.name
        //     tdphone.textContent = i.name
        //     tdstatus.textContent = i.name

        //     tr.appendChild(tdid, tdname, tdphone, tdstatus)
        //     tr.appendChild(tdname)
        //     tr.appendChild(tdphone)
        //     tr.appendChild(tdstatus)

        //     table.appendChild(tr)
        // }
        
    }

    test()
    
    return (
        <>
            <table className="client-table">
                <tr className="client-table__header">
                    <th className="client-table__id table_id-width rows-hover">ID</th>
                    <th className="client-table__name table_name-width ">Ism</th>
                    <th className="client-table__phone table_phone-width ">Telefon raqam</th>
                    <th className="client-table__more table_more-width ">Buyurtmalar</th>
                </tr>

                {/* <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr>
                <tr className="client-table__body">
                    <td className="client-table__id-content table_id-width ">6</td>
                    <td className="client-table__name-content table_name-width "><a href="/clientsinner" className="client-name_link">Bobur Mavlonov</a></td>
                    <td className="client-table__phone-content table_phone-width "><a href="javascript:void(0)" className="client-phone_link">+998901234567</a></td>
                    <td className="client-table__status-content table_more-width ">1</td>
                </tr> */}


            </table>
        </>
    )
}

export default ClientTable