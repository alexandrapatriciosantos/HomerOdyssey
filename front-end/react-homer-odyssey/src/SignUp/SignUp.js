import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
    };
  }

  
  updateEmailField = (e) => {
    this.setState( {email : e.target.value})
  }
  updateNameField = (e) => {
    this.setState( {name : e.target.value})
  }
  updateLastNameField = (e) => {
    this.setState( {lastName : e.target.value})
  }
  updatePassword = (e) => {
    this.setState( {password : e.target.value})
  }
  updatePasswordConf = (e) => {
    this.setState( {passwordConf : e.target.value})
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", JSON.stringify(this.state,1,1))
  }

  render() {
    return(
      <>
      <h1>{JSON.stringify(this.state,1,1)}</h1>
      <form onSubmit={this.formSubmit}>
        <label>
          Email:
          <input type="email" name="email" onChange={this.updateEmailField}/>
        </label>
        <label>
          First name:
          <input type="text" name="Name" onChange={this.updateNameField}/>
        </label>
        <label>
          Last name:
          <input type="text" name="Last name" onChange={this.updateLastNameField}/>
        </label>
        <label>
          Password:
          <input type="password" name="Password" onChange={this.updatePassword}/>
        </label>
        <label>
          Confirm your password:
          <input type="password" name="PasswordConf" onChange={this.updatePasswordConf}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </>
    );
  }
}

export default SignUp

//email, a password, a passwordconf(verification), a name, and a lastname.