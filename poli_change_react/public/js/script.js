'use strict'

const $               = require( 'jquery' );
const React           = require( 'react' );
const ReactDOM        = require( 'react-dom' );
const ReactRouter     = require( 'react-router' );
const Router          = ReactRouter.Router;
const Route           = ReactRouter.Route;
const Navigation      = ReactRouter.Navigation;
const Link            = ReactRouter.Link;
const BrowserHistory  = ReactRouter.BrowserHistory

const auth            = require( './auth.js' );
const Signup          = require( './components/signup.js' );
const listings        = require( './components/listings.js' );
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

  render : function() {

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
  <Router history={ BrowserHistory }>
    <Route path="/" component={ App }>
      <Route path="login" component={ Login }/>
    </Route>
  </Router>

)

ReactDOM.render( routes, document.querySelector('#container' ) )
