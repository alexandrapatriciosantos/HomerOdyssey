import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      email:""
    };
  }

  updateEmailField = (e) => {
    this.setState({email : e.target.value})
  }

  render() {
    return(
      <>
      <h1>{this.state.email}</h1>
      <input type="email" name="email" onChange={this.updateEmailField}/>
      </>
    );
  }
}

export default SignUp