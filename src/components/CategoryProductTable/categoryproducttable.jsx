import './categoryproducttable.css'

function CategoryProductTable () {
    return (
        <>
            <table className="category-product-table">
                <tr className="category-product-table__header">
                    <th className="category-product-table__id category-product-table_id-width rows-hover">ID</th>
                    <th className="category-product-table__stores category-product-table_stores-width">do'konlar</th>
                    <th className="category-product-table__count category-product-table_count_width">tovar soni</th>
                    <th className="category-product-table__phone category-product-table_phone_width">telefon raqam</th>
                    <th className="category-product-table__location category-product-table_location_width">manzil</th>
                    <th className="category-product-table__status category-product-table_status-width">holat</th>
                    <th className="category-product-table__edit category-product-table_edit_width">tahrirlash</th>
                </tr>
                <tr className="category-product-table__body">
                    <td className="category-product-table__id category-product-table_id-width rows-hover">52</td>
                    <td className="category-product-table__stores category-product-table_stores-width">Evos</td>
                    <td className="category-product-table__count category-product-table_count_width">5</td>
                    <td className="category-product-table__phone category-product-table_phone_width">+998901234567</td>
                    <td className="category-product-table__location category-product-table_location_width">Qo'shtepa</td>
                    <td className="category-product-table__status category-product-table_status-width">null</td>
                    <td className="category-product-table__edit category-product-table_edit_width">null</td>
                </tr>
            </table>
        </>
    )
}

export default CategoryProductTable