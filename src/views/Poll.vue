<template>
  <main>
    <ListVotePoll v-if="poll.type == 'ListVotePoll'" :poll="poll" />
    <YesNoPoll v-else-if="poll.type == 'YesNoPoll'" :poll="poll" />
    <h1 v-if="message">{{message}}</h1>

  </main>
</template>

<script>
import db from "../db";
import ListVotePoll from "../components/ListVotePoll";
import YesNoPoll from "../components/YesNoPoll";
import ListVotePollModel from "../Models/ListVotePollModel";
import YesNoPollModel from "../Models/YesNoPollModel";
export default {
  components: {
    ListVotePoll,
    YesNoPoll,
  },
  props: {
    poll_id: String,
    poll_data: Object
  },
  name: "Poll",
  data: () => {
    return {
      message: false,
      poll: {}
    };
  },
  mounted() {
    this.message = "Loading...";
    if (this.poll_id) {
      this.getPoll(this.poll_id);
    } else if (this.poll_data) {
      this.createPollModel(this.poll_data);
    }
    
  },
  methods: {
    getPoll(id) {
      db.get(this.poll_id).then(pollData => {
        if (pollData) {
          this.message = false;
          this.createPollModel(pollData);
        } else {
          this.message = 'No Poll Found'
        }
      })
    },
    createPollModel(pollData) {
      if (!pollData.type) {
        this.message = 'No Poll Model Found for type givin.';
        return;
      }
      switch (pollData.type) {
        case "ListVotePoll":
          this.poll = new ListVotePollModel(pollData);
          this.message = false;
          break;
        case "YesNoPoll":
          this.poll = new YesNoPollModel(pollData);
          this.message = false;
          break;
      }
    },
  },
};
</script>

<style>
/* Large Screen */
@media only screen and (min-width: 700px) {
  main {
    justify-self: center;
  }
}

@media only screen and (max-width: 700px) {
  main {
    justify-self: normal;
  }
}
</style>