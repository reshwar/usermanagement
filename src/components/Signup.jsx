import React, { Component } from 'react';
//import { reduxForm, Field } from 'redux-form';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {signupUserToApi} from '../Redux/userActions';
import UserForm from './UserForm';
const Signup = () => {

  // const initialFormData = Object.freeze({
  //   email: "",
  //   password: ""
  // });

  const initialFormData = {
    email: "",
    password: ""
  };
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    signupUserToApi(formData)
    // ... submit to API or something
  };
  const formsData ={name:"wswsw"}
  return (
    <UserForm formData={formsData}></UserForm>
  )
}

const mapStateToProps = state => {

  return {
    formsData: state.userReducer.userData,
  }
}
export default connect(mapStateToProps)(Signup)

{/* <Form className="ml-5 mr-5">
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
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
    </Form> */}

// const renderInput = props => <input {...props.input} type="text" />;
// const ReduxForm = () =>(
//   <div>
//     <h2>redux form</h2>
//     <form >
//       <Field name="customer" component={renderInput}/>
//       <button type="submit">submit</button>
//     </form>
//   </div>
// )

// export default reduxForm({
//   form:'registrationForm'
// })(ReduxForm);

// class Signup extends Component {
//     constructor(props){
//         super(props)
//     }
//    handleSubmit = () => {
//         alert("called");
//     }
//     componentDidMount = () =>{
//       alert("called");
//     }
//     render () {
//       //const {handleSubmit} = this.props;
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <Field
//             name="username"
//             component="input"
//             type="text"
//             placeholder="Username"
//           />
//           <Field
//             name="password"
//             component="input"
//             type="password"
//             placeholder="Password"
//           />
//           <button type="submit" label="submit">Submit</button>
//         </form>
//       );
//     }
//   }

//   Signup = reduxForm ({
//     form: 'login',
//   }) (Signup);

//   export default Signup;

// class Signup extends Component {
//     constructor(props){
//         super(props)
//     }
//    handleSubmit = () => {
//         alert("called");
//     }
//     render () {
//       //const {handleSubmit} = this.props;
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <Field
//             name="username"
//             component="input"
//             type="text"
//             placeholder="Username"
//           />
//           <Field
//             name="password"
//             component="input"
//             type="password"
//             placeholder="Password"
//           />
//           <button type="submit" label="submit">Submit</button>
//         </form>
//       );
//     }
//   }

//   Signup = reduxForm ({
//     form: 'login',
//   }) (Signup);

//   export default Signup;


// const newField = ({
//     input,
//     type,
//     placeholder,
//     id,
//     meta: { touched, error },
//     ...rest
//   }) => {
//     return (
//       <div>
//         <input {...input} placeholder={placeholder} type={type} id={id} />
//         {touched && error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     );
//   };

//   const required = value => (value ? undefined : 'Required!');
//   const longEnough = value =>
//     value && value.length >= 3 ? undefined : 'Too short!';
//   const email = value =>
//     value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
//       ? undefined
//       : 'Invalid email!';

//   const Signup = ({ handleSubmit, reset, pristine, submitting, valid }) => {
//     return (
//       <form onSubmit={handleSubmit(val => console.log(val))}>
//         <label htmlFor="first-name">Your first name:</label>
//         <Field
//           name="firstName"
//           type="text"
//           component={newField}
//           id="first-name"
//           placeholder="Benedict"
//           validate={[required, longEnough]}
//         />
//         <label htmlFor="email">Email:</label>
//         <Field
//           name="email"
//           type="email"
//           component={newField}
//           id="email"
//           placeholder="benedict@alligator.io"
//           validate={[required, email]}
//         />
//         <button type="submit" disabled={!valid || pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" onClick={reset}>
//           reset
//         </button>
//       </form>
//     );
//   };

//   export default reduxForm({
//     form: 'Signup'
//   })(Signup);
// class Signup extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Signup</h1>
//             </div>
//         )
//     }
// }

// export default Signup
