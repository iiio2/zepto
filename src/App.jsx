import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TTF"];

function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <main className="container mt-3">
      <h3>Hello World</h3>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />

      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>

      <div className="show-fonts">
        <h4>our fonts</h4>
        <p>browser a list of zepto fonts to build your font group.</p>
        <table className="table">
          <thead>
            <tr>
              <th>FONT NAME</th>
              <th>PREVIEW</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </div>
    </main>
  );
}

export default App;
