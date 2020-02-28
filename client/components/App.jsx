import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingPage from './LandingPage'
import DisplayMap from './DisplayMap'
import SideBar from './SideBar'
import Details from './Details'

class App extends Component {
  state = {
    activePage: 'landingPage',
    landingPage: true,
    showMap: true
  }
  
  render () {
    return (
      <div>
        {this.props.activePage === 'landingPage' && <LandingPage />}
        <div className="appContainer">
          {this.props.activePage === 'map' &&
        <>
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <div className="mapContainer">
          <DisplayMap />
        </div>
        </> }
          {this.props.activePage === 'details' &&
        <>
        <div className="sideBarContainer">
          <SideBar />
        </div>
        <Details />
        </>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    activePage: state.activePage
  }
}

export default connect(mapStateToProps)(App)
