import React from "react";
import "./styles/PageError.scss";

function PageError(props) {
  return (
    <div className="pagerror">
      <div className="text">
        <p>{props.error.message}</p>
      </div>
      <div className="contaerror">
        {/* caveman left */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
        {/* caveman right */}
        <div className="caveman">
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="leg">
            <div className="foot">
              <div className="fingers"></div>
            </div>
          </div>
          <div className="shape">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
          <div className="head">
            <div className="eye">
              <div className="nose"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="arm-right">
            <div className="club"></div>
          </div>
        </div>
        <div className="textdown"><h3>Error {props.error.message}</h3></div>
      </div>
    
    </div>
  );
}

export default PageError;
