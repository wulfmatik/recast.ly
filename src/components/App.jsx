import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0]
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
  }

  handleVideoClick(video) {
    this.setState({
      video: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.video}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList handleVideoClick={this.handleVideoClick} videos={this.state.videos}/></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
