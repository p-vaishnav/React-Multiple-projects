import './App.css';
import big from './assets/big.jpg';
import small from './assets/small.jpg';
import ProgressiveImage from './ProgressiveImage';

function App() {
  return (
    <>
      <h1>Progressive Images</h1>
      <ProgressiveImage
        src={big}
        placeholderImg={small}
        width={'450'}
        height={'450'}
      />
    </>
  );
}

export default App;
