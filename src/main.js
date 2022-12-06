import { createApp } from 'vue/dist/vue.esm-bundler';
//import { createApp } from 'vue';
// import Vue from 'vue'
// window.Vue = Vue;
// import { createApp,h } from 'vue'
import App from './App.vue'
// import { createApp } from 'vue/dist/vue.esm-bundler';
// import globalMixin from '@/mixins/generalMixin'
// import BranchSteps from '@/components/BranchSteps.vue'

const app = createApp(App);

// let app = createApp({
//     name: "App",
//     data() {
//     return {};
//     }
// })
// const app  = createApp({
//     render: ()=>h(App),
//     //mixins: [globalMixin],
// });
// createApp({
//     extends: App,
//     mixins: [globalMixin],
//     render: ()=>h(App),
//     components: {
//         BranchSteps
//     }
//   }).mount('#app')


app.component("BranchSteps", {
    template: `
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
    `,
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
  });
  
 app.component("StepBtn", {
    template: `
    <div class="d-flex gap-2">
      <button v-for="(item, index) in answers" :key="index" @click="btnClick($event, item, index)" :class="{active:index == btnSelected}" class="btn btn-outline-primary" type="button">{{ item.text }}</button>
    </div>
    `,
    name: "StepBtn",
    emits: ["next-step"],
    props: ["answers"],
    data() {
      return {
        btnSelected: undefined
      };
    },
    methods: {
      btnClick(event, item, index) {
        let clickedBtn = event.target,
          activeBtns = clickedBtn.parentNode.getElementsByClassName("active"),
          lastStep = false,
          ids = item.next;
  
        this.btnSelected = index;
  
        //is it the last step
        if (item.solution !== undefined) {
          lastStep = true;
          ids = item.solution;
        }
  
        //pass next step id to parent component
        this.$emit("next-step", clickedBtn, ids, lastStep);
      }
    }
  });
app.mount("#app");
//   const app = new Vue({
//     el: '#app',

//     router
// }); 
  
  function getDecisionTreeData(branch, id) {
    let decisionTreeData = {
      higher: {
        1: {
          question:
            "Joined Dun & Bradstreet after April 1961 and before April 1988?",
          answers: [
            {
              text: "Yes",
              next: 2
            },
            {
              text: "No",
              next: 3
            }
          ]
        },
        2: {
          question: "You will be in the old defined benefit section, go to former employees",
          lastStep: true
          
        },
        3: {
          question:
            "Joined after April 1988 and before April 1993?",
          answers: [
            {
              text: "Yes",
              next: 4
            },
            {
              text: "No",
              next: 8
            }
          
          ]
        },
        4: {
          question: "You could be in either the Old Defined Benefit Joined Dun & Bradstreet after or the Money Purchase Scheme; check your leaver statement or email Mercer, the scheme administrators",
          lastStep: true
          
        },
        8: {
          question: "Joined after April 1993 and before April 2004?",
          answers: [
            {
              text: "Yes",
              next: 9
            },
            {
              text: "No",
              next: 10
            }
          ]
        },
        9: {
          question: "Were you over 40 during this time?",
          answers: [
            {
              text: "Yes",
               next: 11
            },
            {
              text: "No",
              next: 12
            }
          ]
        },
        10: {
          question: "Go to current Employees, Defined Contribution Section",
          lastStep: true
        },
        11: {
          question: "You will probably be in the old defined benefit section. Go to former employees, as this is the most likely option",
          lastStep: true
        },
        12: {
          question: "Go to former employees Money Purchase Section, as this is the most likely option",
          lastStep: true
        }
      }
    };
  
    return decisionTreeData[branch][id];
  }
  