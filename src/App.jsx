import { useState } from "react";
import ShowFonts from "./components/showFonts";
import FontGroup from "./components/fontGroup";
import AvailableFontGroup from "./components/availableFontGroup";
import FileInput from "./components/common/fileInput";

function App() {
  const [file, setFile] = useState(null);
  const [fonts, setFonts] = useState([]);
  const [fields, setFields] = useState([]);

  return (
    <main className="container mt-2 mb-5">
      <FileInput file={file} setFile={setFile} />
      <ShowFonts file={file} fonts={fonts} setFonts={setFonts} />
      <FontGroup fonts={fonts} setFields={setFields} />
      <AvailableFontGroup fields={fields} setFields={setFields} />
    </main>
  );
}

export default App;
