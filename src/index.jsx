import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import "./portfolio.css";
// import { text } from 'body-parser';

export const Layout = ({
	breakpoint,
	text = "Initial Design Research and Concept Development",
	text2 = "User Reseaerch and Observation",
	text3 = "Client Persona Development: Created a detailed persona for Billy, focusing on his cultural background, lifestyle, personal interests, and specific mobility challenges. This includes his strong connection to Maori culture, love for street fashion, and active lifestyle, all of which influenced the design criteria",
	placeholderImage = "product-snap.png",
}) => {
  	return(
      <div className={`process-layout ${breakpoint}`}>
        <div className="section-title">
          <div className="subheading">Design Goals</div>
          <div className="content">
            <p className="heading">{text}</p>
          </div>
        </div>
        <div className="row-wrapper">
          <div className="row">
            <div className="column">
              <div className="feature-tab">
                <div className="text-wrapper">
                  {breakpoint === "desktop" && <>01</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
                <div className="div">
                  {breakpoint === "desktop" && <>Phase one</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
              </div>
              <div className="content-2">
                <div className={`header ${headerClassName}`}>
                  <div className="heading-2">{text2}</div>
                  <p className="text">{text3}</p>
                </div>
                <img
                  className="placeholder-image"
                  src={placeholderImage}
                  alt="Crutches"
                />
              </div>
            </div>
            <div className="feature-wrapper">
              <div className="divider"></div>
              <div className="feature-tab">
                <div className="text-wrapper-2">
                  {breakpoint === "desktop" && <>02</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
                <div className="text-wrapper-3">
                  {breakpoint === "desktop" && <>Phase two</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
              </div>
              <div className="divider"></div>
              <div className="feature-tab">
                <div className="text-wrapper-2">
                  {breakpoint === "desktop" && <>03</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
                <div className="feature-three">
                  {breakpoint === "desktop" && <>Phase three</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
              </div>
              <div className="divider"></div>
              <div className="feature-tab">
                <div className="text-wrapper-2">
                  {breakpoint === "desktop" && <>04</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
                <div className="text-wrapper-5">
                  {breakpoint === "desktop" && <>Phase four</>}
                  {/* {breakpoint === "mobile" && <>Phase one</>} */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
};    	

Layout.propTypes ={
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  placeholderImage: PropTypes.string,
  headerClassName: PropTypes.string,
};


ReactDOM.render(<Layout />, document.getElementById('root'));

