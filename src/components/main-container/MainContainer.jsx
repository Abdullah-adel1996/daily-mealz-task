import { useContext, useState, useEffect } from 'react';
import GamesList from '../games-list/GamesList';
import Header from '../header/Header';
import { GameContext } from '../../context/gameContext';
import Toolbar from '../toolbar/Toolbar';
import { loadGames } from '../../services/gameServices';
import ToastBox from '../toast/ToastBox';

const MainContainer = () => {

    const { gameActions, gameState } = useContext(GameContext);

    const [searchText, setSearchText] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const gamesTitles = gameState.filteredGames.map(game => game.title);

    const handleSort = (value) => {
        const sortDirection = value.endsWith('asc') ? 'asc' : 'desc';

        if (value.startsWith('title')){
            gameActions.sortByTitle(sortDirection);
        } else {
            gameActions.sortByScore(sortDirection);
        };
    
    };

    const handleSearch = (value) => {
        const searchValue = value.length > 0? value[0] : '';
        gameActions.search(searchValue);
        setSearchText(value);
    };

    useEffect(() => {
        loadGames()
        .then(response => { 
            gameActions.initialize(response.data)
            setIsLoading(false)
        })
        .catch(() => {
            setShowToast(true)
            setIsLoading(false)
        })
    }, []);

    return (
        <>
            <Header />
            <Toolbar
                handleSort={handleSort}
                handleSearch={handleSearch}
                gamesTitles={gamesTitles}
                searchText={searchText}
            />
            <GamesList 
                games={gameState.filteredGames} 
                isLoading={isLoading}
            />
            <ToastBox
                setShowToast={setShowToast}
                showToast={showToast}
                toastMessage='Error in getting games'
            />
        </>
    )
}

export default MainContainer;
