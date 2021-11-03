import './settingspayment.css'

function SettingsPayment () {
    return (
        <>
            <table className="payment-table">
                <tr className="payment-table-header">
                    <th className="name">Nomi</th>
                    <th className="tg-btn-name">Telegram button name</th>
                    <th className="link">Link</th>
                    <th className="status">Holat</th>
                    <th className="edit">Tahrirlash</th>
                    <th className="delete">O'chirish</th>
                </tr>
                <tr className="payment-table-body">
                    <td>Click</td>
                    <td>icon Click</td>
                    <td>null</td>
                    <td>null</td>
                    <td>null</td>
                    <td>null</td>
                </tr>
                <tr className="payment-table-body">
                    <td>Payme</td>
                    <td>icon Payme</td>
                    <td>null</td>
                    <td>null</td>
                    <td>null</td>
                    <td>null</td>
                </tr>
            </table>
        </>
    )    
}
export default SettingsPayment