<template>
  <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="js-step-container">
          <TransitionGroup name="card">
            <div v-for="(item, index) in steps" 
            :key="item.question" 
            :data-step-id="index" 
            class="card mb-2 js-step-card" 
            :class="[isLastCard(index), loadStep]">
              <div class="card-body">
                <a v-if="item.clickThrough" 
                    v-bind:href="item.clickThrough" 
                    v-bind:class = "(item.clickThrough)?'last-step':''">
                        {{ item.answer }}
                    </a>
                <div class="card-title" v-else>{{ item.question }}</div>
                    <step-btn :answers="item.answers" @next-step="loadStep" />
              </div>
            </div>
          </TransitionGroup>
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
    created() {
      this.steps.push(getDecisionTreeData(1));
      //this.steps.push(this.stepData[1]);
      fetch('http://localhost:3000/decisionTreeData')
        .then(response => response.json())
        .then(stepData => {
            // console.log(data);
            this.stepData = stepData
        })
    },
    data() {
      return {
        steps: [],
        stepData: [],
        stepCounter: 1
      };
    },
    methods: {
      loadStep(btn, nextStep) {
        let card = btn.closest(".js-step-card"),
            stepCount = parseInt(card.dataset.stepId) + 1,
            classes = card.classList,
            currentCard = false;
         
        if (classes.contains("current")) {
            classes.remove("current");
            currentCard = true;
        }
        console.log(this.stepData[0]);
        if (currentCard) {
            this.steps.push(getDecisionTreeData(nextStep));
            //this.steps.push(this.stepData.nextStep));
       
        } else if (!currentCard) {
        
            this.steps.length = stepCount;
            this.stepCounter = stepCount;
            this.steps.push(getDecisionTreeData(nextStep));
           // this.steps.push(this.stepData(nextStep));
        } 
      },
      isLastCard(index) {
        if (this.steps.length - 1 === index) {
            return "current";
        }
      }
    }
    
}
function getDecisionTreeData(id) {
    let decisionTreeData = {
        1: {
          question:
            "Joined after 1961 and pre April 1988?",
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
            answer: "YOU WILL BE IN THE FINAL SALARY SECTION, GO TO FORMER EMPLOYEES",
        //   lastStep: true,
          clickThrough: '/former-employees'
        },
        3: {
          question:
            "After April 1988 and before April 1993?",
          answers: [
            {
              text: "Yes",
              next: 4
            },
            {
              text: "No",
              next: 5
            }
          
          ]
        },
        4: {
            answer: "YOU COULD BE IN EITHER THE FINAL SALARY OR MONEY PURCHASE SECTION, EMAIL BUCK, THE SCHEME ADMINISTRATORS",
        //   lastStep: true,
          clickThrough: '/contact'
          
        },
        5: {
          question: "After April 1993 and before April 2004?",
          answers: [
            {
              text: "Yes",
              next: 6
            },
            {
              text: "No",
              next: 7
            }
          ]
        },
        6: {
          question: "Over 40?",
          answers: [
            {
              text: "Yes",
               next: 8
            },
            {
              text: "No",
              next: 9
            }
          ]
        },
        7: {
            answer: "Go to current Employees, Defined Contribution Section",
        //   lastStep: true,
          clickThrough: '/defined-contribution'
        },
        8: {
            answer: "YOU WILL PROBABLY BE IN THE FINAL SALARY SECTION. GO TO FORMER EMPLOYEES, AS THIS IS THE MOST LIKELY OPTION",
        //   lastStep: true,
          clickThrough: '/former-employees'
        },
        9: {
            answer: "Go to former employees Money Purchase Section, as this is the most likely option",
        //   lastStep: true,
          clickThrough: '/defined-contribution'
        }
    };
  
    return decisionTreeData[id];
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>