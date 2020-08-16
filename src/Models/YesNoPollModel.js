class YesNoPoll {
    constructor({ id, title, items, type }) {
        this.id = id
        this.title = title;
        this.items = items;
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
        let agree = this.items.find(item => item.type == 'agree');
        return agree;
    }
    getDisagree() {
        let disagree = this.items.find(item => item.type == 'disagree');
        return disagree;
    }

}

export default YesNoPoll;