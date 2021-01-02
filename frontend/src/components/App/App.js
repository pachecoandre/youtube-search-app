import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Metrics from '../Metrics/Metrics'
import Videos from '../Videos/Videos'
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

    useEffect(() => {
        // console.log()
    })

    const handleSearch = async (e) => {
        e.preventDefault()
        console.log(`Week setup: ${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}`)
        console.log(`Search: ${search}`)
        setFetching(true)
        await new Promise((resolve) => {
            setTimeout(() => {
                setFetching(false)
                resolve()
            }, 2000);
        })
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

            <Metrics />
            <Videos fetching={fetching} />

        </div>
    );
}

export default App;