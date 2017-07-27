import React from 'react'

function ListContacts(props) {
	return (
		<ol className="contact-list">
			{ props.contacts.map((p) => (
				<li key={p.id} className='contact-list-item'>
					<div className="contact-avatar" style={{
						backgroundImage: `url(${p.avatarURL})`
					}}/>
					<div className="contact-details">
						<p>{p.name}</p>
						<p>{p.email}</p>			
					</div>
					<button className='contact-remove'>
						Remove
					</button>
				</li>
			))}
		</ol>
	)
}

export default ListContacts