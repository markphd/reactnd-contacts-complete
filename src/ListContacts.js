import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeStringRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListContacts extends Component {
	static propTypes = {
	    contacts: PropTypes.array.isRequired,
	    onDelete: PropTypes.func.isRequired
	}

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	clearQuery = () => {
		this.setState({ query: '' })
	}

	render() {
		const { contacts, onDelete } = this.props
		const { query } = this.state

		let showingContacts
		const match = new RegExp(escapeStringRegExp(query), 'i')
		showingContacts = query ? contacts.filter((contact) => match.test(contact.name)) : contacts
		showingContacts.sort(sortBy('name'));

		return(
			<div className="list-contacts">
				<div className="list-contacts-top">
					<input
						className="search-contacts"
						type="text"
						placeholder="Search"
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
					<Link
						to="/create"
						onClick={() => {}}
						className="add-contact"
						> Add contact </Link>
				</div>
				{ showingContacts.length !== contacts.length && (
						<div className="showing-contacts">
							<span>Now showing {showingContacts.length} of {contacts.length} </span>
							<button onClick={this.clearQuery}>Show all</button>
						</div>
					)}
				<ol className="contact-list">
					{ showingContacts.map((p) => (
						<li key={p.id} className='contact-list-item'>
							<div className="contact-avatar" style={{
								backgroundImage: `url(${p.avatarURL})`
							}}/>
							<div className="contact-details">
								<p>{p.name}</p>
								<p>{p.email}</p>			
							</div>
							<button onClick={() => onDelete(p) } className='contact-remove'>
								Remove
							</button>
						</li>
					))}
				</ol>
			</div>
		)
	}
} 

export default ListContacts