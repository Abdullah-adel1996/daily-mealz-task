import styles from './GameCard.module.scss';

const GameCard = ({title, platform, score, genre, editors_choice}) => {
    const imagePath = "https://photos.smugmug.com/Demons-Souls/i-8dnpLzr/0/965b8e17/L/Demon%27s%20Souls_20210116215749_perspective-L.png";
    return (
        <div className={styles['game']}>
            <figure className={styles['game-figure']}>
                <img src={imagePath} alt="game-pic" />
                <div className={styles['game-score']}>
                    <span>{ score }</span>
                </div>
            </figure>
            <p className={styles['game-title']}>{ title }</p>
            <div className={styles['game-details']}>
                <h3>Details</h3>
                <p>Platform: <span>{ platform }</span></p>
                <p>Genre: <span>{ genre }</span></p>
                <p>Editor choice: <span>{ editors_choice === 'N'? 'No' : 'Yes' }</span></p>
            </div>
        </div>
   );
};

export default GameCard;
