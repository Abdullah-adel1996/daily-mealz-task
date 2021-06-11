import { Navbar } from "react-bootstrap";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className={styles['navbar']}>
            <Navbar.Brand><span>FIND YOUR GAME</span></Navbar.Brand>
        </Navbar>
    );
};

export default Header
