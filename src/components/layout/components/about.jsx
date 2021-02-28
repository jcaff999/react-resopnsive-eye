import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container-fluid" style = {{marginLeft:10, marginRight:10}}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style = {{marginLeft:0, margiRight:0}}>
             {/* <img src="img/about.jpg" className="img-responsive" alt=""/> */}
              <video src="video/1.mp4" className="img-responsive" height="500" controls style = {{width:'100%', marginLeft:0, marginRight:0}}>
              </video>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="about-text" style = {{width:'100%', marginLeft:0, marginRight:0, marginTop:10}}>
                <h2>{this.props.data ? this.props.data.title : 'loading...'}</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                {/* <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
