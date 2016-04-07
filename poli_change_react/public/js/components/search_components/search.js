const React                   = require( 'react' );
const $                       = require( 'jquery' );

const Search = React.createClass( {

  handleSubmit : function( event ){
    event.preventDefault()
    console.log( "search function clicked" )

    let search = {
      // put search parameters here
      q:

        $.ajax(
          {
            url : 'http://localhost:9001/records',
            data : data,
            type : 'get',
            }
          }
        )
        .done( () => {
          this.props.updated();
        } )
      }
    }
    console.log( 'search result: ', search )
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
