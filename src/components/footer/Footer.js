import React, {Component} from 'react'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'
import { FaArrowAltCircleUp } from "react-icons/fa";
import headerStyle from "../../styles/main.module.scss"

const {footer, arrow} = headerStyle

class Footer extends Component {
    render() {
        return (
            <footer className={footer}>
                <h3>First React App</h3>
                <div>
                    <TiSocialLinkedinCircular/>
                    <TiSocialGithubCircular/>
                    <TiSocialTwitterCircular/>
                </div>
                <div>
                    <small> Copyright &copy; {new Date().getFullYear()} </small>
                    <small>
                        Developed by <a href="" target="_blank">Hidiyan Eugene</a>
                    </small>
                </div>
                <div className={arrow}>
                    <a href='#root'><FaArrowAltCircleUp color='orange'/></a>
                </div>

            </footer>
        )
    }
}

export default Footer