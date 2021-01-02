import { useState } from 'react'
import Header from '../Header/Header'
import Metrics from '../Metrics/Metrics'
import Videos from '../Videos/Videos'
import './App.css';

const App = () => {
    const [monday, setMonday] = useState()
    return (
        <div className="App" >

            <Header />

            <div className="info">
                Disponibilidade semanal para assistir vídeos (tempo em minutos):
            </div>

            <div className="week-day-inputs" >
                <input className="week-day" value={monday} onChange={(e) => setMonday(e.target.value)} name="mon" type="text" />
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
            <Videos />

        </div>
    );
}

export default App;