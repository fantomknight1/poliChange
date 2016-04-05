const React = require( 'react' );

const Listings = React.createClass( {
  handleSubmit : function( event ){
    event.preventDefault();
    this.props.savedPolitician(this.props.candidate_Entity, this.props.general_party, this.props.state );
  },

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="starter-template">
          <div className="individualListing">
            <div className="listingCaption">
              <ul id="res">
                <p>
                  <li>
                    <strong>Politician Name:</strong> { this.props.candidate_Entity }
                  </li>
                  <li>
                    <strong>Party:</strong> { this.props.general_party }
                  </li>
                  <li>
                    <strong>State:</strong> { this.props.state }
                  </li>
                </p>

                <button className="allButtons" id="savedPoliticianButton" type="submit"> Save Politician </button>
              </ul>
            </div>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = Listings;
