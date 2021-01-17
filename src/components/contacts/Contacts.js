import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import { GET_CONTACTS } from '../../actions/types';
import PropTypes from 'prop-types'


class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts // now contacts are available as a prop.
})
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
})

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

// in connect(param1, param2), param1 is that thing which we want to loop through in props and param2 is a dispatch,
// param1 is a data inside the redux state
// param2 is a dispatch method to perform an action on thae redux state