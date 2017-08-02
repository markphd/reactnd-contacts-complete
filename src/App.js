import React, { Component } from 'react';
import ListContacts from './ListContacts'
import DisplayCount from './displayContactsCount'

class App extends Component {
    state = {
        contacts: [{
            "id": "ryan",
            "name": "Ryan Florence",
            "email": "ryan@reacttraining.com",
            "avatarURL": "http://localhost:5001/ryan.jpg"
        }, {
            "id": "michael",
            "name": "Michael Jackson",
            "email": "michael@reacttraining.com",
            "avatarURL": "http://localhost:5001/michael.jpg"
        }, {
            "id": "tyler",
            "name": "Tyler McGinnis",
            "email": "tyler@reacttraining.com",
            "avatarURL": "http://localhost:5001/tyler.jpg"
        }],
        count: 3
    }

    removeContact = (contact) => {
        this.setState((state) => ({
                contacts: state.contacts.filter((c) => c.id !== contact.id),
                // count: state.count - 1
            }))
            // this.setState({
            //   contacts: [{
            //     "id": "Mark",
            //     "name": "Mark Philip",
            //     "email": "mpd@one.com",
            //     "avatarURL": "http://localhost:5001/ryan.jpg"
            //   }]
            // })
    }

  render() {
    return (
      <div>
        <ListContacts onDelete={this.removeContact} contacts={this.state.contacts} count={this.state.count} />
        <DisplayCount count={this.state.contacts.length} totalCount={this.state.count } />
      </div>
    )
  }
}

export default App;
