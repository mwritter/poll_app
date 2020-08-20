// dummy db
export default {
    data: {
        polls: [
            {
                id: "111",
                type: "YesNoPoll",
                title: 'Do you like wings?',
                items: [
                    {
                        type: 'agree',
                        text: 'YES',
                        users: []
                    },
                    {
                        type: 'disagree',
                        text: 'NO',
                        users: []
                    }
                ]
            },
            {
                id: "222",
                type: "ListVotePoll",
                title: 'What day should we move our Team Free Time Activities to and what should we call it?',
                items: [
                    {
                        text: 'TheTeamTime Thursday',
                        agree: {
                            text: '👍',
                            users: []
                        },
                        disagree: {
                            text: '👎',
                            users: []
                        },

                    },
                ]
            }
        ]
    },
    getPoll(id) {
        //for now if this fake db doesnt have the poll just send the first one
        let found  = this.data.polls.find(poll => poll.id == id);
        if (found) {
            return found;
        }
        let fake = this.data.polls[0];
        fake.id = id;
        return fake;
    },
    addPoll(poll) {
        let id = this.data.polls.length + 1;
        this.data.polls.push({
            id: `${id}${id}${id}`,
            title: poll.title,
            type: poll.type,
            items: this.getDefaultPollItems(poll.type)
        })
    },
    getDefaultPollItems(type) {
        //maybe move to model, later give access to change text
        if (type == 'YesNoPoll') {
            return [
                {
                    type: 'agree',
                    text: 'YES',
                    users: []
                },
                {
                    type: 'disagree',
                    text: 'NO',
                    users: []
                }
            ]
        }
    }
}