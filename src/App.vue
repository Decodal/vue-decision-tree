<template>
  <div id="app" class="container">
    <BranchSteps />
  </div>
</template>

<script>
// import BranchSteps from '@/components/BranchSteps.vue'
// import StepBtn from './components/StepBtn.vue'

export default {
  name: "App",
  data() {
    return {
      showP: false,
    };
  },
  // props: {
  //   showP: { type: Boolean, default: false },
  // },
}
  
</script>

<style>
@import "https://dnbpensionplan.concertstaging.co.uk/assets/css/styles.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.next-step-links a {
  cursor: pointer;
}
.next-step-links a span {
  border-style: double;
  color: #004a69;
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  white-space: nowrap;
  border-style: double;
  padding: 5px;
  color: #005071;
  transition: all 0.5s ease;
}
.next-step-links a.active span,
.next-step-links a:hover span {
  background-color: #004a69;
  color: white;
 
}

.card-move, 
.card-enter-active,
.card-leave-active {
  transition: all 1s ease;

}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  /* transform: translateX(430px); */
}
.card-leave-active {
  position: absolute;
  --_i: 100%;
}
.js-step-card {
  --c: #004a69; /* the border color */
  --b: 2px;    /* the border thickness*/
  --g: 5px;     /* the gap on hover */
  padding: calc(var(--g) + var(--b));
  --_g: #0000 25%,var(--c) 0;
  background: 
    conic-gradient(from 180deg at top    var(--b) right var(--b),var(--_g))
     var(--_i,200%) 0  /200% var(--_i,var(--b))  no-repeat,
    conic-gradient(            at bottom var(--b) left  var(--b),var(--_g))
     0   var(--_i,200%)/var(--_i,var(--b)) 200%  no-repeat;
  transition: .3s, background-position .3s .3s;
  /* cursor: pointer; */
}
.js-step-card.current {
  --_i: 100%;
  transition: .3s, background-size .3s .3s;
}


</style>
