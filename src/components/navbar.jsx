import React, {Component} from "react";
import './navbar.scss'
import logo from './c-logo.svg'
import { Link } from "react-scroll";


class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className = "navbar">
                    <div className = "nav-items">
                        <img src={logo} className="App-logo" alt="logo" id="logo"/>
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1RX928pvvbg4bzoA_7Bas1IbrfPtnbeFl/view?usp=sharing" id="resume"> Resume </a></li>
                            <li><Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Contact </Link></li>
                            <li><Link
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-175}
                                duration={500}
                            > Projects </Link></li>
                                <li><Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}
                                > Experience </Link></li>
                                <li><Link
                                    activeClass="active"
                                    to="about-me"
                                    spy={true}
                                    smooth={true}
                                    offset={-170}
                                    duration={500}
                                > About </Link></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;
