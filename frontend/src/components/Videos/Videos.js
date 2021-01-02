import Video from '../Video/Video'
import './Videos.css';

const Videos = (props) => {

  if (!props.videos) return <div></div>

  return (
    <div className="videos">
      {props.videos.map((video, index) => <Video key={index} video={video} />)}
    </div>
  );
}

export default Videos;
