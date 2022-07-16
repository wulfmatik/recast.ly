import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      video: {}
    };
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleVideoClick(video) {
    this.setState({
      video: video
    });
  }

  componentDidMount() {
    var cb = function(data) {
      this.setState({
        videos: data,
        video: data[0]
      });
    };
    searchYouTube('', cb.bind(this), false);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search /></div>
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
// delete me!
export default App;
