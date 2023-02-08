import QRCode from "qrcode";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#f1250ff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(evt) => setUrl(evt.target.value)}
      />
      <button className="qr-btn" onClick={GenerateQRCode}>
        Generate
      </button>
      {qrcode && (
        <div className="data">
          <img src={qrcode} alt="qrimg" />
          <a className="qr-btn" href={qrcode} download="qrcode.png">
            👇 Download... 👇
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
