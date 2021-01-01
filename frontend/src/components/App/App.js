import './App.css';
import Header from '../Header/Header'
import Metrics from '../Metrics/Metrics'
import Video from '../Video/Video'

const App = () => {
    return (
        <div className="App" >

            <Header />

            <div className="info">
                Disponibilidade semanal para assistir vídeos (tempo em minutos):
            </div>

            <div className="week-day-inputs" >
                <input className="week-day" name="mon" type="text" />
                <input className="week-day" name="tue" type="text" />
                <input className="week-day" name="wed" type="text" />
                <input className="week-day" name="thu" type="text" />
                <input className="week-day" name="fri" type="text" />
                <input className="week-day" name="sat" type="text" />
                <input className="week-day" name="sun" type="text" />
            </div>
            <div>
                <input className="search-input" name="search-input" />
            </div>

            <Metrics />
            <Video />

        </div>
    );
}

export default App;