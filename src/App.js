import CustomHeader from "./components/CustomHeader" 

const App = () => {
  let isLoggenIn = false
  return (
    <div style = {{ backgroundColor : isLoggenIn ? "green" : "violet"}}>
    <CustomHeader/>
    <p className="subtitle">{isLoggenIn ? "Welcome back !" : "Please log in."}</p>
    {!isLoggenIn && <button>Sign in</button>}
    </div>
  )
}
export default App
