import React, { Component } from 'react'
import Styles from '../Header/Header.module.css'

class Header extends Component {

    render(){
        return(
            <>
            <h1 className={Styles.heading}>ROBOFANS</h1>


            </>
        )
    }
}

export default Header;