import React from "react";

const MainPageSlider = () => {
  return (
    <div
      id="slider"
      className="inspiro-slider slider-halfscreen dots-creative"
      data-height-xs={360}
      data-autoplay={2600}
      data-animate-in="fadeIn"
      data-animate-out="fadeOut"
      data-items={1}
      data-loop="true"
    >
      {/* Slide 1 */}
      <div
        className="slide background-image"
        style={{
          backgroundImage: 'url("/homepages/corporate-v4/images/7.jpg")',
        }}
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="slide-captions text-center">
            {/* Captions */}
            <h6 className="text-light">WELCOME TO</h6>
            <h2 className="text-uppercase text-medium text-light">
              BUSINESS COMPANY PRESENTATION
            </h2>
            <p className="lead text-light">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
              <br /> Suspendisse condimentum porttitor cursumus.
            </p>
            <a
              className="btn btn-red"
              href="http://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923"
            >
              Purchase POLO
            </a>
            {/* end: Captions */}
          </div>
        </div>
      </div>
      {/* end: Slide 1 */}
      {/* Slide 2 */}
      <div
        className="slide background-image"
        style={{
          backgroundImage: 'url("/homepages/corporate-v4/images/8.jpg")',
        }}
      >
        <div className="bg-overlay" />
        <div className="container">
          <div className="slide-captions text-center">
            {/* Captions */}
            <h6 className="text-light">WELCOME TO</h6>
            <h2 className="text-uppercase text-medium text-light">
              BUSINESS COMPANY
            </h2>
            <p className="lead text-light">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
              <br /> Suspendisse condimentum porttitor cursumus.
            </p>
            <a
              className="btn btn-red"
              href="http://themeforest.net/item/polo-responsive-multipurpose-html5-template/13708923"
            >
              Purchase POLO
            </a>
            {/* end: Captions */}
          </div>
        </div>
      </div>
      {/* end: Slide 2 */}
    </div>
  );
};

export default MainPageSlider;
