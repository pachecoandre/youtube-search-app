await new Promise((resolve) => setTimeout(() => {
    resolve({
        watchDuration: 15,
        frequentWords: {
            titleCounts: ['lorem', 'ipsum', 'dolor', 'sit', 'amet'],
            descripCounts: ['enim', 'nostrud', 'commodo', 'sit', 'consequat']
        },
        videos: [{
            title: 'AC/DC',
            description: 'Lorem ipsum dolor',
            thumbnail: 'https://i.ytimg.com/vi/7lCDEYXw3mM/default.jpg',
            duration: '2:30'
        },
        {
            title: 'AC/DC',
            description: 'Lorem ipsum dolor',
            thumbnail: 'https://i.ytimg.com/vi/7lCDEYXw3mM/default.jpg',
            duration: '2:30'
        }]
    })
}, 2000))