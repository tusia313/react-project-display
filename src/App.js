import { useLayoutEffect } from "react"
import CustomHeader from "./components/CustomHeader"
import List from "./components/List"

const App = () => {
  let isLoggenIn = false
  const listTitle = "Szindler List"
  return (
    <div style = {{ backgroundColor : isLoggenIn ? "green" : "violet"}}>
    <CustomHeader title = {"My arm is hurted"} color = {"purple"}/>
    <CustomHeader title = {"Is it me You are looking for?"} color = {"navy"}/>
    <CustomHeader title = {"Cuz I wonder where You are."} color = {"lemon"}/>
    <p className="subtitle">{isLoggenIn ? "Welcome back !" : "Please log in."}</p>
    {!isLoggenIn && <button>Sign in</button>}
    <List listTitle = {listTitle} />
    </div>
  )
}
export default App
