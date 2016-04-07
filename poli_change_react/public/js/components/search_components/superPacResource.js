const React                       = require( 'react' );

const SuperPacResource = React.createClass( {
  handleClick : function() {
    this.props.checked();
  },

  render :function() {
    return(
      <div>
        <label>
          <input type="checkbox" onClick={ this.handleClick }/>
          { this.props.name }
        </label>
      </div>
    )
  }
})

module.exports = SuperPacResource;
