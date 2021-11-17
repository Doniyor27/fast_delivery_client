import './categoriestable.css'

function CategoriesTable () {
    return (
        <>
            <table className="categories-table">
                <tr className="categories-table__header">
                    <th className="categories-table__category categories-table_category-width rows-hover">Kategoriya</th>
                    <th className="categories-table__stores categories-table_stores-width ">do'konlar</th>
                    <th className="categories-table__edit categories-table_edit_width">tahrirlash</th>
                    <th className="categories-table__status categories-table_status-width ">holat</th>
                </tr>
                <tr className="categories-table__body">
                    <td className="categories-table__category categories-table_category-width rows-hover">12</td>
                    <td className="categories-table__stores categories-table_stores-width ">texnika</td>
                    <td className="categories-table__edit categories-table_edit_width">null</td>
                    <td className="categories-table__status categories-table_status-width">null</td>
                </tr>
            </table>
        </>
    )
}

export default CategoriesTable