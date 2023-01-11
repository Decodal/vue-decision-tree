<template>
  <div class="container">
    <BranchSteps />
  </div>
</template>

<script>
// import BranchSteps from '@/components/BranchSteps.vue'
// import StepBtn from './components/StepBtn.vue'

export default {
  name: "cc-3902-app",
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
/* @import "https://dnbpensionplan.concertstaging.co.uk/assets/css/styles.css"; */
#cc-3902-app {
  font-family: Raleway,Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.js-step-container {
  padding: 1.25rem;
  background: white;
  z-index: 0;
  position: relative;
}
.js-step-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  /* @include magic-border(4px, #222, 0.2s, 1); */
}
.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-title {
  color: #004a69;
  font-size: 1.5rem;
  margin: 0 0 1rem;
  line-height: 1.1;
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
.card-leave-active {
  transition: all 0.5s ease;
  
}
.card-enter-from {
  opacity: 0;
  transform: translateX(430px);
  
}
.card-leave-to {
  opacity: 0;
  transform: translateX(0px);
  transition: all 0.1s ease;
  position: relative;
}
.card-leave-active {
  position: absolute;
}
.js-step-card {
  text-decoration: none;
  color: #222;
  padding: 20px;
  background: #efefef;
  text-transform: uppercase;
  text-align: center;
  position: relative;
  margin: 20px;
  flex-grow: 1;
  cursor: pointer;
}
.js-step-card:before {
  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: calc(2px/-1);
  left: calc(2px/-1);
  background: linear-gradient(to right, blue 0%, blue 100%), linear-gradient(to top, blue 50%, transparent 50%), linear-gradient(to top, blue 50%, transparent 50%), linear-gradient(to right, blue 0%, blue 100%), linear-gradient(to left, blue 0%, blue 100%);
  background-size: 100% 2px, 2px 200%, 2px 200%, 0% 2px, 0% 2px;
  background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
  background-repeat: no-repeat, no-repeat;
  transition: transform 0.3s ease-in-out, background-position 0.3s ease-in-out, background-size 0.3s ease-in-out;
  transform: scaleX(0) rotate(0deg);
  transition-delay: 0.6s, 0.3s, 0s;
}
.js-step-card:before {
  content: "";
  position: absolute;
  z-index: -1;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  top: calc(4px/-1);
  left: calc(4px/-1);
  background: linear-gradient(to right, #222 0%, #222 100%), linear-gradient(to top, #222 50%, transparent 50%), linear-gradient(to top, #222 50%, transparent 50%), linear-gradient(to right, #222 0%, #222 100%), linear-gradient(to left, #222 0%, #222 100%);
  background-size: 100% 4px, 4px 200%, 4px 200%, 0% 4px, 0% 4px;
  background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
  background-repeat: no-repeat, no-repeat;
  transition: transform 0.2s ease-in-out, background-position 0.2s ease-in-out, background-size 0.2s ease-in-out;
  transform: scaleX(0) rotate(180deg);
  transition-delay: 0.4s, 0.2s, 0s;
}

.js-step-card.current:before {
  background-size: 200% 4px, 4px 400%, 4px 400%, 55% 4px, 55% 4px;
  background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
  transform: scaleX(1) rotate(180deg);
  transition-delay: 0s, 0.2s, 0.4s;
}



</style>
