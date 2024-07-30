import css from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { deposite } from '../../redux/store';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const credits = useSelector(state => state.balance.value);

  const handleDeposite = () => {
    dispatch(deposite(40));
  };

  const handleWithdraw = () => {
    dispatch({
      type: 'balance/withdraw',
      payload: 10,
    });
  };

  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <p className={css.name}>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>{credits}</p>
        <p className={css.name}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDeposite}>
        Delete
      </button>
      <button onClick={handleWithdraw}>withdraw</button>
    </div>
  );
}
