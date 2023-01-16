import styles from './Modal.module.scss';
import classnames from 'classnames';
import ModalCloseIcon from '../../assets/img/close-icon.svg';
import { ProductType } from '../../types/types';

type ModalProps = {
  isVisible: boolean;
  onModalClose: () => void;
  product: ProductType;
};

export default function Modal({ isVisible, onModalClose, product }: ModalProps) {
  const { price, description, title, category, rating, image } = product;

  return (
    <div className={classnames(styles.modal, { [styles.open]: isVisible })}>
      <img className={styles['modal-close']} onClick={onModalClose} src={ModalCloseIcon} alt='modal close icon' />
      <img className={styles['product-image']} src={image} alt={product.title} width='250' />
      <h3>{title}</h3>
      <ul>
        <li>
          <strong>description:</strong> {description}
        </li>
        <li>
          <strong>category:</strong> {category}
        </li>
        <li>
          <strong>price:</strong> {price} EUR
        </li>
        <li>
          <strong>rate: </strong> {rating?.rate} <strong>based on</strong> {rating?.count} reviews
        </li>
      </ul>
      <button onClick={onModalClose}>Close</button>
    </div>
  );
}
