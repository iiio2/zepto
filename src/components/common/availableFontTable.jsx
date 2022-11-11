import AvailableFontHeader from "./availableFontHeader";
import AvailableFontBody from "./availableFontBody";

const AvailableFontTable = ({ fields, setFields }) => {
  return (
    <table className="table">
      <AvailableFontHeader />
      <AvailableFontBody fields={fields} setFields={setFields} />
    </table>
  );
};

export default AvailableFontTable;
