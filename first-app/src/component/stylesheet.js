import React from 'react'
import './style.css'

function StyleSheet(props){
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={`${className} second-1`}>My name is rohit</h1>
        </div>
    )
}

export default StyleSheet