export default function FilterDropdown({ categories, onFilter }) {
  return (
    <>
      <select
        onChange={(e) => {
          onFilter(e.target.value);
        }}
      >
        <option defaultChecked value="all">
          All
        </option>

        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}
