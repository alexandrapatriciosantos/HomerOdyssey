import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
    };
  }

  
  updateField = (e) => {
    this.setState( { [e.target.name] : e.target.value})
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
          <input type="email" name="email" onChange={this.updateField}/>
        </label>
        <label>
          First name:
          <input type="text" name="Name" onChange={this.updateField}/>
        </label>
        <label>
          Last name:
          <input type="text" name="Last name" onChange={this.updateField}/>
        </label>
        <label>
          Password:
          <input type="password" name="Password" onChange={this.updateField}/>
        </label>
        <label>
          Confirm your password:
          <input type="password" name="PasswordConf" onChange={this.updateField}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </>
    );
  }
}

export default SignUp
