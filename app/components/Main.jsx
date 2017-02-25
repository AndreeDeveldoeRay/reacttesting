/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
* @Last modified by:   Andreee "DevelDoe" Ray
* @Last modified time: 2017-02-22T16:06:14+01:00
*/



var React  = require('react'),
    TopBar = require('TopBar')

var Main = (props) => {
    return (
        <div className="component" id="main">
            <div>
                <div>
                    <TopBar/>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

module.exports = Main
