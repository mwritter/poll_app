class YesNoPoll {
    constructor(args) {
        this.id = args.id;
        this.title = args.title;
        this.items = args.items;
        this.type = 'YesNoPoll';
    }

    agree(user) {
        let agree = this.getAgree()
        let disagree = this.getDisagree()
        disagree.users = disagree.users.filter(item => item != user)
        agree.users.push(user);
    }

    disagree(user) {
        let agree = this.getAgree();
        let disagree = this.getDisagree();
        agree.users = agree.users.filter(item => item != user);
        disagree.users.push(user);
    }

    getAgree() {
        return this.items.agree;
    }
    getDisagree() {
        return this.items.disagree;
    }
    generateDefaultItems() {
        return {
            agree: {
                type: 'agree',
                text: 'YES',
                users: []
            },
            disagree: {
                type: 'disagree',
                text: 'NO',
                users: []
            }
        }
    }
}

export default YesNoPoll;