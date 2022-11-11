import { useState } from "react";
import { ToastContainer } from "react-toastify";
import ShowFonts from "./components/showFonts";
import FontGroup from "./components/fontGroup";
import AvailableFontGroup from "./components/availableFontGroup";
import FileInput from "./components/common/fileInput";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [file, setFile] = useState(null);
  const [fonts, setFonts] = useState([]);
  const [fields, setFields] = useState([]);

  return (
    <main className="container mt-2 mb-5">
      <ToastContainer />
      <FileInput file={file} setFile={setFile} />
      <ShowFonts file={file} fonts={fonts} setFonts={setFonts} />
      <FontGroup fonts={fonts} setFields={setFields} />
      <AvailableFontGroup fields={fields} setFields={setFields} />
    </main>
  );
}

export default App;
