const ShowFontHeader = () => {
  const header = [
    { name: "font-name", label: "Font Name" },
    { name: "preview", label: "Preview" },
    { name: "empty-slot", label: "" },
  ];
  return (
    <thead>
      <tr>
        {header.map((head) => (
          <th key={head.name}>{head.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default ShowFontHeader;
