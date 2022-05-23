import './App.scss';
import { useState } from 'react';
import useFirebaseUpload from './hooks/useFirebaseUpload';
import ImgSelection from './components/ImgSelection/ImgSelection';
import Uploaded from './components/Uploading/Uploading';

function App() {
  const [file, setFile] = useState(null)

 const {imgUrl, progressPercent} = useFirebaseUpload({file})

  return (
    <div className="App">
      {progressPercent > 0 ? <Uploaded imgUrl={imgUrl} progressPercent={progressPercent} /> : <ImgSelection setFile={setFile} />}
    </div>
  );
}

export default App;
