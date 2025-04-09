import Article from "@articles/Article"
import { useEffect, useState } from "react"
// import { topTech, topEntertainment, topSports } from "@api/index"

/* useState to store site values from API rendered on the websites */
function Home(){

    useEffect(() => {
        console.log("Page loading")
    }, [])
    // console.log(topTech);
    return <div className="h-screen bg-green-500">
        <div className="w-full h-1/2 p-2.5">
        <Article type="main" />
        </div>        
        <div className="grid grid-cols-1 sm:grid-cols-2 h-1/2 p-2.5">
        <Article type="side"  />
        <Article type="side" />
        </div>
    </div>
}

export default Home;