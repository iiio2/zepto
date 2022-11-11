const AvailableFontHeader = () => {
  const header = [
    { name: "name", label: "Name" },
    { name: "fonts", label: "Fonts" },
    { name: "count", label: "Count" },
    { name: "empty-slot-one", label: "" },
    { name: "empty-slot-two", label: "" },
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

export default AvailableFontHeader;
