'use strict'
const React = require( 'react' )
const ReactDOM = require( 'react-dom' )
const Candidate = require( './candidate.js' )

const SavedCandidates = React.createClass( {
  getInitialState : function(){
    return {
      savedCandidates : {}
    }
  },

  componentDidMount : function(){
    $.get( {
      url: '/users/candidates'
      // beforeSend: function( xhr ) {
      //   xhr.setRequestHeader( "Authorization", 'Bearer ' + localStorage.token );
      // }
    } )
    .done( ( data ) => {
      this.state.savedJobs = data.indexByKey( 'candidate' );
      this.setState( { savedCandidates : this.state.savedCandidates } )
    } )
  },

  resetSavedStateAfterDelete : function(){
    $.get({
      url: '/users/jobs',
      beforeSend: function( xhr ) {
        xhr.setRequestHeader( "Authorization", 'Bearer ' + localStorage.token );
      }
    })
    .done( ( data ) => {
      this.state.savedCandidates = data.indexByKey( 'candidates' );
      this.setState( { savedCandidates : this.state.savedCandidates } )
    } )
  },

  renderSavedCandidate : function( key ){
    return (
      <Candidate key={ key } index={ key } reset={ this.resetSavedStateAfterDelete} details={ this.state.savedCandidates[ key ] }/>
    )
  },

  render : function(){

    return (
      <div>
        <h1>Saved Candidates</h1>
        <div className="container">
          <div className="outerTable">
            <table className="table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>
                </tr>
              </thead>
              { Object.keys( this.state.savedCandidates ).map( this.renderSavedCandidate ) }
            </table>
          </div>
        </div>
      </div>
    )
  }
} )

module.exports = SavedCandidates;
