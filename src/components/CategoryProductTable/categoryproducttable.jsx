import './categoryproducttable.css'

function CategoryProductTable () {
    return (
        <>
            <table className="category-product-table">
                <tr className="category-product-table__header">
                    <th className="category-product-table__id category-product-table_id-width rows-hover">ID</th>
                    <th className="category-product-table__product category-product-table_product-width">tovar</th>
                    <th className="category-product-table__count category-product-table_count_width">tovar soni</th>
                    <th className="category-product-table__status category-product-table_status-width">holat</th>
                    <th className="category-product-table__edit category-product-table_edit_width">tahrirlash</th>
                </tr>
                <tr className="category-product-table__body">
                    <td className="category-product-table__id category-product-table_id-width rows-hover">52</td>
                    <td className="category-product-table__product category-product-table_product-width">lavash</td>
                    <td className="category-product-table__count category-product-table_count_width">5</td>
                    <td className="category-product-table__status category-product-table_status-width">null</td>
                    <td className="category-product-table__edit category-product-table_edit_width">null</td>
                </tr>
            </table>
        </>
    )
}

export default CategoryProductTable