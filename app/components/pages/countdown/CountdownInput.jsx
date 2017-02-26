/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T14:53:52+01:00
* @Email:  me@andreeray.se
* @Filename: CountDownInput.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T15:06:54+01:00
*/



var React = require('react')

var CountdownInput = React.createClass({
    onSubmit: function (e)
    {
        e.preventDefault()
        var strSeconds = this.refs.seconds.value
        if (strSeconds.match(/^[0-9]*$/))
        {
            this.refs.seconds.value = ""
            this.props.onSetCountdown(parseInt(strSeconds,10))
        }
    },
    render: function ()
    {
        return (<div>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                <button className="button expanded">Start</button>
            </form>
        </div>)
    }
})

module.exports = CountdownInput
