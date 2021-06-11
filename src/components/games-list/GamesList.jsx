import GameCard from '../game-card/GameCard';
import { Row, Container, Spinner } from 'react-bootstrap';
import styles from './GamesList.module.scss';

const GamesList = ({ games, isLoading }) => {

    return (
        <Container className={styles['main-container']} fluid>
            {!isLoading?
                <>
                    {games.length > 0? 
                        <div className={styles['cards']}>
                            {games.map((game, index) => {
                                return <GameCard key={index} {...game} />
                            })}
                        </div>
                        :
                        <Row className='justify-content-center'>
                            <p className={styles['no-data']}>No Data Available</p>
                        </Row>
                    }
                </>
                :
                <Row className='justify-content-center'>
                    <Spinner animation="grow" variant="warning" />
                </Row>
            }
        </Container>
    )
}

export default GamesList;
