import React, {Component} from 'react'
import headerStyles from '../../styles/main.module.scss'

const {header, headerWrapper, newCount} = headerStyles

class Header extends Component {
    render() {
        const {
            backUp,
            countries,
        } = this.props

        return (
            <div className={headerStyles.header}>
                <div className={headerStyles.headerWrapper}>
                    <h3>WORLD COUNTRIES DATA</h3>
                    <h6>Currently, we have {backUp.length} countries</h6>
                    <h6 id='newCount' style={{display: 'none'}}
                        className={headerStyles.newCount}>
                        {countries.length > 0 ? countries.length : 0}
                        {' '} satisfied the search
                        criteria
                    </h6>
                </div>
            </div>
        )
    }
}

export default Header