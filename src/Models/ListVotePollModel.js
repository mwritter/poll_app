import db from '../db';
class ListVotePollModel {

    constructor(args) {
        this.id = args.id;
        this.title = args.title;
        this.items = args.items;
        this.type = 'ListVotePoll';
    }

    addUserInput(input) {
        this.items.push(input);
    }

    agree(args) {
        let agree = this.getAgree(args.text);
        let disagree = this.getDisagree(args.text);
        if (!agree.users.includes(args.user)) {
            agree.users.push(args.user);
            disagree.users = disagree.users.filter(user => user != args.user);
        }
    }

    disagree(args) {
        let disagree = this.getDisagree(args.text);
        let agree = this.getAgree(args.text);
        if (!disagree.users.includes(args.user)) {
            disagree.users.push(args.user);
            agree.users = agree.users.filter(user => user != args.user);
        }
    }

    getAgree(text) {
        let item = this.items.find(item => item.text == text);
        return item.agree;
    }

    getDisagree(text) {
        let item = this.items.find(item => item.text == text);
        return item.disagree;
    }
    generateDefaultItems() {
        return [];
    }
}

export default ListVotePollModel;