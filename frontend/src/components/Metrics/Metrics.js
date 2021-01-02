import './Metrics.css';

const Metrics = (props) => {

  const getWords = (wordCounts) => {
    const words = wordCounts.map(count => <div className="chip">{count[0]}</div>)
    return words
  }
  const frequentWords = props.metrics.frequentWords
  const titleCounts = frequentWords && frequentWords.titleCounts && getWords(frequentWords.titleCounts) || <span> </span>
  const descripCounts = frequentWords && frequentWords.descripCounts && getWords(frequentWords.descripCounts) || <span> </span>
  const watchDuration = props.metrics.watchDuration

  return (
    <div className="metrics">


      
      <div className="metrics-labels">
        <p>Palavras mais usadas em títulos:</p>
        <p>Palavras mais usadas nas descrições:</p>
        <p>Tempo total para assistir:</p>
      </div>
      <div className="metrics-figures">
        <div className="chips-group">{titleCounts}</div>
        <div className="chips-group">{descripCounts}</div>
        <p>{watchDuration && `${watchDuration} dia(s)` || <span> </span>}</p>
      </div>
    </div>
  );
}

export default Metrics;
