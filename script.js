// preloader
$(window).on('load', function() {
    $('#preLoader').delay(1000).fadeOut(500);
  });
  



const right1Selecter= document.querySelector(".right1");
const rightSelecter= document.querySelector(".right2");
const right3Selecter= document.querySelector(".right3");
const right4Selecter= document.querySelector(".right4");
const root = document.querySelector(":root");
const letterWraper = document.querySelector(".letterContainer");
const btnSelector = document.querySelector(".submite");
const inputSelector = document.querySelector("#my-input");
const labelSelector = document.querySelector(".labl");
const letterWraper2 = document.querySelector(".letterContainer2");
const wordSelector = document.querySelector(".word");

const btnSelector1 = document.querySelector(".submite1");
const inputSelector1 = document.querySelector("#my-input1");
const labelSelector1 = document.querySelector(".labl1");
const inputContainer1 = document.querySelector(".inputContain1");
const findSelector = document.querySelector(".find");
const restartSelector = document.querySelector(".restart");
const inputSelector3 = document.querySelector(".inpt3");

let colNoArr1 = new Array();
let rowNoArr1 = new Array();
let counter = 0;
let counter1 = 0;
let labelArr = ["1st Letter's Column","2nd Letter's Column","3rd Letter's Column","4th Letter's Column",
"5th Letter's Column","6th Letter's Column","7th Letter's Column","8th Letter's Column"];
let counter2 = 1;
let tempArr = new Array();
let flag3 = false;
let FindArr = new Array();
let foundWord;
let lengthWord = 0;




const b = document.querySelector(".open");
b.addEventListener("click",()=>{
    if(inputSelector3.value <3 || inputSelector3>8)
        alert("Enter value between 3 to 8");
    else{
        rightSelecter.classList.remove("hidden");
        right1Selecter.classList.remove("slide-in");
        right1Selecter.classList.add("hidden");
        restartSelector.classList.remove("hidden");
        rightSelecter.classList.add("slide-in");
        lengthWord  =inputSelector3.value;
        displayAlphabates(lengthWord);
    }
});

restartSelector.addEventListener("click",()=>{
    right1Selecter.classList.remove("hidden")
    right1Selecter.classList.add("slide-in");
    restartSelector.classList.add("hidden");
    rightSelecter.classList.add("hidden");
    right3Selecter.classList.add("hidden");
    right4Selecter.classList.add("hidden");
    flag3 = false;
    counter = 0;
    counter2 = 1;
    lengthWord=0;
    foundWord ="";
    FindArr = [];
    // inputContainer1.classList.remove("slide-out");
    findSelector.classList.add("hidden");
    myInput.setAttribute("value", "1");
    myInput.value = 1;
    myInput1.setAttribute("value", "1");
    myInput1.value = 1;
    labelSelector.textContent=labelArr[0];
    inputSelector3.value ="";
    findSelector.classList.remove("slide-in1");
    while (letterWraper.firstChild) {
        letterWraper.removeChild(letterWraper.firstChild);
    }
    while (letterWraper2.firstChild) {
        letterWraper2.removeChild(letterWraper2.firstChild);
    }

})
btnSelector.addEventListener("click",()=>{
    right1Selecter.classList.remove("slide-in");
    if(!flag3){
        takeInput(lengthWord,colNoArr1,inputSelector,labelSelector);
        // console.log("btn cliked");
        if(counter2>lengthWord){
            rightSelecter.classList.add("hidden");
            right3Selecter.classList.remove("hidden");
            right3Selecter.classList.add("slide-in");
            inputContainer1.classList.remove("hidden");
            SelectedColumn(lengthWord);
            flag3=true;
            counter= 0;
            counter2=0;
            labelSelector1.textContent=labelArr[0];
        }
    }
    
});

btnSelector1.addEventListener("click",()=>{
    right1Selecter.classList.remove("slide-in");
    if(counter2<lengthWord){
        takeInput(lengthWord,rowNoArr1,inputSelector1,labelSelector1);
    }
    if(counter2>=lengthWord){

        // inputContainer1.classList.add("slide-out");
        findSelector.classList.remove("hidden");
        findSelector.classList.add("slide-in1");
        inputContainer1.classList.add("hidden");
    }
});

findSelector.addEventListener("click",()=>{
    findArrF();
    right4Selecter.classList.remove("hidden");
    right3Selecter.classList.add("hidden");
    right4Selecter.classList.add("slide-in");
    console.log("4hhh");
});

