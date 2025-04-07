import Logo from "./Logo";
import Slogan from "./Slogan"

function Header(){
    return <header className="bg-green-500 flex justify-around px-2.5 py-2.5">
        <Logo/>
        <Slogan/>
    </header>
}

export default Header;