<template>
    <div class="d-flex justify-content-between next-step-links">
      <a v-for="(item, index) in answers" 
        :key="index" 
        v-on:click.prevent.stop="btnClick($event, item, index)" 
        :class="{active:index == btnSelected}" 
      ><span>{{ item.text }} {{ btnSelected }}</span></a>
    </div>
  </template>
  
  <script>
  export default {
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
            // activeBtns = clickedBtn.parentNode.getElementsByClassName("active"),
            // lastStep = false,
            ids = item.next;
        
        //switch active class to the clicked button
        this.btnSelected = index;
        
        //pass next step id to parent component
        this.$emit("next-step", clickedBtn, ids);
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>