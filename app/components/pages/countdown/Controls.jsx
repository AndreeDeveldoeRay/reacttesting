/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T17:34:46+01:00
* @Email:  me@andreeray.se
* @Filename: Controls.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T17:55:28+01:00
*/



var React = require('react')

var Controls = React.createClass({
    propTypes:
    {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function ()
    {
        var {countdownStatus} = this.props
        var renderStartStopButton = () =>
        {
            if (countdownStatus === 'started')
            {
                return <button className="button secondary">Pause</button>
            }
            else if (countdownStatus === 'paused')
            {
                return <button className="button primary">Start</button>
            }
        }
        return (<div>
            {renderStartStopButton()}
            <button className="button alert hollow">Clear</button>
        </div>)
    }
})
module.exports = Controls
