import React, { Component } from 'react';
import { Row, Col, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import Recaptcha from 'react-recaptcha';

export default class ContactUs extends Component {

  constructor() {
    super();

    this.publicKey = (window.location.protocol === 'file:')
      ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
      : '6Lfqcc8SAAAAAMeP6t0eCQkbQEKTIXit-_-xWHvy';

    this.state = {
      form: {
        'name': '',
        'email': '',
        'number': '',
        'subject': '',
        'message': '',
        'g-recaptcha-response': '',
      },
      formValidated: false,
      formSent: false,
    };
  }

  getRecaptcha = () => {
    if (window.location.protocol === 'file:') {
      return null;
    }

    return (
      <Recaptcha
        render="explicit"
        verifyCallback={this.verifyCallback}
        sitekey={this.publicKey}
      />
    );
  };

  sendMessage = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/mail.php');
    xhr.send(JSON.stringify(this.state.form));
    this.setState({'formSent': true});
  }

  verifyCallback = (response) => {
    this.setFormValue('g-recaptcha-response', response);
  }

  handleChange = (e) => {
    this.setFormValue(e.target.name, e.target.value);
  }

  setFormValue(key, value) {
    this.setState({
      form: Object.assign(this.state.form, {
        [key]: value
      })
    });

    if (
      !!this.state.form.name
      && !!this.state.form.email
      && !!this.state.form.number
      && !!this.state.form.subject
      && !!this.state.form.message
      && !!this.state.form['g-recaptcha-response']
    ) {
      this.setState({'formValidated': true});
    }
  }

  getForm() {
    return (
      <Row>
        <div className="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3">
          <FormGroup controlId="Name">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              name="name"
              type="text"
              value={this.state.form.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Number">
            <ControlLabel>Mobile/Home Number</ControlLabel>
            <FormControl
              name="number"
              type="text"
              value={this.state.form.number}
              placeholder="07795..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Email">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              name="email"
              type="text"
              value={this.state.form.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Subject">
            <ControlLabel>Subject</ControlLabel>
            <FormControl
              name="subject"
              type="text"
              value={this.state.form.subject}
              placeholder="Subject"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Message">
            <ControlLabel>Message</ControlLabel>
            <FormControl
              name="message"
              componentClass="textarea"
              value={this.state.form.message}
              placeholder="Message"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="reCAPTCHA">
            {this.getRecaptcha()}
          </FormGroup>
        </div>
      </Row>
    );
  }

  render() {
    let form = null;

    if (!this.state.formSent) {
      form = this.getForm();
    }

    let color = (this.state.formSent) ? 'btn-secondary' : 'btn-primary';
    let message = (this.state.formSent) ? 'Sucessfully Sent' : 'Send Message';

    let button = (this.state.formValidated) ? (
      <FormGroup controlId="Submit" id="submit-button" className="text-center">
        <div className={`btn ${color} btn-xl page-scroll sr-button`} onClick={this.sendMessage}>
          {message}
        </div>
      </FormGroup>
    ) : (
      <FormGroup controlId="Submit" id="submit-button" className="text-center">
        <div className={`btn btn-primary btn-xl page-scroll sr-button `} disabled="disabled">
          {message}
        </div>
      </FormGroup>
    )

    return (
      <section id="contact">
        <div className="container">
          <Row>
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">Get In Touch!</h2>
              <hr className="primary" />
            </div>
          </Row>
          {form}
          {button}
        </div>
      </section>
    );
  }
}
