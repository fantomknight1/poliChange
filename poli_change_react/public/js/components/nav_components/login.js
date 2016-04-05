const React = require( 'react' );

const Login = React.createClass({
  handleLogin : function( event ){
    event.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.login( username, password );
  },

  render:function() {
    return (
      <form id="loginForm" onSubmit={ this.handleLogin } >
        <div className="container" id="signInForm">
          <input id="username" className="username" type="text" placeholder="username" ref="username"/>
          <input id="password" className="password" type="password" placeholder="password" ref="password"/>
          <button id="loginButton" className="allButtons" type="submit">Login</button>
        </div>
      </form>
    )
  }
})

module.exports = Login;
