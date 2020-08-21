<template>
  <div class="YesNoPoll">
    <div id="poll-id-div">{{poll.id}}</div>
    <div>{{poll.title}}</div>
    <div id="poll-form">
      <div class="agree" @click="addAgree">{{agree.text || `YES`}}</div>
      <div class="divider"></div>
      <div class="disagree" @click="addDisagree">{{disagree.text || `NO`}}</div>
      <div class="agree-users">
        <span class="agree-user" v-for="(user, idx) in agree.users" :key="`agree-${idx}`">{{user}}</span>
      </div>
      <div class="disagree-users">
        <span
          class="disagree-user"
          v-for="(user, idx) in disagree.users"
          :key="`disagree-${idx}`"
        >{{user}}</span>
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
      lead: '',
      user: {
        name: "mwritter",
      },
    };
  },
  mounted() {
    let agree = this.poll.items['agree'];
    let disagree = this.poll.items['disagree'];
    this.agree = agree || {};
    this.disagree = disagree || {};
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
      // might need to just make some classes and set them instead of
      // do all this js style updates..
      if (!this.agree.users || !this.disagree.users) {
        return;
      }
      let agreeText = document.querySelector("#poll-form > .agree");
      let disagreeText = document.querySelector("#poll-form > .disagree");
      let agreeUpdateSize = 1 + this.agree.users.length;
      let disagreeUpdateSize = 1 + this.disagree.users.length;
      agreeText.style.fontSize =
        agreeUpdateSize <= 10 ? `${agreeUpdateSize}em` : "10em";
      disagreeText.style.fontSize =
        disagreeUpdateSize <= 10 ? `${disagreeUpdateSize}em` : "10em";

      if (agreeUpdateSize <= 10) {
        agreeText.style.fontSize = `${agreeUpdateSize}em`;
        agreeText.style.webkitTextStrokeWidth = agreeUpdateSize > 1 ?`${Math.floor(agreeUpdateSize / 2) + 1}px` : '0px';
      } else {
        agreeText.style.fontSize = `10em`;
        agreeText.style.webkitTextStrokeWidth = `6px`;
      }

      if (disagreeUpdateSize <= 10) {
        disagreeText.style.fontSize = `${disagreeUpdateSize}em`;
        disagreeText.style.webkitTextStrokeWidth = disagreeUpdateSize > 1 ?`${Math.floor(disagreeUpdateSize / 2) + 1}px` : '0px';
      } else {
        disagreeText.style.fontSize = `10em`;
        disagreeText.style.webkitTextStrokeWidth = `6px`;
      }

      if (agreeUpdateSize > disagreeUpdateSize) {
          agreeText.style.color = 'lightgreen';
          agreeText.style.webkitTextStrokeColor = 'green';
          disagreeText.style.color = 'gray';
          disagreeText.style.webkitTextStrokeColor = '';
      } else if (agreeUpdateSize < disagreeUpdateSize) {
          agreeText.style.color = 'gray';
          agreeText.style.webkitTextStrokeColor = '';
          disagreeText.style.color = 'lightcoral';
          disagreeText.style.webkitTextStrokeColor = 'red';
      } else {
        agreeText.style.color = 'gray';
        agreeText.style.webkitTextStrokeColor = '';
        disagreeText.style.color = 'gray';
        disagreeText.style.webkitTextStrokeColor = '';
      }

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
  min-height: 10rem;
}
.agree {
  cursor: pointer;
  color: rgba(159, 159, 159);
  opacity: 0.3;
  align-self: center;
  grid-column: 1/2;
  grid-row: 1/2;
  z-index: 1;
}
.divider {
  border-left: 2px solid rgba(159, 159, 159, 0.5);
  justify-self: center;
  align-self: center;
  height: 100%;
  grid-column: 2/3;
}
.disagree {
  cursor: pointer;
  font-size: 1em;
  color: rgba(159, 159, 159);
  opacity: 0.3;
  align-self: center;
  grid-column: 3/4;
  grid-row: 1/2;
  z-index: 1;
}
.agree-users {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat( 4, 1fr);
  width: 100%;
  align-self: start;
  justify-self: center;
  grid-column: 1/2;
  grid-row: 1/2;
  opacity: 0.5;
}
.disagree-users {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat( auto-fill, minmax(4rem, 1fr));
  width: 100%;
  align-self: start;
  justify-self: center;
  margin-left: 1rem;
  grid-column: 3/4;
  grid-row: 1/2;
  opacity: 0.5;
}

.disagree-user {
  text-align: center;
  padding: 0.5rem;
}

.agree-user {
  text-align: center;
  padding: 0.5rem;
}

.disagree-user::before {
  content: "@";
}
.agree-user::before {
  content: "@";
}
/* Small screens */
@media only screen and (max-width: 700px) {
  .YesNoPoll {
    margin-top: 0;
  }

  #poll-form {
    justify-self: end;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    row-gap: 1rem;
    width: 100vw;
    min-height: 20rem;
  }

  .agree {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  .divider {
    grid-row: 2/3;
    grid-column: 1/2;
    border: none;
    border-bottom: 2px solid rgba(159, 159, 159, 0.5);
    width: 80%;
  }

  .disagree {
    grid-row: 3/4;
    grid-column: 1/2;
  }
  .agree-users {
    grid-template-columns: repeat( 4, 1fr);
    justify-items: start;
    gap: 0.5rem;
    width: 100%;
    grid-row: 1/2;
    grid-column: 1/2;
  }
  .disagree-users {
    grid-template-columns: repeat( 4, 1fr);
    grid-row: 3/4;
    grid-column: 1/2;
    margin-left: 0;
    justify-items: start;
    gap: 0.5rem;
    width: 100%;
  }
}
</style>