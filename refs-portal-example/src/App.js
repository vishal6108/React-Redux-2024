import Header from "./components/Header";
import Player from "./components/Player";
import ChallengeModeNew from "./components/challengeNew";

function App() {
  return (
    <div id="content">
      <Header />
      <Player />
      <div id="challenges">
        {/* <ChallengeMode title={"Easy"} targetTime={1} />
        <ChallengeMode title={"Medium"} targetTime={5} />
        <ChallengeMode title={"Getting Tough"} targetTime={10} />
        <ChallengeMode title={"Hard"} targetTime={15} /> */}
        <ChallengeModeNew title={"Easy"} targetTime={1} />
        <ChallengeModeNew title={"Medium"} targetTime={5} />
        <ChallengeModeNew title={"Getting Tough"} targetTime={10} />
        <ChallengeModeNew title={"Hard"} targetTime={15} />
      </div>
    </div>
  );
}

export default App;
