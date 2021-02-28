import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="section-title">
          <h2>{this.props.data ? this.props.data.title : 'loading...'}</h2>
        </div>
        <div className="container-fluid" style = {{marginLeft:20, marginRight:20}}>
          <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/1.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph1 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/1_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/2.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph2 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/2_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/3.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph3 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/3_small.png"
                        className="img-responsive"
                        style = {{width:'100%'}}
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/4.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph4 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/4_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/5.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph5 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/5_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/6.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph6 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/6_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/7.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph7 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/7_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/8.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph8 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/8_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/eye_gallery/9.png"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>{this.props.data ? this.props.data.paragraph9 : 'loading...'}</h4>
                      </div>
                      <img
                        src="img/portfolio/eye_gallery/9_small.png"
                        className="img-responsive"
                        alt="Project Title"
                        style = {{width:'100%'}}
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
