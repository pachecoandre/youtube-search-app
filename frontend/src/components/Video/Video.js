import './Video.css';

const Video = (props) => {

  const video = props.video

  const cropDescrip = (description = '') => {
    if (description.length >= 300) {
      return `${description.substr(0, 297)}...`
    }
    return description
  }

  return (
    <div className="video">
      <img alt="Video" src={video.thumbnail && video.thumbnail.url}></img>
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
