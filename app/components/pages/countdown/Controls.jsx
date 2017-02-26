/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T17:34:46+01:00
* @Email:  me@andreeray.se
* @Filename: Controls.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T22:44:03+01:00
*/



var React = require('react')

var Controls = React.createClass({
    propTypes:
    {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus)
    {
        return () => { this.props.onStatusChange(newStatus) }
    },
    render: function ()
    {
        var {countdownStatus} = this.props
        var renderStartStopButton = () =>
        {
            if (countdownStatus === 'started')
            {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }
            else if (countdownStatus === 'paused')
            {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return (<div className="controls">
            {renderStartStopButton()}
            <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
        </div>)
    }
})
module.exports = Controls
