import './categoryinnertable.css'

function CategoryInnerTable () {
    return (
        <div className="category-inner-table-box">
            <table className="category-inner-table">
                <tr className="category-inner-table__header">
                    <th className="category-inner-table__category table_category-width rows-hover">Kategoriya</th>
                    <th className="category-inner-table__stores table_stores-width ">do'konlar</th>
                    <th className="category-inner-table__edit table_edit-width ">tahrirlash</th>
                    <th className="category-inner-table__status table_status-width ">status</th>
                </tr>
                <tr className="category-inner-table__body">
                    <td className="category-inner-table__category-content table_category-width "><a href="http://localhost:3000/categoryinner">Fast food</a></td>
                    <td className="category-inner-table__stores-content table_stores-width ">12</td>
                    <td className="category-inner-table__edit-content table_edit-width ">null</td>
                    <td className="category-inner-table__status-content table_status-width ">null</td>
                </tr>
            </table>
        </div>
    )
}

export default CategoryInnerTable