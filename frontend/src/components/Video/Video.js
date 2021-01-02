import './Video.css';

const Video = (props) => {

  const video = props.video

  const cropDescrip = (description = '') => {
    if (description.length >= 100) {
      return `${description.substr(0, 97)}...`
    }
    return description
  }

  return (
    <div className="video">
      <div>
        <img alt="Video" src={video.thumbnail && video.thumbnail.url}></img>
      </div>
      <div className="video-info">
        <div className="video-title">{video.title}</div>
        <div className="video-description">{cropDescrip(video.description)}</div>
      </div>
      <div>
        {video.duration}
      </div>
    </div>
  );
}

export default Video;
