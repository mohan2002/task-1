import React from 'react'
import MainNavigation from './MainNavigation'
import classes from './Bar.module.css'
function Bar(props) {
    return (
        <main className={classes.main}>
            <MainNavigation/>
            <main>{props.children}</main>
        </main>
    );
}

export default Bar
