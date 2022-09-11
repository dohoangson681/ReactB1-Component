import React, { Component } from 'react'
import ContentComponent from '../ContentComponent/ContentComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <WelcomeComponent/>
        <ContentComponent/>
        <FooterComponent/>
      </div>
    )
  }
}
