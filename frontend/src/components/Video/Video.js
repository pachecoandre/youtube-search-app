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
        <a target="_blank" rel="noopener noreferrer" href={video.url}><img alt="Video" src={video.thumbnail && video.thumbnail.url}></img></a>
      </div>
      <div className="video-info-container">
        <div className="video-info">
          <a target="_blank" rel="noopener noreferrer" href={video.url}><div className="video-title">{video.title}</div></a>
          <div className="video-description">{cropDescrip(video.description)}</div>
        </div>
        <div>
          {video.duration}
        </div>
      </div>
    </div>
  );
}

export default Video;
