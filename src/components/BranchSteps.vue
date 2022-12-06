<template>
  <div class="row">
      <div class="col-md-6">
      <div class="js-step-container">
          <div v-for="(item, index) in steps" :key="item.question" :data-step-id="index" class="card mb-2 js-step-card" :class="isLastCard(index)">
          <div class="card-body">
              <div class="card-title">{{ item.question }}</div>
              <step-btn :answers="item.answers" @next-step="loadStep" />
          </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import StepBtn from '@/components/StepBtn.vue'

export default {
  name: 'BranchSteps',
  props: {
    blocks: Array
  },
  components: {
    StepBtn
  },
  created: function () {
      this.steps.push(getDecisionTreeData("higher", 1));
  },
  computed: {
      randomNumber: function () {
      return Math.floor(Math.random() * 1000);
      }
  },
  data() {
      return {
      steps: [],
      stepCounter: 1
      };
  },
  methods: {
      loadStep(btn, nextStep, lastStep) {
      let card = btn.closest(".js-step-card"),
          stepCount = parseInt(card.dataset.stepId) + 1,
          classes = card.classList,
          currentCard = false;

      if (classes.contains("current")) {
          classes.remove("current");
          currentCard = true;
      }

      if (!lastStep && currentCard) {
          this.steps.push(getDecisionTreeData("higher", nextStep));
      } else if (!lastStep && !currentCard) {
          //reset steps to clicked
          this.steps.length = stepCount;
          this.stepCounter = stepCount;
          this.steps.push(getDecisionTreeData("higher", nextStep));
      } else {
          alert("Last Step");
      }
      },
      isLastCard(index) {
          if (this.steps.length - 1 === index) {
              return "current";
          }
      }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>