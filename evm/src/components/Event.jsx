import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEvent } from '../actions';
import {
  Modal,
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Label,
  InputGroup,
  Alert
} from 'react-bootstrap';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      venue: '',
      date: '',
      price: '',
      discount: '',
      show: false
    };
  }

  handleCreate() {
    if (
      this.state.name === '' ||
      this.state.venue === '' ||
      this.state.date === '' ||
      this.state.price === '' ||
      this.state.discount === ''
    ) {
      this.setState({ show: true });
    } else {
      this.props.addEvent(
        this.state.name,
        this.state.desc,
        this.state.venue,
        this.state.date,
        this.state.price,
        this.state.discount
      );
      this.props.onHide();
    }
  }

  render() {
    return (
      <Modal
        {...this.props}
        bsSize="lg"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">
            <div style={{ textAlign: 'center', fontSize: '30px' }}>
              <Label>Register An Event</Label>
            </div>
          </Modal.Title>
        </Modal.Header>
        {this.state.show ? (
          <Alert bsStyle="warning" style={{ textAlign: 'center' }}>
            <strong>Oh Snap!</strong> The fields marked with (*) are mandatory.
            Please fill them all.
          </Alert>
        ) : (
          <div />
        )}
        <Modal.Body>
          <FormGroup controlid="formBasicText">
            <ControlLabel>Event Name*</ControlLabel>
            <FormControl
              type="text"
              placeholder="e.g. Annual Fest"
              onChange={event => this.setState({ name: event.target.value })}
            />
          </FormGroup>
          <br />
          <FormGroup controlid="formControlsTextarea">
            <ControlLabel>Event Description</ControlLabel>
            <FormControl
              componentClass="textarea"
              onChange={event => this.setState({ desc: event.target.value })}
            />
          </FormGroup>
          <br />
          <FormGroup controlid="formBasicText">
            <ControlLabel>Event Venue*</ControlLabel>
            <FormControl
              type="text"
              placeholder="Location of this event"
              onChange={event => this.setState({ venue: event.target.value })}
            />
          </FormGroup>
          <br />
          <Form inline>
            <FormGroup controlid="formInlineDate">
              <ControlLabel style={{ width: '100%' }}>Event Date*</ControlLabel>{' '}
              <FormControl
                type="date"
                onChange={event => this.setState({ date: event.target.value })}
              />
            </FormGroup>{' '}
            <FormGroup controlid="formInlinePrice">
              <ControlLabel style={{ width: '100%' }}>
                Event Price*
              </ControlLabel>
              <InputGroup>
                <InputGroup.Addon>&#8377;</InputGroup.Addon>
                <FormControl
                  style={{ width: '100%' }}
                  type="text"
                  onChange={event =>
                    this.setState({ price: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>{' '}
            <br />
            <FormGroup controlid="formInlineDiscount">
              <ControlLabel style={{ width: '100%' }}>Discount*</ControlLabel>
              <InputGroup>
                <InputGroup.Addon>%</InputGroup.Addon>
                <FormControl
                  style={{ width: '100%' }}
                  type="text"
                  onChange={event =>
                    this.setState({ discount: event.target.value })
                  }
                />
              </InputGroup>
            </FormGroup>{' '}
          </Form>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="danger" onClick={this.props.onHide}>
            Close
          </Button>
          <Button bsStyle="primary" onClick={() => this.handleCreate()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(null, { addEvent })(Event);
