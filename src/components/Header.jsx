import Logo from '../images/logo.png'
export default function Header() {
    return (
        <header>
            <a href="javascript:void(0)">
                <img src={Logo} alt="logo" />
            </a>
        </header>
    )
}
