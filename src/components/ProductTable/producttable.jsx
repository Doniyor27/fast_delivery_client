import './producttable.css'

function ProductTable() {
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