import "bootstrap/dist/css/bootstrap.min.css"
import ExpenseList from './components/ExpenseList'
import { useState } from "react"

const App = () => {

  const[expenses,setExpenses] =useState([
    {id:1, description:'aaa', amount:10,category:'Utilities'},
    {id:2, description:"bbb", amount:15,category:'Utilities'},
    {id:3, description:"ccc", amount:20,category:'Utilities'},
    {id:4, description:"ddd", amount:5,category:'Utilities'}
])

  return (
    <>
      <ExpenseList expenses={expenses} onDelete={(id)=>setExpenses(expenses.filter(e=>e.id !==id))}></ExpenseList>
    </>
  )
}

export default App
