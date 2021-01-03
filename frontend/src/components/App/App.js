import { useState } from 'react'
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
    const [errorMessage, setErrorMessage] = useState('')
    const [errorLocation, setErrorLocation] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()

        /* clean errors */
        setErrorMessage('')
        setErrorLocation('')

        setFetching(true)
        const weekConfig = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
        const foundError = checkErrors({ weekConfig, search })

        try {
            if (foundError) {
                setFetching(false)
                return
            }
            console.log(`Week config: ${JSON.stringify(weekConfig)}`)

            const response = await axios.get(`http://localhost:5000/videos?q=${search}&weekConfig=[${monday}, ${tuesday}, ${wednesday}, ${thursday}, ${friday}, ${saturday}, ${sunday}]`)
            setMetrics({
                watchDuration: response.data && response.data.watchDuration,
                frequentWords: response.data && response.data.frequentWords
            })
            setVideos(response.data.videos)

        } catch (error) {
            console.log(error)
            setFetching(false)
            setErrorMessage('Serviço não disponível. Por favor tente mais tarde')
            setErrorLocation('searchBar')
        }
        setFetching(false)
    }

    const checkErrors = ({ weekConfig, search }) => {

        // week config errors
        if (weekConfig.every(config => !/[0-9]{1,}/.test(config))) {
            setErrorMessage('Por favor, informe um valor válido em pelo menos em um dia da semana')
            setErrorLocation('weekConfig')
            return true
        }
        for (let i = 0; i < weekConfig.length; i++) {
            if (!weekConfig[i]) weekConfig[i] = '0'            
        }
        // search bar errors
        if (!search) {
            setErrorMessage('Por favor, informe um termo de pesquisa')
            setErrorLocation('searchBar')
            return true
        }
        return false
    }

    return (
        <div className="App" >
            <Header />
            <div className="main-container">
                <div className="info">
                    Informe quanto tempo em MINUTOS você tem para assistir vídeos em cada dia da semana:
            </div>
                <div className="week-settup" >
                    <div className="week-label">
                        <label>Seg</label>
                        <input className="week-day" value={monday} onChange={(e) => setMonday(e.target.value)} name="mon" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Ter</label>
                        <input className="week-day" value={tuesday} onChange={(e) => setTuesday(e.target.value)} name="tue" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Qua</label>
                        <input className="week-day" value={wednesday} onChange={(e) => setWednesday(e.target.value)} name="wed" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Qui</label>
                        <input className="week-day" value={thursday} onChange={(e) => setThursday(e.target.value)} name="thu" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Sex</label>
                        <input className="week-day" value={friday} onChange={(e) => setFriday(e.target.value)} name="fri" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Sáb</label>
                        <input className="week-day" value={saturday} onChange={(e) => setSaturday(e.target.value)} name="sat" type="number" />
                    </div>
                    <div className="week-label">
                        <label>Dom</label>
                        <input className="week-day" value={sunday} onChange={(e) => setSunday(e.target.value)} name="sun" type="number" />
                    </div>
                </div>
                {errorLocation === 'weekConfig' ? <div style={{ color: 'red', paddingTop: '10px' }}>{errorMessage}</div> : null}

                <div>
                    <form className="search-form" onSubmit={handleSearch}>
                        <input className="search-input" value={search} placeholder="Pesquisa" onChange={(e) => setSearch(e.target.value)} name="search-input" type="text" />
                        <button className="search-submit-button" type="submit">Buscar</button>
                    </form>
                </div>
                {errorLocation === 'searchBar' ? <div style={{ color: 'red', paddingTop: '10px' }}>{errorMessage}</div> : null}

                {fetching ? <div><img className="loading" alt="Carregando" src={loading}></img></div> : null}
                {videos.length > 0 ? <div>
                    <Metrics metrics={metrics} />
                    <Videos videos={videos} />
                </div> : null}
            </div>
        </div>
    );
}

export default App;