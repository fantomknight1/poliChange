const React                   = require( 'react' );

const ToProfile = React.createClass({
  handleProfile : function( event ) {
    event.preventDefault();
    this.props.ToProfile();
  },

  render : function() {
    return (
      <li>
        <div id="outerProfileButton">
          <button className="allButtons" id="profileButton" onClick={ this.handleProfile }>Profile</button>
        </div>
      </li>
    )
  }
})

module.exports = ToProfile;
