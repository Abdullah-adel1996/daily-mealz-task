import * as actionType from './actionTypes';

export const initialState = {
    games: [],
    filteredGames: []
};

export const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INITIALIZE:
            return {
                ...state,
                games: action.payload,
                filteredGames: action.payload,
            }
        case actionType.SEARCH:
           if ( action.payload.length === 0 ) {
                return {
                   ...state,
                   filteredGames: state.games,
                };
           } else {
                const filteredArr = state.games.filter((game)=>{
                    return game.title.trim().toLowerCase().includes(action.payload.trim().toLowerCase());
                });
                    return {
                        ...state,
                        filteredGames: filteredArr,
                    };
           }
        case actionType.SORT_BY_TITLE:
            const sortedTitleArr = action.payload === "asc"? sortAsc(state.filteredGames, "title") : sortDesc(state.filteredGames, "title");            
            return {
                ...state,
                filteredGames: sortedTitleArr,
            }
        case actionType.SORT_BY_SCORE:
            const sortedScoreArr = action.payload === "asc"? sortAsc(state.filteredGames, "score") : sortDesc(state.filteredGames, "score");            
            return {
                ...state,
                filteredGames: sortedScoreArr,
            }
        default:
    return state;
  }};

  const sortAsc = (arr, field) => {
    return arr.sort((a, b) => {
      if (a[field] > b[field]) return 1;
  
      if (b[field] > a[field]) return -1;
  
      return 0;
    });
  };
  
  const sortDesc = (arr, field) => {
    return arr.sort((a, b) => {
      if (a[field] > b[field]) return -1;
  
      if (b[field] > a[field]) return 1;
  
      return 0;
    });

  };