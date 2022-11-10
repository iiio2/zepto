import { FileUploader } from "react-drag-drop-files";

const FileInput = ({ file, setFile }) => {
  const fileTypes = ["TTF"];
  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div className="file-uplaod" id="file-uplaod">
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
};

export default FileInput;
