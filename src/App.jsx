import { useState } from "react";
import _ from "lodash";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TTF"];

function App() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  let total = [];
  if (file) {
    console.log(file);
    for (let i = 0; i < file.length; i++) {
      const names = _.pick(file[i], ["name"]);
      let getNames = names.name.replace(".ttf", "");

      total.push(getNames);
    }
  }
  console.log(total);
  console.log(total);
  return (
    <main className="container mt-3">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />

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
          <tbody>
            {total.map((font, index) => (
              <tr key={index}>
                <td>{font}</td>
                <td>Example Style</td>
                <td className="text-danger">Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default App;
