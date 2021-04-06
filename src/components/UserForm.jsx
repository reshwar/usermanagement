import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

function UserForm(props) {

  const handleChange = (e) => {
    // updateFormData({
    //   ...formData,

    //   // Trimming any whitespace
    //   [e.target.name]: e.target.value.trim()
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(formData);
    //signupUserToApi(formData)
    // ... submit to API or something
  };
  return (
    <Form className="ml-5 mr-5">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" value={props.person && props.person.email} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" value={props.person && props.person.password}  />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" value={props.person && props.person.address}  />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Group id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
          </Button>
    </Form>
  )
}

// const mapStateToProps = state => {

//   return {
//     person: state.userReducer.formData[0]
//   }
// }

// export default connect(mapStateToProps)(UserForm)

export default UserForm