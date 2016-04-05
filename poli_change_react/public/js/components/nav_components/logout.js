const React                 = require( 'react' );

const Logout = React.createClass({
  handleLogout : function( event ) {
    event.preventDefault();
    this.props.logout();
  },

  render : function() {
    return (
      <li>
        <div id="OuterLogoutLink">
          <button class="allButtons" id="logoutButton" onClick={ this.handleLogout }>Logout</button>
        </div>
      </li>
    )
  }
})

module.exports = Logout;
