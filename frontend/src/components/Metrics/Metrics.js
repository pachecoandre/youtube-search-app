import './Metrics.css';

const Metrics = (props) => {

  const getWords = (wordCounts) => {
    const words = wordCounts.map((count, index) => <div key={index} className="chip">{count[0]}</div>)
    return words
  }
  const frequentWords = props.metrics.frequentWords
  const titleCounts = frequentWords && frequentWords.titleCounts && getWords(frequentWords.titleCounts)
  const descripCounts = frequentWords && frequentWords.descripCounts && getWords(frequentWords.descripCounts)
  const watchDuration = props.metrics.watchDuration

  return (
    <div className="metrics">

      <table>
        <tbody>
          <tr>
            <td className="metrics-labels">
              Palavras mais usadas em títulos:
          </td>
            <td className="metrics-figures">
              <div className="chips-group">{titleCounts}</div>
            </td>
          </tr>
          <tr>
            <td className="metrics-labels">
              Palavras mais usadas nas descrições:
          </td>
            <td className="metrics-figures">
              <div className="chips-group">{descripCounts}</div>
            </td>
          </tr>
          <tr>
            <td className="metrics-labels">
              Tempo para assistir todos:
          </td>
            <td className="metrics-figures">
              <span style={{ fontSize: '20px' }}>{watchDuration}</span> <span>{parseInt(watchDuration) === 1 ? 'dia' : 'dias'}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Metrics;
