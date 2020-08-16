<template>
  <div class="YesNoPoll">
    <div id="poll-id-div">{{poll.id}}</div>
    <div>{{poll.title}}</div>
    <div id="poll-form">
      <div class="agree" @click="addAgree">{{agree.text}}</div>
      <div class="divider"></div>
      <div class="disagree" @click="addDisagree">{{disagree.text}}</div>
      <div class="agree-users">
        <span v-for="(user, idx) in agree.users" :key="`agree-${idx}`">{{user}}</span>
      </div>
      <div class="disagree-users">
        <span v-for="(user, idx) in disagree.users" :key="`disagree-${idx}`">{{user}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YesNoPoll",
  props: {
    poll: {
      type: Object,
    },
  },
  data: () => {
    return {
      agree: {},
      disagree: {},
      user: {
        name: "mwritter",
      },
    };
  },
  mounted() {
    let agree = this.poll.items.find((item) => item.type == "agree");
    let disagree = this.poll.items.find((item) => item.type == "disagree");
    this.agree = agree;
    this.disagree = disagree;
    this.updateTextPoll();
  },
  methods: {
    addAgree(evt) {
      if (!this.agree.users.includes(this.user.name)) {
        this.poll.agree(this.user.name);
        this.updateTextPoll();
      }
    },
    addDisagree(evt) {
      if (!this.disagree.users.includes(this.user.name)) {
        this.poll.disagree(this.user.name);
        this.updateTextPoll();
      }
    },
    updateTextPoll() {
      let agreeText = document.querySelector("#poll-form > .agree");
      let disagreeText = document.querySelector("#poll-form > .disagree");
      let agreeUpdateSize = 1 + this.agree.users.length;
      let disagreeUpdateSize = 1 + this.disagree.users.length;
      agreeText.style.fontSize =
        agreeUpdateSize <= 10
          ? `${agreeUpdateSize}em`
          : agreeText.style.fontSize;
      disagreeText.style.fontSize =
        disagreeUpdateSize <= 10
          ? `${disagreeUpdateSize}em`
          : disagreeText.style.fontSize;

      agreeText.style.color =
        agreeUpdateSize > disagreeUpdateSize ? "lightgreen" : "grey";
      disagreeText.style.color =
        agreeUpdateSize < disagreeUpdateSize ? "lightcoral" : "grey";
    },
  },
};
</script>

<style scoped>
.YesNoPoll {
  display: grid;
  justify-self: center;
  max-width: 1000px;
  width: 70vw;
  gap: 3rem;
  margin-top: 5rem;
}

#poll-id-div {
  max-width: 1000px;
  color: rgba(159, 159, 159, 0.5);
  font-size: min(max(16px, 5vw), 50px);
}

#poll-form {
  display: grid;
  column-gap: 1rem;
  padding: 1rem;
  grid-template-columns: 1fr auto 1fr;
  border: 1px solid black;
  border-radius: 20px;
  height: 20vh;
}
.agree {
  cursor: pointer;
  color: rgba(159, 159, 159);
  font-size: 1em;
  align-self: center;
  grid-column: 1/2;
  grid-row: 1/2;
}
.divider {
  border-left: 2px solid rgba(159, 159, 159, 0.5);
  justify-self: center;
  align-self: center;
  height: 80%;
  grid-column: 2/3;
}
.disagree {
  cursor: pointer;
  font-size: 1em;
  color: rgba(159, 159, 159);
  align-self: center;
  grid-column: 3/4;
  grid-row: 1/2;
}
.agree-users {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-self: start;
  justify-self: start;
  grid-column: 1/2;
  grid-row: 1/2;
}
.disagree-users {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-self: start;
  justify-self: start;
  margin-left: 1rem;
  grid-column: 3/4;
  grid-row: 1/2;
}
</style>