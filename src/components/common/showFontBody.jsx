const ShowFontBody = ({ fonts, setFonts }) => {
  const deleteFont = (font) => {
    setFonts(fonts.filter((f) => f !== font));
  };
  return (
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
  );
};

export default ShowFontBody;
