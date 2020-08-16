// dummy db
export default {
    getPoll(id) {
        return {
            type: "YesNoPoll",
            id,
            title: 'Do you like wings?',
            items: [
                {
                    type: 'agree',
                    text: 'YES',
                    users: []
                    // users: ['mwritter', 'vrritter', 'dtayler', 'jtracy', 'mwritter', 'vrritter', 'dtayler', 'jtracy', 'mwritter', 'vrritter', 'dtayler', 'jtracy', 'mwritter', 'vrritter', 'dtayler', 'jtracy']
                },
                {
                    type: 'disagree',
                    text: 'NO',
                    users: []
                    // users: ['vrritter', 'dtayler', 'jtracy', 'vrritter', 'dtayler', 'jtracy']
                }
            ]
            // type: "ListVotePoll",
            // id,
            // title: 'What day should we move our Team Free Time Activities to and what should we call it?',
            // items: [
            //     {
            //         text: 'TheTeamTime Thursday',
            //         agree: {
            //             text: '👍',
            //             users: []
            //         },
            //         disagree: {
            //             text: '👎',
            //             users: []
            //         },

            //     },
            // ]
        }
    }
}