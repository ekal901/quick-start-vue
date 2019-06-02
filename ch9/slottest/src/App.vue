<template>
  <div id="app">
    <SpeechBox v-bind:headerText="A.header" v-bind:footerText="A.footer">
      <div>
        <p>{{A.message}}</p>
      </div>
    </SpeechBox>
    <SpeechBox class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="sanders-content">{{B.message}}</p>
      </div>
    </SpeechBox>
  </div>
</template>

<script>
import SpeechBox from "./components/SpeechBox";

export default {
  name: "app",
  components: {
    SpeechBox
  },
  data() {
    return {
      A: {
        header: "president Obama Speech",
        footer: "2017.01.10 -Chicago",
        message: "Dear.. Content is omitted"
      },
      B: {
        header: "Burney Sanders lost",
        footer: "2016.01.10 - Philadelpia Wellsfargo",
        message: "Thank you.. Content is omitted"
      }
    };
  }
};
</script>

<style scoped>
.sanders {
  background-color: lemonchiffon;
}
.sanders-content {
  font-family: "Courier New", Courier, monospace;
  text-decoration: underline;
}
</style>
