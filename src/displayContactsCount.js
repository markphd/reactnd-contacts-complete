import React, { Component } from 'react'

class DisplayCount extends Component {
	render() {
		return <p className="count"> {this.props.count} of {this.props.totalCount } </p>
	}
}

export default DisplayCount;