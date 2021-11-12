import { useEffect } from 'react'

import './producttable.css'

function ProductTable() {

     useEffect( async () => {

        const table = document.querySelector('.product-table')

        const res = await fetch('http://localhost:5003/categories')
        const data = await res.json()

        console.log(data.data);
        const array = data.data

        for (const i of array) {
            console.log(i)
            
            const tr = document.createElement('tr')
            const tdcat = document.createElement('td')
            const tdstore = document.createElement('td')
            const tdedit = document.createElement('td')
            const tdstatus = document.createElement('td')
            const catlink = document.createElement('a')
            const editbtn = document.createElement('button')
            const statusbtn = document.createElement('button')


            tr.classList.add('product-table__body')

            tdcat.classList.add('product-table__date-content', 'product-table_category-width')
            tdstore.classList.add('product-table__name-content', 'product-table_stores-width')
            tdedit.classList.add('product-table__phone-content', 'product-table_edit-width')
            tdstatus.classList.add('product-table__price-content', 'product-table_status-width')
            editbtn.classList.add('product-table__location-content')
            statusbtn.classList.add('product-table__driver-content')
            // catlink.classList.add('product-table__status-content', 'table_status-width')
            
            tdcat.textContent = i.name
            tdstore.textContent = i.count
            tdstatus.textContent = i.status

            catlink.href = '#'

            tdcat.appendChild(catlink)

            tr.appendChild(tdcat)
            tr.appendChild(tdstore)
            tdedit.appendChild(editbtn)
            tr.appendChild(tdstatus)
            tr.appendChild(tdedit)
            // tr.appendChild(statusbtn)
            table.appendChild(tr)

        }
        

    }, [])
    
    return (
        <>
            <table className="product-table">
                <tr className="product-table__header">
                    <th className="product-table__category product-table_category-width rows-hover">Kategoriya</th>
                    <th className="product-table__stores product-table_stores-width ">do'konlar</th>
                    <th className="product-table__status product-table_status-width ">status</th>
                    <th className="product-table__edit product-table_edit-width ">holat</th>
                </tr>
                
            </table>
        </>
    )
}

export default ProductTable