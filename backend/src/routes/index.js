const { Router } = require('express')
const { getInfo } = require('../services/main.service')

const router = Router()

router.get('/videos', async (req, res) => {
    // const searchTerm = req.query.q
    // const weekConfig = JSON.parse(req.query.weekConfig)

    // const videos = await getInfo(searchTerm, weekConfig)
    const videos = {
        "watchDuration": 48,
        "frequentWords": {
            "titleCounts": [
                [
                    "ac/dc",
                    163
                ],
                [
                    "official",
                    54
                ],
                [
                    "live",
                    46
                ],
                [
                    "video",
                    44
                ],
                [
                    "at",
                    37
                ]
            ],
            "descripCounts": [
                [
                    "the",
                    549
                ],
                [
                    "to",
                    361
                ],
                [
                    "ac/dc",
                    359
                ],
                [
                    "and",
                    253
                ],
                [
                    "of",
                    210
                ]
            ]
        },
        "videos": [
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
            },
            {
                "title": "AC/DC - Highway to Hell (Official Video)",
                "description": "\"Highway to Hell\" by AC/DC \nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\nI’m on the highway to hell\nOn the highway to hell\nHighway to hell\nI’m on the highway to hell\n\n#ACDC #HighwaytoHell #OfficialVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/l482T0yNkeo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=l482T0yNkeo",
                "duration": "PT3M28S"
            },
            {
                "title": "AC/DC - Demon Fire (Official Video)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\nDirected and Animated by Ben Ib\n\n#ACDC #PWRUP #DEMONFIRE",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/WllOatNmBK4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=WllOatNmBK4",
                "duration": "PT3M37S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Official Video)",
                "description": "\"You Shook Me All Night Long\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nAnd you shook me all night long\nYeah, you shook me all night long\n\n#ACDC #YouShookMeAllNightLong #HD #Remastered #OfficialMusicVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Lo2qQmj0_h4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Lo2qQmj0_h4",
                "duration": "PT3M29S"
            },
            {
                "title": "AC/DC - Hells Bells (Official Video)",
                "description": "\"Hells Bells\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHell's bells\nYeah, hell's bells\nYou got me ringing\nHell's bells\nMy temperature's high\nHell's bells\n\n#ACDC #HellsBells #HD #Remastered #OfficialMusicVideo﻿",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/etAIpkdhU9Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=etAIpkdhU9Q",
                "duration": "PT5M10S"
            },
            {
                "title": "AC/DC - Let There Be Rock (Official Video)",
                "description": "Music video by AC/DC performing Let There Be Rock. (C) 1978 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/3f2g4RMfhS0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=3f2g4RMfhS0",
                "duration": "PT6M9S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Live At River Plate, December 2009)",
                "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!ysmanlrp\n\nBack in Black\nBuy/Listen - https://lnk.to/backinblack!ysmanlrp\n\nAbout the album:\nBack in Black is the seventh studio album by Australian rock band AC/DC. Produced by Robert John \"Mutt\" Lange, the album was released on July 25, 1980 by Albert Productions and Atlantic Records. Their sixth international release, Back in Black was an unprecedented success: it has sold an estimated 50 million copies worldwide. Its enormous sales figures have made it the second-highest-selling album in history. The band supported the album with a yearlong world tour, cementing them among the most popular music acts of the early 1980s.\n\nFollow AC/DC:\nSpotify - https://lnk.to/backinblackSI!ysmanlrp\nFacebook - https://lnk.to/backinblackFI!ysmanlrp\nTwitter - https://lnk.to/backinblackTI!ysmanlrp\nInstagram - https://lnk.to/backinblackII!ysmanlrp\nWebsite - https://lnk.to/backinblackWI!ysmanlrp",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zakKvbIQ28o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zakKvbIQ28o",
                "duration": "PT4M25S"
            },
            {
                "title": "AC/DC - Shot In The Dark (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW ACDC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #SHOTINTHEDARK",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/xNhn1KOqq8g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=xNhn1KOqq8g",
                "duration": "PT3M7S"
            },
            {
                "title": "Melhores ACDC",
                "description": "Acesse nossa loja: gerarockmp3.com.br\nNossa rádio: radiogerarockmp3.com.br\nTambém vendemos pelo Mercado Livre",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/JrXoAUYwPhs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=JrXoAUYwPhs",
                "duration": "PT1H28M33S"
            },
            {
                "title": "T.N.T.",
                "description": "Provided to YouTube by Columbia\n\nT.N.T. · AC/DC\n\nHigh Voltage\n\n℗ 1976 J. Albert & Son Pty Ltd\n\nReleased on: 1976-04-30\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda and George Young\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/NhsK5WExrnE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=NhsK5WExrnE",
                "duration": "PT3M35S"
            },
            {
                "title": "AC/DC - Shoot To Thrill (Iron Man 2 Version)",
                "description": "\"Shoot to Thrill\" by AC/DC (Iron Man 2 Version)\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\nAll you women who want a man of the street\nDon't know which way you wanna turn\nJust keep coming\nAnd put your hand out to me\nCause I'm the one who's gonna make you burn\nI'm gonna take you down\nDown down down\nSo don't you fool around\nI'm gonna pull it pull it\nPull the trigger\nShoot to thrill play to kill\nToo many women too many pills, yeah\nShoot to thrill play to kill\nI got my gun at the ready gonna fire at will\n\n#ACDC #Rock #ShootToThrill\n\nAbout the album:\nBack in Black is the seventh studio album by Australian rock band AC/DC. Produced by Robert John \"Mutt\" Lange, the album was released on July 25, 1980 by Albert Productions and Atlantic Records. Their sixth international release, Back in Black was an unprecedented success: it has sold an estimated 50 million copies worldwide. Its enormous sales figures have made it the second-highest-selling album in history. The band supported the album with a yearlong world tour, cementing them among the most popular music acts of the early 1980s.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/xRQnJyP77tY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=xRQnJyP77tY",
                "duration": "PT5M33S"
            },
            {
                "title": "AC/DC - Whole Lotta Rosie (Live At River Plate, December 2009)",
                "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!wlr\n\nLet There Be Rock\nBuy/Listen - https://LegacyRecordings.lnk.to/acdc_ltbr!wlr\n\nAbout the album:\nReleased at a time when disco and punk were polarizing, dominating forces, Let There Be Rock sounded like the work of rock 'n' roll primitives locked away in their own world. Riffs were fast and laced with fuzz on \"Bad Boy Boogie\" and the salacious \"Whole Lotta Rosie.\"\n\nFollow AC/DC:\nSpotify - https://LegacyRecordings.lnk.to/acdc_ltbrSI!wlr\nFacebook - https://LegacyRecordings.lnk.to/acdc_ltbrFI!wlr\nTwitter - https://LegacyRecordings.lnk.to/acdc_ltbrTI!wlr\nInstagram - https://LegacyRecordings.lnk.to/acdc_ltbrII!wlr\nWebsite - https://LegacyRecordings.lnk.to/acdc_ltbrWI!wlr",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/QMvE0yFnR0I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=QMvE0yFnR0I",
                "duration": "PT5M43S"
            },
            {
                "title": "Dirty Deeds Done Dirt Cheap",
                "description": "Provided to YouTube by Columbia\n\nDirty Deeds Done Dirt Cheap · AC/DC\n\nDirty Deeds Done Dirt Cheap\n\n℗ 1976 J. Albert & Son Pty Ltd\n\nReleased on: 1976-12-17\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda & George Young\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/UIE4UjBtx-o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=UIE4UjBtx-o",
                "duration": "PT3M52S"
            },
            {
                "title": "AC/DC - Demon Fire (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #DEMONFIRE",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/uMh6kz8zN4I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=uMh6kz8zN4I",
                "duration": "PT3M32S"
            },
            {
                "title": "AC/DC - Through The Mists Of Time (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #THROUGHTHEMISTSOFTIME",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/FpMVBqSWbsA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=FpMVBqSWbsA",
                "duration": "PT3M34S"
            },
            {
                "title": "AC/DC - Realize (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc\nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #REALIZE",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/gLA70huskTk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=gLA70huskTk",
                "duration": "PT3M39S"
            },
            {
                "title": "AC/DC - Moneytalks (Official Video)",
                "description": "Music video by AC/DC performing Moneytalks. (C) 1991 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/2lqdErI9uss/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=2lqdErI9uss",
                "duration": "PT3M47S"
            },
            {
                "title": "AC/DC - Rock or Bust (Official Video)",
                "description": "New album Rock Or Bust is available now. Get your copy: \n\nAmazon: http://smarturl.it/RockOrBust_amz\niTunes: http://smarturl.it/RockOrBust_iTunes\nGoogle Play: http://smarturl.it/RockOrBust_GP",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/_NdHySPJr8I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=_NdHySPJr8I",
                "duration": "PT3M10S"
            },
            {
                "title": "AC/DC - Witch's Spell (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #WITCHSSPELL",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/a-bleGp2ADY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=a-bleGp2ADY",
                "duration": "PT3M44S"
            },
            {
                "title": "Ride On",
                "description": "Provided to YouTube by Columbia\n\nRide On · AC/DC\n\nDirty Deeds Done Dirt Cheap\n\n℗ 1976 J. Albert & Son Pty Ltd\n\nReleased on: 1976-12-17\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda & George Young\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/sFUGvdxuQGQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=sFUGvdxuQGQ",
                "duration": "PT5M51S"
            },
            {
                "title": "AC/DC - Hells Bells (Live at Donington, 8/17/91)",
                "description": "\"Hells Bells\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHell's bells\nYeah, hell's bells\nYou got me ringing\nHell's bells\nMy temperature's high\nHell's bells\n\n#ACDC #HellsBells #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/qFJFonWfBBM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=qFJFonWfBBM",
                "duration": "PT6M"
            },
            {
                "title": "ACDC - TNT",
                "description": "Now available in Germany LOL",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/fGDQ9IukMOc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=fGDQ9IukMOc",
                "duration": "PT3M36S"
            },
            {
                "title": "AC/DC - Touch Too Much (Official Video)",
                "description": "Music video by AC/DC performing Touch Too Much. (C) 1980 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/JGftIcp2SC0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=JGftIcp2SC0",
                "duration": "PT4M27S"
            },
            {
                "title": "AC/DC    Jailbreak 1976  official music video",
                "description": "I do not own this video and I did not posted it for commercial purposes.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/g8xScxmekQk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=g8xScxmekQk",
                "duration": "PT4M16S"
            },
            {
                "title": "AC/DC - Let There Be Rock (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Let There Be Rock. (Live At River Plate 2009)(C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/O24AipZ-buQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=O24AipZ-buQ",
                "duration": "PT17M47S"
            },
            {
                "title": "AC/DC - Rock N Roll Train (Live At River Plate, December 2009)",
                "description": "Strap yourself in for the most thundering AC/DC tracks! Listen to the playlist now: https://ACDC.lnk.to/AreYouReadyYA!rnrt\n\nBlack Ice\nBuy/Listen - https://LegacyRecordings.lnk.to/acdc_bi!rnrt\n\nAbout the album:\nBlack Ice is the 15th studio album by Australian rock band AC/DC. It was the band's fourteenth internationally-released studio album and the fifteenth in Australia. It marked the band's first original recordings since 2000's Stiff Upper Lip, with the eight-year gap being the longest between AC/DC's successive studio albums. Black Ice has the longest running time of any AC/DC studio album.\n\nFollow AC/DC:\nSpotify - https://LegacyRecordings.lnk.to/acdc_biSI!rnrt\nFacebook - https://LegacyRecordings.lnk.to/acdc_biFI!rnrt\nTwitter - https://LegacyRecordings.lnk.to/acdc_biTI!rnrt\nInstagram - https://LegacyRecordings.lnk.to/acdc_biII!rnrt\nWebsite - https://LegacyRecordings.lnk.to/acdc_biWI!rnrt",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/RHpClGAAvpg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=RHpClGAAvpg",
                "duration": "PT4M32S"
            },
            {
                "title": "AC/DC - Hells Bells (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Hells Bells. (Live At River Plate 2009)(C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/3tOKYFR4Rzg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=3tOKYFR4Rzg",
                "duration": "PT5M39S"
            },
            {
                "title": "AC/DC - Dirty Deeds Done Dirt Cheap (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Dirty Deeds Done Dirt Cheap. (Live At River Plate) (C) 2011 Leidseplein Presse B.V.\n\nFollow AC/DC\nWebsite: http://www.acdc.com/\nFacebook: https://www.facebook.com/acdc\nTwitter: https://twitter.com/acdc\nInstagram: https://www.instagram.com/acdc\n\nListen to AC/DC\niTunes: https://itunes.apple.com/us/artist/ac-dc/id5040714\nSpotify: https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/whQQpwwvSh4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=whQQpwwvSh4",
                "duration": "PT4M48S"
            },
            {
                "title": "AC/DC - Who Made Who (Official Video)",
                "description": "Music video by AC/DC performing Who Made Who. (C) 1986 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/PiZHNw1MtzI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=PiZHNw1MtzI",
                "duration": "PT3M27S"
            },
            {
                "title": "AC/DC - Rock And Roll Ain't Noise Pollution (Official Video)",
                "description": "\"Rock and Roll Ain't Noise Pollution\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nRock and roll ain't noise pollution\nRock and roll ain't gonna die\nRock and roll ain't noise pollution\nRock and roll, it will survive\nYes it will, ha ha\n\n#ACDC #RockandRollAintNoisePollution #HD #Remastered #OfficialMusicVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/X_IWlPHMziU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=X_IWlPHMziU",
                "duration": "PT4M12S"
            },
            {
                "title": "ACDC - Thunderstruck",
                "description": "From the Album The greatest salute Rock heroes\nACDC - Thunderstruck",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/VcByktP-mdE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=VcByktP-mdE",
                "duration": "PT5M1S"
            },
            {
                "title": "AC DC - Greatest Hell's Hits (DISC1)",
                "description": "DISC 1\n(00:00:00)  01. Thunderstruck\n(00:04:55)  02. Shoot to Thrill\n(00:10:15)  03. Big Gun\n(00:14:37)  04. Fire Your Guns\n(00:17:34)  05. You Shook Me All Night Long\n(00:21:06)  06. Heatseeker\n(00:24:56)  07. Back in Black\n(00:29:14)  08. Who Made Who\n(00:32:44)  09. Rock N Roll Train\n(00:37:06)  10. Hard As a Rock\n(00:41:40)  11. Hells Bells\n(00:46:54)  12. Moneytalks\n(00:50:42)  13. What Do You Do For Money Honey\n(00:54:19)  14. Are You Ready\n(00:58:31)  15. Big Jack\n(01:02:31)  16. Stiff Upper Lip\n(01:06:08)  17. That's The Way I Wanna Rock N Roll\n(01:09:54)  18. Flick Of The Switch\n(01:13:11)  19. For Those About To Rock (We Salute You)",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/HnC4-WtWivI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=HnC4-WtWivI",
                "duration": "PT1H18M56S"
            },
            {
                "title": "For Those About to Rock (We Salute You)",
                "description": "Provided to YouTube by Columbia\n\nFor Those About to Rock (We Salute You) · AC/DC\n\nFor Those About to Rock (We Salute You)\n\n℗ 1981 Leidseplein Presse B.V.\n\nReleased on: 1981-11-23\n\nGuitar, Composer, Lyricist: Angus Young\nGuitar, Composer, Lyricist: Malcolm Young\nVocal, Composer, Lyricist: Brian Johnson\nDrums: Phil Rudd\nBass  Guitar: Cliff Williams\nProducer: Robert John \"Mutt\" Lange\nRecording  Engineer: Mark Dearnley\nMixing  Engineer: Dave Thoener\nAssistant  Engineer: Andy Rose\nAssistant  Engineer: Mark Haliday\nAssistant  Engineer: Nigel Green\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/qsaTFcXVCNU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=qsaTFcXVCNU",
                "duration": "PT5M45S"
            },
            {
                "title": "AC/DC - Highway to Hell (from Countdown, 1979)",
                "description": "\"Highway to Hell\" by AC/DC, Live from Countdown, 1979\nListen to AC/DC: https://ACDC.lnk.to/listenYD\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFootage Licensed By Reelin’ In The Years Productions (http://www.reelinintheyears.com)\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHey momma, look at me\nI'm on my way to the promised land\nI'm on the highway to hell\n(Don't stop me)\nAnd I'm going down, all the way down\nI'm on the highway to hell\n\n#ACDC #HighwayToHell #Countdown",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/4hhlQU0zDpA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=4hhlQU0zDpA",
                "duration": "PT4M20S"
            },
            {
                "title": "AC/DC - It's A Long Way To The Top LIVE On TV 1976",
                "description": "",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/nULs4JW3tPI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=nULs4JW3tPI",
                "duration": "PT4M51S"
            },
            {
                "title": "AC/DC - Let Me Put My Love Into You (Official Music Video)",
                "description": "\"Let Me Put My Love Into You\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nLet me put my love into you, babe\nLet me put my love on the line\nLet me put my love into you, babe\nLet me cut your cake with my knife\n\n#ACDC #LetMePutMyLoveIntoYou #HD #Remastered #OfficialMusicVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ehS5qtwA9OY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ehS5qtwA9OY",
                "duration": "PT4M13S"
            },
            {
                "title": "AC/DC - Are You Ready (Official Video)",
                "description": "Watch the official music video for \"Are You Ready\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://LegacyRecordings.lnk.to/R70rZYD\n\nAC/DC cracked the seal on the '90s with one of the best riffs of their career. That would be \"Thunderstruck,\" the opening track on The Razors Edge. In addition to \"Thunderstruck,\" the band brought out \"Moneytalks,\" probably the closest they ever came to writing a pop song. Then there was \"Are You Ready\" - one of their fiercest calls to action. The gritty edge and booming chants on this album were a welcome reminder for a new generation that pure, unadulterated rock 'n' roll was alive and well.\n\nFollow AC/DC:\nSpotify - https://LegacyRecordings.lnk.to/acdc_treSI!ayr\nFacebook - https://LegacyRecordings.lnk.to/acdc_treFI!ayr\nTwitter - https://LegacyRecordings.lnk.to/acdc_treTI!ayr\nInstagram - https://LegacyRecordings.lnk.to/acdc_treII!ayr\nWebsite - https://LegacyRecordings.lnk.to/acdc_treWI!ayr\n\nChorus:\nWho all need it who\nWho all need it you\nWho all need it, who all need it\nYou all breathe it, we all need it\nAre you ready for a good time\nThen get ready for the night line\n\n#ACDC #AreYouReady #OfficialMusicVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/CIhylLW4Fcs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=CIhylLW4Fcs",
                "duration": "PT4M12S"
            },
            {
                "title": "AC/DC - Walk All Over You (Official Video)",
                "description": "Music video by AC/DC performing Walk All Over You. (C) 1980 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/_bP6aVG6L1w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=_bP6aVG6L1w",
                "duration": "PT5M11S"
            },
            {
                "title": "AC/DC - Live At Grammy Awards 2015 Full Consert | Rock or Bust/Highway To Hell - Full HD 2020",
                "description": "AC/DC LIVE\nHIGHWAY TO HELL\nAC DC HIGHWAY TO HELL\nACDC GRAMMYS 2020\nAC DC GRMMY 2015\nROCK OR BUST\nHIGHAY TO HELL LIVE\nAC DC ROCK OR BUST\nAC DC HIGHWAY TO HEL LIVE\nAC DC LIVE GRAMMYS\nAC DC THE GRAMMY\nac dc\nHIGHWAY TO HELL\nHIGHWAY TO HELL\nBACK IN BLACK\nNEW ÁLBUM\nNEW ÁLBUM OF AC/DC",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ZGU_al7YoCA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ZGU_al7YoCA",
                "duration": "PT6M16S"
            },
            {
                "title": "AC/DC - Night Prowler (Audio)",
                "description": "\"Night Prowler\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listenYD\n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nSuspended animation as I slip into your room\nI'm your night prowler, asleep in the day\nNight prowler, get outta my way\nLook out for the night prowler, watch out tonight\nYes I'm the night prowler, when you turn out the light\n\n#ACDC #NightProwler #Rock",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/pX93gmyya7c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=pX93gmyya7c",
                "duration": "PT6M30S"
            },
            {
                "title": "AC/DC - Bad Boy Boogie (Apollo Theatre, Glasgow, April 1978)",
                "description": "Music video by AC/DC performing Bad Boy Boogie.(Apollo Theatre, Glasgow, April 1978) (C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/PCjhgiVnYDs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=PCjhgiVnYDs",
                "duration": "PT8M58S"
            },
            {
                "title": "AC/DC - The Jack (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing The Jack. (Live At River Plate 2009) (C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/eVlRQn6AMYs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=eVlRQn6AMYs",
                "duration": "PT10M48S"
            },
            {
                "title": "AC/DC - If You Want Blood (You Got It)(Official Video)",
                "description": "Music video by AC/DC performing If You Want Blood (You've Got It). (C) 1980 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6EWqTym2cQU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6EWqTym2cQU",
                "duration": "PT4M29S"
            },
            {
                "title": "AC/DC - Jailbreak (Live at Donington, 8/17/91)",
                "description": "\"Jailbreak\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nAll in the name of liberty\nAll in the name of liberty\nGot to be free\n\n(Jailbreak), let me outta here\n(Jailbreak), sixteen years\n(Jailbreak), had more than I can take\n(Jailbreak)\n\n#ACDC #Jailbreak ##LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/WHtWs4wiFCs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=WHtWs4wiFCs",
                "duration": "PT19M15S"
            },
            {
                "title": "AC/DC “You Shook Me All Night Long” on the Howard Stern Show",
                "description": "In 1997, AC/DC’s Brian Johnson and Angus Young sat down in the Stern Show studio and broke into a stripped-down version of “You Shook Me All Night Long” with a little help from Howard Stern. Watch more music performances from the Stern Show on the SiriusXM app: https://siriusxm.us/2Qn55BL\n\nSUBSCRIBE for more videos: http://bit.ly/2qswmZU\n\nWant to know what's going on with Howard Stern in the future?\n\nFollow us on Twitter: http://bit.ly/1RzxGPD\nOn Facebook: http://on.fb.me/1JELtz3\nOn Instagram: https://goo.gl/VsWTND\n\nFor more great content from the Howard Stern Show visit our official website: http://www.HowardStern.com\n\nHear more Howard Stern by signing up for a free SiriusXM trial: https://goo.gl/uNL0Du",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/RZk39K5T-5M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=RZk39K5T-5M",
                "duration": "PT2M48S"
            },
            {
                "title": "AC/DC - Rock N Roll Train (Official Video)",
                "description": "Music video by AC/DC performing Rock N Roll Train (Black Ice promo clip). (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/FrFvNphZ5BQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=FrFvNphZ5BQ",
                "duration": "PT4M20S"
            },
            {
                "title": "AC/DC - Big Gun (Official Video)",
                "description": "Backtracks:\nBuy/Listen - https://lnk.to/ACDCbacktracks!ytbg \n\nAbout the album:\nThis is a collection of the AC/DC's studio and live rarities together in one box set. There are two editions; a Deluxe Edition and a Standard Edition. All tracks have been remastered to match the sound of the 2003 album remasters and many songs appear on CD for the first time. It is the band's second box set of rarities, following the Bonfire release in 1997.\n\nFollow AC/DC:\nSpotify - https://lnk.to/ACDCbacktracksSp!ytbg \nFacebook - https://lnk.to/ACDCbacktracksFA!ytbg \nTwitter - https://lnk.to/ACDCbacktracksTA!ytbg \nInstagram - https://lnk.to/ACDCbacktracksIA!ytbg \nYouTube - https://lnk.to/ACDCbacktracksAY!ytbg",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/nLsXJitaiVo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=nLsXJitaiVo",
                "duration": "PT4M27S"
            },
            {
                "title": "AC/DC - Let There Be Rock (Apollo Theatre, Glasgow, April 1978)",
                "description": "Music video by AC/DC performing Let There Be Rock. (C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/s3nEAmt5AZ8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=s3nEAmt5AZ8",
                "duration": "PT8M28S"
            },
            {
                "title": "AC/DC - Hard As A Rock (Official Video)",
                "description": "Music video by AC/DC performing Hard As A Rock. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/X9s_CQx4ylU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=X9s_CQx4ylU",
                "duration": "PT4M29S"
            },
            {
                "title": "AC/DC- Shoot to thrill Iron Man",
                "description": "",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zFgNyCItmcE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zFgNyCItmcE",
                "duration": "PT5M12S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Official Video – Who Made Who)",
                "description": "\"You Shook Me All Night Long\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nAnd you shook me all night long\nYeah, you shook me all night long\n\n#ACDC #YouShookMeAllNightLong #WhoMadeWho #OfficialVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zWCINQn6k0s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zWCINQn6k0s",
                "duration": "PT3M31S"
            },
            {
                "title": "AC/DC - Back In Black (Live at Donington, 8/17/91)",
                "description": "\"Back In Black\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\n'Cause I'm back, yes I'm back\nWell, I'm back, yes I'm back\nWell, I'm back, back\nWell, I'm back in black\nYes, I'm back in black\n\n#ACDC #BackInBlack #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6vImyP5EYc8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6vImyP5EYc8",
                "duration": "PT4M17S"
            },
            {
                "title": "AC/DC - Anything Goes (Official Video)",
                "description": "Music video by AC/DC performing Anything Goes. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/-L3zpXrVtnE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=-L3zpXrVtnE",
                "duration": "PT3M23S"
            },
            {
                "title": "AC/DC - Code Red (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #CODERED",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/k0e-gDWrpdI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=k0e-gDWrpdI",
                "duration": "PT3M33S"
            },
            {
                "title": "AC/DC - Back In Black (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Back In Black. (Live At River Plate 2009) (C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/j5rGm3kdTuk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=j5rGm3kdTuk",
                "duration": "PT4M1S"
            },
            {
                "title": "IT'S A LONG WAY TO THE TOP (IF YOU WANNA ROCK 'N' ROLL) - AC DC",
                "description": "AC DC - e mais um classico",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/-sUXMzkh-jI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=-sUXMzkh-jI",
                "duration": "PT5M9S"
            },
            {
                "title": "AC/DC - Thunderstruck (Plaza De Toros De Las Ventas, July 1996)",
                "description": "AC/DC performing “Thunderstruck”\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nAbout The Razors Edge:\nThe Razors Edge is an album by Australian hard rock band AC/DC. It was the band's eleventh internationally released studio album and the twelfth to be released in Australia. The Razors Edge features hits \"Thunderstruck\" and \"Are You Ready, which reached #5 and #16 respectively on Billboard's Mainstream Rock Tracks Chart and \"Moneytalks, which peaked at #23 on the Billboard Hot 100. The album went Multi-Platinum and reached the US Top Ten.\n\nLyrics:\nI was caught\nIn the middle of a railroad track (thunder)\nI looked round\nAnd I knew there was no turning back (thunder)\nMy mind raced\nAnd I thought what could I do? (thunder)\nAnd I knew\nThere was no help, no help from you (thunder)\nSound of the drums\nBeating in my heart\nThe thunder of guns (yeah)\nTore me apart\n\n\nYou've been\nThunderstruck\n\n#ACDC #Rock #Thunderstruck",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/rov5qTvTNO8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=rov5qTvTNO8",
                "duration": "PT5M35S"
            },
            {
                "title": "The forgotten Sydney of AC/DC",
                "description": "AC/DC was indisputably born and bred in Sydney but there aren't the statues, plaques and laneways that other cities have to show the origins of one of the biggest rock bands of all time. Take a high-voltage trip through Sydney and learn about the forgotten haunts and the story that shaped AC/DC. We sit down with some of the band's original members, Mark Evans, Noel Taylor, Rob Bailey and Tony Currenti, in this exclusive mini-documentary by the Herald's Tom Compagnoni.\n\n* * *\n\nThe story of AC/DC’s formative years in Sydney is told through the recollections of early members Mark Evans (bass player 1975-77), Noel Taylor (drummer 1974) and Rob Bailey (bass player 1975-75). They recall band rehearsals and social events at the Young family home in Burwood, seeing Angus first don his schoolboy outfit at Victoria Park Pool, filming the first video clip in The Last Picture Show in Cronulla and recording their first album at Albert Studios on King St in the heart of Sydney.\n\nMeanwhile in Penshurst, Tony Currenti, an Italian immigrant and owner of Tonino's Penshurst Pizzeria, tells the story of how he unexpectedly became the drummer on AC/DC’s debut album, High Voltage. After completing work on the album, Tony declined an offer to formally join the band - and then watched as they became one of the biggest groups in the world. Tony still works in the pizza shop, its walls lovingly adorned with AC/DC posters, records and photos from his brief time in the band.\n\nAll members reflect on Sydney’s role in shaping AC/DC and more generally on the decline of Sydney as a live music hub.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ia5j0IJvyS4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ia5j0IJvyS4",
                "duration": "PT17M59S"
            },
            {
                "title": "AC/DC - Rock 'N' Roll Damnation (Official Video)",
                "description": "Music video by AC/DC performing Rock 'N' Roll Damnation. (C) 1979 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/-0Oa5wvARSc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=-0Oa5wvARSc",
                "duration": "PT3M2S"
            },
            {
                "title": "AC/DC - DEMON FIRE (FROM FORTNITE NEXUS WAR FINALE)",
                "description": "FROM THE FORTNITE NEXUS WAR FINALE\n\nNEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #DEMONFIRE",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/im3-GldLBW4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=im3-GldLBW4",
                "duration": "PT1M39S"
            },
            {
                "title": "AC/DC - What Do You Do For Money Honey (Official Video)",
                "description": "\"What Do You Do For Money Honey\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHoney, what do you do for money?\nHoney, what do you do for money?\nOh, where do you get your kicks?\n\n#ACDC #WhatDoYouDoForMoneyHoney #HD #Remastered #OfficialMusicVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/7iF26wKF-_M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=7iF26wKF-_M",
                "duration": "PT3M34S"
            },
            {
                "title": "Brian Johnson’s Audition for AC/DC (2011)",
                "description": "Brian Johnson told Howard in 2011 that just before his audition to join AC/DC he recorded a jingle for a vacuum commercial.  \n\nSUBSCRIBE for more videos: http://bit.ly/2qswmZU\r\n\r\nWant to know what's going on with Howard Stern in the future?\r\n\r\nFollow us on Twitter: http://bit.ly/1RzxGPD\r\nOn Facebook: http://on.fb.me/1JELtz3\r\nOn Instagram: https://goo.gl/VsWTND\r\n\r\nFor more great content from the Howard Stern Show visit our official website: http://www.HowardStern.com\r\n\r\nHear more Howard Stern by signing up for a free SiriusXM trial: https://goo.gl/uNL0Du",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/vlS5jamJrd8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=vlS5jamJrd8",
                "duration": "PT7M10S"
            },
            {
                "title": "AC DC Highway to hell first time reaction-Live River plate",
                "description": "AC DC highway to hell live reaction.The Australian heavy rock or metal band,which ever way you see it,are huge stadiums favourite.Their shows at River plate has gone down in history of music concerts.The reaction of the crowd was absolutely crazy.Highway to hell is my personal favourite.So are you coming along? Have you gotten your ticket?",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/lAIM8ijNbvQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=lAIM8ijNbvQ",
                "duration": "PT9M58S"
            },
            {
                "title": "AC/DC - Nervous Shakedown (Official Video)",
                "description": "Music video by AC/DC performing Nervous Shakedown. (C) 1984 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/7yDYOFM8oaA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=7yDYOFM8oaA",
                "duration": "PT4M28S"
            },
            {
                "title": "Whole Lotta Rosie",
                "description": "Provided to YouTube by Columbia\n\nWhole Lotta Rosie · AC/DC\n\nLet There Be Rock\n\n℗ 1977 J. Albert & Son Pty Ltd\n\nReleased on: 1977-07-25\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda and George Young for Albert Productions\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/bAOwDZoWXRI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=bAOwDZoWXRI",
                "duration": "PT5M34S"
            },
            {
                "title": "It's a Long Way to the Top (If You Wanna Rock 'N' Roll)",
                "description": "Provided to YouTube by Columbia\n\nIt's a Long Way to the Top (If You Wanna Rock 'N' Roll) · AC/DC\n\nHigh Voltage\n\n℗ 1976 J. Albert & Son Pty Ltd\n\nReleased on: 1976-04-30\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda and George Young\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/vj_rvLVpqg8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=vj_rvLVpqg8",
                "duration": "PT5M2S"
            },
            {
                "title": "AC/DC - High Voltage (Official Video)",
                "description": "Music video by AC/DC performing High Voltage. (C) 1976 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Nnjh-zp6pP4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Nnjh-zp6pP4",
                "duration": "PT4M6S"
            },
            {
                "title": "AC/DC - Hell Ain't a Bad Place to Be (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Hell Ain't A Bad Place To Be. (Live At River Plate)(C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ZuureXcbddY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ZuureXcbddY",
                "duration": "PT4M15S"
            },
            {
                "title": "AC/DC - Thunderstruck (Piano cover)",
                "description": "Thanks for your support: https://www.patreon.com/gamazda\nAC/DC - Thunderstruck piano cover and arrangement by Gamazda.\n#acdc #piano #cover\n\n♫ FOLLOW ME ▹\nInstagram - https://www.instagram.com/gamazda\nFacebook - https://www.facebook.com/GamazdaMusic\nVK - https://vk.com/gamazda\n\n♫ MUSIC ▹\niTunes: https://music.apple.com/ru/artist/gamazda/1471043782\nSpotify: https://open.spotify.com/artist/2jQR12WWMiQByk6Dnt6H4T\nYandex.Music: https://music.yandex.ru/artist/7636191\n\nSome sheet music is available here:\nhttps://www.patreon.com/gamazda\n\nVote for a new song:\nhttps://www.patreon.com/gamazda",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/tcA9-HZr6cs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=tcA9-HZr6cs",
                "duration": "PT3M51S"
            },
            {
                "title": "AC/DC - Love Hungry Man (Audio)",
                "description": "\"Love Hungry Man\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listenYD\n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nYou're the one I've waited for\nI need your love\nMore and more\nI don't know what your name is\nI don't know what your game is\nI wanna take you tonight\nAnimal appetite\n'Cause I'm a love\nHungry man\nYeah I'm the love\nHungry man\n\n#ACDC #LoveHungryMan #Rock",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/egTDJbKY-fk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=egTDJbKY-fk",
                "duration": "PT4M19S"
            },
            {
                "title": "AC/DC - Shot In The Dark (2020)",
                "description": "[Fan Music Video] - from the album \"Power Up\" (2020)\nBrian Johnson – lead vocals\nAngus Young – lead guitar\nStevie Young – rhythm guitar, backing vocals\nCliff Williams – bass, backing vocals\nPhil Rudd – drums\n#AC_DC__Shot_In_The_Dark",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/v5uSXfiMQ-Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=v5uSXfiMQ-Y",
                "duration": "PT3M5S"
            },
            {
                "title": "AC/DC - Satellite Blues (Official Video)",
                "description": "Music video by AC/DC performing Satellite Blues. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/wouywGKu7I0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=wouywGKu7I0",
                "duration": "PT3M50S"
            },
            {
                "title": "AC/DC - Dirty Deeds Done Dirt Cheap (Live at Donington, 8/17/91)",
                "description": "\"Dirty Deeds Done Dirt Cheap\" by AC/DC, Live at Donington\nListen to AC/DC: https://ACDC.lnk.to/listenYD\n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nDirty deeds, done dirt cheap\nDirty deeds, done dirt cheap\nDirty deeds, done dirt cheap\n(Dirty deeds and they're done dirt cheap)\n(Dirty deeds and they're done dirt cheap)\n\n#ACDC #DirtyDeedsDoneDirtCheap #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/BaWwrpBzxms/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=BaWwrpBzxms",
                "duration": "PT4M41S"
            },
            {
                "title": "AC/DC - Whole Lotta Rosie (REACTION) BEST LIVE PERFORMANCE I'VE EVER SEEN",
                "description": "AC/DC - Whole Lotta Rosie (REACTION) BEST LIVE PERFORMANCE I'VE EVER\nCheck out the Patreon for more FREE videos \nPatreon : https://www.patreon.com/romelifereactions\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\nIf you enjoy this video and my reactions make sure you subscribe to the channel, like the video and comment down below which video you would like to see me react to next.\n\nPatreon : https://www.patreon.com/romelifereactions\nWatch this video and it’ll tell you everything you need to know about this channel \nhttps://www.youtube.com/watch?v=4fr1bslGKVQ\n\nSubscriber Sunday Instructions\n1. make a video 10 seconds of under\n    1. Example: (My name is ____ and today I’m going to ____ to chase my dream)\n    2. email the video to romelifebusiness@gmail.com (make sure header says “Subscriber Sunday”\nFollow me on social media if you want to see what I’m up to outside of Youtube\nFacebook: https://www.facebook.com/romelife.reactions\nTwitter: https://twitter.com/_romelife\nInstagram: https://www.instagram.com/_romelife/?hl=en\n\nFor all business inquires email romelifebusiness@gmail.com\n\n2020 Goals\n1. 100k Youtube Subscribers\n2. Be a guest on Ellen\n3. Never work for anyone ever again\n\nA little about me and this channel:\nMy name is James Aubrey IV and I just recently graduated college from Iowa State University.  After college I decided to take a leap of faith. So I moved to San Diego California to pursue  my passion for videography/ Youtube. Overall I'm a pretty chill person, outside of Youtube I like to longboard,  dance, play video games, lift weights and hangout with my friends. I know that success on Youtube won't happen overnight but I'm willing to stay patient and  put in the work to try to prefect my craft daily. This Youtube channel will be centered around my life after college. You will be able to see all of the ups and downs on my journey to success. So if you like the content make sure you subscribe so you can be apart of the Rome Life Family. (Let's build our own personal Rome's together.) \n\nWhat is the Rome Life ? And What does it mean to be apart of it?\nRome Life is something I started during my Sophomore year of high school (one of the worst times in my life) it started off as me documenting my journey to recovery from my shoulder surgery but eventually it turned into a platform that I could use to encourage myself as well as  others to chase our dreams.\nRome Life isn't just a saying it's a way of life and for the people who want to be apart of it have to realize that. Rome wasn't built in a day it took a lot of handwork time and most importantly patience. So  you can't expect your dreams to be any different\n\nThis is a reaction video used to educated and give my feedback on the song and artist\n\n||COPYRIGHT DISCLAIMER –\n https://www.copyright.gov/fair-use/mo...\nUNDER SECTION 107 OF THE COPYRIGHT ACT 1976, ALLOWANCE IS MADE FOR \"FAIR USE\" FOR PURPOSES SUCH AS CRITICISM, COMMENT, NEWS REPORTING, TEACHING, SCHOLARSHIP, AND RESEARCH. FAIR USE IS A USE PERMITTED BY COPYRIGHT STATUTE THAT MIGHT OTHERWISE BE INFRINGING. NON-PROFIT, EDUCATIONAL OR PERSONAL USE TIPS THE BALANCE IN FAVOR OF FAIR USE.\n\n\n\n||DISCLAIMER\nALL VIDEOS ARE FOR ENTERTAINMENT/ NEWS PURPOSES PROTECTED BY FAIR ACT **FAIR USE** COPYRIGHT DISCLAIMER UNDER SECTION 107 OF THE COPYRIGHT ACT 1976, ALLOWANCE IS MADE FOR “FAIR USE” FOR PURPOSES SUCH AS CRITICISM, COMMENT, NEWS REPORTING, TEACHING, SCHOLARSHIP, EDUCATION AND RESEARCH. FAIR USE IS A USE PERMITTED BY COPYRIGHT STATUTE THAT MIGHT OTHERWISE BE INFRINGING. NON-PROFIT, EDUCATIONAL OR PERSONAL USE TIPS THE BALANCE IN FAVOR OF FAIR USE.\n\nLicense\nCreative Commons Attribution license (reuse allowed)\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/TTF8y3S3k_s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=TTF8y3S3k_s",
                "duration": "PT13M1S"
            },
            {
                "title": "AC/DC - Back in Black (cover by Sershen&Zaritskaya feat. Kim and Shturmak)",
                "description": "BOOKING:\nsergeysershen@gmail.com\nhttps://www.facebook.com/S.sershen\n+380936491748\n\nSUPPORT US ON PATREON: \nhttps://www.patreon.com/sershenzaritskaya\n------------------------------------------------------------------------\nFollow us on social media:\n------------------------------------------------------------------------\nInstagram: \nhttp://instagram.com/dariazaritskaya\nhttp://instagram.com/sergeysershen\n\nFacebook: \nhttps://www.facebook.com/S.sershen \nhttps://www.facebook.com/d.zaritskaya\n\nVocals: Daria Zaritskaya\nGuitars: Sergey Sershen\nBass: Alex Shturmak\nDrums: Dmitry Kim\n\nRecorded, mixed and mastered at Sershen Music Studio \n\n(https://www.facebook.com/S.sershen, http://instagram.com/sergeysershen) by Sergey Sershen\n\n====================================================\n\nBack in Black\" is a song by Australian rock band AC/DC. It was released as the lead single from their seventh album of the same name on 21 December 1980 through Atlantic Records. It is notable for its opening guitar riff as well as introducing the band's new vocalist, Brian Johnson. The song was written as a tribute to their former singer Bon Scott, who died in February 1980. In 1981, it reached number 37 on the Billboard Hot 100. In 2012, it reached number 65 in Australia and number 27 in the United Kingdom.\n\nKnown for its opening guitar riff, the song was AC/DC's tribute to their former singer Bon Scott. His replacement Brian Johnson recalled to Mojo magazine in 2009 that when the band asked him to write a lyric for this song, \"they said, 'it can't be morbid – it has to be for Bon and it has to be a celebration.'\" He added: \"I thought, 'Well no pressure there, then' (laughs). I just wrote what came into my head, which at the time seemed like mumbo, jumbo. 'Nine lives. Cats eyes. Abusing every one of them and running wild.' The boys got it though. They saw Bon's life in that lyric.\n\n#ClassicRock #ACDC #backinblack40",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/f2p0xrY4CMs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=f2p0xrY4CMs",
                "duration": "PT5M18S"
            },
            {
                "title": "AC/DC - Whole Lotta Rosie (Live at Donington, 8/17/91)",
                "description": "\"Whole Lotta Rosie\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nWhole lotta woman\nWhole lotta woman\nWhole lotta Rosie\nWhole lotta Rosie\nYou're a whole lotta Rosie\nA whole lotta woman\n\n#ACDC #WholeLottaRosie #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/eEf_UZVMat4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=eEf_UZVMat4",
                "duration": "PT4M38S"
            },
            {
                "title": "AC/DC - Cover You In Oil (Official Video)",
                "description": "Music video by AC/DC performing Cover You In Oil. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/eTTdW1bJhc0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=eTTdW1bJhc0",
                "duration": "PT4M32S"
            },
            {
                "title": "AC DC La verdadera historia ★ Todo sobre ACDC, Biografia, Origenes, Historia y Curiosidades LMCR",
                "description": "Ya son casi 40 años desde que Malcom Young, soñó con tener una banda de rock junto con su hermano menor Angus Young, una idea que se convertiría en una leyenda, y que junto con sus riffs, melodías y letras, perduraran por siempre en la historia de la música…\n\nEs por eso que hoy te traigo esta historia que te dejara atónito, porque está llena dinamita,  blues y oscuridad en una autopista al infierno que nos llevara en un largo camino hacia la cima del rock an roll…\n\nEsto es acdc historia y discografia PRIMERA PARTE...\n\nDisfrútalo, COMPÁRTELO y escríbeme en comentarios sugerencias para próximos videos. :)\n\n ▼▼▼▼\n\n► FACEBOOK: https://www.facebook.com/luismiguelcastaned\n► TWITTER: https://twitter.com/Luismiguel_cast\n► INSTAGRAM:  https://www.instagram.com/luismiguel_cast/\n\nLa familia  young…\n\nAngus young y malcom young, los protagonistas de nuestras historia, ambos guitarristas y fundadores de la banda acdc\nSus padres  william y margaret de origen escoces, luego de vivir varios años en reino unido, se vieron en la obligación de emigrar,  junto a su familia de 8 hijos, a sidney en australia a causa de la dura depresión económica en dicho país.\n\nSteven, alex , bill, john, margaret, george , malcom y angus, los 8 hermanos young, serian pieza clave para el desarrollo de la historia de acdc.\n\nAlex young sería el primero en encaminarse por el mundo musical, al contrario de sus hermanos, él se quedaría londres, y tenía fuertes motivos para ello, pues era parte de la banda de r & b y soul “the bobby patrick big six” como saxofonista. Esta banda, era compañera y muy amiga de nada más y nada menos que de los 4 de liverpool los “beatles\n\nPocos años despues de su llegada a australia, george young, encontraría suerte junto al grupo “easybeats”  que con canciones como “friday on my mind” se convertirían en la primera agrupación de rock australiana en tener éxito a nivel internacional.\n\nEn cuanto a steven, y el resto de  sus hermanos, , no se encuentra demasiada información, solo que  el hijo de steven  “stevie young” eventualmente  remplazaría a malcom young durante algún tours y finalmente seria quien remplazaría a su tío luego de su muerte.\n\nPrimeros pasos…\n\nEl blues y rock’n’roll era lo que se escuchaba en las calles de australia en la epoca de los 60, angus luego de escuchar por primera vez a  “chuck berry”, de quien más tarde adoptaría el peculiar baile del pato, supo que era música lo que quería hacer con su vida. \n\nGeorge,  al ver el interés musical de sus hermanos se convertiría en su mentor, por supuesto gracias a los conocimientos previos con su banda “easybeats”\n\n. Más tarde y muchísimos años adelante en la historia, george también les ayudaría en el bajo, batería y composición en ac/dc.\n\nNi angus ni malcom eran muy aplicados en la escuela, así que pronto decidieron renunciar a ella, por supuesto debieron encontrar trabajo; malcom haciendo mantenimiento a máquinas de coser para una fábrica de brasiers entretanto angus trabajaba en una imprenta de revistas para hombres.\n\nA la par de sus trabajos, los hermanos construían sus proyectos musicales por aparte, pero ninguno de ellos con mucho éxito, pareciera que el destino quisiera que estuvieran unidos.\n\nDespués de mucho pensarlo, porque no se soportaban lo suficiente, en un concierto de led zeppelin, al que asistieron juntos, sería uno de los detonantes que los convencería para enlazar sus caminos  en la música.\n\nEn la primera formación de acdc  estarían; los hermanos young en las guitarras, dave evans en la parte vocal, larry van kriedt en el bajo y en la batería colin burgerss, aunque esto duro muy poco tiempo, de hecho solo unos cuantos meses, y la verdad es que en su totalidad acdc ha tenido más de 20 músicos en su formación, y si quieres conocerlos a todos ya pronto haremos un video al respecto…\n\nMargaret, su hermana mayor,  fue la que sugirió el nombre de ac- dc (corriente alterna - corriente directa) que se encontraba en cualquier aparato eléctrico de la época, significando esa energía y poder que podrían trasmitir con su música y puesta en escena. \n\n\n\n\n\n¿cuál es tu canción o álbum favorito de acdc? \n\n\nGRACIAS",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Oujrjj8I7g4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Oujrjj8I7g4",
                "duration": "PT10M32S"
            },
            {
                "title": "EPIC RIFFS | Why this is AC/DC's hardest riff!⚡",
                "description": "Another video in the EPIC RIFFS series, and today we're looking at AC/DC. Is this the hardest riff? And why is it so difficult? How can we nail it? We're analyzing the riff and I'm showing you all the tricks to get it down.\n\n▶FOLLOW ME◀\nInstagram: https://www.instagram.com/pauldavidsguitar\n\n▶GUITAR◀\nGibson SG Custom '17 - https://youtu.be/m5XRcyjLcYk\n\n0:00 Intro\n0:40 The Riff\n1:06 The biggest misconception\n3:21 The right notes\n4:14 The trick to play it fast\n6:42 The rhythm problem\n8:19 What is wrong with the tabs?!\n9:53 The two intro chords\n11:22 The B section\n11:50 The Mixolydian mode\n13:40 The tone\n\nHi, my name is Paul Davids! I am a guitar player, teacher, producer,  and overall music enthusiast from the Netherlands! I try to inspire people from all over the world with my videos, here on YouTube. \n\nIf you want to know more about me, check out https://PaulDavidsGuitar.com or check out my guitar courses at: https://learnpracticeplay.com and https://nextlevelplaying.com\n\nThank you for watching!\nPaul\n\nBelow is the gear I use to make these videos. They redirect to Amazon and provide me with a small kickback should purchase any of these things. \n\n▶GEAR LIST◀\nhttps://www.amazon.com/shop/pauldavids\n\n▶MICS◀\nVocal mic - http://amzn.to/2BVNtbV\n\n▶SOUND◀\nSoundcard - http://amzn.to/2xk7pSM\nDAW - http://amzn.to/2fhPZjz\n\n▶CAMERAS◀\nCamera 1 - https://amzn.to/2N4NyPX\nCamera 2 - http://amzn.to/2DkDI4D\nCamera 3 - https://amzn.to/2OyTy21\nLens 1 - http://amzn.to/2DF6ahR\nLens 2 - http://amzn.to/2EetpA5\nLens 3 - https://amzn.to/2FK5hqx",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/s4NX7wSnPuQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=s4NX7wSnPuQ",
                "duration": "PT15M50S"
            },
            {
                "title": "S9B (Super9Boyz) - ACDC (Official Music Video NAGASWARA) #music",
                "description": "S9B (Super9Boyz) - ACDC (Official Music Video NAGASWARA) #music\nRBT S9B (Super9Boyz) - ACDC\nTelkomsel : 5514703\nIndosat : ACDC\nXL : ACDC\n3 RBT : 5514703\n\nUntuk aktivasi RBT : \n- Telkomsel ketik 5514703 kirim ke 1212. \n- Indosat ketik SET ACDC kirim ke 808. \n- XL ketik ACDC kirim ke  1818. \n- 3 RBT ketik 5514703 kirim ke 1212.\n\nARTIST : S9B (Super9Boyz)\nJUDUL : ACDC\nCOMPOSED BY : Ruiz Gomez [R.Kerta/John Dayat]\n℗ & © 2012 NAGASWARA  \n\nMari marilah kita, mari marilah kita\nmencari cinta saja\nmari marilah kita, mari marilah kita\ndaripada makan hati\n\nbukan uang bukan harta, bukan emas dan pertama\nhanyalah cinta yang ku pinta\ndaripada bersandiwara pura-pura kau setia\nternyata kau wanita serbaguna\nastaga! masa iya! tak percaya!\n\nreff:\nacdc aha ehe benci benci hatiku padamu padanya\nduduk berdua canda cumbu bermesraan\nacdc aha ehe sakit hatiku padamu padanya\nyang ku cinta ternyata engkaulah cinta dunia\nacdc aha ehe kau simpan … rese \nyang suka gonta-ganti pasangan duh amit-amit deh\n\nnananana nanana nanananana\nnananana nanana nanananana\nnananana nanana nanananana\nnananana nanana nanananana\n\n[rap]\nyeah! super nine boys! s9b!\naku merasakan cinta yang ada pada dirimu\ndunia terhebat cinta padaku\nbahkan ku tahu kau bingung gonta-ganti melulu\ndan takkan ragu tuk tetap miliki aku\nacdc aha ehe antara cinta dan curiga\n\nmari marilah kita, mari marilah kita\nputuskan cinta saja\nmari marilah kita, mari marilah kita\ndaripada makan hati\n\nbukan uang bukan harta, bukan emas dan pertama\nhanyalah cinta yang ku pinta\ndaripada bersandiwara pura-pura kau setia\nternyata kau wanita serbaguna\nastaga! masa iya! tak percaya!\n\nrepeat reff\n\nnananana nanana nanananana\nnananana nanana nanananana\n\ne aha ehe acdc aha ehe\ne aha ehe acdc aha ehe\n\nBusiness inquiries :\n+62 2150208989 ext. 511\nEmail : nagadigit@nagaswara.co.id\n\nMusic Video Official NAGASWARA  : https://smarturl.id/9BgVs704\nTV Streaming Official NAGASWARA : https://smarturl.id/pb4Hj3vM\nRadio Streaming NAGASWARA FM : https://smarturl.id/XLgjNdau\nGoogle Fans Page Official NAGASWARA : https://smarturl.id/5iNuyV2w\nKomunitas Musik NAGASWARA : https://smarturl.id/MDOcAe4R\nFacebook Official NAGASWARA : https://smarturl.id/KgG4nf1P\nTwitter Official NAGASWARA : https://smarturl.id/6bga0Kxj\nInstagram Official NAGASWARA : https://smarturl.id/7AHumLyF\nWebsite NAGASWARA Official : http://www.nagaswara.co.id \nRadio Website : https://smarturl.id/XLgjNdau\nNews Website : https://smarturl.id/5sw18bfi\nWebsite Dance Dhut : https://smarturl.id/ChLY4MVu\nLink Vidio.com NAGASWARA : https://smarturl.id/rPan4m5N\nLink Dailymotion NAGASWARA : https://smarturl.id/UbtTK9Di",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/UHPfRyG3JEA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=UHPfRyG3JEA",
                "duration": "PT3M18S"
            },
            {
                "title": "AC/DC - Riff Raff (Official Video)",
                "description": "Music video by AC/DC performing Riff Raff. (C) 1979 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ErXbMB9R5-0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ErXbMB9R5-0",
                "duration": "PT5M25S"
            },
            {
                "title": "AC/DC - The Jack (from Countdown, 1979)",
                "description": "\"The Jack\" by AC/DC, Live from Countdown, 1973\nListen to AC/DC: https://ACDC.lnk.to/listenYD\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFootage Licensed By Reelin’ In The Years Productions (http://www.reelinintheyears.com)\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nShe's got the jack, she's got the jack\nShe's got the jack, she's got the jack\nShe's got the jack, she's got the jack\nShe's got the jack, she's got the jack\nShe's got the jack, jack, jack, jack, jack, jack, jack\nShe's got the jack\n\n#ACDC #TheJack #Countdown",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6njy7mZbwdc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6njy7mZbwdc",
                "duration": "PT5M20S"
            },
            {
                "title": "AC/DC - Shot Down In Flames (Official Video)",
                "description": "Music video by AC/DC performing Shot Down In Flames. (C) 1980 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/UKwVvSleM6w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=UKwVvSleM6w",
                "duration": "PT3M26S"
            },
            {
                "title": "AC/DC - War Machine (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing War Machine.  (Live At River Plate 2009) (C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/LJn-R8BEIYw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=LJn-R8BEIYw",
                "duration": "PT3M25S"
            },
            {
                "title": "AC/DC - Safe In New York City (Official Video)",
                "description": "Music video by AC/DC performing Safe In New York City. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/JTDZ5O5lH_0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=JTDZ5O5lH_0",
                "duration": "PT4M"
            },
            {
                "title": "AC/DC | ROCK",
                "description": "Best Song AC/DC [Playlist]:\n01.  Thunderstruck\n02.  Back In Black \n03.  War Machine  \n04.  Highway to Hell\n05.  T.N.T \n06.  Rock 'N' Roll Damnation  \n07.  Are You Ready\n08.  Whole Lotta Rosie\n09.  Rocker\n10.  Rock N Roll Train\n11.  You Shook Me All Night Long\n12.  Fire Your Guns  \n13.  Hells Bells\n14.  Hard as a Rock\n15.  Girls Got Rhythm\n16.  For Those About to Rock (We Salute You)\n17.  Moneytalks\n\n18.  High Voltage\n\n\n\nDont forget to share, subscribe and like guys!!!\n\n\nAll music by SME ; LatinAutor, CMRRA, Abramus Digital, LatinAutor - PeerMusic\n\n#ACDC #SME #music",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/U_tyfMUSGo4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=U_tyfMUSGo4",
                "duration": "PT1H13M21S"
            },
            {
                "title": "AC/DC - Shoot to Thrill (Live at Donington, 8/17/91)",
                "description": "AC/DC performing Shoot To Thrill, live at Donington\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtub\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\nAll you women who want a man of the street\nDon't know which way you wanna turn\nJust keep coming\nAnd put your hand out to me\nCause I'm the one who's gonna make you burn\nI'm gonna take you down\nDown down down\nSo don't you fool around\nI'm gonna pull it pull it\nPull the trigger\nShoot to thrill play to kill\nToo many women too many pills, yeah\nShoot to thrill play to kill\nI got my gun at the ready gonna fire at will\n\n#ACDC #ShootToThrill #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/D8LTCr3BQW8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=D8LTCr3BQW8",
                "duration": "PT5M17S"
            }
        ]
    }

    res.send(videos)
})

module.exports = { router }