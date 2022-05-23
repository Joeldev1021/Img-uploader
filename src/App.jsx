import './App.scss';
import { useState } from 'react';
import useFirebaseUpload from './hooks/useFirebaseUpload';
import ImgSelection from './components/ImgSelection/ImgSelection';
import Uploader from './components/Uploader/Uploader';

function App() {
  const [file, setFile] = useState(null)

 const {imgUrl, progressPercent} = useFirebaseUpload({file})

  return (
    <div className="App">
      {progressPercent > 0 ? <Uploader imgUrl={imgUrl} progressPercent={progressPercent} /> : <ImgSelection setFile={setFile} />}
    </div>
  );
}

export default App;
