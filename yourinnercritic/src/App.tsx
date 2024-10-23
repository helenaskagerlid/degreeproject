import "./App.css";
import { getPhotos } from "./service/getPhotosService";

function App() {
  const handleClick = () => {
    const photos = getPhotos();

    console.log("MEN KOLLA", photos);
  };

  return (
    <>
      <h1>LET'S GO!</h1>
      <button onClick={handleClick}>Hämta lite data</button>
    </>
  );
}

export default App;
