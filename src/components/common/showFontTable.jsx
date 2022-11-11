import ShowFontHeader from "./showFontHeader";
import ShowFontBody from "./showFontBody";

const ShowFontTable = ({ fonts, setFonts }) => {
  return (
    <table className="table">
      <ShowFontHeader />
      <ShowFontBody fonts={fonts} setFonts={setFonts} />
    </table>
  );
};

export default ShowFontTable;
