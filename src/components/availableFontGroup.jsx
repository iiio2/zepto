import AvailableFontTable from "./common/availableFontTable";

const AvailableFontGroup = ({ fields, setFields }) => {
  return (
    <div className="all-font-group">
      {fields.length > 0 && (
        <>
          <h4>our font groups</h4>
          <p>list of all available font groups.</p>
          <AvailableFontTable fields={fields} setFields={setFields} />
        </>
      )}
    </div>
  );
};

export default AvailableFontGroup;
