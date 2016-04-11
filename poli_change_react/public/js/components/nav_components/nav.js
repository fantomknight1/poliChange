const React                 = require( 'react' );

const Logout                = require( './logout.js' );
const Login                 = require( './login.js' );
const ToProfile             = require( './toprofile.js' );
const Edit                  = require( './edit.js' );

const Nav                   = React.createClass({

  login : function( username, password ) {
    this.props.login( username, password )
  },

  logout :function() {
    this.props.logout();
  },

  handleSignup : function( event ) {
    event.preventDefault();
    this.props.signup();
  },

  ToProfile : function() {
    this.props.profile();
  },

  edit : function() {
    this.props.edit();
  },

  render : function(){
    return(
      <div className="navContainer">
        <div className="navLeft">
          <div className="logo" id="outerNavLogo">
            <h5 id="navLogo">Logo</h5>
          </div>
          <div className="title" id="outerNavTitle">
            <h3 id="navTitle">PoliChange</h3>
          </div>
        </div>
        <div className="navCenter">

        </div>

      </div>
    )
  }
})

module.exports = Nav;
