import Article from "@articles/Article"

/* category is passed in as a prop to article components */
function Home(){
    return <div className="h-screen bg-green-500">
        <div className="w-full h-1/2 p-2.5">
        <Article type="main" category="business"/>
        </div>        
        <div className="grid grid-cols-1 sm:grid-cols-2 h-1/2 p-2.5">
        <Article type="side" category="technology" />
        <Article type="side" category="sports" />
        </div>
    </div>
}

export default Home;