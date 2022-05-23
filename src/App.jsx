import "./App.css";
import { useState } from "react";

function App() {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBaseImage(base64);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div className="App">
      <h1>Convert and Display Base64 Images</h1>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e);
        }}
      />
      <br />
      {baseImage && <img src={baseImage} height="200px" alt="uploaded" />}
    </div>
  );
}

export default App;
