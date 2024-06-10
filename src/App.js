import { useLayoutEffect } from "react"
import CustomHeader from "./components/CustomHeader"
import Card from "./components/Card"


const App = () => {
  const skillSet = [
    {
      skill: "HTML knowledge",
      description: "A good grasp of..."
    },
    {
      skill: "CSS proficiency",
      description: "Knowing how to build..."
    },
    {
      skill: "JavaScript wizz",
      description: "Here's come all magic !"
    }
  ]
  return (
    <div>
      <CustomHeader title={"My app"} />
    </div>
  )
}
export default App
