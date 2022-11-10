import { useEffect } from "react";
import _ from "lodash";

const ShowFonts = ({ file, fonts, setFonts }) => {
  const deleteFont = (font) => {
    setFonts(fonts.filter((f) => f !== font));
  };

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
          <table className="table">
            <thead>
              <tr>
                <th>FONT NAME</th>
                <th>PREVIEW</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fonts.map((font, index) => (
                <tr key={index}>
                  <td>{font}</td>
                  <td>Example Style</td>
                  <td
                    onClick={() => deleteFont(font)}
                    style={{ cursor: "pointer" }}
                    className="text-danger"
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ShowFonts;
