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
            },
            {
                "title": "ACDC, U2, Nirvana, Metallica Greatest Hits | Best Classic Rock Songs",
                "description": "ACDC, U2, Nirvana, Metallica Greatest Hits | Best Classic Rock Songs\nACDC, U2, Nirvana, Metallica Greatest Hits | Best Classic Rock Songs\nACDC, U2, Nirvana, Metallica Greatest Hits | Best Classic Rock Songs\nhashtag: #acdcgreatesthits, #u2greatesthits,\nThanks for watching!  Have a nice day!\n           ❤  ❤  ❤  ❤  ❤  ❤  ❤  ❤  ❤ \n→ Subcriber  :  https://bit.ly/2N3rjWP\n→ Twitter       :  https://bit.ly/2l5pBbJ\n→ Facebook  :  https://bit.ly/2ItObkO\n→ Blog           :  https://bit.ly/2QY67Vh",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/iCilPta5GWU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=iCilPta5GWU",
                "duration": "PT1H33M26S"
            },
            {
                "title": "Thunderstruck by Steve'n'Seagulls (LIVE)",
                "description": "Finnish band called Steve'n'Seagulls plays AC/DC's awesome song called Thunderstruck. Recorded by Jaakko Manninen Photography.\n\nHAVE YOU HEARD STEVE'N'SEAGULLS NEW ORIGINAL SONG? GIVE IT A LISTEN HERE:\nhttps://playgroundmusic.ffm.to/sweetmaria\n\nWANT TO BUY CD OR LP?\nSteve ´n´ Seagulls merchandise store is open 24/7 \nhttps://store.stevenseagulls.com/\n\nTOUR DATES HERE: www.stevenseagulls.com/gigs\n\nSPOTIFY: https://open.spotify.com/artist/77A9XsX4SDJlhB23yyUwQt\nFACEBOOK https://www.facebook.com/Stevenseagulls\nINSTAGRAM https://www.instagram.com/stevenseagullsband\nTWITTER https://twitter.com/seagullsband\nMusic & Merchandise: store.stevenseagulls.com\niTunes: https://itunes.apple.com/us/album/brothers-in-farms/id1134752605",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/e4Ao-iNPPUc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=e4Ao-iNPPUc",
                "duration": "PT4M6S"
            },
            {
                "title": "AC/DC - Thunderstruck (Live at Donington, 8/17/91)",
                "description": "\"Thunderstruck\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nYou've been - thunderstruck\n\n#ACDC #Thunderstruck #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Af0P6XEkI7Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Af0P6XEkI7Y",
                "duration": "PT4M59S"
            },
            {
                "title": "AC / DC - Thunderstruck | Subtitulado al Español",
                "description": "Banda: AC/DC\nCanción: Thunderstruck\nÁlbum: The Razors Edge\nAño: 1990\n\n**REDES SOCIALES**\n\nSigueme en mi Instagram: https://www.instagram.com/reviviendolos80ss/?hl=es-la\n\nSigueme en mi Facebook: https://www.facebook.com/Reviviendo-los-80s-101681291228532/\na\n\nThunderstruck de \"The Razors Edge\" esta disponible aqui:\n\nDescargar canción: https://music.apple.com/us/album/thunderstruck/574049507\n\nLyrics:\n\nThunder, thunder, thunder, thunder\nI was caught\nIn the middle of a railroad track\nI looked round\nAnd I knew there was no turning back\nMy mind raced\nAnd I thought what could I do\nAnd I knew\nThere was no help, no help from you\nSound of the drums\nBeating in my heart\nThe thunder of guns\nTore me apart\nYou've been\nThunderstruck\n\nRode down the highway\nBroke the limit, we hit the town\nWent through to Texas, yeah Texas, and we had some fun\nWe met some girls\nSome dancers who gave a good time\nBroke all the rules\nPlayed all the fools\nYeah yeah they, they, they blew our minds\nAnd I was shaking at the knees\nCould I come again please\nYeah them ladies were too kind\nYou've been\nThunderstruck\n\nI was shaking at the knees\nCould I come again please\n\nThunderstruck, Thunderstruck, Thunderstruck, Thunderstruck\nIt's alright, we're doin' fine\nIt's alright, we're doin' fine, fine, fine\nThunderstruck, yeah, yeah, yeah\nThunderstruck, Thunderstruck\nThunderstruck, baby, baby\nThunderstruck, you've been Thunderstruck\nThunderstruck, Thunderstruck\nYou've been Thunderstruck\n\n©Copyright. En virtud de la sección 107 de la ley de derechos de autor de 1976, se permite el uso justo para fines de criticas, comentarios, informes de noticias, enseñanza, becas e investigación. El uso es sin fines de lucro, educativo o personal inclina una balanza a favor de uso justo.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/hpbc5HggyS4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=hpbc5HggyS4",
                "duration": "PT4M52S"
            },
            {
                "title": "AC/DC - No Man's Land (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #NOMANSLAND",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/l5MdhcX7Ro0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=l5MdhcX7Ro0",
                "duration": "PT3M42S"
            },
            {
                "title": "AC/DC - Thunderstruck (Live at the Circus Krone, Munich, Germany June 17, 2003)",
                "description": "AC/DC performing “Thunderstruck” live at the Circus Krone\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nAbout The Razor's Edge:\nThe Razors Edge is an album by Australian hard rock band AC/DC. It was the band's eleventh internationally released studio album and the twelfth to be released in Australia. The Razors Edge features hits \"Thunderstruck\" and \"Are You Ready, which reached #5 and #16 respectively on Billboard's Mainstream Rock Tracks Chart and \"Moneytalks, which peaked at #23 on the Billboard Hot 100. The album went Multi-Platinum and reached the US Top Ten.\n\nLyrics:\nI was caught\nIn the middle of a railroad track (thunder)\nI looked round\nAnd I knew there was no turning back (thunder)\nMy mind raced\nAnd I thought what could I do? (thunder)\nAnd I knew\nThere was no help, no help from you (thunder)\nSound of the drums\nBeating in my heart\nThe thunder of guns (yeah)\nTore me apart\n\n\nYou've been\nThunderstruck\n\n#ACDC #Rock #Thunderstruck",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/S55ozleWZ0w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=S55ozleWZ0w",
                "duration": "PT5M21S"
            },
            {
                "title": "Angus Young (AC/DC) \"Awesome Guitar Solo\"",
                "description": "Angus Young (AC/DC) \"Awesome Guitar Solo\"\n\nAngus Young (AC/DC) \"Awesome Guitar Solo\"\n↪Website : http://guitarmpro.com/ ✔\n↪Facebook : https://www.facebook.com/GuitarLPro/ ✔\n↪Twitter : https://twitter.com/Productlyrics ✔\n↪Instagram : https://www.instagram.com/guitarmusicp/ ✔\n↪↪Google+ : https://plus.google.com/+GuitarMusicPro ✔",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/IGoPNp_WumE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=IGoPNp_WumE",
                "duration": "PT5M"
            },
            {
                "title": "First Time Hearing AC:DC Thunderstruck Reaction",
                "description": "First Time Hearing AC:DC Thunderstruck  Reaction\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\nIf you enjoy this video and my reactions make sure you subscribe to the channel, like the video and comment down below which video you would like to see me react to next.\n\nFor all business inquires email romelifebusiness@gmail.com\n\n2020 Goals\n1. 100k Youtube Subscribers\n2. Be a guest on Ellen\n3. Never work for anyone ever again\n\nA little about me and this channel:\nMy name is James Aubrey IV and I just recently graduated college from Iowa State University.  After college I decided to take a leap of faith. So I moved to San Diego California to pursue  my passion for videography/ Youtube. Overall I'm a pretty chill person, outside of Youtube I like to longboard,  dance, play video games, lift weights and hangout with my friends. I know that success on Youtube won't happen overnight but I'm willing to stay patient and  put in the work to try to prefect my craft daily. This Youtube channel will be centered around my life after college. You will be able to see all of the ups and downs on my journey to success. So if you like the content make sure you subscribe so you can be apart of the Rome Life Family. (Let's build our own personal Rome's together.) \n\nWhat is the Rome Life ? And What does it mean to be apart of it?\nRome Life is something I started during my Sophomore year of high school (one of the worst times in my life) it started off as me documenting my journey to recovery from my shoulder surgery but eventually it turned into a platform that I could use to encourage myself as well as  others to chase our dreams.\nRome Life isn't just a saying it's a way of life and for the people who want to be apart of it have to realize that. Rome wasn't built in a day it took a lot of handwork time and most importantly patience. So  you can't expect your dreams to be any different\n\nThis is a reaction video used to educated and give my feedback on the song and artist\n\n||COPYRIGHT DISCLAIMER –\n https://www.copyright.gov/fair-use/mo...\nUNDER SECTION 107 OF THE COPYRIGHT ACT 1976, ALLOWANCE IS MADE FOR \"FAIR USE\" FOR PURPOSES SUCH AS CRITICISM, COMMENT, NEWS REPORTING, TEACHING, SCHOLARSHIP, AND RESEARCH. FAIR USE IS A USE PERMITTED BY COPYRIGHT STATUTE THAT MIGHT OTHERWISE BE INFRINGING. NON-PROFIT, EDUCATIONAL OR PERSONAL USE TIPS THE BALANCE IN FAVOR OF FAIR USE.\n\n\n\n||DISCLAIMER\nALL VIDEOS ARE FOR ENTERTAINMENT/ NEWS PURPOSES PROTECTED BY FAIR ACT **FAIR USE** COPYRIGHT DISCLAIMER UNDER SECTION 107 OF THE COPYRIGHT ACT 1976, ALLOWANCE IS MADE FOR “FAIR USE” FOR PURPOSES SUCH AS CRITICISM, COMMENT, NEWS REPORTING, TEACHING, SCHOLARSHIP, EDUCATION AND RESEARCH. FAIR USE IS A USE PERMITTED BY COPYRIGHT STATUTE THAT MIGHT OTHERWISE BE INFRINGING. NON-PROFIT, EDUCATIONAL OR PERSONAL USE TIPS THE BALANCE IN FAVOR OF FAIR USE.\n\n Blessed are the gentle, for they shall inherit the earth.\n\nLicense\nCreative Commons Attribution license (reuse allowed)\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/emI5EOIcp1c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=emI5EOIcp1c",
                "duration": "PT9M"
            },
            {
                "title": "Foo Fighters - Let There Be Rock (AC/DC cover, Live Lounge) [Official Video]",
                "description": "Foo Fighters cover AC/DC's classic Let There Be Rock in the BBC Radio 1 Live Lounge\n\n#FooFighters #LetThereBeRock #Vevo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/5VeflGoMOv0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=5VeflGoMOv0",
                "duration": "PT5M42S"
            },
            {
                "title": "AC/DC - High Voltage (Live at Donington, 8/17/91)",
                "description": "\"High Voltage\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHigh voltage rock 'n' roll\nHigh voltage rock 'n' roll\nHigh voltage, high voltage\nHigh voltage rock 'n' roll\n\n#ACDC #HighVoltage ##LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/dXIMHh4ZfhY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=dXIMHh4ZfhY",
                "duration": "PT9M15S"
            },
            {
                "title": "AC/DC - For Those About to Rock (We Salute You) (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing For Those About To Rock (We Salute You). (Live At River Plate 2009) (C) 2011 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/RtMGoU9NcMo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=RtMGoU9NcMo",
                "duration": "PT7M20S"
            },
            {
                "title": "AC/DC - Girls Got Rhythm (1979) • TopPop",
                "description": "Power Up (sometimes shortened as PWR/UP and stylised as PWRϟUP) is the seventeenth studio album by Australian rock band AC/DC released in Australia and the sixteenth to be released internationally. Released on 13 November 2020, Power Up marks the return of vocalist Brian Johnson, drummer Phil Rudd and bassist Cliff Williams, all of whom left AC/DC before, during, or after the supporting tour for their previous album Rock or Bust (2014). This is also the band's first album since the death of co-founder and rhythm guitarist Malcolm Young in 2017 and serves as a tribute to him, according to his brother Angus.\nTo celebrate this we highlight AC/DC's only performance on Toppop with 'Girls Got Rhythm'.\n\nAC/DC (stylised as ACϟDC) are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young. Although their music has been variously described as hard rock, blues rock, and heavy metal, the band themselves call it simply \"rock and roll\".\n\ninIn this legendary Toppop performance from 1979 you can see the band in the line-up with Malcolm and Angus Young, singer Bon Scott, drummer Phil Rudd, and bassist Cliff Williams, who has appeared on every AC/DC album since 1978's Powerage. \nIn February 1980, Bon Scott died of acute alcohol poisoning after a night of heavy drinking.\n\nWatch our great music videos ❯ https://goo.gl/feVLNN\nMore TopPop? Subscribe here ❯ https://goo.gl/X9FOAU\nMore info on Wikipedia ❯ https://en.wikipedia.org/wiki/TopPop\n\nBroadcast date: 1979/11/25\n\nThis is to let you know that the video recording of the video clip was originally recorded by AVROTROS Broadcasting. AVROTROS Broadcasting hereby warrants and represents that it is the sole and exclusive owner of the physical film and/or videotape footage in this video clip. \n\nThe performance of the artist(s) in the clip was filmed and recorded with the written consent of the artist(s) and their representatives.\n\nAVROTROS is a Dutch radio and television broadcaster, founded in 2014 from a merger of AVRO and TROS. From January 1st, 2014 the name of the merged broadcaster was used in joint programmes. AVRO was founded in 1923 as the Netherlands first public broadcaster. TROS started broadcasting in 1964. Toppop was a weekly AVRO pop program that was aired between 1970 and 1988.\n\nAVROTROS Broadcasting\nPO Box 2\n1200 JA Hilversum\nThe Netherlands\n\nTopPop was the first regular dedicated pop music TV show in the Dutch language area. Dutch broadcaster AVRO aired the programme weekly, from 1970 to 1988. Presenter Ad Visser hosted the show for its first fifteen years.\nWorld famous music artists performed on TopPop: ABBA, 10CC, Bee Gees, The Jacksons with Michael Jackson, David Bowie, Earth & Fire, Queen, Golden Earring, Boney M, KC & The Sunshine Band, Chic, Donna Summer and many many more.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/GStgyL2Vt44/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=GStgyL2Vt44",
                "duration": "PT3M23S"
            },
            {
                "title": "AC/DC - Hell Ain't a Bad Place to Be (Live at Donington, 8/17/91)",
                "description": "\"Hell Ain't a Bad Place to Be\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nShe needs lovin'\nKnows I'm the man\nShe's gotta see\nPours my beer\nLicks my ear\nBrings out the devil in me\n\nHell ain't a bad place to be\n\n#ACDC #HellAintaBadPlacetoBe ##LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zcQPJjuGbXU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zcQPJjuGbXU",
                "duration": "PT4M25S"
            },
            {
                "title": "ACDC  - Highway to Hell (SHRED VERSION)",
                "description": "Hope you guys enjoyed!!\nEP, Merch & Lesson content available from - \nhttp://www.sophieguitar.com/shop-1\n\nCHECK OUT MY OTHER SOCIAL MEDIAS - \nFB - http://www.facebook.com/sophieguitar\nPATREON - http://www.Patreon.com/sophieguitar\nIG - http://www.instagram.com/sophieguitar_",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zwtEbw9DWdY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zwtEbw9DWdY",
                "duration": "PT3M36S"
            },
            {
                "title": "AC/DC - Heatseeker (Official Video)",
                "description": "Music video by AC/DC performing Heatseeker. (C) 1988 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/VWG4-4Y6Z60/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=VWG4-4Y6Z60",
                "duration": "PT3M47S"
            },
            {
                "title": "AC/DC - Live at River Plate Show Completo/Full Show",
                "description": "Posted by a Brazilian fan\nI do not own any copyright in the footage and audios used in this video. It is for entertainment purposes only!\nWe love AC / DC, the greatest Rock 'N' Roll band of all time\nFollow and learn more about AC/DC at the links below.\n\nVideo belonging to the band, all credits to the artist AC/DC.\n\nSoundcloud: https://soundcloud.com/acdcofficial\nSpotify: https://open.spotify.com/artist/711MCceyCBcFnzjGY4Q7Un\nInstagram: https://www.instagram.com/acdc/?hl=en\nFacebook: https://www.facebook.com/acdc/\nTwitter: https://twitter.com/acdc?lang=en\nSite: https://www.acdc.com/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/AFExfmkmbjE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=AFExfmkmbjE",
                "duration": "PT1H51M38S"
            },
            {
                "title": "AC/DC - Money Shot (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #MONEYSHOT",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/g9awHEExN7A/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=g9awHEExN7A",
                "duration": "PT3M7S"
            },
            {
                "title": "AC/DC - Highway to Hell",
                "description": "Lyrics:\n\nLivin' easy, lovin' free\nSeason ticket, on a one - way ride\nAskin' nothin', leave me be\nTakin' everything in my stride\nDon't need reason, don't need rhyme\nAin't nothing I'd rather do\nGoin' down, party time\nMy friends are gonna be there too\n\nI'm on the highway to hell\nOn the highway to hell\nHighway to hell\nI'm on the highway to hell\n\nNo stop signs, speed limit\nNobody's gonna slow me down\nLike a wheel, gonna spin it\nNobody's gonna mess me around\nHey Satan, payin' my dues\nPlayin' in a rockin' band\nHey Mama, look at me\nI'm on my way to the promised land\n\nI'm on the highway to hell\nHighway to hell\nI'm on the highway to hell\nHighway to hell\n\nDont stop me!\n\nI'm on the highway to hell\nOn the highway to hell!\nHighway to hell!\nI'm on the highway to hell\n\nAnd I'm going down..all the way\nI'm on the highway to hell",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/qKggnBh2Mdw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=qKggnBh2Mdw",
                "duration": "PT3M29S"
            },
            {
                "title": "AC/DC - Sink the Pink (Official Music Video)",
                "description": "Music video by AC/DC performing Sink The Pink. (C) 1986 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Gp-PKmbcF7c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Gp-PKmbcF7c",
                "duration": "PT4M3S"
            },
            {
                "title": "AC/DC - Rejection (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #REJECTION",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/goy-I4RtILI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=goy-I4RtILI",
                "duration": "PT4M8S"
            },
            {
                "title": "AC/DC - Guns for Hire (Official Video)",
                "description": "Music video by AC/DC performing Guns for Hire (Flick Of The Switch promo clip). (C) 2009 Leidseplein Presse, B.V..",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/zuNNo_xAdzc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=zuNNo_xAdzc",
                "duration": "PT3M31S"
            },
            {
                "title": "AC/DC - Boogie Man (Plaza De Toros De Las Ventas, July 1996)",
                "description": "Music video by AC/DC performing Boogie Man. (Plaza De Toros De Las Ventas 1996)1996, 2008 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/nLM2CT-y74c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=nLM2CT-y74c",
                "duration": "PT10M3S"
            },
            {
                "title": "Classic Rock | ACDC, Bon Jovi, Aerosmith, Bon Jovi, GNR, RHCP, Metallica",
                "description": "Thanks for watching!  Have a nice day!\n           ❤  ❤  ❤  ❤  ❤  ❤  ❤  ❤  ❤ \n→ Subcriber  :  https://bit.ly/2N3rjWP\n→ Twitter       :  https://bit.ly/2l5pBbJ\n→ Facebook  :  https://www.facebook.com/chutimonfern.69\n→ Blog           :  https://bit.ly/2QY67Vh \nClassic Rock Greatest Hits 60s 70s 80s - Best Classic Rock Songs Of All Time\n\n#classicrockgreatesthits, #classicrock70s80s90s, #bestclassicrocksongsofalltime,\nThanks for watching! Don't forget to SUBCRIBE, Like & Share my video if you enjoy it! Have a nice day! ❤ ❤ ❤\nclassic rock\nrock classic \nclassic rock songs\nclassic rock greatest hits\ngreatest hits classic rock\nclassic rock 60s\nclassic rock 70s\nclassic rock 80s\nclassic rock 90s\nclassic rock 60s 70s 80s\nclassic rock 70s 80s 90s\nclassic rock 80s 90s\nclassic rock playlist\nclassic rock collection\nbest of classic rock\nbest classic rock songs\nclassic rock hits\ntop classic rock songs\nrock\nrock 70s\nrock 80s\nrock 90s\nbest rock music\nbest rock 60s 70s 80s\nbest rock 70s 80s 90s\ngreat classic rock\nbest classic rock songs of all time\ntop 20 classic rock songs\nclassic rock music",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Re2F97Tjs5Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Re2F97Tjs5Y",
                "duration": "PT1H47M39S"
            },
            {
                "title": "AC/DC - Thunderstruck (Live At River Plate, December 2009) REACTION!! | OFFICE BLOKES REACT!!",
                "description": "Comment Below with More Reaction Ideas!\n\nShow some support and sign up to our Patreon for exclusive videos not on YouTube, Access to our Banned Videos and to guarantee we react to your request\n \nhttps://www.patreon.com/officeblokesreact\n\nLink to original video: https://www.youtube.com/watch?v=n_GFN3a0yj0\n\nRecorded at Atlantic Podcast Studios: info@atlanticpodcaststudios.com\n\nhttps://www.instagram.com/office_blokes_react\n\nhttps://www.facebook.com/officeblokespodcast/\n\nFor all enquiries email: officeblokesreact@gmail.com\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/uzeitq3_xtM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=uzeitq3_xtM",
                "duration": "PT10M6S"
            },
            {
                "title": "AC/DC: ‘POWER UP’ and the Legacy of Malcolm Young | Apple Music",
                "description": "Angus Young and Brian Johnson of AC/DC sit down with Zane Lowe to talk about their album, ‘POWER UP.’ The group talk about the art of creating rock music, dedicating this record to Malcolm Young and the remarkable impact he left on the band. They also talk about Brian’s battle with hearing loss, lead singer changes, and continuing out the Rock or Bust World Tour. Listen to AC/DC on Apple Music: https://apple.co/-ACDC\n \n0:00 – Intro\n0:42 – Life Outside of the Band\n1:28 – Music Creation for Angus Young \n9:43 – Malcolm Young \n18:00 – Lead Singer Changes\n18:38 – Brian Johnson’s Health\n23:35 – ‘POWER UP’\n36:25 – Musical Chemistry with Malcolm and Angus\n\nSubscribe to Apple Music: https://apple.co/AppleMusicYT\n\nFollow Apple Music:\nInstagram: https://instagram.com/applemusic\nFacebook: https://facebook.com/applemusic\nTwitter: https://twitter.com/applemusic\n\nWatch more Apple Music: \nWhat’s New: https://apple.co/2VFatTU\nApple Music Up Next: https://apple.co/2MLktXE\nInterviews: https://apple.co/32WnrPV\nWhat’s Trending: https://apple.co/2Meq89t\n\nApple Music lets you listen to millions of songs, online or off, totally ad-free. Create and share your own playlists, get exclusive content and personalized recommendations, and listen to radio hosted by artists streaming live or on demand. http://apple.co/SUBSCRIBE\n\n#ACDC #POWERUP #AppleMusic",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/RNNiInX5Pbw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=RNNiInX5Pbw",
                "duration": "PT41M12S"
            },
            {
                "title": "AC/DC - Fling Thing/Rocker (Filmed April 30, 1978)",
                "description": "Music video by AC/DC performing Fling Thing/Rocker. (C) 1979 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ASJy3c4ACiU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ASJy3c4ACiU",
                "duration": "PT7M2S"
            },
            {
                "title": "AC/DC - Rock the Blues Away (Official Video)",
                "description": "Music video by AC/DC performing Rock the Blues Away. (C) 2015 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/nyFvDbwyhF8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=nyFvDbwyhF8",
                "duration": "PT3M30S"
            },
            {
                "title": "Thunderstruck [AC/DC Meets Beethoven] - Peter Bence",
                "description": "This is what happens when AC/DC's Thunderstruck and Beethoven's Moonlight Sonata (3rd movement) is blended together.\nPETER BENCE WORLD TOUR - GET TICKETS:\nhttp://peterbence.com/#concerts\nSUBSCRIBE to this channel and don't miss new videos! \nFollow me:\nhttp://www.facebook.com/BencePeterMusic\nhttps://www.instagram.com/bencepetermusic\nhttps://www.twitter.com/bencepeter\n\nArranged and performed by Peter Bence\nDirected by Sebastian S. Zold\nCinematography: Gabor Szentivanyi\nVideo Assistant: Gabor Szabo Kovacs\nEdited by Sebastian S. Zold, Peter Bence\nMix, master and color: Peter Bence\nSpecial thanks to Audio-Technica for their continuous support! \n\n\nhttp://www.peterbence.com",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/VxneFyWEVdQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=VxneFyWEVdQ",
                "duration": "PT3M39S"
            },
            {
                "title": "TOP 10 ตอบคำถาม Q / A - MISS THAI ACDC 2020",
                "description": "ขอบคุณ วิดีโอจาก Facebook Page Miss ACDC LIFE  https://www.facebook.com/missacdclife/\n\n#MissThaiACDC2020\n#MissACDC\n#TOP10\n#ตอบคำถาม",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Pw5TRVkqZIw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Pw5TRVkqZIw",
                "duration": "PT26M48S"
            },
            {
                "title": "AC/DC - LIVE (7 year old Drummer) Dirty Deeds Done Dirt Cheap",
                "description": "WATCH MY Thunderstruck LIVE vid → http://bit.ly/2xYoqjR\n\nBig Jack and Avery Drummer Molek Live Drum Cover playing AC/DC's \"Dirty Deeds Done Dirt Cheap\" at Gettysburg Bike Week, PA. Thank You Kelly, Glen and Big Jack for such an awesome time in Gettysburg!\n\nSUBSCRIBE THEN HIT THE 🔔 → http://bit.ly/SUB-AVERY  🔥\nFACEBOOK → http://bit.ly/AVERY-FB\nWEB → http://bit.ly/AVERY-WEB\n__________\nSince I have 100's of 🥁 vidoes on my channel, below are playlist for easy navigation.\n\n• CLASSIC ROCK →   http://bit.ly/2wYFkxh\n• ROCK →  http://bit.ly/2uDVAqF\n• HARD ROCK →  http://bit.ly/2w86K6N\n• HEAVY METAL →  http://bit.ly/2vkm7YN\n• LIVE →  http://bit.ly/2fyMPVq \n• REALLY HARD STUFF TO PLAY →  http://bit.ly/2iANo2j\n• TV-INTERVIEWS →  http://bit.ly/2mSqpon\n• POP →  http://bit.ly/2jdeJXZ\n\nWatch as I grow through the years, in drumming not height.  😉\n• 3,4,5 Years Old → http://bit.ly/AGES-3-4-5\n• 6 Years Old → http://bit.ly/AGE-6\n• 7 Years Old → http://bit.ly/AGE-7\n• 8 Years Old → http://bit.ly/AGE-8\n• 9 Years Old → http://bit.ly/AGE-9\n• 10 Years Old → http://bit.ly/AGE-10\n• 11 Years Old → http://bit.ly/AGE-11\n\nAvery “Drummer” Molek is young growing musician. He started playing drums at age 2. He now loves to play everything: classic, rock, jazz, metal and progressive music. Avery also plays bass, guitar & piano.\n\nAvery is very happy and proud to endorse ddrum, Zildjian, Vic Firth and Kellyshu! \nThank You!\nhttp://www.ddrum.com/\nhttp://zildjian.com/\nhttp://www.vicfirth.com/\nhttp://www.kellyshu.com/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/fMb2mJjEfaI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=fMb2mJjEfaI",
                "duration": "PT5M5S"
            },
            {
                "title": "AC/DC - T.N.T. (Live at Donington, 8/17/91)",
                "description": "\"T.N.T.\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\n'Cause I'm T.N.T. I'm dynamite\n(T.N.T.) and I'll win the fight\n(T.N.T.) I'm a power load\n(T.N.T.) watch me explode\n\n#ACDC #TNT #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/7WVBEB8-wa0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=7WVBEB8-wa0",
                "duration": "PT3M30S"
            },
            {
                "title": "AC/DC - SHOT IN THE DARK (OFFICIAL VIDEO BEHIND THE SCENES)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n \nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com\nFacebook: https://www.facebook.com/acdc\nInstagram: https://www.instagram.com/acdc\nTwitter: https://twitter.com/acdc\nTikTok: http://tiktok.com/@acdc\n \nDirector : David Mallet\nProducer : Dione Orrom\nSet Design : Peter Bingemann\nLighting Designer Steve Nolan\nCamera Supervisor:  Barrie Dodd\n\n#ACDC #PWRUP #SHOTINTHEDARK",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/01Mo3CfJvUc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=01Mo3CfJvUc",
                "duration": "PT2M43S"
            },
            {
                "title": "락 역사상 가장 많이 팔린, 누군가를 향한 추모앨범 - AC/DC의 'Back in Black' 이야기",
                "description": "*각종 제보와 문의는 모두 bokgoman@gmail.com으로 보내주시면 됩니다\n인스타그램 - bokgoman\n\n복고맨이 오랜만에 락으로 돌아갔어요.\n영화 아이언맨에 심심하면 나오던, AC/DC의 'Back in Black' 이야기입니다.\n\n잘 봐주셨다면 좋아요와 구독 부탁드리겠습니다 :)\n\n#ACDC #에이씨디씨 #하드락 #하드록 #BackInBlack #HighwayToHell #복고맨 #올드락 #올드팝 #락 #AC/DC #아이언맨",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/okHHl4eE0Yc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=okHHl4eE0Yc",
                "duration": "PT11M12S"
            },
            {
                "title": "AC/DC - Hail Caesar (Official Video)",
                "description": "Music video by AC/DC performing Hail Caesar. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Fptue_EaMjw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Fptue_EaMjw",
                "duration": "PT4M28S"
            },
            {
                "title": "AC/DC - Stiff Upper Lip (Official Video)",
                "description": "Music video by AC/DC performing Stiff Upper Lip. (C) 2009 Leidseplein Presse, B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/S2Z8WIlaPH4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=S2Z8WIlaPH4",
                "duration": "PT3M52S"
            },
            {
                "title": "AC/DC and Axl Rose - BACK IN BLACK HD - Ceres Park, Aarhus, Denmark, June 12, 2016",
                "description": "✔ See all my videos of AC/DC concert at the Ceres Park, Aarhus, Denmark:\nhttps://www.youtube.com/playlist?list=PLMbUPV79_Rc_Vv9cmOyt9K6WBygaEBNXE\n✔ Subscribe to my channel for the latest concert videos:\nhttps://www.youtube.com/channel/UCpxKwqga1CS22BRY-Q0-cCA\n\nAC/DC and Axl Rose live at the Ceres Park in Aarhus (Denmark) on their \"Rock Or Bust\" Worldtour 2015/2016.\n\nSong: \"BACK IN BLACK\"\n\nJune 12, 2016\n\nLine-Up:\nAxl Rose (Vocals)\nAngus Young (Guitar)\nStevie Young (Guitar)\nCliff Williams (Bass)\nChris Slade (Drums)\n\nSetlist:\n01. Rock Or Bust\n02. Shoot To Thrill\n03. Hell Ain't A Bad Place To Be\n04. Back In Black\n05. Got Some Rock & Roll Thunder\n06. Dirty Deeds Done Dirt Cheap\n07. Rock 'N' Roll Damnation\n08. Thunderstruck\n09. High Voltage\n10. Rock 'N' Roll Train\n11. Hells Bells\n12. Givin' The Dog A Bone\n13. If You Want Blood (You've Got It)\n14. Touch Too Much\n15. Sin City\n16. Shot Down In Flames\n17. You Shook Me All Night Long \n18. Have A Drink On Me\n19. T.N.T.\n20. Whole Lotta Rosie\n21. Let There Be Rock\nEncore:\n22. Highway To Hell\n23. Riff Raff\n24. For Those About To Rock (We Salute You)",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/CFSxi96o43Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=CFSxi96o43Q",
                "duration": "PT4M28S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Live at Nihon Seinenkan, Tokyo, 1981)",
                "description": "\"You Shook Me All Night Long\" by AC/DC from Live at Nihon Seinenkan, Tokyo, 1981\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nAnd you shook me all night long\nYeah, you shook me all night long\n\n#ACDC #YouShookMeAllNightLong #LiveinTokyo1981",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/bYJZ3oK1myc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=bYJZ3oK1myc",
                "duration": "PT3M5S"
            },
            {
                "title": "AC/DC - Mistress For Christmas - Happy Holidays",
                "description": "Happy Holidays! What did you get in your stocking this year?\n#MistressForChristmas",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/7doBMyEH_Ug/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=7doBMyEH_Ug",
                "duration": "PT4M"
            },
            {
                "title": "AC/DC Shot In The Dark Guitar Lesson + Tutorial",
                "description": "I'm teaching you guys how to play AC/DC's Shot In The Dark on guitar. Let's rock!\n\nBecome a Patron - https://www.patreon.com/MartyMusic\nhttp://www.MartyMusic.com\nhttps://teespring.com/stores/martymusic\nInstagram - http://www.instagram.com/martyschwartz\nReddit: https://www.reddit.com/r/martymusic/\nTwitter - http://www.twitter.com/martyschwartz\nFacebook - http://www.facebook.com/martyschwartzofficial\n\nMy Favorite Guitar + Filming Gear\nhttps://www.amazon.com/shop/martymusic\n\nDisclosure: I only recommend products I would use myself and all opinions expressed here are my own. The link above is an Amazon affiliate link, that at no additional cost to you, I may earn a small commission on.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/oDoBrcfuTVU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=oDoBrcfuTVU",
                "duration": "PT10M37S"
            },
            {
                "title": "AC/DC - Let There Be Rock (Live at Donington, 8/17/91)",
                "description": "\"Let There Be Rock\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nHe said, \"Let there be sound\"\nThere was sound\n\"Let there be light\"\nThere was light\n\"Let there be drums\"\nThere was drums\n\"Let there be guitar\"\nThere was guitar\n\nOh, let there be rock\n\n#ACDC #LetThereBeRock##LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/uCxN0qAAx4U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=uCxN0qAAx4U",
                "duration": "PT17M13S"
            },
            {
                "title": "AC/DC - The Story Of Back In Black Episode 2 - Hells Bells",
                "description": "\"The Story Of Back In Black Episode 2 - Hells Bells\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\n#ACDC #TheStoryOfBackInBlack #HellsBells",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/pnkUQCgcpAM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=pnkUQCgcpAM",
                "duration": "PT2M30S"
            },
            {
                "title": "Live Wire",
                "description": "Provided to YouTube by Columbia\n\nLive Wire · AC/DC\n\nHigh Voltage\n\n℗ 1976 J. Albert & Son (Pty.) Ltd.\n\nReleased on: 1976-04-30\n\nGuitar, Composer, Lyricist: Angus Young\nVocal, Composer, Lyricist: Bon Scott\nGuitar, Composer, Lyricist: Malcolm Young\nDrums: Phil Rudd\nBass: Mark Evans\nProducer: Harry Vanda and George Young\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/1gtLgAYCf5Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=1gtLgAYCf5Y",
                "duration": "PT5M49S"
            },
            {
                "title": "LIVE MISS THAI ACDC 2020",
                "description": "Live Final  Miss Thai ACDC 2020",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/AYSVguILN84/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=AYSVguILN84",
                "duration": "PT4H57M48S"
            },
            {
                "title": "You Shook Me All Night Long-AC/DC Lyrics",
                "description": "",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/PAvZ__zwiyM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=PAvZ__zwiyM",
                "duration": "PT3M33S"
            },
            {
                "title": "AC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist",
                "description": "#New\n#BestRock\n#AC\\DC\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist\nAC\\DC Best Rock Songs - The Best Songs Of AC\\DC Nonstop Playlist",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/CRzrvgW6RsE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=CRzrvgW6RsE",
                "duration": "PT40M46S"
            },
            {
                "title": "AC/DC - Live Wire (1979 Paris)",
                "description": "1979 live in Paris",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6tdiMdj164w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6tdiMdj164w",
                "duration": "PT6M14S"
            },
            {
                "title": "Aprende el impresionante punteo de THUNDERSTRUCK en guitarra acústica | AC/DC Tab Tutorial TCDG",
                "description": "🎸 Aprende guitarra sin moverte de tu casa y con 65% de descuento!\n👉 Súmate a la mejor escuela de guitarra online en http://tusclasesdeguitarra.com\n\n Como tocar Thunderstruck (Ac/Dc) en guitarra acústica\n Tutorial con tablaturas y notas.\n\n#thunderstruck #acdc #guitarraacustica #tcdg #tusclasesdeguitarra",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/QuxiQIjjjME/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=QuxiQIjjjME",
                "duration": "PT1M50S"
            },
            {
                "title": "AC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC",
                "description": "- Thanks for watching the video, please subscribe to my channel\n#New\n#BestRock\n#AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC \nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\n AC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC\nAC/DC Greatest Hits Full Album 2020 - Top 30 Best Songs Of AC/DC",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6vAfclZL2z0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6vAfclZL2z0",
                "duration": "PT1H15M17S"
            },
            {
                "title": "AC/DC - FULL CONCERT (Multicam-Mix) - Berlin 2015 (\"Rock Or Bust\"-Worldtour)",
                "description": "AC/DC live at the Olympic Stadium in Berlin (Germany) on their \"Rock Or Bust\" Worldtour 2015. Watch the entire show in a multicam-mix! \n\n25 June 2015\n\n01 Intro 00:00 \n02 Rock Or Bust 02:20 \n03 Shoot To Thrill 05:42 \n04 Hell Ain't A Bad Place To Be 11:31 \n05 Back In Black 16:02 \n06 Play Ball 20:06 \n07 Dirty deeds Done Dirt Cheap 23:10 \n08 Thunderstruck 28:53 \n09 High Voltage 34:25 \n10 Rock 'N' Roll Train 40:23 \n11 Hells Bells 44:42 \n12 Baptism By Fire 50:50 \n13 You Shook Me All Night Long 55:05 \n14 Sin City 59:23 \n15 Shot Down In Flames 01:05:10 \n16 Have A Drink On Me 01:09:20 \n17 T.N.T. 01:14:03 \n18 Whole Lotta Rosie 01:18:19 \n19 Let There Be Rock 01:24:15 \n20 Angus Solo 01:36:16 \nEncore: \n21 Highway To Hell 01:43:05 \n22 For Those About To Rock 01:47:45\n\n✔ More videos of the concert: https://goo.gl/cVLXJ3\n✔ Pictures of the concert: http://goo.gl/reLAqB\n✔ Watch all my videos of AC/DC's \"Rock Or Bust\" Worldtour 2015: https://goo.gl/o53lsF\n✔ Subscribe to my channel for the latest concert videos: http://goo.gl/CEB18m\n✔ http://www.acdc-forum.de\n\nLine-Up:\nBrian Johnson (Vocals)\nAngus Young (Guitar)\nStevie Young (Guitar)\nCliff Williams (Bass)\nChris Slade (Drums)\n\n#acdc #acdcfullconcert #acdclive\n#pwrup #shotinthedark",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/7uauVGvTF-8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=7uauVGvTF-8",
                "duration": "PT1H55M35S"
            },
            {
                "title": "Highway to Hell ACDC cover by 1000 musicians",
                "description": "Highway to Hell ACDC cover by 1000 musicians",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/dL0rxCO-jtU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=dL0rxCO-jtU",
                "duration": "PT3M32S"
            },
            {
                "title": "Rap Fan AC/DC FIRST REACTION (If You Want Blood, Thunderstruck, Back In Black)",
                "description": "Enjoy as a Rap/Hip Hop fan gives my First Reaction/First Time Listening to AC/DC\nThis is my reaction to the songs If You Want Blood, Thunderstruck and Back In Black\n\n🔥BECOME A PATREON TO SUPPORT & GET YOUR MUSIC REQUEST IN FIRST!!!🔥\nhttps://www.patreon.com/jythapharaoh\n\nIf You Want Blood: https://www.youtube.com/watch?v=6EWqTym2cQU\nThunderstruck: https://www.youtube.com/watch?v=v2AC41dglnM\nBack In Black: https://www.youtube.com/watch?v=pAgnJDJN4VA\n\n🗣️Join Tha Pharaoh Family Discord!🗣️\nhttps://discord.gg/ZaX7N8Q\n\n🛎 Subscribe to my channel to join the family & hit the notification bell so you never miss an upload! » http://lnnk.in/tGK for new videos!\n\n🚨Follow Me On Twitter!🚨\nhttps://twitter.com/jythapharaoh\n\n💸Paypal Donations💸\nHelp Me Keep The REAL MUSIC Flowing Weekly!!!\nhttp://paypal.me/jyshawtySKN\n\nBUSINESS INQUIRIES/SONG PROMOTIONS »  jyshawtty@gmail.com\n\nNew Videos Every Week!!!📝",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/vcd97e4vfh0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=vcd97e4vfh0",
                "duration": "PT25M11S"
            },
            {
                "title": "Ivett Toth brings AC/DC to ice - Back in Black + Thunderstruck | Music Monday",
                "description": "The Hungarian figure skater, Ivett Toth, from Budapest went rock and roll during PyeongChang 2018.\n\nAre you missing your favorite performance from an Olympic Opening or Closing Ceremony? Just let us know in the comments and we will add them to a future #MusicMonday!\n\nSubscribe to the official Olympic channel here: http://bit.ly/1dn6AV5\n\nVisit the Olympic Channel, where the Games never end: http://www.olympicchannel.com",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ZYzYr6zpPG4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ZYzYr6zpPG4",
                "duration": "PT2M59S"
            },
            {
                "title": "Sonner comme AC/DC ou... la quête des MARSHALL PLEXI poussés à 11 !",
                "description": "Julien Bitoun et Alexandre Ernandez s'attaquent à un monument du Rock, AC/DC ! C'est le groupe préféré de Julien, il en a même fait un groupe cover... si ce n'est plusieurs ! Mais on le sait très bien, vous aussi vous avez été bercés par AC/DC et vous pensez tout autant que nous connaitre tous les titres et riffs indémodables d'Angus et Malcolm Young. Il est donc l'heure d'apprendre à maitriser le son et la technique d'AC/DC ! Pour information cette vidéo a été tournée en Juin 2020, sans savoir qu'ils allaient de nouveau se produire ! Faites comme nous, installez-vous confortablement avec votre boisson préférée et profitez de ce moment pour vous faire plaisir !\n\nPour rester connecté et ne rien manquer : \n1) N'oubliez pas de vous abonner la chaîne Palf : https://rebrand.ly/d5bcb\n2) Puis d'activer les notifications en cliquant sur la cloche \n3) Visitez notre site internet et abonnez-vous à la Palf-letter : https://rebrand.ly/w3rzfxl\n\nLiens :\nSolo Dallas - Schaeffer : https://rebrand.ly/0ad74q\nEQD - Arrows : https://rebrand.ly/3b2c9\nJHS Pedals - Charlie Brown : https://rebrand.ly/6d5d8w\nAnasounds - High Voltage : https://rebrand.ly/5b9cfw\nCatalinbread - Talisman : https://rebrand.ly/0740cq\n\nTemps :\n00:00 Intro\n00:15 Le défi\n01:29 L'histoire d'AC/DC\n03:26 Le test\n05:15 La rythmique Malcolm Young\n11:00 Jeu de malcolm\n15:31 Le solo Angus Young\n19:36 La cerise sur le gâteau\n24:22 Arrows VS Solodallas\n25:37 Jeu d'Angus\n28:52 Toutes les pédales\n30:00 Conclu\n31:55 Solo final",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/L_5fjJDUKDA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=L_5fjJDUKDA",
                "duration": "PT32M42S"
            },
            {
                "title": "AC/DC: Dirty Deeds (FULL MOVIE)",
                "description": "AC/DC's incredible career has spanned almost 4 decades, with over 200 million records sold worldwide to date and consistently sold old concerts they are one of the highest grossing bands of all time.  Formed in Australia in 1973 by brothers Angus and Malcolm Young, AC/DC are considered pioneers of heavy metal. As popular today as they have ever been their sound is instantly recognizable the world over and has helped define and propel the band from truly humble beginnings to worldwide superstardom. Using archive footage and interviews with Angus Young and former manager Michael Browning (1974-1979) this fascinating programme takes you on a journey from their early days in Australia with Bon Scott (9 July 1946 - 19 February 1980) to Brian Johnson joining the band and beyond. Also featured is music footage of some of the bands greatest tracks including Back in Black, Hells Bells, Thunderstruck, Highway to Hell, Jailbreak, Hard as a Rock, T.N.T and It's a Long Way to the Top (If You Wanna Rock 'n' Roll). AC/DC are without doubt one of the all time greatest rock bands and this is their incredible story.\n\n#acdc #rock #documentaries #freefilm #music\n\nConnect with 1091 Pictures\nWebsite: http://www.1091pictures.com\nWatch more movies on demand: youtube.com/c/1091ONDEMAND \nFollow Us on Facebook: https://www.facebook.com/1091pictures\nFollow Us on Instagram: https://www.instagram.com/1091media\n\nPlease subscribe!",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/6kDHkez70LM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=6kDHkez70LM",
                "duration": "PT1H5M16S"
            },
            {
                "title": "AC/DC - Whole Lotta Rosie (from Countdown, 1979)",
                "description": "\"Whole Lotta Rosie\" by AC/DC, Live from Countdown, 1979\nListen to AC/DC: https://ACDC.lnk.to/listenYD\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFootage Licensed By Reelin’ In The Years Productions (http://www.reelinintheyears.com)\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nYou're a whole lotta woman\nA whole lotta woman\nWhole lotta Rosie\nWhole lotta Rosie\nWhole lotta Rosie\nAnd you're a whole lotta woman\n\n#ACDC #WholeLottaRosie #Countdown",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/4Ucrw-z4ZH4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=4Ucrw-z4ZH4",
                "duration": "PT5M3S"
            },
            {
                "title": "AC / DC ~ Thunderstruck   - A Full Cover By \"Autumn Rain\"",
                "description": "",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/wyko2GKFzjw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=wyko2GKFzjw",
                "duration": "PT5M2S"
            },
            {
                "title": "Deconstruyendo a AC/DC (Back In Black + Thunderstruck) | ShaunTrack",
                "description": "Bienvenidos a mi sección de \"vídeo-análisis\" musical. O, como he bautizado: Shaun-álisis :)\n\nHoy vamos a repasar dos temas de los míticos AC/DC en directo. Estos son \"Back In Black\" y \"Thunderstruck\".\n\nPuedes escucharlos aquí: https://open.spotify.com/album/1dmBXO2zmCbsf8qAicqbs0?si=IWScYDqlS2CWjHOSC7oS_Q\n\nMi nombre es Shaun y llevo más de media vida dedicándome a la música. Soy músico multinstrumentista, productor, compositor y licenciado en Magisterio de Educación Musical. \n\nSi te ha gustado este análisis/cover suscríbete para ver más.\n\n-------------------------------------------------------------------------------------------------\n\nLa mayoría de mis vídeos son desmonetizados por Copyright. Si quieres ayudarme a seguir creando contenido en YouTube te invito a apoyarme en PATREON: \n\nhttps://www.patreon.com/shauntrack\n\n--------------------------------------------------------------------------------------------------\n\nEscucha mi música en SPOTIFY: https://spoti.fi/2Q9y5wb\n\n--------------------------------------------------------------------------------------------------\n\nMis REDES SOCIALES:\n\nTwitter: https://twitter.com/Shauntrack\nFacebook: https://www.facebook.com/shauntrack\nInstagram: https://www.instagram.com/shauntrack\n\n--------------------------------------------------------------------------------------------------\n\nCONTACTO (Solo profesional, no leo ningún mail recomendado o pidiendo canciones): shauntrackmusic@gmail.com",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/tKiCkqr8pNQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=tKiCkqr8pNQ",
                "duration": "PT23M24S"
            },
            {
                "title": "Brian Johnson: A Message For The Italian Fans | AC/DC Italia",
                "description": "Brian Johnson: A Message For The Italian Fans\nVisit https://www.acdc-italia.com \n© acdc-italia.com\n\nBrian Johnson: Un messaggio per i fan italiani\nVisita https://www.acdc-italia.com \n© acdc-italia.com",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/y6RfAo96LTU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=y6RfAo96LTU",
                "duration": "PT2M23S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Live at Donington, 8/17/91)",
                "description": "\"You Shook Me All Night Long\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nAnd you shook me all night long\nYeah you shook me all night long\nKnocked me out I said you\nShook me all night long\nYou had me shaking and you\nShook me all night long\nYeah you shook me\nWhen you took me\n\n#ACDC #YouShookMeAllNightLong #LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/I6iOVXOBULI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=I6iOVXOBULI",
                "duration": "PT3M38S"
            },
            {
                "title": "AC/DC - Play Ball (Audio)",
                "description": "http://smarturl.it/RockOrBust_iTunes\n\nThe new album “Rock Or Bust” available December 2. Pre-order now and get an instant download of “Play Ball.”\n\nMusic video by AC/DC performing Play Ball. (C) 2014 Leidseplein Presse, B.V.\n\n#ACDC #PlayBall #vevo #rockandroll #vevoofficial #audio",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/cIE8F_OL_Ds/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=cIE8F_OL_Ds",
                "duration": "PT2M49S"
            },
            {
                "title": "SULLE WIJAYA - HIGH WAY TO HELL (AC/DC) - Audition 3 - X Factor Indonesia 2015",
                "description": "Ada penyanyi café yang punya lagu jagoan untuk memenangkan hati juri. Sulle Wijaya yang berusia 38 tahun ini mengikuti X Factor Indonesia karena permintaan sang istri yang sedang hamil 8 bulan. Yang menjadi inspirasinya adalah kakeknya, White Snake Band dan Gun N Roses. \n\nSelamat datang di X Factor Indonesia, sebuah kompetisi menyanyi terbesar yang menjadi magnet untuk siapa saja yang memiliki Factor X. \n\nHari baru audisi, para kontestan siap untuk menggoncangkan panggung audisi dengan semangatnya. Riuh semangat kontestan terbawa sampai ke dalam ruangan audisi. Juri pun ikut semangat, siap menilai penampilan para kontestan.\n\nIT'S TIME TO FACE THE MUSIC!!!\n\nSubscribe now for more X Factor Indonesia videos: http://youtube.com/XFactorIndonesiaFM\n\nLike X Factor Indonesia on Facebook: http://www.facebook.com/XFactorIndonesia\n\nFollow X Factor Indonesia on Twitter: http://twitter.com/XFactorID and Google +: https://plus.google.com/+XFactorIndonesiaFM\n\n\nVisit our official site: http://www.xfactorindonesia.com",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/8kzyQ1Uebms/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=8kzyQ1Uebms",
                "duration": "PT6M3S"
            },
            {
                "title": "AC/DC - Show Business (Filmed June 16, 1975)",
                "description": "Music video by AC/DC performing Show Business. (C) 1976 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/dvFxTpnxk8s/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=dvFxTpnxk8s",
                "duration": "PT4M30S"
            },
            {
                "title": "AC/DC - Play Ball (Official Video)",
                "description": "New album Rock Or Bust is available now. Get your copy: \n\nAmazon: http://smarturl.it/RockOrBust_amz\niTunes: http://smarturl.it/RockOrBust_iTunes\nGoogle Play: http://smarturl.it/RockOrBust_GP",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/TT8e7i0ccLQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=TT8e7i0ccLQ",
                "duration": "PT2M49S"
            },
            {
                "title": "47Ter & Waxx - AC/DC : Hells Bells Remix (Back In Black 40th anniversary)",
                "description": "😈 L'album Back in Black d'AC/DC fête ses 40 ans ! \nhttps://legacyfrance.lnk.to/BlackAY\n\n💿 « L’adresse » maintenant dispo !\n→ https://bitd.be/47ter-ladresse\n\nRéalisation : Théo Lafotto\nMontage & effets : Wissiz\n\n47Ter\nFacebook : https://www.facebook.com/47Ter\nTwitter : https://twitter.com/off47ter\nInstagram : https://www.instagram.com/47ter\n\nWaxx \nYouTube : https://youtu.be/xRsMO8Sa3ZI\nFacebook : https://www.facebook.com/BenjaminWaxx/\nTwitter : https://twitter.com/waxxgyver\nInstagram : https://www.instagram.com/waxx/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/RJflJk1_K5I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=RJflJk1_K5I",
                "duration": "PT2M38S"
            },
            {
                "title": "AC/DC  The Tragic Death of Malcolm Young",
                "description": "Following the band’s final show in Spain the group took almost 4 years off releasing a stop gap record in between which was their  2012 live album from River Plate stadium in Argentina, that happened in 2009.  In 2012 frontman Brian Johnson would give an interview where he hinted that health problems were hampering production on the group’s next record revealing ‘One of the boys is a little sick & I can’t say anything, but he’s getting better. He’s doing wonderful Full recovery fully expected he’d say. And the band would finally reassemble to record their 2014 follow up Rock or Bust, but in April of 2014 a few weeks before they were to hit the studio word leaked that Malcolm Young was done with the band as his health had deteriorated to the point that he wasn’t able to continue. And Frontman Brian Johnson provided an update without naming names saying one of the boys has a debilitating illness but i don’t want to say too much about it. He’s very proud and private, a wonderful chap we’ve been pals for 35 years and I look up to him very much. \n\nBut the same day AC/DC put out their own statement confirming that Malcolm was as they put it taking a break from the band tjat he helped form 4 decades prior. The statement would also put to rest rumors that AC/DC was retiring as the statement would read that the group would move forward and continue to write and record new music.  While the band’s latest record at the time 2014’s Rock or Bust wouldn’t feature Malcolm’s signature guitar playing he did co-write every song on the album. Filling in for Malcolm was his Nephew Stevie Young who had previously replaced Malcolm in 1988 while he went into treatment for his alcohol addiction. \n\nJohnson would later admit that Malcolm's absence was felt in the studio saying We missed Malcolm obviously Stevie was magnificent in his stead but when you’re recording with this thing hanging over you and your workmate isn’t well. It’s difficult.  I’m sure he was rooting for us the whole time we were in Canada he’d say\n\nDrummer Phil Rudd would run into his own problems and while he would play on the album Rock or Bust he wouldn’t tour with the band as he would be  replaced by prior drummer Chris Slade. Rudd would suffer from legal troubles in 2014 when he was arrested for drug possession and attempting to hire a hitman. By 2016 the band would run into more trouble as with only 22 shows remaining as part of the Rock or Bust tour frontman Brian Johnson would suffer hearing issues and need to stop touring immediately.  The band enlisted the help of Guns N’ Roses frontman Axl Rose who did an incredible job filling in for Brian. Following the end of the Rock or Bust tour in late 2016 the AC/DC camp went silent for about a year. Then on November 18, 2017 the news a lot of fans people were expecting finally happened As Malcolm Young would die from the effects of Dementia at the young age of 64. The music world would respond with an outpouring of support with Guns N’ Roses guitarist Slash posting on social media Monumentally sad day in rock n’ roll and Guns N’ Roses who were on tour at the time would dedicate ‘Knockin’ On Heaven’s Door’ to Malcolm’s memory following the news of his passing. While guitarist Eddie Van Halen put out a statement saying he was the heart and soul of AC/DC. \n\nBut perhaps the most touching tribute came from his bandmate Brian Johnson who put out a statement at the time saying I’m saddened by the passing of my friend Malcolm Young. I can’t believe he’s gone. We had such great times on the road.  I was always aware he was such a genius on guitar. His riffs have become legends as has he. I send my sympathies to his wife Linda and his children Cara, Ross and Angus who will all be devastated as we all are.  He never liked the celebrity side of fame. He was too humble for that. He was the man who created AC/DC because he said there was no rock n’ roll out there.  I’m proud to have known him and call him a friend and I’m going to miss him so much. I salute you Malcolm Young he’d say.\n\nAnd by 2018 rumors had circulated that the band was back at work in the studio in Vancouver, Canada.  Photographs of the band at a studio and local hotel only added fuel to the fire and a recent interview with the band’s longtime engineer only confirmed that the band was up to something. Jam Magazine would also report that several years ago that AC/DC new material was using old  guitar parts that were  recorded by Malcolm With the magazine claiming 5 years prior to the black ice LP at that time Angus and malcolm were living together where literally they wrote 100’s of songs and many were been recorded and have stashed away and they further elaborated saying  Angus selected the best tracks for those recordings from those  records and would used them as the songs foundations that the rest of the song would build . And just last year Dee Snider confirmed the existence of new material posting on Twitter",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/HD7Xupa4i-4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=HD7Xupa4i-4",
                "duration": "PT6M32S"
            },
            {
                "title": "AC/DC - That's The Way I Wanna Rock 'N' Roll (Official Video)",
                "description": "Music video by AC/DC performing That's The Way I Wanna Rock 'N' Roll. (C) 1989 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/3zy2pBoTuOQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=3zy2pBoTuOQ",
                "duration": "PT3M44S"
            },
            {
                "title": "AC/DC - Bedlam in Belgium (Capital Center, Landover MD, December 1983)",
                "description": "Music video by AC/DC performing Bedlam In Belgium. (Capital Center, December 1983)(C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/C5tBuPTn3Mk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=C5tBuPTn3Mk",
                "duration": "PT3M28S"
            },
            {
                "title": "2CELLOS - Thunderstruck [OFFICIAL VIDEO]",
                "description": "http://www.facebook.com/2Cellos\nhttp://www.instagram.com/2cellosofficial \n\nFrom our new album Celloverse - out now!\niTunes: http://smarturl.it/celloverse\nAmazon: http://smarturl.it/celloverse-amz\n\n2CELLOS Luka Sulic and Stjepan Hauser playing their arrangement of Thunderstruck by AC/DC BaRock style!\n\nVideo by Kristijan Burlovic\nStory by 2CELLOS\nEditing: Ivan Stifanic and 2CELLOS\nTechnical support: MedVid produkcija\n\nProduced, mixed and mastered by 2CELLOS and Filip Vidovic (Morris Studio, Zagreb)\nAudio master for the video by Miro Vidovic\n\nSpecial thanks to Friends of Giostra Society, Poreč, Croatia",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/uT3SBzmDxGk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=uT3SBzmDxGk",
                "duration": "PT4M59S"
            },
            {
                "title": "AC/DC - Opening & Rock or Bust @ Stade de France 23-05-2015",
                "description": "AC/DC - Opening & Rock or Bust @ Stade de France 23-05-2015\n\nAprès plus de quarante ans de carrière, le groupe de hard rock joue ce soir et mardi au Stade de France. Premier des deux concerts parisiens du groupe.\n\nhttps://www.facebook.com/acdc",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/tuh4lg5gWhk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=tuh4lg5gWhk",
                "duration": "PT5M13S"
            },
            {
                "title": "ACDC",
                "description": "Provided to YouTube by eMuzyka\n\nACDC · Abradab · Rahim · Kleszcz\n\nARKanoid\n\n℗ 2020 MaxFloRec\n\nReleased on: 2020-11-13\n\nComposer: Wiktor Pańczyk\nLyricist: Marcin Marten\nLyricist: Sebastian Salbert\nLyricist: Łukasz Stępień\n\nAuto-generated by YouTube.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/juqmGxJ-XRY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=juqmGxJ-XRY",
                "duration": "PT3M18S"
            },
            {
                "title": "AC/DC - Back In Black (Capital Center, Landover MD, December 1981)",
                "description": "Music video by AC/DC performing Back In Black. (C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/HQywr-PBR_o/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=HQywr-PBR_o",
                "duration": "PT3M45S"
            },
            {
                "title": "Rock legends AC/DC say new album is a tribute to the late Malcolm Young | 60 Minutes Australia",
                "description": "Subscribe here: http://9Soci.al/chmP50wA97J Full Episodes: https://9now.app.link/9u3x3Fn4mbb | AC/DC (2020)\n\nRock ’n’ roll suffered an enormous hit a few years back when AC/DC turned down the volume and quietly faded into the background. But there was little choice. Co-founder Malcolm Young had lost his long battle with illness and other members of the group were plagued by their own demons. For a band that had been so phenomenally successful, not to mention phenomenally loud, for almost 50 years, the silence without AC/DC was deafening. But as Allison Langdon reveals in an exclusive interview with Angus Young and Brian Johnson, there’s now been an unexpected yet incredible musical miracle which proves it is possible to do U-turns on the highway to hell.\n\nWATCH more of 60 Minutes Australia: https://www.60minutes.com.au \nLIKE 60 Minutes Australia on Facebook: https://www.facebook.com/60Minutes9 \nFOLLOW 60 Minutes Australia on Twitter: https://twitter.com/60Mins \nFOLLOW 60 Minutes Australia on Instagram: https://www.instagram.com/60minutes9\n\nFor forty years, 60 Minutes have been telling Australians the world’s greatest stories. Tales that changed history, our nation and our lives. Reporters Liz Hayes, Tom Steinfort, Tara Brown, Liam Bartlett and Sarah Abo look past the headlines because there is always a bigger picture. Sundays are for 60 Minutes.\n\n#60MinutesAustralia",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/-CjX_cnYitc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=-CjX_cnYitc",
                "duration": "PT12M10S"
            },
            {
                "title": "AC/DC - \"POWER UP\" - analisado por Gastão Moreira",
                "description": "Gastão Moreira fala sobre o recém lançado 17º disco do AC⚡️ DC: POWER UP! Angus & cia mantiveram a integridade musical do AC/DC com um disco sólido e para cima. \nMalcolm Young recebeu um tributo à altura!\n#sonymusic / #sonymusicbrasil\n\nSeja membro do KAZAGASTÃO:\nhttps://www.youtube.com/channel/UCA4u8p5rYvuL2-72cAUhXKA/join\n\nAcompanhe o KAZAGASTÃO nas redes:\nAPOIA-SE:  https://apoia.se/kazagastao\nInstagram: https://www.instagram.com/kazagastao/\nFacebook: https://www.facebook.com/kazagastao/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/T-c6fDPDVQI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=T-c6fDPDVQI",
                "duration": "PT3M59S"
            },
            {
                "title": "#PWRUP - A MESSAGE FROM BRIAN",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/IhmMbyEB1Kg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=IhmMbyEB1Kg",
                "duration": "PT3M23S"
            },
            {
                "title": "AC/DC - Beating Around the Bush (Audio)",
                "description": "\"Beating Around The Bush\" by AC/DC\nListen to AC/DC: https://ACDC.lnk.to/listenYD\n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nBaby I got my eye on you\n'Cause you do all the things I want you to\nStop your cryin' and dry your tears\nI ain't that wet behind the ears\nYou can throw me lefts\nAnd you can throw me rights\nBut where was you last night\nBeating around the bush\n\n#ACDC #GetItHot #Rock",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/c4UGLm2QjC8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=c4UGLm2QjC8",
                "duration": "PT3M58S"
            },
            {
                "title": "AC/DC - Angus!",
                "description": "Official Site: http://www.acdc.com\nTour: http://www.acdc.com/Tour\nFacebook: https://www.facebook.com/acdc/\nTwitter: https://twitter.com/acdc\nInstagram: https://www.instagram.com/acdc/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/sfN2Hw5Cd3U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=sfN2Hw5Cd3U",
                "duration": "PT33S"
            },
            {
                "title": "AC/DC - Full Concert - 07/21/79 - Oakland Coliseum Stadium (OFFICIAL)",
                "description": "AC/DC - Full Concert\nRecorded Live: 7/21/1979 - Oakland Coliseum Stadium (Oakland, CA)\n\nMore AC/DC at Music Vault: http://www.musicvault.com\nSubscribe to Music Vault: http://goo.gl/DUzpUF\n\nSetlist:\n0:00:00 - Live Wire\n0:05:57 - Problem Child\n0:10:36 - Sin City\n0:15:58 - Highway To Hell\n0:19:43 - Bad Boy Boogie\n0:27:47 - The Jack\n0:33:36 - Rocker (Incomplete)\n0:44:44 - Dog Eat Dog",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/epSe9V5ngeo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=epSe9V5ngeo",
                "duration": "PT51M16S"
            },
            {
                "title": "AC/DC - Highway to Hell (Live at Donington, 8/17/91)",
                "description": "\"Highway to Hell\" by AC/DC \nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nI’m on the highway to hell\nOn the highway to hell\nHighway to hell\nI’m on the highway to hell\n\n#ACDC #HighwaytoHell #OfficialVideo",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/oLBfdyJ3cpw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=oLBfdyJ3cpw",
                "duration": "PT4M19S"
            },
            {
                "title": "AC/DC - Shoot to Thrill (Live at Houston Summit, October 1983)",
                "description": "AC/DC performing Shoot To Thrill. (Live, Houston Summit 1983)\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\nAll you women who want a man of the street\nDon't know which way you wanna turn\nJust keep coming\nAnd put your hand out to me\nCause I'm the one who's gonna make you burn\nI'm gonna take you down\nDown down down\nSo don't you fool around\nI'm gonna pull it pull it\nPull the trigger\nShoot to thrill play to kill\nToo many women too many pills, yeah\nShoot to thrill play to kill\nI got my gun at the ready gonna fire at will\n\n#ACDC #Rock #ShootToThrill",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Dgsjodya-_c/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Dgsjodya-_c",
                "duration": "PT5M21S"
            },
            {
                "title": "ACDC   POWER UP 2020",
                "description": "«Realize» 3:37\n«Rejection» 4:06\n«Shot in the Dark» 3:06\n«Through the Mists of Time» 3:32\n«Kick You When You're Down» 3:10\n«Witch's Spell» 3:42 \n«Demon Fire» 3:30\n«Wild Reputation» 2:54\n«No Man's Land» 3:39\n«Systems Down» 3:12\n«Money Shot» 3:05\n«Code Red» 3:31\n\nBrian Johnson – Voz\nAngus Young – Guitarra líder\nStevie Young – Guitarra Rítmica, Coros\nCliff Williams – Bajo, Coros\nPhil Rudd – Batería, Percusiones",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/STykHSdx4_U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=STykHSdx4_U",
                "duration": "PT41M9S"
            },
            {
                "title": "AC/DC - You Shook Me All Night Long (Plaza De Toros De Las Ventas, Ju...",
                "description": "\"You Shook Me All Night Long\" by AC/DC, from No Bull\nListen to AC/DC: https://ACDC.lnk.to/listenYD\n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nTwitter: https://ACDC.lnk.to/followTI\nInstagram: https://ACDC.lnk.to/followII\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\n'Cause the walls start shaking\nThe earth was quaking\nMy mind was aching\nAnd we were making it and you\nShook me all night long\nYeah you shook me all night long\n\n#ACDC #Rock #YouShookMeAllNightLong",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/kMPyentJIh4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=kMPyentJIh4",
                "duration": "PT3M57S"
            },
            {
                "title": "AC/DC - Ballbreaker (Entertainment Center, Sydney, November 1996)",
                "description": "Music video by AC/DC performing Ballbreaker. (C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/vtw3IPYTfmA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=vtw3IPYTfmA",
                "duration": "PT4M25S"
            },
            {
                "title": "Chris talks about playing drums in AC/DC ⚡️",
                "description": "Official Site: http://www.acdc.com\nTour: http://www.acdc.com/Tour\nFacebook: https://www.facebook.com/acdc/\nTwitter: https://twitter.com/acdc\nInstagram: https://www.instagram.com/acdc/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/03tr3_2TNKc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=03tr3_2TNKc",
                "duration": "PT2M5S"
            },
            {
                "title": "AC/DC - Guns for Hire (Joe Louis Arena, Detroit MI, November 1983)",
                "description": "Music video by AC/DC performing Guns For Hire. (Joe Louis Arena, Detroit 1983) (C) 2007 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/tfK2eDm13IY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=tfK2eDm13IY",
                "duration": "PT5M49S"
            },
            {
                "title": "AC / DC ►  TNT (((Live '77 At The Hippodrome))) ★ HD 720p.",
                "description": "AC/DC, fronted by Bon Scott, perform live at the Golders Green Hippodrome in 1977. ★Angus Young, then just 22 years old,★\n\nconcert was held October 27, 1977 on the stage of The Hippodrome Golders Green, London.\nShown on TV (BBC) October 29, 1977.\n\nAC / DC:\n►Bon Scott (vocals)\n►Angus Young (lead guitar)\n►Malcolm Young (rhythm guitar)\n►Cliff Williams (bass)\n►Phil Rudd (drums)",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/JJfT0n5zvZg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=JJfT0n5zvZg",
                "duration": "PT4M35S"
            },
            {
                "title": "AC/DC - Kick You When You're Down (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #KICKYOUWHENYOUREDOWN",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/ksqTQ33ohWM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=ksqTQ33ohWM",
                "duration": "PT3M12S"
            },
            {
                "title": "AC/DC - Happy New Year! - Have A Drink On Me",
                "description": "Happy New Year! ⚡️\nwww.acdc.com/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/D_IrXsEHZxM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=D_IrXsEHZxM",
                "duration": "PT3M59S"
            },
            {
                "title": "AC/DC - Moneytalks (Live at Donington, 8/17/91)",
                "description": "\"Moneytalks\" by AC/DC from Live at Donington, 8/17/91\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\n\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\nChorus:\nCome on, come on, lovin' for the money\nCome on, come on, listen to the money talk\nCome on, come on, lovin' for the money\nCome on, come on, listen to the money talk\n\n#ACDC #Moneytalks ##LiveatDonington",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/LBYZoc9lnvE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=LBYZoc9lnvE",
                "duration": "PT3M53S"
            },
            {
                "title": "AC/DC - For Those About To Rock (We Salute You) (Official Video)",
                "description": "Music video by AC/DC performing For Those About To Rock (We Salute You). (C) 1984 J. Albert & Son (Pty.) Ltd.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/8fPf6L0XNvM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=8fPf6L0XNvM",
                "duration": "PT6M19S"
            },
            {
                "title": "Análisis de audio: AC/DC.",
                "description": "Cube analiza el set up de Angus y Malcom Young y Pepo toca algunos ejemplos para entre ambos tratar de explicar el increíble audio de AC/DC.\n\n00:00 Intro.\n00:15 \"You shoock me all night long\", AC/DC.\n04:10 Set up Angus Young.\n14:17  \"Hard as a rock\", AC/DC.\n16:50 Set up Malcom Young.\n23:10 \"Stiff upper lip\", AC/DC.\n23:50 Conclusión.\n\nGracias a Familyarg por la ropa: https://www.familyarg.com, https://www.instagram.com/familyarg. \n\nSi te gusta lo que hacemos y querés darnos una mano, podés ingresar a este link: https://linktr.ee/doblebobina.\n\nSino con suscribirte ya eres bienvenide. \nEn realidad, de cualquier manera te recibiremos. \n\nRedes:\nDoble Bobina: https://www.instagram.com/doblebobina/\nPablo Martín (Cube Efectos): https://www.instagram.com/cube_efectos_/\nPepo San Martín: https://www.instagram.com/peposanmartin/\n                              https://www.instagram.com/cientificospalo/",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/S2amobWE9F8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=S2amobWE9F8",
                "duration": "PT28M22S"
            },
            {
                "title": "MUSE & Brian Johnson of AC/DC - Back In Black [Reading Festival 2017]",
                "description": "Back In Black, performed by Brian Johnson and Muse at Reading Festival, 2017\n\nIn memory of Malcolm Young, rhythm guitarist for AC/DC and co-writer of Back In Black, one of the greatest rock songs of all time. Rest in peace.\n\nhttp://acdc.com\nhttp://muse.mu",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/XZG8lRU73jc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=XZG8lRU73jc",
                "duration": "PT4M24S"
            },
            {
                "title": "AC/DC W/Axl Rose - (Wells Fargo Center) Philadelphia,Pa 9.20.16 (HD Mulitcam) LAST SHOW OF TOUR!",
                "description": "AC/DC W/Axl Rose - (live) Wells Fargo Center Philadelphia,Pa 9.20.16\n0:40 Rock or Bust \n4:01 Shoot to Thrill\n9:50 Hell Ain't a Bad Place to Be\n14:02 Back in Black\n18:22 Got Some Rock & Roll Thunder\n22:00 Dirty Deeds Done Dirt Cheap\n26:48 Rock 'n' Roll Damnation\n30:35 Thunderstruck\n36:01 High Voltage\n42:49 Rock 'n' Roll Train\n47:04 Hells Bells\n53:17 Given the Dog a Bone\n57:16 If You Want Blood (You've Got It)\n1:02:33 Live Wire\n1:08:31 Sin City\n1:14:47 You Shook Me All Night Long\n1:18:51 Shot Down in Flames\n1:22:23 Have a Drink on Me\n1:27:08 T.N.T.\n1:31:16 Whole Lotta Rosie\n1:37:01 Let There Be Rock  \n\nENCORE\n\n1:56:22 Highway to Hell\n2:00:56 Riff Raff\n2:07:05 Problem Child  \n2:11:31 For Those About to Rock (We Salute You)\ncameras: Markitaneight/Jim Powers/Redman/Heartbreak Kid\naudio: Tapeheadtoo\nediting: Silver Stallion",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/TXPYH3JCvuQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=TXPYH3JCvuQ",
                "duration": "PT2H19M36S"
            },
            {
                "title": "Meet the AC/DC Superfan Who Unlocked Angus Young’s Back in Black Guitar Tone",
                "description": "You’d be hard-pressed to find a bigger AC/DC fan than Fil Olivieri. Growing up in Italy in the late ’70s, Olivieri heard If You Want Blood, You’ve Got It in a record store. Transfixed by the sound of Angus Young’s guitar, he begged his mother to buy him Back in Black on cassette. He would play the tape on repeat, falling asleep while his Walkman blared riff after riff through tiny earphones. “My brain was flashed,” Olivieri recalls.\n\nSubscribe here for more!\nhttps://bit.ly/2RZJXTc\n\nGet more of Consequence of Sound\nFacebook: https://bit.ly/2QORClQ\nTwitter: https://bit.ly/2RS5g8Z",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/aN6MyssBFRI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=aN6MyssBFRI",
                "duration": "PT8M27S"
            },
            {
                "title": "AC/DC Thunderstruck (live) Reaction",
                "description": "Endeavor reacts to the concert video of AC/DC performing Thunderstruck at the River Plate stadium in Buenos Aires, Argentina. \nOriginal video can be found here: \nhttps://www.youtube.com/watch?v=n_GFN3a0yj0",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/UtyEh1wJGIw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=UtyEh1wJGIw",
                "duration": "PT7M30S"
            },
            {
                "title": "AC/DC - Through The Mists of Time - UnOfficial Video",
                "description": "A FAN-MADE TRIBUTE TO THE GREATEST BAND OF ALL TIME.  THROUGH THE MISTS OF TIME CELEBRATES 40+ YEARS OF AC/DC.\n\nNEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #THROUGHTHEMISTSOFTIME",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/lY6XMfj9T8M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=lY6XMfj9T8M",
                "duration": "PT3M31S"
            },
            {
                "title": "AC/DC fans.net House Band: Realize",
                "description": "Full band cover of \"Realize\", from AC/DC's \"Power Up\" album, featuring musicians from Argentina, Chile, Canada, USA and UK.\n\nLead Vocals: Ivan Gac\nBacking Vocals: Chris Longo, Ivan Gac & Matías Fraga\nLead Guitar: Matías Fraga\nRhythm Guitar: Ben Lyons\nBass: Alex MacDonald\nDrums: Chris Longo\n\nAudio mixed by Matías Fraga\nVideo produced by Andrea Gentili\n\nAll visual content belongs to the respective members of the ACDCfans.net House Band.\n\nThis video should not be copied, downloaded, or modified by anyone.\n\nLike us on Facebook: https://www.facebook.com/ACDCHouseBand/\n\n#acdc #PWRUP #powerup #realize",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Pk-lSGIX6Yw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Pk-lSGIX6Yw",
                "duration": "PT3M38S"
            },
            {
                "title": "EL MOTIVO por la que ANGUS YOUNG de ACDC se viste de COLEGIAL",
                "description": "🎸 ¡Suscríbete para más vídeos! https://www.guitarraviva.com/yt\n🎓  Mis cursos y tutoriales: https://www.guitarraviva.com\n👉 Equipo y compras recomendadas:  https://www.guitarraviva.com/equipo \n➡️ Historia de la GIbson SG: https://youtu.be/K7qH2Km6-ec\nMuchas de las grandes estrellas de la música han pasado a la historia, además de por su talento, por algún elemento que los hace inconfundibles: El sombrero de Slash, el pie de micro de Freddie Mercury, la Red Special de Brian May… o el traje de colegial de Angus Young. Pero, ¿por qué el guitarrista de AC/DC se empeña en llevar este uniforme en sus conciertos? ¿De dónde le viene esta manía y por qué lo sigue haciendo a sus 65 años? ¿Siempre se ha vestido así? Si quieres saber la respuesta a este misterio ya sabes, quédate, y ¡vamos a ello!\n\n#ACDC #AngusYoung #GibsonSG #Guitarras",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/g9wTRDvxhEc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=g9wTRDvxhEc",
                "duration": "PT9M7S"
            },
            {
                "title": "Trump Rocks - Dirty Deeds Done Dirt Cheap 2020 (AC/DC)",
                "description": "Still alive.\n\n#trumprocks #acdc #DirtyDeeds",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/LxG9zzFisUo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=LxG9zzFisUo",
                "duration": "PT2M12S"
            },
            {
                "title": "AC/DC - DEMON FIRE (TRAILER)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW ACDC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\nDirected and Animated by Ben Ib\n\n#ACDC #PWRUP #DEMONFIRE",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/n4wefiJnuu0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=n4wefiJnuu0",
                "duration": "PT54S"
            },
            {
                "title": "AC/DC - MISTRESS FOR CHRISTMAS REACTION",
                "description": "Discipline is the bridge between goals and accomplishments \n\nSubscribe to my vlogging channel: https://youtube.com/channel/UCtDwJ4iC-ZjmDLjPuZHR4HA\n\nSUBSCRIBE TO MY GAMING CHANNEL:\nhttps://www.youtube.com/channel/UCjBWouzyEJ8pC8n5kOuhOng\n\nLink to original video: \n\nDONATIONS: http://PayPal.me/thejayyshoww\n\nTO JOIN MY PATREON: https://www.patreon.com/THEJAYYSHOW?f...\n\nMERCH STORE: https://teespring.com/stores/thejayyshow-collection\n\n\nSUPPORT MY BROTHER MUSIC:  ARTIST PAGE:\nhttps://soundcloud.com/heir-the-prophecy\n\nLINK TO ALL OF MY PLAYLISTS:\nhttps://m.youtube.com/channel/UChvrXW...\n \n FOLLOW ALL OF MY SOCIAL MEDIA ❤️\nInstagram: https://www.instagram.com/invites/contact/?i=28njl237807h&utm_content=3h92jsf\n\nSNAPCHAT: https://www.snapchat.com/add/thejayyshow\n\nFACEBOOK: https://www.facebook.com/thejayyshowofficial/\n\nTWITTER: https://mobile.twitter.com/thejayyshow\n\nTIKTOK: https://vm.tiktok.com/K26DwP/\n\nTWITCH: https://twitch.tv/thejayyshow\n\nIF YOU WANT TO SEND ME MAIL:\n\nTHEJAYYSHOW \n4859 West Slauson Ave #683\nLos Angeles, ca 90056\n\nAGE :26 \n\nMake sure you like subscribe and share thanks for watching\n\n*Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for \"fair use\" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended. ALL RIGHTS BELONG TO THEIR RESPECTIVE OWNERS*",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/N7eMZtFbHfg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=N7eMZtFbHfg",
                "duration": "PT7M40S"
            },
            {
                "title": "Classic Rock 📻 ACDC, Bon Jovi, Aerosmith, Bon Jovi, Guns N Roses, RHCP, Metallica",
                "description": "Classic Rock 📻 ACDC, Bon Jovi, Aerosmith, Bon Jovi, Guns N Roses, RHCP, Metallica\nClassic Rock 📻 ACDC, Bon Jovi, Aerosmith, Bon Jovi, Guns N Roses, RHCP, Metallica\nClassic Rock 📻 ACDC, Bon Jovi, Aerosmith, Bon Jovi, Guns N Roses, RHCP, Metallica\nhttps://youtu.be/efgeKCeacFU\n\nThanks for watching. If you like video please \"SUBSCRIBE\" - \"LIKE\" - \"SHARE\" -\"COMMENT\"\n© Follow Best Slow Rock Music https://bit.ly/2WLqRFg",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/efgeKCeacFU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=efgeKCeacFU",
                "duration": "PT1H42M52S"
            },
            {
                "title": "AC/DC Should've Hit #1 With This Song | #1 In Our Hearts | Professor of Rock",
                "description": "Keep this Channel Alive! - http://bit.ly/ProfessorofRockVIPFan\n\nSpotify Playlist - https://bit.ly/ACDCPlaylist\n\nPurchase The Albums\nHelp out the Channel by purchasing your albums through our links! As an Amazon Associate I earn from qualifying purchases at no extra cost to you, thank you for your support.\n\nPurchase Here\n\nBack in Black - https://amzn.to/3dSzPGm\n\nT Shirt - https://amzn.to/2UMCoCg\n\nClick here for Premium Content: https://bit.ly/SignUpForPremiumContent\n\n https://bit.ly/Facebook_Professor_of_Rock\n\nhttps://bit.ly/Instagram_Professor_of_Rock\n\n#ACDC #80sRock #RocknRoll\n\n\"You Shook Me All Night Long\" is one of most undeniable jams of all time. It's the ultimate party tune, that creates an uncontrollable urge to rock.  This song and many others by AC/DC is truly the definition of rock and roll. ACDC is a band that truly exemplifies every element of rock.  they are rock and roll personified.  In this video we celebrate this iconic song from the second biggest selling album in the world, Back in Black. With the  irrepressible Angus Young, who detonates a face melting, heart rupturing guitar solo that's become the stuff of legend and although there will only be one Bon Scott, the vocal performance by Brian Johnson on \"You Shook Me All Night Long\" effectively began his legacy as one of the most distinctive rock vocalists of all time.  With an appearance by Jerry Harrison of Talking Heads who relates a hilarious story about the band, this is a must see episode.\n\nHey Music Junkies Professor of Rock always here to celebrate the greatest songs and the greatest artists of all time with the vinyl community.  If you are all about the music, subscribe below also if you want to help us continue to curate the history of these artists and their songs click on our patreon link below ALRIGHT It's time for another episode of #1 in our hearts where we celebrate a song that should've been a number one hit but for various reasons it came up short BUT IN our hearts and in our minds it is number one with a bullet. \n\nThen the roller coaster fell to the band's NAYDEAR in February, 1980, when their beloved & rebellious front man Bon Scott was found dead in the back of a friend's car in London after a heavy night of partying. The official cause of Scott's death was classified as \"alcohol poisoning\" and \"death by misadventure\". The loss of Bon was devastating, and the band seriously contemplated breaking up. They had lost, not only their charismatic front man, but also their primary lyricist over 7 studio albums.     Bon's close friends & family, particularly Bon's father, strongly encouraged the band to find a new lead singer, and forge ahead. Bon's father said it is \"what Bon would've wanted.\" The band decided that they would actively pursue a new singer following Bon's funeral. \n\nThe auditions began to find a replacement for Bon Scott, and there were some notable candidates that vied for the gig, including Noddy Holder from Slade, who reportedly, was offered the job and turned it down. During the auditions, Malcolm & Angus remembered Bon mentioning a singer that he was really impressed with named Brian Johnson who was the front man for a band called Geordie, that he saw perform in London in the mid-70s. \n\nBon told the brothers that he saw this guy named Brian Johnson, and how great he was. Bon described watching Brian writhing on the stage floor, kicking and screaming while the crowd went nuts. Brian Johnson remembered the night when Bon saw him perform very well, because the reason he was on the floor of the stage was not part of the act, it was because he was suffering from a vicious appendicitis attack, and rather than rushing off stage to the hospital like most performers would have done, Johnson kept singing- essentially, waling in agony. \n\nAll of the remaining AC/DC crew, and producer Mutt Lange, wanted Brian to be their new lead singer. To Brian's surprise, they offered him the gig, he happily accepted, and the band made the official announcement on April 1, 1980, that Brian Johnson was the new lead singer of AC/DC. Billboard Breakdown.\n\nThe band's bumpy ride reached its pinnacle in July, 1980, when they released 'Back in Black', a historic LP that not only overtook Highway to Hell as the band's best selling album, it would go on to become the 2nd biggest selling album of all time, selling an estimated 50 million copies around the world- 2nd only to Michael Jackson's Thriller.   With Mutt Lange at the helm the album was meticulously produced.  Mutt Lang's attention to detail and perfectionism is of course the stuff of Legend.  I was interviewing Jerry Harrison who at the time was with Talking Heads recording in the same studio.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/cf3NTNgDQnw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=cf3NTNgDQnw",
                "duration": "PT14M35S"
            },
            {
                "title": "AC/DC - The Story Of Back In Black Episode 4 - Shoot To Thrill",
                "description": "The Story Of Back In Black Episode 4 - Shoot to Thrill\nListen to AC/DC: https://ACDC.lnk.to/listen_YD\nSubscribe to the official AC/DC YouTube channel: https://ACDC.lnk.to/subscribeYD\n\nWatch more AC/DC videos: https://ACDC.lnk.to/listen_YC/youtube\n\nFollow AC/DC:\nFacebook: https://ACDC.lnk.to/followFI\nInstagram: https://ACDC.lnk.to/followII\nTwitter: https://ACDC.lnk.to/followTI\nWebsite: https://ACDC.lnk.to/followWI\nSpotify: https://ACDC.lnk.to/followSI\nYouTube: https://ACDC.lnk.to/subscribeYD\n\n#ACDC #TheStoryOfBackInBlack #ShootToThrill",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/NUpx4pOpOlQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=NUpx4pOpOlQ",
                "duration": "PT2M40S"
            },
            {
                "title": "Thunderstruck - AC/DC; By The Iron Cross",
                "description": "Audio/Video by Andrei Cerbu/Robert Ciubotaru\nThe Smokin' Dudes Records \n\nAndrei Cerbu\n\nPaypal: https://paypal.me/AndreiCerbuGuitar\nPatreon page: https://www.patreon.com/AndreiCerbu\nFan Group: https://www.facebook.com/groups/AndreiC/\nMerch: https://teespring.com/stores/andreis-merch\nMerch: https://www.designbyhumans.com/shop/AndreiC/?\nWebsite: http://andreicerbu.com/\nFacebook page: https://www.facebook.com/AndreiCerbuGuitar/\nInstagram: https://www.instagram.com/andrei.cerbu.guitar/?hl=ro\nTwitter: https://twitter.com/andrei_cerbu\n\nAndreea Munteanu\n\nPaypal: https://www.paypal.me/AndreeaM123\nPatreon: https://www.patreon.com/AndreeaMunteanu\nFacebook: https://www.facebook.com/andreea.munteanu.378?fref=ts\nFacebook group: https://www.facebook.com/groups/267833620603237/\nInstagram: https://www.instagram.com/andreea.munteanu/?hl=ro\nTwitter: https://twitter.com/AndreeaMuntean7\nWebsite: https://andreeamunteanu.com/\n\nMatei Gasner\n\nPaypal: https://www.paypal.com/paypalme/mateialex2020\nFacebook: https://www.facebook.com/matei.alex.50\nInstagram: https://www.instagram.com/matei_clpl/?hl=ro\n\nGeorge Pintilii\n\nPaypal: https://www.paypal.me/PintiliiGeorge\nFacebook: https://www.facebook.com/Georcov\nInstagram: https://www.instagram.com/george.pintilii/\n\n\"Go Away\" album is on:\n\nAmazon: https://www.amazon.de/dp/B082Y832MT/ref=sr_1_17?keywords=go+away&qid=1577994162&sr=8-17\nSpotify: https://open.spotify.com/album/7gN24xSG9hFA6RL0nAgBVw\niTunes: https://music.apple.com/us/album/go-away-ep/1492323397?app=itunes&ign-mpt=uo%3D4\nApple Music: https://music.apple.com/us/album/go-away-ep/1492323397?app=music&ign-mpt=uo%3D4\n\n#TheIronCross #ACDC #AndreiCerbu",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/Sfs7kxE8Guc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=Sfs7kxE8Guc",
                "duration": "PT5M27S"
            },
            {
                "title": "AC/DC - Rock and Roll Ain't Noise Pollution (Plaza De Toros De Las Ventas, July 1996)",
                "description": "Music video by AC/DC performing Rock And Roll Ain't Noise Pollution. (Plaza De Toros)1996, 2008 Leidseplein Presse B.V.",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/THDZMWtubVc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=THDZMWtubVc",
                "duration": "PT5M6S"
            },
            {
                "title": "AC/DC - Shoot to Thrill (Live At River Plate, December 2009)",
                "description": "Music video by AC/DC performing Shoot To Thrill live At River Plate 2009\nListen to AC/DC: https://ACDC.lnk.to/listenYD \n\nSubscribe to AC/DC on YouTube: https://ACDC.lnk.to/subscribeYD\n\n\nFollow AC/DC: \nFacebook: https://ACDC.lnk.to/followFI \nTwitter: https://ACDC.lnk.to/followTI \nInstagram: https://ACDC.lnk.to/followII \nWebsite: https://ACDC.lnk.to/followWI \nSpotify: https://ACDC.lnk.to/followSI \nYouTube: https://ACDC.lnk.to/subscribeYD\n\nLyrics:\nAll you women who want a man of the street\nDon't know which way you wanna turn\nJust keep coming\nAnd put your hand out to me\nCause I'm the one who's gonna make you burn\nI'm gonna take you down\nDown down down\nSo don't you fool around\nI'm gonna pull it pull it\nPull the trigger\nShoot to thrill play to kill\nToo many women too many pills, yeah\nShoot to thrill play to kill\nI got my gun at the ready gonna fire at will\n\n#ACDC #Rock #ShootToThrill",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/VlWgVdrnuhU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=VlWgVdrnuhU",
                "duration": "PT5M44S"
            },
            {
                "title": "AC DC REACTION - ''Highway to Hell'' -  Live At River Plate",
                "description": "Check out our other channel 👉 HypeTrain  https://www.youtube.com/c/HypeTrain-Follow\n\n#Reaction conducted by Kevin & Dave at KeV & DaVe REACTIONS\n\nAC DC REACTION - ''Highway to Hell'' -  Live At River Plate",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/BTyos3AvWis/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=BTyos3AvWis",
                "duration": "PT8M34S"
            },
            {
                "title": "AC/DC - Systems Down (Official Audio)",
                "description": "NEW ALBUM POWER UP OUT NOW: https://acdc.lnk.to/PWRUPID \n\nAmazon Music: https://acdc.lnk.to/PWRUPID/amazonmusic \nApple Music: https://acdc.lnk.to/PWRUPID/applemusic\nDeezer: https://acdc.lnk.to/PWRUPID/deezer\niTunes: https://acdc.lnk.to/PWRUPID/itunes\nSoundcloud: https://acdc.lnk.to/PWRUPID/soundcloud\nSpotify: https://acdc.lnk.to/PWRUPID/spotify\nYouTube Music: https://acdc.lnk.to/PWRUPID/youtubemusic \n\nFOLLOW AC/DC:\nWebsite: https://pwrup.acdc.com \nFacebook: https://www.facebook.com/acdc \nInstagram: https://www.instagram.com/acdc \nTwitter: https://twitter.com/acdc \nTikTok: http://tiktok.com/@acdc\n\n#ACDC #PWRUP #SYSTEMSDOWN",
                "thumbnail": {
                    "url": "https://i.ytimg.com/vi/GpokQ260cIE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "url": "https://www.youtube.com/watch?v=GpokQ260cIE",
                "duration": "PT3M15S"
            }
        ]
    }

    res.send(videos)
})

module.exports = { router }