import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import Metrics from '../Metrics/Metrics'
import Videos from '../Videos/Videos'
import loading from '../../img/loading.gif'
import './App.css';

const App = () => {
    const [monday, setMonday] = useState('')
    const [tuesday, setTuesday] = useState('')
    const [wednesday, setWednesday] = useState('')
    const [thursday, setThursday] = useState('')
    const [friday, setFriday] = useState('')
    const [saturday, setSaturday] = useState('')
    const [sunday, setSunday] = useState('')
    const [search, setSearch] = useState('')
    const [fetching, setFetching] = useState(false)
    const [metrics, setMetrics] = useState({})
    const [videos, setVideos] = useState([])

    useEffect(() => {
        // console.log()
    })

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log(`Week setup: ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}`)
        console.log(`Search: ${search}`)
        setFetching(true)
        try {
            const response = await axios.get(`http://localhost:5000/videos?q=${search}&weekConfig=[${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}]`)
            console.log(response.data)

        } catch (error) {
            console.log(error)
            return {}
        }
        setFetching(false)
        // setMetrics({
        //     titleCounts: response.frequentWords.titleCounts,
        //     descripCounts: response.frequentWords.descripCounts
        // })
        // setVideos(response.videos)
    }

    return (
        <div className="App" >
            <Header />

            <div className="info">
                Disponibilidade semanal para assistir vídeos:<br />(tempo em minutos)
            </div>

            <div className="week-day-inputs" >
                <input className="week-day" value={monday} onChange={(e) => setMonday(e.target.value)} name="mon" type="text" />
                <input className="week-day" value={tuesday} onChange={(e) => setTuesday(e.target.value)} name="tue" type="text" />
                <input className="week-day" value={wednesday} onChange={(e) => setWednesday(e.target.value)} name="wed" type="text" />
                <input className="week-day" value={thursday} onChange={(e) => setThursday(e.target.value)} name="thu" type="text" />
                <input className="week-day" value={friday} onChange={(e) => setFriday(e.target.value)} name="fri" type="text" />
                <input className="week-day" value={saturday} onChange={(e) => setSaturday(e.target.value)} name="sat" type="text" />
                <input className="week-day" value={sunday} onChange={(e) => setSunday(e.target.value)} name="sun" type="text" />
            </div>
            <div>
                <form onSubmit={handleSearch}>
                    <input className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} name="search-input" type="text" />
                    <button type="submit">Buscar</button>
                </form>
            </div>

            {fetching ? <div><img className="loading" alt="Carregando" src={loading}></img></div> : null}
            {videos.length > 0 ? <div>
                <Metrics metrics={metrics} />
                <Videos videos={videos} />
            </div> : null}
        </div>
    );
}

export default App;