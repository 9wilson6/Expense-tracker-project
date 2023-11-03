interface Props{
    onselectCategory: (category:string)=>void
}
const ExpenseFilter = ({onselectCategory}: Props )=> {
  return (
    <select className="form-select" onChange={(e)=>onselectCategory(e.target.value)}>
        <option value="">All categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
    </select>
  )
}

export default ExpenseFilter
