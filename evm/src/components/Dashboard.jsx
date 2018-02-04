import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addEvent, deleteEvent, filterEvent } from '../actions';
import {
  FormGroup,
  FormControl,
  Button,
  Glyphicon,
  Form
} from 'react-bootstrap';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opt: ''
    };
  }

  deleteEvent(id) {
    this.props.deleteEvent(id);
  }

  handleSelect() {
    this.props.filterEvent(
      this.props.price,
      this.props.discount,
      this.state.opt
    );
  }

  renderEvents() {
    const { events } = this.props;
    return (
      <div
        style={{
          overflowY: 'auto',
          height: '600px',
          width: '100%'
        }}
      >
        {events.map(event => {
          return (
            <div
              key={event.id}
              style={{
                width: '25%',
                height: '20%',
                display: 'inline-block',
                paddingLeft: '10px',
                paddingRight: '10px'
              }}
            >
              <div
                className="w3-card-4"
                style={{ width: '100%', border: '1px solid black' }}
              >
                <header
                  className="w3-container w3-black"
                  style={{ textAlign: 'center' }}
                >
                  <h3>
                    <b>{event.name}</b>
                  </h3>
                </header>
                <div className="w3-container w3-light-grey">
                  <br />
                  <p>
                    <b>Description: </b>
                    <em>{event.desc}</em>
                  </p>
                  <hr />

                  <p>
                    <b>Venue: </b>
                    <em>{event.venue}</em>
                  </p>
                  <hr />
                  <p>
                    <b>Date: </b>
                    <em>{moment(new Date(event.date)).format('MMM Do YY')} </em>
                    <em>
                      (<b>{moment(new Date(event.date)).fromNow()}</b>)
                    </em>
                  </p>
                  <p>
                    <b>Price: </b>
                    <em>
                      &#8377;{event.price === '0' ? 'Free' : `${event.price}`}
                    </em>
                  </p>
                  <p>
                    <b>Discount: </b>
                    <em>
                      {event.discount === '0'
                        ? 'No Discount'
                        : `${event.discount}%`}
                    </em>
                  </p>
                  <br />
                </div>
                <button
                  className="w3-button w3-block w3-teal"
                  onClick={() => this.deleteEvent(event.id)}
                >
                  Remove Event
                </button>
              </div>{' '}
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <Form style={{ marginLeft: '45%' }} inline>
            <FormGroup controlid="formControlsSelect">
              <FormControl
                componentClass="select"
                controlid="formInlineOption"
                placeholder="select"
                onChange={event => this.setState({ opt: event.target.value })}
              >
                <option>select</option>
                <option>-----</option>
                <option value="free">Free</option>
                <option value="Having Discount">Having Discount</option>
                <option value="No Discount">No Discount</option>
              </FormControl>
            </FormGroup>
            <Button
              bsStyle="primary"
              bsSize="small"
              style={{ display: 'inline' }}
              onClick={() => {
                this.handleSelect();
              }}
            >
              <Glyphicon glyph="search" />
            </Button>
          </Form>
          <br />
          <br />
        </div>
        {this.renderEvents()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state
  };
}

export default connect(mapStateToProps, { addEvent, deleteEvent, filterEvent })(
  Dashboard
);
