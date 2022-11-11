import { useEffect } from "react";
import _ from "lodash";
import ShowFontTable from "./common/showFontTable";

const ShowFonts = ({ file, fonts, setFonts }) => {
  const getFonts = () => {
    let total = [];
    if (file) {
      for (let i = 0; i < file.length; i++) {
        const names = _.pick(file[i], ["name"]);
        let getNames = names.name.replace(".ttf", "");
        total.push(getNames);
      }
      setFonts(total);
    }
  };

  useEffect(() => {
    getFonts();
  }, [file]);

  return (
    <div className="show-fonts mt-2">
      {fonts.length > 0 && (
        <>
          <h4>our fonts</h4>
          <p>browser a list of zepto fonts to build your font group.</p>
          <ShowFontTable fonts={fonts} setFonts={setFonts} />
        </>
      )}
    </div>
  );
};

export default ShowFonts;
