
import PropTypes from "prop-types";
import css from "./Statistics.module.css";

export default function StatisticsList({ stat }) {
    return (
        <ul className={css.statList}>
            {stat.map(item => (<li className={css.item} key = {item.key}>
                        <span className={css.label}>{ item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>))
            }
        </ul>
    )
};

StatisticsList.propTypes = {
    stat: PropTypes.arrayOf(
        PropTypes.shape(
            {
    id: PropTypes.string,
    label: PropTypes.string,
        percentage: PropTypes.number.isRequired
    }))
}

