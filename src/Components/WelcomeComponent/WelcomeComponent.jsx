import React, { Component } from 'react'

export default class WelcomeComponent extends Component {
  render() {
    return (
      <section className='welcomeSection my-5' >
          <div className="welcome-container container px-4 bg-light rounded-3 text-centert">
              <h1 >A warm welcome!</h1>
              <p className='px-5' >Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
              <a class="btn btn-primary btn-lg" href="#!">Call to action</a>
          </div>
      </section>
    )
  }
}
