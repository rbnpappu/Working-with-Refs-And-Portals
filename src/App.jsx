import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChalleng.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} targetTime={1}/>
        <TimerChallenge title={"Not easy"} targetTime={5}/>
        <TimerChallenge title={"Getting tough"} targetTime={10}/>
        <TimerChallenge title={"Pro Only"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
