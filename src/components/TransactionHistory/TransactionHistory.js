import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css"

export default function TransactionHistory ({ transactions }) {
  return (<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className={css.type}>Type</th>
      <th className={css.amount}>Amount</th>
      <th className={css.currency}>Currency</th>
    </tr>
  </thead>

         <tbody>
             {transactions.map(transaction => 
                 (<tr key={transaction.id}>
                 <td className={css.type}>{transaction.type }</td>
                 <td className={css.amount}>{ transaction.amount}</td>
               <td className={css.currency}>{ transaction.currency}</td>
    </tr>)

             )}
    
  </tbody>
</table>)
};

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency:PropTypes.string,
}