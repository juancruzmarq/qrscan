import './App.css';
import Html5QrcodePlugin from './components/ReadQR';

function App() {
  const onNewScanResult = (decodedText: string) => {
    // handle decoded results here
    console.log(`Scan result = ${decodedText}`, decodedText);
    return decodedText;
  };
  return (
    <>
      <div>
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      </div>
    </>
  );
}

export default App;
