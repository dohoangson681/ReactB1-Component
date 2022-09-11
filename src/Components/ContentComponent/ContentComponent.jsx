import React, { Component } from "react";

export default class ContentComponent extends Component {
  render() {
    return (
      <section className="content-section ">
        <div className="content-container container">
        <div className="row">
          {/* item 1 */}
          <div className="col-4 mb-5">
            <div className="card bg-light" >
              <div className="card-icon">
              <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
              <div className="card-body text-center">
                <h2 class="fs-4 fw-bold">Fresh new layout</h2>
                <p className="card-text">
                With Bootstrap 5, we've created a fresh new layout for this template!
                </p>
              </div>
            </div>
          </div>
          {/* item 2 */}
          <div className="col-4 mb-5">
            <div className="card bg-light" >
            <div className="card-icon">
              <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
              <div className="card-body text-center">
                <h2 class="fs-4 fw-bold">Free to download</h2>
                <p className="card-text">
                As always, Start Bootstrap has a powerful collectin of free templates.
                </p>
              </div>
            </div>
          </div>
          {/* item 3 */}
          <div className="col-4 mb-5">
            <div className="card bg-light" >
            <div className="card-icon">
            <i class="fa-sharp fa-solid fa-credit-card"></i>
              </div>
              <div className="card-body text-center">
                <h2 class="fs-4 fw-bold">Jumbotron hero header</h2>
                <p className="card-text">
                The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="col-4">
            <div className="card bg-light" >
            <div className="card-icon">
            <i class="fa-brands fa-bootstrap"></i>
              </div>
              <div className="card-body text-center">
              <h2 class="fs-4 fw-bold">Feature boxes</h2>
                <p className="card-text">
                We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          {/* item 5 */}
          <div className="col-4">
            <div className="card bg-light" >
            <div className="card-icon">
            <i class="fa-solid fa-code"></i>
              </div>
              <div className="card-body text-center">
                <h2 class="fs-4 fw-bold">Simple clean code</h2>
                <p className="card-text">
                We keep our dependencies up to date and squash bugs as they come!
                </p>
              </div>
            </div>
          </div>
          {/* item 6 */}
          <div className="col-4">
            <div className="card bg-light" >
            <div className="card-icon">
            <i class="fa-solid fa-check"></i>
              </div>
              <div className="card-body text-center">
                <h2 class="fs-4 fw-bold">A name you trust</h2>
                <p className="card-text">
                Start Bootstrap has been the leader in free Bootstrap templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
      </section>
    );
  }
}