function findArrF(){
    for(let i= 0;i<lengthWord;i++){
        FindArr[i]= tempArr[rowNoArr1[i]][colNoArr1[i]];
        // console.log(FindArr[i]);
    }
    foundWord = FindArr.join('');
    // console.log(foundWord);
    wordSelector.textContent = foundWord;
}
function SelectedColumn(size){
    let colName = new Array();
    let colNameCounter = 0;
    let newDivRowEle = new Array();
    for(let i =0;i<=size;i++){
        const newDivRow = document.createElement("div");
        letterWraper2.appendChild(newDivRow);
        newDivRow.classList.add("display");  
        // console.log("finished");
    }
    const selectRows = document.querySelectorAll(".display");
    for(let j=0;j<selectRows.length;j++){
        for(let i=0;i<tempArr.length;i++){
            // console.log(tempArr.length);
            //logic to display column number on top of every colum
            if(j==0){  
                colName[0] = document.createElement("div");
                colName[1] = document.createElement("h3");
                selectRows[j].appendChild(colName[0]);
                colName[0].appendChild(colName[1]);
                colName[1].textContent = ++colNameCounter;
                colName[0].classList.add("colNameDesign");
                continue;
            }
            //logic to transpose the selected column and display
            if(tempArr[i][colNoArr1[j-1]] != undefined){
            newDivRowEle[0] = document.createElement("div");
            newDivRowEle[1] = document.createElement("h3");
            newDivRowEle[1].textContent = tempArr[i][colNoArr1[j-1]];
            newDivRowEle[0].classList.add("show");
            selectRows[j].appendChild(newDivRowEle[0]);
            newDivRowEle[0].appendChild(newDivRowEle[1]);
            }
        }
    }
}


function takeInput(size,colNoArr,input11,label11){
    if(input11.value == "")
        alert("Please enter Number");
    else
        if(counter<size){
            colNoArr[counter] = input11.value-1;
            // console.log(colNoArr[counter]);
            counter++;
            input11.value = 1;
            input11.setAttribute("value","1");
            label11.textContent = labelArr[counter];
            counter2++;
        }
}



function displayAlphabates(wordSize){

        let letter = 10;
        let newDiv = new Array();
        let text = "";
        let letter1 = 10;
        let txt = '';
        let flag2 = false;
        // const newDivA = document.createElement("div");
        // rightSelecter.appendChild(newDivA);
        // newDivA.classList.add("letterContainer");
        // const letterWraper = document.querySelector(".letterContainer");

        letterWraper.classList.remove("hidden");
        for(let i=1 ;i<=26;i++){
            newDiv[i] = new Array(1);
            if(i==1){
                for(let k=1;k<=wordSize;k++){
                    newDiv[i][0] = document.createElement("div");
                    newDiv[i][1] = document.createElement("h3");
                    newDiv[i][1].textContent = k;
                    newDiv[i][0].classList.add('colNameDesign');
                    letterWraper.appendChild(newDiv[i][0]);
                    newDiv[i][0].appendChild(newDiv[i][1]);
                }
            }
                text = letter.toString(36);
                text = text.toUpperCase();
                newDiv[i][0] = document.createElement("div");
                newDiv[i][1] =  document.createElement("h3");
                newDiv[i][1].textContent = text;
                letter++;
                letterWraper.appendChild(newDiv[i][0]);
                newDiv[i][0].appendChild(newDiv[i][1]);
                newDiv[i][0].classList.add('show');
                root.style.setProperty('--columNum',wordSize);

                if(!flag2){
                    tempArr[i-1] = new Array();
                    for(let j =0;j<wordSize;j++){
                        txt= letter1.toString(36);
                        txt= txt.toUpperCase();
                        tempArr[i-1][j] = txt;
                        letter1++;
                        // console.log(tempArr[i-1][j]);
                        if(txt == 'Z'){
                            flag2 =true;
                            break;
                        }
                    }
                    // console.log("");
                }
        }
}





const myInput = document.getElementById("my-input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = myInput.getAttribute("min");
    let max = myInput.getAttribute("max");
    let step = myInput.getAttribute("step");
    let val = myInput.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max){
      myInput.value = newValue.toString();
      myInput.setAttribute("value", newValue);
        
    }
}


const myInput1 = document.getElementById("my-input1");
function stepper1(btn){
    let id = btn.getAttribute("id");
    let min = myInput1.getAttribute("min");
    let max = myInput1.getAttribute("max");
    let step = myInput1.getAttribute("step");
    let val = myInput1.getAttribute("value");
    let calcStep = (id == "increment") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;
    if(newValue >= min && newValue <= max){
      myInput1.value = newValue.toString();
      myInput1.setAttribute("value", newValue);
        
    }
}

