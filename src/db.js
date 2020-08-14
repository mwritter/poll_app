// dummy db
export default {
    getPoll(id) {
        return {
            type: "ListVotePoll",
            id,
            title: 'What day should we move our Team Free Time Activities to and what should we call it?',
            items: [
                {
                    text: 'TheTeamTime Thursday',
                    agree: {
                        text: 'yep',
                        users: ['mwritter']
                    },
                    disagree: {
                        text: 'nope',
                        users: []
                    },

                },
                {
                    text: 'FreeTimeFriday',
                    agree: {
                        text: 'ye',
                        users: ['mwritter', 'dtayler']
                    },
                    disagree: {
                        text: 'ne',
                        users: []
                    },

                },
                {
                    text: 'GameMaster Monday',
                    agree: {
                        text: 'yeah',
                        users: []
                    },
                    disagree: {
                        text: 'naw',
                        users: ['mwritter']
                    },

                },
                {
                    text: 'TeamBuilding Tuesday',
                    agree: {
                        text: 'yep',
                        users: []
                    },
                    disagree: {
                        text: 'nope',
                        users: ['hpotter', 'vrritter', 'hpotter', 'vrritter', 'hpotter', 'vrritter']
                    },

                },
                {
                    text: 'We-Cant Wednesday',
                    agree: {
                        text: 'yep',
                        users: ['mwritter', 'dtayler', 'hpotter']
                    },
                    disagree: {
                        text: 'nope',
                        users: []
                    },

                }
            ]
        }
    }
}