import React from "react";
import "./styles/SecOneHome.css";
import "./styles/CardsHome.scss";
import { DiJavascript1 , DiReact, DiCss3Full , DiGithubBadge } from "react-icons/di";


class SecOneHome extends React.Component {
  render() {



    return (
      <section>
        <div className="container-fluid">
          <div className="sec-one-home">
            <div className="custom-shape-divider-top-1608487546">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M1200 0L0 0 598.97 114.72 1200 0z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>

      

              

            <div className="container h-100">

              <div className="row align-middle">
                
                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-1">
                    <div className="txt">
                      <h1>JAVASCRIPT</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                      <i><DiJavascript1 /></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-2">
                    <div className="txt">
                      <h1>REACT</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                    <i><DiReact /></i>
                    </div>
                  </div>
                </div>



                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-3">
                    <div className="txt">
                      <h1>CSS</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                    <i><DiCss3Full /></i>
                    </div>
                  </div>
                </div>


                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-1">
                    <div className="txt">
                      <h1>JAVASCRIPT</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                      <i><DiJavascript1 /></i>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-2">
                    <div className="txt">
                      <h1>REACT</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                    <i><DiReact /></i>
                    </div>
                  </div>
                </div>



                <div className="col-md-6 col-lg-4 column">
                  <div className="card gr-3">
                    <div className="txt">
                      <h1>CSS</h1>
                      <p>Visual communication and problem-solving</p>
                    </div>
                    <a target="_black" href="https://github.com/driver47"><DiGithubBadge /></a>

                    <div className="ico-card">
                    <i><DiCss3Full /></i>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SecOneHome;
