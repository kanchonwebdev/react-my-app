import '../asset/css/main.css';
import '../asset/css/font-awesome.min.css';

function Header() {
    return (
        <div>
            <header>
                <div class="header-container">
                    <div class="header-left">
                        <div class="header-logo">Home<span>Doctor</span></div>
                    </div>

                    <div class="header-right">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/service">Services</a>
                        <a href="/review">Reviews</a>
                        <a href="/contact">Contacts</a>
                        <a href="" id="active-btn">Make an Appointment</a>
                    </div>
                </div>

                <div class="header-container-2">
                    <div class="header-left">
                        <div class="header-logo">Home<span>Doctor</span></div>
                    </div>

                    <div class="header-right">
                        <a href="" onclick="show_menu()"><span class="fa fa-bars"></span></a>
                    </div>
                </div>

                <div class="header-container-3" id="menu">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Reviews</a>
                    <a href="">Contacts</a>
                    <a href="" id="active-btn">Make an Appointment</a>
                </div>
            </header>
        </div>
    )
}
  
export default Header;
  