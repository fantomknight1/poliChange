const express                     = require( 'express' );
const request                     = require( 'request' );
const parseString                 = require( 'xml2js' ).parseString;

const search = express.Router();

search.route('/candidates')
.get( getCandidates, ( req, res ) => {
  res.json( res.dataCandidate )
})

Object.prototype.pluckFirstArrayItem = function( first_argument ) {
  return Object.keys( this ).reduce( ( copy, key ) => {
    copy[ key ]=this[ key ][ 0 ]
    return copy;
  }
  ,{})
};

function( getCandidates( req, res, next ) {
  request( 'http://localhost:9001/records/search/?' + 'candidate=' + req.query.data.candidate, function ( err, response, body ) {
    var data = JSON.parse( body );
    res.dataCandidate = data.results;
    next()
  });
}

var data = ''

module.exports = search;
