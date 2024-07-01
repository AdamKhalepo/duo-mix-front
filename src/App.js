import './App.css';
import SpotifyButton from "./SpotifyButton";
import DeezerButton from "./DeezerButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Spotify & Deezer <br/> Duo mix
        </h1>
      </header>
        <div>
            <p>
                Share your favorite songs with your friends whether they use Spotify or Deezer. <br/>
                Just log in with your favorite music streaming service and share your link with to your friends.
            </p>
        </div>
        <SpotifyButton />
        <DeezerButton />
    </div>
  );
}

export default App;
