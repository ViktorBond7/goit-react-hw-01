import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ transactions }) => {
  if (transactions.length > 0) {
    return (
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <tr className={css.tr} key={id}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else console.error(Error);
};

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
