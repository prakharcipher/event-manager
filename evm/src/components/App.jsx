import React, { Component } from 'react';
import { Navbar, NavItem, Nav, Glyphicon } from 'react-bootstrap';
import Event from './Event';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    let eventClose = () => this.setState({ open: false });

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">
                <Glyphicon glyph="calendar" /> Event-Manager
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem
                eventKey={1}
                onClick={() => this.setState({ open: true })}
              >
                <Glyphicon glyph="plus" /> Create Event
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Event show={this.state.open} onHide={eventClose} />
        <Dashboard />
      </div>
    );
  }
}

export default App;
