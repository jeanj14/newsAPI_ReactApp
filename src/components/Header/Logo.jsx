import blogLogo from "@assets/blog-logo.svg";

function Logo(){
    return <div className="flex items-center gap-5">
        <img src={blogLogo} height="75" width="75"></img>
        <h1 className="font-bold text-lg">Live News Blog</h1>
    </div>
}

export default Logo;
