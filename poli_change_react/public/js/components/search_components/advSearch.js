const React                   = require( 'react' );
const SuperPacResource        = require( './superPacResource.js' );

const AdvSearch = React.createClass({

  handleSubmit : function( event ){
    event.preventDefault()
    let search = {
      candidate: this.refs.searchInput.value
    }

    console.log( 'this is an advanced search parameter' );
    this.props.addSearchCandidate( search )
    this.refs.searchForm.reset()
  },

  render : function() {
    return(
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
        <div className="searchContainers">
          <div className="searchCenter">
            <input className="allInputs" id="searchInput" type="text" placeholder="Name" ref="searchInput" required />
          </div>
          <div className="searchCenter">
            <button type="submit" className="allButtons" id="advSearchButton">Search</button>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = AdvSearch;
