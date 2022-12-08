import styles from './Modal.module.scss';
import classnames from 'classnames';

export default function Modal({ isVisible, onModalClose, product }) {
  const { price, description, title, category, rating } = product;

  return (
    <div className={classnames(styles.modal, { [styles.open]: isVisible })}>
      <h3>{title}</h3>
      <ul>
        <li>
          <strong>description:</strong> {description}
        </li>
        <li>
          <strong>category:</strong> {category}
        </li>
        <li>
          <strong>price:</strong> {price} PLN
        </li>
        <li>
          <strong>rate: </strong> {rating?.rate} <strong>based on</strong> {rating?.count} reviews
        </li>
      </ul>
      <button onClick={onModalClose}>Zamknij</button>
    </div>
  );
}
