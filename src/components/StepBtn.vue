<template>
    <div class="d-flex gap-2">
        <button v-for="(item, index) in answers" :key="index" @click="btnClick($event, item, index)" :class="{active:index == btnSelected}" class="btn btn-outline-primary" type="button">{{ item.text }}</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepBtn',
    emits: 'next-step',
    props:  'answers' ,
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
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>