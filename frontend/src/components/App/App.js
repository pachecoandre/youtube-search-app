import React, { useState } from 'react'
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
    const [videos, setVideos] = useState([
        {
            "title": "AC/DC - Highway to Hell (Live At River Plate, December 2009)",
            "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!hth\n\nHighway to Hell\nBuy/Listen - https://lnk.to/ACDChth!hth\n\nAbout the album:\nHighway to Hell is the sixth studio album by Australian rock band AC/DC, released on July 27, 1979. It was the band's fifth internationally-released studio album and the sixth to be released in Australia. It was the last album featuring lead singer Bon Scott, who died early the following year.\n\nFollow AC/DC:\nSpotify - https://lnk.to/ACDChthSI!hth\nFacebook - https://lnk.to/ACDChthFI!hth\nTwitter - https://lnk.to/ACDChthTI!hth\nInstagram - https://lnk.to/ACDChthII!hth\nWebsite - https://lnk.to/ACDChthWI!hth",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/gEPmA3USJdI/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=gEPmA3USJdI",
            "duration": "PT4M45S"
        },
        {
            "title": "AC/DC - Back In Black (Official Video)",
            "description": "\"Back In Black\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\n'Cause I'm back, yes I'm back\nWell, I'm back, yes I'm back\nWell, I'm back, back\nWell, I'm back in black\nYes, I'm back in black\n\n#ACDC #BackInBlack #HD #Remastered #OfficialMusicVideo",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/pAgnJDJN4VA/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=pAgnJDJN4VA",
            "duration": "PT4M14S"
        },
        {
            "title": "AC/DC - Thunderstruck (Official Video)",
            "description": "Official music video for “Thunderstruck” by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nAbout the The Razor's Edge:\nAC/DC cracked the seal on the '90s with one of the best riffs of their career. That would be \"Thunderstruck,\" the opening track on The Razors Edge. In addition to \"Thunderstruck,\" the band brought out \"Moneytalks,\" probably the closest they ever came to writing a pop song. Then there was \"Are You Ready\" - one of their fiercest calls to action. The gritty edge and booming chants on this album were a welcome reminder for a new generation that pure, unadulterated rock 'n' roll was alive and well.\n\nLyrics:\nI was caught\nIn the middle of a railroad track (thunder)\nI looked round\nAnd I knew there was no turning back (thunder)\nMy mind raced\nAnd I thought what could I do? (thunder)\nAnd I knew\nThere was no help, no help from you (thunder)\nSound of the drums\nBeating in my heart\nThe thunder of guns (yeah)\nTore me apart\n\n\nYou've been thunderstruck\n\n\n#ACDC #Rock #Thunderstruck",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/v2AC41dglnM/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=v2AC41dglnM",
            "duration": "PT4M53S"
        },
        {
            "title": "AC/DC - Shot In The Dark (Official Video)",
            "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n \nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com\nFacebook: https://www.facebook.com/acdc\nInstagram: https://www.instagram.com/acdc\nTwitter: https://twitter.com/acdc\nTikTok: http://tiktok.com/@acdc\n\nDirector : David Mallet\nProducer : Dione Orrom\nSet Design : Peter Bingemann\nLighting Designer : Steve Nolan\nCamera Supervisor : Barrie Dodd\n\n#ACDC #PWRUP #SHOTINTHEDARK",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/54LEywabkl4/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=54LEywabkl4",
            "duration": "PT3M16S"
        },
        {
            "title": "AC/DC - Thunderstruck (Live At River Plate, December 2009)",
            "description": "AC/DC performing “Thunderstruck” live at River Plate\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nAbout The Razor's Edge:\nThe Razors Edge is an album by Australian hard rock band AC/DC. It was the band's eleventh internationally released studio album and the twelfth to be released in Australia. The Razors Edge features hits \"Thunderstruck\" and \"Are You Ready, which reached #5 and #16 respectively on Billboard's Mainstream Rock Tracks Chart and \"Moneytalks, which peaked at #23 on the Billboard Hot 100. The album went Multi-Platinum and reached the US Top Ten.\n\nLyrics:\nI was caught\nIn the middle of a railroad track (thunder)\nI looked round\nAnd I knew there was no turning back (thunder)\nMy mind raced\nAnd I thought what could I do? (thunder)\nAnd I knew\nThere was no help, no help from you (thunder)\nSound of the drums\nBeating in my heart\nThe thunder of guns (yeah)\nTore me apart\n\n\nYou've been\nThunderstruck\n\n#ACDC #Rock #Thunderstruck",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/n_GFN3a0yj0/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=n_GFN3a0yj0",
            "duration": "PT5M21S"
        },
        {
            "title": "AC/DC - T.N.T. (Live At River Plate, December 2009)",
            "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!tnt\n\nHigh Voltage\nBuy/Listen - https://LegacyRecordings.lnk.to/acdc_hv!tnt\n\nAbout the album:\nYears of musical knowledge and understanding had passed between Angus and Malcolm Young by the time High Voltage announced the arrival of a new Australian take on rock. With Bon Scott on board, this 1976 American release reduced rock 'n' roll down to rhythm, riffs, and raunch.\n\nFollow AC/DC:\nSpotify - https://LegacyRecordings.lnk.to/acdc_hvSI!tnt\nFacebook - https://LegacyRecordings.lnk.to/acdc_hvFI!tnt\nTwitter - https://LegacyRecordings.lnk.to/acdc_hvTI!tnt\nInstagram - https://LegacyRecordings.lnk.to/acdc_hvII!tnt\nWebsite - https://LegacyRecordings.lnk.to/acdc_hvWI!tnt",
            "thumbnail": {
                "url": "https://i.ytimg.com/vi/44XYEeD1A1U/default.jpg",
                "width": 120,
                "height": 90
            },
            "url": "https://www.youtube.com/watch?v=44XYEeD1A1U",
            "duration": "PT3M50S"
        }
    ])
    const [errorMessage, setErrorMessage] = useState('')
    const [errorLocation, setErrorLocation] = useState('')

    const handleSearch = async (e) => {
        e.preventDefault()

        /* clean error messages */
        setErrorMessage('')
        setErrorLocation('')

        setFetching(true)
        const weekConfig = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]
        const foundError = checkErrors({ weekConfig, search })

        if (foundError) {
            setFetching(false)
            return
        }
        try {
            const response = await axios.get(`http://localhost:5000/videos?q=${search}&weekConfig=[${monday},${tuesday},${wednesday},${thursday},${friday},${saturday},${sunday}]`)
            setMetrics({
                watchDuration: response.data && response.data.watchDuration,
                frequentWords: response.data && response.data.frequentWords
            })
            setVideos(response.data.videos)

        } catch (error) {
            console.log(error)
            setErrorMessage('Serviço não disponível. Por favor tente mais tarde')
            setErrorLocation('searchBar')
        }
        setFetching(false)
    }

    const checkErrors = ({ weekConfig, search }) => {

        // week config errors
        if (weekConfig.every(config => !/[1-9]{1,}/.test(config))) {
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