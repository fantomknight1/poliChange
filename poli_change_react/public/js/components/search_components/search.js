const React                   = require( 'react' );
const $                       = require( 'jquery' );

const Search = React.createClass( {

  handleSubmit : function( event ){
    event.preventDefault()
    console.log( "search function clicked" )
      // put search parameters here
    let candidate = {
      candidate : this.refs.searchInput.value
    }

    $.get('http://localhost:9001/records/search/?candidate='+candidate['candidate'])
    .done( (data) => {
      console.log( data )
    })
    // console.log( 'search result: ', search )
    this.props.addSearchCandidate( candidate )
    this.refs.searchForm.reset();
  },

  render() {
    return (
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
        <div className="searchContainers">
          <div className="searchCenter">
            <input id="searchInput" type="text" placeholder="Name" ref="searchInput" required />
          </div>
          <div className="searchCenter">
            <button className="allButtons" id="searchButton" type="submit">Search</button>
          </div>
        </div>
      </form>
    )
  }
})

module.exports = Search;
