/*
    middleware.js must be changed manually
*/

const pageRoutes = {
    'index': {
        'link': '/',
        'navDisplay': 'All',
    },
    // 'account': {
    //     'link': '/account',
    // },
    // 'register': {
    //     'link': '/register',
    // },
    // 'signin': {
    //     'link': '/api/auth/signin?callbackUrl=%2F',
    // },
    // 'signout': {
    //     'link': '/api/auth/signout?callbackUrl=%2F',
    // },

    'projects': {
        'link': '/projects',
        'navDisplay': 'Projects',
        'sublinks': {
            'jackboxWheel': '/jackbox-wheel',
            'spooterfi': '/spooterfi',
            'vvtv': '/videovomit-tv',
            'caw': '/cro-cli-caw',
            'gtk': '/guess-the-killer',
            'gogcomm': '/gogcomm',
            'medTool': '/med-tool',
            'tierator': '/tierator',
            'timeConvCalc': '/time-conversion-calculator',
            'votd': '/voyage-of-the-dead',
            'anw': '/american-ninja-warrior-challenge',
        }
    },

    'purpose': {
        'link': '/purpose',
        'navDisplay': 'Purpose',
    },
    // 'caseStudies': {
    //     'link': '/case-studies',
    //     'navDisplay': 'Case Studies',
    // },
    'resume': {
        'link': '/resume',
        'navDisplay': 'Resume',
    },
    'reviews': {
        'link': '/reviews',
        'navDisplay': 'Reviews',
    },
    'spotlights': {
        'link': '/spotlights',
        'navDisplay': 'Spotlights'
    }
}

export default pageRoutes;