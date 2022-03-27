import React from 'react'
import './AnimaTest.css'

var ReactCSSTransitionGroup = require('react-transition-group') // ES5 with npm

var AnimaTest = React.createClass({
  getInitialState: function () {
    return { items: ['hello', 'world', 'click', 'me'] }
  },
  handleAdd: function () {
    var newItems = this.state.items.concat([prompt('Enter some text')])
    this.setState({ items: newItems })
  },
  handleRemove: function (i) {
    var newItems = this.state.items
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  },
  render: function () {
    var items = this.state.items.map(
      function (item, i) {
        return (
          <div key={item} onClick={this.handleRemove.bind(this, i)}>
            {item}
          </div>
        )
      }.bind(this)
    )
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    )
  },
})
export default AnimaTest
