/*
    middleware.js must be changed manually
*/

const pageRoutes = {
    'index': {
        'link': '/',
        'navDisplay': 'All',
    },
    'account': {
        'link': '/account',
    },
    'register': {
        'link': '/register',
    },
    // 'signin': '/api/auth/signin?callbackUrl=%2F',
    // 'signout': '/api/auth/signout?callbackUrl=%2F',
    'purpose': {
        'link': '/purpose',
        'navDisplay': 'Purpose',
    },
    'caseStudies': {
        'link': '/case-studies',
        'navDisplay': 'Case Studies',
    },
    'resume': {
        'link': '/resume',
        'navDisplay': 'Resume',
    },
    'reviews': {
        'link': '/reviews',
        'navDisplay': 'Reviews',
    },

    'projects': {
        'link': '/projects',
        'sublinks': {
            'jackboxWheel': '/jackbox-wheel',
            'spooterfi': '/spooterfi',
            'videovomitTv': '/videovomit-tv',
            'croCliCaw': '/cro-cli-caw',
            'gtk': '/guess-the-killer',
            'gogcomm': '/gogcomm',
            'medTool': '/med-tool',
            'tierator': '/tierator',
            'timeConvCalc': '/time-conversion-calculator',
            'votd': '/voyage-of-the-dead',
            'anw': '/american-ninja-warrior-challenge',
        }
    }
}

export default pageRoutes;