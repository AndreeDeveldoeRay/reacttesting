/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T02:56:44+01:00
* @Email:  me@andreeray.se
* @Filename: parent.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T04:09:26+01:00
*/



var React = require('react'), Clock = require('Clock')

var CountDown = React.createClass({
    render: function () {
        return (<div>
            <Clock totalSeconds={129}/>
        </div>)
    }
})

module.exports = CountDown
