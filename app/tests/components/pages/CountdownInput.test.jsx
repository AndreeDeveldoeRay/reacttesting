/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T14:54:29+01:00
* @Email:  me@andreeray.se
* @Filename: CountdownInput.test.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T16:02:55+01:00
*/



var expect = require('expect'), React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), $ = require('jQuery'), CountdownInput = require('CountdownInput')

describe('CountdownInput', () =>
{
    it('Should exist', () =>
    {
        expect(CountdownInput).toExist()
    })
    it('Should call on setCountDown if valid seconds entered', () =>
    {
        var spy = expect.createSpy()
        var countdownInput = TestUtils.renderIntoDocument(<CountdownInput onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownInput))
        countdownInput.refs.seconds.value = '109'
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith(109)
    })
    it('Should not call on setCountDown if invalid seconds entered', () =>
    {
        var spy = expect.createSpy()
        var countdownInput = TestUtils.renderIntoDocument(<CountdownInput onSetCountdown={spy}/>)
        var $el = $(ReactDOM.findDOMNode(countdownInput))
        countdownInput.refs.seconds.value = '109b'
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toNotHaveBeenCalled()
    })
})
