import './producttable.css'

function ProductTable() {
    async function test () {
        const token = document.cookie.split('=')[1].split(';')[0]
        console.log(token);
        const res = await fetch('http://localhost:5003/categories', {
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
        console.log(data);
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

    // async function test () {
    //     const res = await fetch('http://localhost:5003/orders')
    //     const data = await res.json()

    //     console.log(data);

    // }
    // test()
    
    return (
        <>
            <table className="product-table">
                <tr className="product-table__header">
                    <th className="product-table__category table_category-width rows-hover">Kategoriya</th>
                    <th className="product-table__stores table_stores-width ">do'konlar</th>
                    <th className="product-table__edit table_edit-width ">tahrirlash</th>
                    <th className="product-table__status table_status-width ">status</th>
                </tr>

                <tr className="product-table__body">
                    <td className="product-table__category-content table_category-width ">Fast food</td>
                    <td className="product-table__stores-content table_stores-width ">12</td>
                    <td className="product-table__edit-content table_edit-width ">null</td>
                    <td className="product-table__status-content table_status-width ">null</td>
                </tr>
                <tr className="product-table__body">
                    <td className="product-table__category-content table_category-width ">Fast food</td>
                    <td className="product-table__stores-content table_stores-width ">12</td>
                    <td className="product-table__edit-content table_edit-width ">null</td>
                    <td className="product-table__status-content table_status-width ">null</td>
                </tr>
                <tr className="product-table__body">
                    <td className="product-table__category-content table_category-width ">Fast food</td>
                    <td className="product-table__stores-content table_stores-width ">12</td>
                    <td className="product-table__edit-content table_edit-width ">null</td>
                    <td className="product-table__status-content table_status-width ">null</td>
                </tr>
                <tr className="product-table__body">
                    <td className="product-table__category-content table_category-width ">Fast food</td>
                    <td className="product-table__stores-content table_stores-width ">12</td>
                    <td className="product-table__edit-content table_edit-width ">null</td>
                    <td className="product-table__status-content table_status-width ">null</td>
                </tr>
                <tr className="product-table__body">
                    <td className="product-table__category-content table_category-width ">Fast food</td>
                    <td className="product-table__stores-content table_stores-width ">12</td>
                    <td className="product-table__edit-content table_edit-width ">null</td>
                    <td className="product-table__status-content table_status-width ">null</td>
                </tr>
                
            </table>
        </>
    )
}

export default ProductTable