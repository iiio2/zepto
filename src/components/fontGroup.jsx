import FontGroupForm from "./common/fontGroupForm";

const FontGroup = ({ fonts, setFields }) => {
  return (
    <div className="font-group">
      {fonts.length > 0 && (
        <>
          <h4>create font group</h4>
          <p>you have to select at least two fonts</p>

          <FontGroupForm setFields={setFields} fonts={fonts} />
        </>
      )}
    </div>
  );
};

export default FontGroup;
