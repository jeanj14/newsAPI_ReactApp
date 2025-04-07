import ReactLogo from "@assets/react.svg"

function Copyright(){
    const date = new Date();
    const year = date.getFullYear();

    return <div>
        <p>Copyright {year}</p>
        <p className="flex items-center gap-1.5">Made with React <img src={ReactLogo}></img> </p>

    </div>
}

export default Copyright;