import './categoryproductstable.css'

function CategoryProductsTable () {
    return (
        <>
            <table className="category-products-table">
                <tr className="category-products-table__header">
                    <th className="category-products-table__id category-products-table_id-width rows-hover">ID</th>
                    <th className="category-products-table__stores category-products-table_stores-width">do'konlar</th>
                    <th className="category-products-table__count category-products-table_count_width">tovar soni</th>
                    <th className="category-products-table__phone category-products-table_phone_width">telefon raqam</th>
                    <th className="category-products-table__location category-products-table_location_width">manzil</th>
                    <th className="category-products-table__status category-products-table_status-width">holat</th>
                    <th className="category-products-table__edit category-products-table_edit_width">tahrirlash</th>
                </tr>
                <tr className="category-products-table__body">
                    <td className="category-products-table__id category-products-table_id-width rows-hover">52</td>
                    <td className="category-products-table__stores category-products-table_stores-width">Evos</td>
                    <td className="category-products-table__count category-products-table_count_width">5</td>
                    <td className="category-products-table__phone category-products-table_phone_width">+998901234567</td>
                    <td className="category-products-table__location category-products-table_location_width">Qo'shtepa</td>
                    <td className="category-products-table__status category-products-table_status-width">null</td>
                    <td className="category-products-table__edit category-products-table_edit_width">null</td>
                </tr>
            </table>
        </>
    )
}

export default CategoryProductsTable