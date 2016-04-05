const React                   = require( 'react' );
const SuperPacResource        = require( './superPacResource.js' );

const AdvSearch = React.createClass({

  handleSubmit : function( event ){
    event.preventDefault()
    let search = {
      //Search parameters here
    }

    console.log( 'this is an advanced search parameter' );
    this.refs.searchForm.reset()
  },

  handleSuperPacCheck : function(){
    this.props.toggleSuperPac()
  },

  render : function() {
    return(
      <form ref="searchForm" onSubmit={ this.handleSubmit }>
        <div className="searchContainers">
          <div className="searchCenter">
            <input className="allInputs" id="searchInput" type="text" placeholder="Name" ref="searchInput" required />
          </div>
          <div id="searchState">
            <div className="searchCenter">
              <select ref="state">
                <option value="alabama">AL</option>
                <option value="alaska">AK</option>
                <option value="arizona">AZ</option>
                <option value="arkannsas">AR</option>
                <option value="california">CA</option>
                <option value="colorado">CO</option>
                <option value="connecticut">CT</option>
                <option value="delaware">DE</option>
                <option value="districtOfColumbia">DC</option>
                <option value="florida">FL</option>
                <option value="georgia">GA</option>
                <option value="hawaii">HI</option>
                <option value="idaho">ID</option>
                <option value="illinois">IL</option>
                <option value="indiana">IN</option>
                <option value="iowa">IA</option>
                <option value="kansas">KS</option>
                <option value="kentucky">KY</option>
                <option value="louisiana">LA</option>
                <option value="maine">ME</option>
                <option value="maryland">MD</option>
                <option value="massachusetts">MA</option>
                <option value="michigan">MI</option>
                <option value="minnesota">MN</option>
                <option value="mississippi">MS</option>
                <option value="missouri">MO</option>
                <option value="montana">MT</option>
                <option value="nebraska">NE</option>
                <option value="nevada">NV</option>
                <option value="newHampshire">NH</option>
                <option value="newJersey">NJ</option>
                <option value="newMexico">NM</option>
                <option value="newYork">NY</option>
                <option value="northCarolina">NC</option>
                <option value="northDakota">ND</option>
                <option value="ohio">OH</option>
                <option value="oklahoma">OK</option>
                <option value="oregon">OR</option>
                <option value="pennsylvania">PA</option>
                <option value="rhodeIsland">RI</option>
                <option value="southCarolina">SC</option>
                <option value="southDakota">SD</option>
                <option value="tennessee">TN</option>
                <option value="texas">TX</option>
                <option value="utah">UT</option>
                <option value="vermont">VT</option>
                <option value="virginia">VA</option>
                <option value="washington">WA</option>
                <option value="westVirginia">WV</option>
                <option value="wisconsin">WI</option>
                <option value="wyoming">WY</option>
              </select>
            </div>
          </div>
          <div id="searchParty">
            <div className="searchCenter">
              <select ref="party">
                <option value="republican">Republican</option>
                <option value="democrat">Democrat</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="searchCenter">
            <SuperPacResource name="superPacTrue" checked={ this.handleSuperPacCheck }/>
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
