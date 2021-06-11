import { GameProvider } from './context/gameContext';
import MainContainer from "./components/main-container/MainContainer";
import './App.scss';

const App = () => {

  return (
      <GameProvider>
        <MainContainer />
      </GameProvider>
  );
}

export default App;
