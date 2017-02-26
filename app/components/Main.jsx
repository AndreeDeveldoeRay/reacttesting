/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T15:33:30+01:00
*/



var React  = require('react'),
    TopBar = require('TopBar')

var Main = (props) => {
    return (<div className="component" id="main">
        <TopBar/>
        <div className="row">
            <div className="column small-centered medium-6 large-4">
                {props.children}
            </div>
        </div>
    </div>)
}

module.exports = Main
