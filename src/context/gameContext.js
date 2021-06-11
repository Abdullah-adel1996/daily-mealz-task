import  React, { useReducer } from 'react';
import { gameReducer, initialState } from './gameReducer';
import * as actionType from './actionTypes';

const GameContext = React.createContext();

const GameProvider = (props) => {

  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const actions = {
    initialize: (games) => {
      if (games) {
        dispatch({ type: actionType.INITIALIZE, payload: games.slice(1) });
      }
    },
    search: (text) => {
      dispatch({ type: actionType.SEARCH, payload: text });
    },
    sortByTitle: (sortDirection) => {
      if (sortDirection) {
          dispatch({ type: actionType.SORT_BY_TITLE, payload: sortDirection });
      } 
    },
    sortByScore: (sortDirection) => {
      if (sortDirection) {
          dispatch({ type: actionType.SORT_BY_SCORE, payload: sortDirection });
      } 
    },
  };

  return (
    <GameContext.Provider
      value={{
        gameState: gameState,
        gameActions: actions,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameProvider, GameContext };