import './Videos.css';

const Videos = (props) => {
  return (
    <div className="videos">
      {
        props.videos ?
          props.videos.map((video, index) => (
            <div key={index}>
              <img alt={video.title} src={video.thumbnail}></img>
            </div>
          ))
          : null
      }
    </div>
  );
}

export default Videos;
