import React, { useState, useRef } from 'react';
import { QrReader } from 'react-qr-reader';

function ReadQR() {
  const [scanResultWebCam, setScanResultWebCam] = useState('');

  const handleErrorWebCam = (error: any) => {
    console.log(error);
  };
  const handleScanWebCam = (result: any) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  return (
    <div>
      <h3>Qr Code Scan by Web Cam</h3>
      <QrReader
        delay={300}
        style={{ width: '100%' }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
    </div>
  );
}

export default ReadQR;
