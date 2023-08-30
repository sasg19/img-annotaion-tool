import "./App.css";
import ImageSlider from "./ImageSlider";
import { ImgSource } from "./ImgSource";

function App() {
  return (
    <>
      <ImageSlider slides={ImgSource} />
    </>
  );
}

export default App;
