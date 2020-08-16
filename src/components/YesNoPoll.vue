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
  },
  methods: {
    addAgree() {
      if (!this.agree.users.includes(this.user.name)) {
        this.poll.agree(this.user.name);
      }
    },
    addDisagree() {
      if (!this.disagree.users.includes(this.user.name)) {
        this.poll.disagree(this.user.name);
      }
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
  grid-template-columns: 1fr auto 1fr;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;
  height: 20vh;
}
.agree {
  cursor: pointer;
  color: rgba(159, 159, 159);
  font-size: 10em;
  align-self: center;
}
.disagree {
  cursor: pointer;
  opacity: 0.3;
  color: rgba(159, 159, 159);
  align-self: center;
}
.agree-users {
  align-self: end;
  justify-self: start;
}
.disagree-users {
  align-self: end;
  justify-self: start;
  margin-left: 1rem;
}
.divider {
  border-left: 2px solid rgba(159, 159, 159, 0.5);
  justify-self: center;
  grid-row: 1/3;
  grid-column: 2/3;
}
</style>