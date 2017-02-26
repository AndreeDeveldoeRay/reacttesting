/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T03:27:21+01:00
* @Email:  me@andreeray.se
* @Filename: Clock.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T04:06:41+01:00
*/



var React = require('react')

var Clock = React.createClass
({
    getDefaultProps: function () {
        totalSeconds: 0
    },
    propTypes: {
        totalSeconds: React.PropTypes.number
    },
    formatSeconds: function (totalSeconds)
    {
        var seconds = totalSeconds % 60,
            minutes = Math.floor(totalSeconds / 60)

        if (seconds < 10)   seconds = `0${seconds}`
        if (minutes < 10)   minutes = `0${minutes}`

        return `${minutes}:${seconds}`
    },
    render: function ()
    {
        var {
            totalSeconds
        } = this.props
        
        return (<div className="clock">
            <span className="clock-text">
                {this.formatSeconds(totalSeconds)}
            </span>
        </div>)
    }
})

module.exports = Clock
