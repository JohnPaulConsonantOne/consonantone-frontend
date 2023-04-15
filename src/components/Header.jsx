import Logo from '../images/logo.png'
import searchIcon from '../images/icons/header-search-icon.svg'
import helpIcon from '../images/icons/help.svg'
import notificationIcon from '../images/icons/notification.svg'
import calendarIcon from '../images/icons/calendar.svg'
import userIcon from '../images/icons/user.svg'
import CustomisablePopup from './CustomisablePopup'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="d-flex header-wrap">
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    {/* <form className="search">
                        <input type="search" placeholder='Search' />
                        <button><img src={searchIcon} alt="search" /></button>
                    </form>
                    <div className="utilities">
                        <div className="utilities-help utilities-option">
                            <img src={helpIcon} alt="help" />
                        </div>
                        <div className="utilities-notification utilities-option">
                            <img src={notificationIcon} alt="notification" />
                        </div>
                        <div className="utilities-calendar utilities-option">
                            <img src={calendarIcon} alt="Calendar" />
                        </div>
                        <div className="utilities-user utilities-option">
                            <img src={userIcon} alt="user" />
                        </div>
                    </div> */}
                </div>
            </div>




        </header>
    )
}
