export default {
    mounted() {
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
    }
  }