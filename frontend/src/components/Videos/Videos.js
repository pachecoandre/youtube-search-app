import './Videos.css';

const Videos = (props) => {
  return (
    <div className="videos">
      {props.fetching ? 'Buscando...' : 'Videos'}
    </div>
  );
}

export default Videos;
