var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', => {
    expect(CountdownForm).toExist();
  });
  it('should call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var CountdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var el = $(ReactDOM.findDOMNode(CountdownForm));
    countdownForm.refs.seconds.value = '100';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });
  it('should not call onSetCountdown if valid seconds entered', () => {
    var spy = expect.createSpy();
    var CountdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var el = $(ReactDOM.findDOMNode(CountdownForm));
    countdownForm.refs.seconds.value = '109b';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
