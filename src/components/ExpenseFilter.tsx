import categories from "../categories";

interface Props {
  onselectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onselectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onselectCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
