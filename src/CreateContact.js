import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'


class CreateContact extends Component {
	handleSubmit = (e) => {
		e.preventDefault()
	}

	render() {
		return(
			<
			div>
				<Link to="/" className="close-create-contact"> Close </Link>
				<form onSubmit={this.handleSubmit} className="create-contact-form">
					<ImageInput
						className="create-contact-avatar-input"
						name="avatarURL"
						maxHeight={64}
					/>
					<div className="create-contact-details">
						<input type="text" name="name" placeholder="Enter name" />
						<input type="email" name="email" placeholder="Enter email address" />
						<button>Add Button</button>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateContact