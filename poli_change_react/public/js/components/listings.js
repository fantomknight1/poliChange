const React = require( 'react' );

const Listings = React.createClass( {
  handleSubmit : function( event ){
    event.preventDefault();
    this.props.savedCandidate(this.props.candidate, this.props.specific_party, this.props.amount, this.props.contributor, this.props.date );
  },

  render() {
    return (
      <div>
      <form onSubmit={ this.handleSubmit }>
        <div className="starter-template">
          <div className="individualListing">
            <div className="listingCaption">
              <ul id="res">
                <p>
                  <li>
                    <strong>candidate:</strong> { this.props.candidate }
                  </li>
                  <li>
                    <strong>Party:</strong> { this.props.specific_party }
                  </li>
                  <li>
                    <strong>Amount:</strong> { this.props.amount }
                  </li>
                  <li>
                    <strong>Contributor:</strong> { this.props.contributor }
                  </li>
                  <li>
                    <strong>Date:</strong> { this.props.date }
                  </li>
                </p>

                <button className="allButtons" id="savedPoliticianButton" type="submit"> Save Politician </button>
              </ul>
            </div>
          </div>
        </div>
      </form>
      </div>
    )
  }
})

module.exports = Listings;
