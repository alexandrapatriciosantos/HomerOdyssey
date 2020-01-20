import React from 'react';

class SignUp extends React.Component {

  constructor(props) {
    super(props); 
    
    this.state = {
      flash: ""
    };
  }

  
  updateField = (e) => {
    this.setState( { [e.target.name] : e.target.value})
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.log("form submited", JSON.stringify(this.state,1,1))

    fetch("http://localhost:5000/auth/signup",
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    })
    .then(res => res.json())
    .then(
      res => this.setState({"flash": res.flash}),
      err => this.setState({"flash": err.flash})
    )
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
          Password:
          <input type="password" name="password" onChange={this.updateField}/>
        </label>
        <label>
          Confirm your password:
          <input type="password" name="passwordConf" onChange={this.updateField}/>
        </label>
        <label>
          First name:
          <input type="text" name="name" onChange={this.updateField}/>
        </label>
        <label>
          Last name:
          <input type="text" name="lastname" onChange={this.updateField}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      </>
    );
  }
}

export default SignUp
