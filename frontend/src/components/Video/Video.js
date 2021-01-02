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
      <img alt={video.title} src={video.thumbnail && video.thumbnail.url}></img>
      <div>{cropDescrip(video.description)}</div>
    </div>
  );
}

export default Video;
