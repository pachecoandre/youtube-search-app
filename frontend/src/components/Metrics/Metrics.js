import './Metrics.css';

const Metrics = (props) => {
  return (
    <div className="metrics">
      {props.metrics && props.metrics.titleCounts ? <div>Palavras mais usadas em títulos: {props.metrics.titleCounts.join(' - ')}</div> : null}
      {props.metrics && props.metrics.descripCounts ? <div>Palavras mais usadas em títulos: {props.metrics.descripCounts.join(' - ')}</div> : null}
    </div>
  );
}

export default Metrics;
