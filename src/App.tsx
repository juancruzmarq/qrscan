import { useEffect, useState } from 'react';
import './App.css';
import CodeReader from './components/CodeReader';

function App() {
  const [scanResults, setScanResults] = useState<string>();

  const onNewScanResult = (decodedText: string, decodedResult: any) => {
    // handle decoded results here
    console.log(`Scan result = ${decodedText}`, decodedText);
    setScanResults(decodedText);
  };

  return (
    <>
      <div>
        <CodeReader
          fps={30}
          qrbox={250}
          disableFlip={true}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
      <div className='results-container'>
        {scanResults && (
          <div className='results'>
            <div className='results-title'>Scan Results</div>
            <div className='results-body'>{scanResults}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
