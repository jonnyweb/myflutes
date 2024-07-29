import React, { Component } from 'react'
import { Row, FormLabel, FormGroup, FormControl } from 'react-bootstrap'

import './style.scss'

const SITE_KEY = '6LcvaOMZAAAAAMqqaUwe9PN06bhqvTpzqQJcOPvG'

export default class ContactUs extends Component {
  constructor() {
    super()

    this.formRef = React.createRef()
    this.state = {
      form: {
        name: '',
        email: '',
        number: '',
        subject: '',
        message: '',
      },
      formValidated: false,
      formSent: false,
    }
  }

  encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  sendMessage = (e) => {
    e.preventDefault()
    // const token = grecaptcha.getResponse()

    if (!this.state.formValidated) return

    const formData = new FormData(this.formRef.current)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    }).then(() => {
      this.setState({ formSent: true })
    })
  }

  handleChange = (e) => {
    this.setFormValue(e.target.name, e.target.value)
  }

  setFormValue(key, value) {
    this.setState({
      form: Object.assign(this.state.form, {
        [key]: value,
      }),
    })

    if (
      !!this.state.form.name &&
      !!this.state.form.email &&
      !!this.state.form.number &&
      !!this.state.form.subject &&
      !!this.state.form.message
    ) {
      this.setState({ formValidated: true })
    }
  }

  getForm() {
    return (
      <Row>
        <div className="col-lg-4 col-lg-offset-4 col-sm-6 col-sm-offset-3">
          <FormGroup controlId="Name">
            <FormLabel className="fm-label">Name</FormLabel>
            <FormControl
              name="name"
              type="text"
              className="fm-input"
              value={this.state.form.name}
              placeholder="Name"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Number">
            <FormLabel className="fm-label">Mobile/Home Number</FormLabel>
            <FormControl
              name="number"
              type="text"
              className="fm-input"
              value={this.state.form.number}
              placeholder="07795..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Email">
            <FormLabel className="fm-label">Email</FormLabel>
            <FormControl
              name="email"
              type="text"
              className="fm-input"
              value={this.state.form.email}
              placeholder="Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Subject">
            <FormLabel className="fm-label">Subject</FormLabel>
            <FormControl
              name="subject"
              type="text"
              className="fm-input"
              value={this.state.form.subject}
              placeholder="Subject"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="Message">
            <FormLabel className="fm-label">Message</FormLabel>
            <FormControl
              name="message"
              as="textarea"
              className="fm-textarea"
              value={this.state.form.message}
              placeholder="Message"
              onChange={this.handleChange}
            />
          </FormGroup>
          <div className="g-recaptcha" data-sitekey={SITE_KEY}></div>
        </div>
      </Row>
    )
  }

  render() {
    let form = null

    if (!this.state.formSent) {
      form = this.getForm()
    }

    let color = this.state.formSent ? 'btn-secondary' : 'btn-primary'
    let message = this.state.formSent ? 'Sucessfully Sent' : 'Send Message'

    let button = this.state.formValidated ? (
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
      <section id="contactus">
        <div className="container">
          <form
            method="POST"
            data-netlify="true"
            ref={this.formRef}
            name="myflutes-contact"
            onSubmit={this.sendMessage}
          >
            <input type="hidden" name="form-name" value="myflutes-contact" />
            <Row>
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Get In Touch!</h2>
                <hr className="primary" />
              </div>
            </Row>
            {form}
            {button}
          </form>
        </div>
      </section>
    )
  }
}
