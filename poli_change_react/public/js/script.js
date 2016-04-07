'use strict'

const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const browserHistory  = ReactRouter.browserHistory

const auth            = require( './auth.js' );
const Signup          = require( './components/signup.js' );
const EditProfile     = require( './components/editProfile.js' );
const Listings        = require( './components/listings.js' );
const Profiles        = require( './components/profiles.js' );
const Login           = require( './components/nav_components/login.js' );
const Logout          = require( './components/nav_components/logout.js' );
const Nav             = require( './components/nav_components/nav.js' );
const Search          = require( './components/search_components/search.js' );
const AdvSearch       = require( './components/search_components/advSearch.js' );

const App = React.createClass({

  getInitialState : function() {
    return {
      loggedIn : false,
      signupBox : false,
      advSearch : false,
      profile : false,
      edit : false,
    }
  },

  login : function( username, password ) {
    let data = {
      email : username,
      password : password
    }

    $.post( 'users/login', data )
    .done( ( data ) => {
      localStorage.token = data.token;
      this.state.loggedIn = true;
      this.state.signupBox = false;
      this.setState( { loggedIn : this.state.loggedIn, signupBox : this.state.signupBox } )
    })
  },

  logout : function() {
    this.state.loggedIn = false;
    this.setState( { loggedIn : this.state.loggedIn } )
  },

  signup : function() {
    this.state.signupBox = true;
    this.setState( { signupBox : this.state.signupBox } )
  },

  profile : function() {
    this.state.profile = true;
    this.state.edit = false;
    this.setState( { profile :this.state.profile, edit : this.state.edit, } )
  },

  handleAdvance : function() {
    this.state.advSearch = true;
    this.setState( { advSearch : this.state.advSearch } )
  },

  handleBasic : function() {
    this.state.advSearch = false;
    this.setState( { advSearch : this.state.advSearch } )
  },

  // toggleSuperPac : function() {
  //   //fill this out with a toggle
  // },

  edit : function() {
    this.state.edit = true;
    this.state.profile = false;
    this.setState( { edit : this.state.edit, profile : this.state.profile } )
  },

  deleted : function() {
    this.state.loggedIn = false;
    this.state.edit = false;
    this.setState( { loggedIn : this.state.loggedIn, edit : this.state.edit } )
  },

  updated : function() {
    this.state.edit = false;
    this.setState( {edit : this.state.edit } )
  },

  render : function() {

    let signedInView =
      <div>
      </div>

    let notSignedIn =
      <div>
        <Signup signedIn = { this.signedIn }/>
      </div>

    let editIsFalse =
      <div>
      </div>

    let editIsTrue =
      <div>
        <EditProfile deleted = { this.deleted } updated = { this.updated }/>
      </div>

    let regularSearch =
      <div>
        <Search />
        <div id= "adSearch">
          <div id = "adSearchInner">
            <a id = "aSearchContainer" onClick = { this.handleAdvance }> Advanced Search </a>
          </div>
        </div>
      </div>

    let advSearch =
      <div>
        <AdvSearch />
        <div id= "adSearch">
          <div id = "adSearchInner">
            <a id = "aSearchContainer" onClick = { this.handleBasic }> Basic Search </a>
          </div>
        </div>
      </div>

    let profilePage =
      <div>
        <Profiles />
      </div>

    return (
      <div className="container" id="allBody">
        <div className="row" id="navbar">
        <br/>
          <Nav loggedIn={ this.state.loggedIn } login={ this.login } logout={ this.logout } signup={ this.signup } profile={ this.profile } edit={ this.edit }/>

        </div>

        <div className="row" id="mainBody">
          <div className="column" id="mainColumn">
            <div className="row" id="display">

            </div>
          </div>
          <div className="column" id="sideColumn">
            <div className="row" id="searchbar">
              <div className= "row" id="searchbar">
                <div>
                  { this.state.advSearch ? advSearch : regularSearch }
                </div>
              </div>
            </div>
            <div className="row" id="listings">

            </div>
          </div>
        </div>

        <div className="row" id="footer">
        </div>
      </div>
    )
  }
} );

const routes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <Route path="login" component={ Login }/>
      <Route path="logout" component={ Logout }/>
      <Route path="signup" component={ Signup }/>
      <Route path="nav" component={ Nav }/>
      <Route path="search" component={ Search }/>
      <Route path="listings" component={ Listings }/>
    </Route>
  </Router>

)

ReactDOM.render( routes, document.querySelector('#container' ) )
