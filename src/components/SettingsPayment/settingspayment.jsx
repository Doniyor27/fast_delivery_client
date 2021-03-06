import './settingspayment.css'

function SettingsPayment() {
    return (
        <>
            <h2 className="payment-heading">To'lov turlari</h2>
            <table className="payment-table">
                <tr className="payment-table__header">
                    <th className="payment-table__name table_name-width rows-hover">Nomi</th>
                    <th className="payment-table__tg-button-name table_tg-button-name-width ">Telegram button name</th>
                    <th className="payment-table__link table_link-width ">Link</th>
                    <th className="payment-table__status table_status-width ">Holat</th>
                    <th className="payment-table__edit table_edit-width ">Tahrirlash</th>
                    <th className="payment-table__delete table_delete-width ">O'chirish</th>
                </tr>
                <tr className="payment-table__body">
                    <td className="payment-table__name-content table_name-width ">Click</td>
                    <td className="payment-table__tg-button-name-content table_tg-button-name-width ">null Click</td>
                    <td className="payment-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">null</a></td>
                    <td className="payment-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">null</a></td>
                    <td className="payment-table__edit-content table_edit-width ">null</td>
                    <td className="payment-table__delete-content table_delete-width ">null</td>
                </tr>
                <tr className="payment-table__body">
                    <td className="payment-table__name-content table_name-width ">Payme</td>
                    <td className="payment-table__tg-button-name-content table_tg-button-name-width ">null Click</td>
                    <td className="payment-table__name-content table_name-width "><a href="javascript:void(0)" className="order-name__link">null</a></td>
                    <td className="payment-table__phone-content table_phone-width "> <a href="javascript:void(0)" className="order-phone__link">null</a></td>
                    <td className="payment-table__edit-content table_edit-width ">null</td>
                    <td className="payment-table__edit-content table_edit-width ">null</td>
                </tr>
            </table>
        </>
    )
}

export default SettingsPayment