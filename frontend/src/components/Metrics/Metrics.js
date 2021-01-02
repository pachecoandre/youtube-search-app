import './Metrics.css';

const Metrics = (props) => {
  
  const getWords = (wordCounts) => {
    const words = wordCounts.map(count => count[0])
    return words.join(' - ')
  }
  const frequentWords = props.metrics.frequentWords
  const titleCounts = frequentWords && frequentWords.titleCounts && getWords(frequentWords.titleCounts)
  const descripCounts = frequentWords && frequentWords.descripCounts && getWords(frequentWords.descripCounts)
  const watchDuration = props.metrics.watchDuration

  return (
    <div className="metrics">
      {titleCounts ? <div>Palavras mais usadas em títulos: {titleCounts}</div> : null}
      {descripCounts ? <div>Palavras mais usadas em títulos: {descripCounts}</div> : null}
      {watchDuration ? <div>Tempo total para assistir: {watchDuration} dia(s)</div> : null}
    </div>
  );
}

export default Metrics;
