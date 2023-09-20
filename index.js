// code your solution here
function saturdayFun(activity='roller-skate'){
 return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(task='go to the office'){
    return `This Monday, I will ${task}.`
}
mondayWork();

function wrapAdjective(string="*"){
    return function innerFunc(param='special'){
        return `You are ${string}${param}${string}!`
    }
}
const x = wrapAdjective('||')