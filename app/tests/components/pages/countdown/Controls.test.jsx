/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-26T17:35:15+01:00
* @Email:  me@andreeray.se
* @Filename: Controls.test.js
* @Last modified by:   andreeray
* @Last modified time: 2017-02-26T18:02:42+01:00
*/



var expect = require('expect'), React = require('react'), ReactDOM = require('react-dom'), TestUtils = require('react-addons-test-utils'), $ = require('jQuery'), Controls = require('Controls')

describe('Controls', () =>
{
    it('Should exist', () =>
    {
        expect(Controls).toExist()
    })
    describe('render', () =>
    {
        it('Should render pause when started', () =>
        {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>)
            var $el = $(ReactDOM.findDOMNode(controls))
            var $pauseButton = $el.find('button:contains(Pause)')
            expect($pauseButton.length).toBe(1)
        })
        it('Should render start when paused', () =>
        {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>)
            var $el = $(ReactDOM.findDOMNode(controls))
            var $pauseButton = $el.find('button:contains(Start)')
            expect($pauseButton.length).toBe(1)
        })
    })
})
