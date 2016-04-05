const React = require( 'react' );

const Signup = React.createClass( {
  handleSubmit : function( event ) {
    event.preventDefault()

    const first_name = this.refs.name.value
    const last_name = this.refs.name.value
    const email = this.refs.email.value
    const pass = this.refs.pass.value

    $.post( '/users', { email: email, password: pass, first_name: first_name, last_name: last_name } )
    .done( ( data ) => {
      this.props.signedIn();
    })
  },

  render : function() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="searchContainers">
          <div className="searchCenter">
            <h3>PoliChange Signup</h3>
            <label>
              <input className="allInputs" id="signupFirstName" type="text" ref="first_name" placeholder="First Name"/>
            </label>
            <label>
              <input className="allInputs" id="signupLastName" type="text" ref="last_name" placeholder="Last Name"/>
            </label>
            <label>
              <input className="allInputs" id="signupEmail" type="text" ref="email" placeholder="Email"/>
            </label>
            <label>
              <input className="allInputs" id="signupPassword" type="password" ref="pass" placeholder="Password"/>
            </label>
            <br />
            <button className="allButtons" id="signupButton" type="submit">signup</button>
          </div>
        </div>
      </form>
    )
  }
} )

module.exports = Signup;
