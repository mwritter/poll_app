import db from '../src/firebaseConfig';

export default {
    collection: db.firestore().collection('polls'),
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
    async get(id) {
        let poll = null;
        const ref = this.collection.doc(id);
        await ref.get().then((doc) => {
            if (doc.exists) {
                poll = doc.data();
                poll.id = doc.id;
            }
        });
        return poll;
    },

    async update(id, payload) {

    },

    async create(payload) {
        let result = {};
        await this.collection
            .add(payload)
            .then((res) => {
                console.log('Successfully Written!')
                result = res;
            })
            .catch(error => {
                console.log('Error: ' + error);
            });
        return result;
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