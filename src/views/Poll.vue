<template>
  <main>
    <ListVotePoll v-if="poll_type == 'ListVotePoll'" :poll="poll" />
    <h1 v-if="poll_type == ''">No Poll Found</h1>
  </main>
</template>

<script>
import db from "../db";
import PollModel from "../Models/PollModel";
import ListVotePoll from "../components/ListVotePoll";
export default {
  components: {
    ListVotePoll,
  },
  // props: {
  //   poll: Object
  // },
  name: "Poll",
  data: () => {
    return {
      poll: {},
      poll_type: "",
    };
  },
  mounted() {
    let p = db.getPoll(123);
    this.poll_type = p.type;
    this.poll = new PollModel(p);
  },
};
</script>

<style>
</style>