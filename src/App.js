import CustomHeader from "./components/CustomHeader" 

const App = () => {
  let isLoggenIn = false
  return (
    <div style = {{ backgroundColor : isLoggenIn ? "green" : "violet"}}>
    <CustomHeader title = {"My arm is hurted"} color = {"purple"}/>
    <CustomHeader title = {"Is it me You are looking for?"} color = {"navy"}/>
    <CustomHeader title = {"Cuz I wonder where You are."} color = {"lemon"}/>
    <p className="subtitle">{isLoggenIn ? "Welcome back !" : "Please log in."}</p>
    {!isLoggenIn && <button>Sign in</button>}
    </div>
  )
}
export default App
