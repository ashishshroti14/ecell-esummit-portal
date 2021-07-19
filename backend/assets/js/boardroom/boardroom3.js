window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: '#7341B4',
    grey: 'rgb(201, 203, 207)',
    black: "#000",
    white: "#fafafa",
    col1: "rgb(1,1,1)"
  };

  var config = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                  // onComplete: function () {
                  //     window.setTimeout(function () {
                  //         progress.value = 0;
                  //     }, 10000);
                  // }
              }
          }
      };
      // var progress = document.getElementById('animationProgress');
  //     var config2 = {
  //         type: 'line',
          
  //         data: {
  //             grid: false,
  //             display: false,
  //             //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //             labels: ['', '', '', '', '', '', ''],
  //             datasets: [{
  //                 pointRadius: 0,
  //                 label: 'My First dataset',
  //                 fill: true,
  //                 borderColor: window.chartColors.grey,
  //                 backgroundColor: window.chartColors.grey,
  //                 data: [
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10
  //                 ]
  //             }, {
  //                 pointRadius: 0,
  //                 label: 'My Second dataset ',
  //                 fill: true,
  //                 borderColor: window.chartColors.purple,
  //                 backgroundColor: window.chartColors.purple,
  //                 data: [
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10
  //                 ]
  //             },
  //            ]
  //         },
  //         options: {
  //             legend: {
  //     display: false
  // },
  // tooltips: {
  //     callbacks: {
  //        label: function(tooltipItem) {
  //               return tooltipItem.yLabel;
  //        }
  //     }
  // },
  // // elements: {
  // //                 point:{
  // //                     radius: 1
  // //                 }
  // //             }
  // //         },
              
  //             scales: {
                 
  //                 xAxes: [{
  //                     ticks: {
  //                 display: false, //this will remove only the label
                 
  //             },
  //                     gridLines: {
                          
  //                         color: "rgba(0, 0, 0, 0)",
  //                         display: false

  //                     }
  //                 }],
  //                 yAxes: [{
  //                     ticks: {
  //                 display: false, //this will remove only the label
                 
  //             },
  //                     gridLines: {
  //                         color: "rgba(0, 0, 0, 0)",
  //                         display: false

  //                     }
  //                 }]
  //             },
             
  //             animation: {
  //                 duration: 10000,
  //                 // onProgress: function (animation) {
  //                 //     progress.value = animation.currentStep / animation.numSteps;
  //                 // },
  //                 // onComplete: function () {
  //                 //     window.setTimeout(function () {
  //                 //         progress.value = 0;
  //                 //     }, 10000);
  //                 // }
  //             }
  //         }
  //     };

  //     var config5 = {
  //         type: 'line',
          
  //         data: {
  //             grid: false,
  //             display: false,
  //             //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //             labels: ['', '', '', '', '', '', ''],
  //             datasets: [{
  //                 pointRadius: 0,
  //                 label: 'My First dataset',
  //                 fill: true,
  //                 borderColor: window.chartColors.grey,
  //                 backgroundColor: window.chartColors.grey,
  //                 data: [
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10
  //                 ]
  //             }, {
  //                 pointRadius: 0,
  //                 label: 'My Second dataset ',
  //                 fill: true,
  //                 borderColor: window.chartColors.purple,
  //                 backgroundColor: window.chartColors.purple,
  //                 data: [
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10,
  //                     randomScalingFactor()/10
  //                 ]
  //             },
  //            ]
  //         },
  //         options: {
  //             legend: {
  //     display: false
  // },
  // tooltips: {
  //     callbacks: {
  //        label: function(tooltipItem) {
  //               return tooltipItem.yLabel;
  //        }
  //     }
  // },
  // // elements: {
  // //                 point:{
  // //                     radius: 1
  // //                 }
  // //             }
  // //         },
              
  //             scales: {
                 
  //                 xAxes: [{
  //                     ticks: {
  //                 display: false, //this will remove only the label
                 
  //             },
  //                     gridLines: {
                          
  //                         color: "rgba(0, 0, 0, 0)",
  //                         display: false

  //                     }
  //                 }],
  //                 yAxes: [{
  //                     ticks: {
  //                 display: false, //this will remove only the label
                 
  //             },
  //                     gridLines: {
  //                         color: "rgba(0, 0, 0, 0)",
  //                         display: false

  //                     }
  //                 }]
  //             },
             
  //             animation: {
  //                 duration: 10000,
  //                 // onProgress: function (animation) {
  //                 //     progress.value = animation.currentStep / animation.numSteps;
  //                 // },
  //                 // onComplete: function () {
  //                 //     window.setTimeout(function () {
  //                 //         progress.value = 0;
  //                 //     }, 10000);
  //                 // }
  //             }
  //         }
  //     };
      // var progress = document.getElementById('animationProgress');
      var config2 = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                //   onComplete: function () {
                //       window.setTimeout(function () {
                //           progress.value = 0;
                //       }, 10000);
                //   }
              }
          }
      };


      var config1 = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                //   onComplete: function () {
                //       window.setTimeout(function () {
                //           progress.value = 0;
                //       }, 10000);
                //   }
              }
          }
      };
      // var progress = document.getElementById('animationProgress');
      var config4 = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                //   onComplete: function () {
                //       window.setTimeout(function () {
                //           progress.value = 0;
                //       }, 10000);
                //   }
              }
          }
      };

      var config5 = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                //   onComplete: function () {
                //       window.setTimeout(function () {
                //           progress.value = 0;
                //       }, 10000);
                //   }
              }
          }
      };
      var config3 = {
          type: 'line',
          
          data: {
              grid: false,
              display: false,
              //                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              labels: ['', '', '', '', '', '', ''],
              datasets: [{
                  pointRadius: 0,
                  label: 'My First dataset',
                  fill: true,
                  borderColor: window.chartColors.grey,
                  backgroundColor: window.chartColors.grey,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              }, {
                  pointRadius: 0,
                  label: 'My Second dataset ',
                  fill: true,
                  borderColor: window.chartColors.purple,
                  backgroundColor: window.chartColors.purple,
                  data: [
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10,
                      randomScalingFactor()/10
                  ]
              },
             ]
          },
          options: {
              legend: {
      display: false
  },
  tooltips: {
      callbacks: {
         label: function(tooltipItem) {
                return tooltipItem.yLabel;
         }
      }
  },
  // elements: {
  //                 point:{
  //                     radius: 1
  //                 }
  //             }
  //         },
              
              scales: {
                 
                  xAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }],
                  yAxes: [{
                      ticks: {
                  display: false, //this will remove only the label
                 
              },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false

                      }
                  }]
              },
             
              animation: {
                  duration: 10000,
                  // onProgress: function (animation) {
                  //     progress.value = animation.currentStep / animation.numSteps;
                  // },
                //   onComplete: function () {
                //       window.setTimeout(function () {
                //           progress.value = 0;
                //       }, 10000);
                //   }
              }
          }
      };
      window.onload = function () {

    //       var ctx4 = document.getElementById('canvas4').getContext('2d');
    //       ctx4.canvas.height = 50;
    //       ctx4.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
    //       window.myLine4 = new Chart(ctx4, config4);
    //       setInterval(function () {
    //       config4.data.datasets.forEach(function (dataset) {
    //           dataset.data = dataset.data.map(function () {
    //               return (randomScalingFactor())/10;
    //           });
    //       });
    //       console.log("f4")
    //       window.myLine4.update();
    //   }, 5000)




          var ctx3 = document.getElementById('canvas3').getContext('2d');
          ctx3.canvas.height = 50;
          ctx3.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
          window.myLine3 = new Chart(ctx3, config3);
          setInterval(function () {
          config3.data.datasets.forEach(function (dataset) {
              dataset.data = dataset.data.map(function () {
                  return (randomScalingFactor())/10;
              });
          });
        //   console.log("f1")
          window.myLine3.update();
      }, 5000)

          var ctx2 = document.getElementById('canvas2').getContext('2d');
          ctx2.canvas.height = 50;
          ctx2.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
          window.myLine2 = new Chart(ctx2, config2);
          setInterval(function () {
          config2.data.datasets.forEach(function (dataset) {
              dataset.data = dataset.data.map(function () {
                  return (randomScalingFactor())/10;
              });
          });
          
        //   console.log("f2")
          window.myLine2.update();
      }, 5000)


      var ctx1 = document.getElementById('canvas1').getContext('2d');
          ctx1.canvas.height = 50;
          ctx1.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
          window.myLine1 = new Chart(ctx1, config1);
          setInterval(function () {
          config1.data.datasets.forEach(function (dataset) {
              dataset.data = dataset.data.map(function () {
                  return (randomScalingFactor())/10;
              });
          });
        //   console.log("f1")
          window.myLine1.update();
      }, 5000)

      var ctx5 = document.getElementById('canvas5').getContext('2d');
          ctx5.canvas.height = 50;
          ctx5.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
          window.myLine5 = new Chart(ctx5, config5);
          setInterval(function () {
          config5.data.datasets.forEach(function (dataset) {
              dataset.data = dataset.data.map(function () {
                  return (randomScalingFactor())/10;
              });
          });
        //   console.log("f1")
          window.myLine5.update();
      }, 5000)

      // var ctx = document.getElementById('canvas').getContext('2d');
      //     ctx.canvas.height = 50;
      //     ctx.canvas.style.backgroundColor = 'rgb(24,24,24, 0)'
      //     window.myLine = new Chart(ctx, config);
      //     setInterval(function () {
      //     config.data.datasets.forEach(function (dataset) {
      //         dataset.data = dataset.data.map(function () {
      //             return (randomScalingFactor())/10;
      //         });
      //     });
      //     console.log("f1")
      //     window.myLine.update();
      // }, 10000)
      };
      // document.getElementById('randomizeData').addEventListener('click', function () {
      //     config.data.datasets.forEach(function (dataset) {
      //         dataset.data = dataset.data.map(function () {
      //             return randomScalingFactor()/10/10;
      //         });
      //     });
      //     window.myLine.update();
      // });