import Header from "../components/header.jsx";
import Challenges from "../components/challenges.jsx";
import ChallengesContextProvider from "../store/challenge-context.js";

function ChallengesPage() {
  return (
    <ChallengesContextProvider>
      <Header />
      <main>
        <Challenges />
      </main>
    </ChallengesContextProvider>
  );
}
export default ChallengesPage;
