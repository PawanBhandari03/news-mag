import { useState } from "react"
import NavigationBar from "./Components/NavigationBar"
import NewsBoard from "./Components/NewsBoard"
import NewsItem from "./Components/NewsItem"


const App = () => {
    const[category,setCategory]=useState("general");
    return(
        <div>
            <NavigationBar setCategory={setCategory}/>
            <NewsBoard category={category}/>
            <NewsItem/>
        </div>
    )
}

export default App
