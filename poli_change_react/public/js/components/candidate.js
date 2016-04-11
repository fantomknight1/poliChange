const ReactDOM                = require( 'react' );

const Candidate = React.createClass( {
  handleDelete : function( event ) {
    event.preventDefault();
    let data = {
      candidate : this.props.details.candidate
    }
    $.ajax( {
      url : '/users/jobs/delete',
      data : data,
      method : 'delete',
      beforeSend: function( xhr ){
        xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.token );
      }
    } )
    .done( ( data ) => {
      this.props.reset()
    } )
  },

  render : function() {
    return (
      <tr>
        <td>{ this.props.details.candidate }</td>
        <td className="deleteButton">
          <button id="deleteButtonTable" onClick={ this.handleDelete } href="#"><span className="glyphicon"></span> Delete</button>
        </td>
      </tr>
    )
  }
} )

module.exports = Candidate;
