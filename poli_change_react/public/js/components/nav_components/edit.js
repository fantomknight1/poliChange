const React                       = require( 'react' );

const Edit = React.createClass( {
  handleEdit : function( event ) {
    event.preventDefault();
    this.props.edit();
  },

  render : function() {
    return(
      <div id="OuterEditButton">
        <button className="allButtons" id="editButton" onClick={ this.handleEdit }>Edit</button>
      </div>
    )
  }
})

module.exports = Edit;
