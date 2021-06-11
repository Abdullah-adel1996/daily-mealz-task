import { Toast } from "react-bootstrap";
import styles from './ToastBox.module.scss';

const ToastBox = ({ showToast, setShowToast, toastMessage }) => {
    return (
        <Toast className={styles['toast']} onClose={() => setShowToast(false)} show={showToast} autohide>
            <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
    );
};

export default ToastBox;
