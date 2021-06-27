import React from 'react'
import MainNavigation from './MainNavigation'
function Bar(props) {
    return (
        <main>
            <MainNavigation/>
            <main>{props.children}</main>
        </main>
    );
}

export default Bar
