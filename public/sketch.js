
let synth;
// 55
let blackKeyOffSet = 55;

let inputValue;
let notesArr;
function setup() {
    createCanvas(whiteKeyWidth*7, whiteKeyLength);
    synth = new Tone.Synth().toMaster();
}
let scale = 35;
let whiteKeyLength = 14.7 * scale;
let whiteKeyWidth = 2.1 * scale;
let blackKeyLength = 9.7 * scale;
let blackKeyWidth = 1.1 * scale;
let rule = /([CDEFGAB][#b])|[CDEFGAB]/g;

function draw() {
    // noLoop()
    // translate(450, 20)
    inputValue = document.getElementById('notesinput').value;
    notesArr = inputValue.match(rule);
    if(notesArr === null){
        notesArr = [];
    }
    // console.log(notesArr)
    background(220);
    // let whiteX = 0;

    // for(let i = 0; i < 8; i++){
        fill('white');
        fillColor('C', notesArr);
        rect(0,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('D', notesArr);
        rect(whiteKeyWidth,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('E', notesArr);
        rect(whiteKeyWidth*2,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('F', notesArr);
        rect(whiteKeyWidth*3,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('G', notesArr);
        rect(whiteKeyWidth*4,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('A', notesArr);
        rect(whiteKeyWidth*5,0,whiteKeyWidth,whiteKeyLength)

        fill('white');
        fillColor('B', notesArr);
        rect(whiteKeyWidth*6,0,whiteKeyWidth,whiteKeyLength)

        // fill('white');
        // fillColor('B#', notesArr);
        // rect(whiteKeyWidth*7,0,whiteKeyWidth,whiteKeyLength)

        // whiteX += whiteKeyWidth;
    // }
    fill('black');
    fillColor(['C#', 'Db'], notesArr);
    rect(blackKeyOffSet,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['D#', 'Eb'], notesArr);
    rect(whiteKeyWidth+blackKeyOffSet,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['F#', 'Gb'], notesArr);
    rect(whiteKeyWidth*3+blackKeyOffSet,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['G#', 'Ab'], notesArr);
    rect(whiteKeyWidth*4+blackKeyOffSet,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['A#', 'Bb'], notesArr);
    rect(whiteKeyWidth*5+blackKeyOffSet,0,blackKeyWidth,blackKeyLength)

}


function fillColor(note, arr){
   

    if(arr){
        if(note instanceof Array){
            note.forEach((note) => {
                if(arr.includes(note)){
                    fill('pink');
                }
            })
        }else{
            if(arr.includes(note)){
                fill('pink');
            }
        }      
    }
}
// let inputValue = '';
function mousePressed(){
    let notesinput = document.getElementById('notesinput');
    let event = new Event('input', { bubbles: true});
    if(mouseY >= blackKeyLength && mouseY <= whiteKeyLength){
        

        switch(true){
            case (mouseX >= 0 && mouseX < whiteKeyWidth):
                if(!notesArr.includes('C')){
                    inputValue += 'C';

                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("C4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*2):
                if(!notesArr.includes('D')){
                    inputValue += 'D';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("D4", "8n");

                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*3):
                if(!notesArr.includes('E')){
                    inputValue += 'E';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("E4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*4):
                if(!notesArr.includes('F')){
                    inputValue += 'F';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("F4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*5):
                if(!notesArr.includes('G')){
                    inputValue += 'G';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("G4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*6):
                if(!notesArr.includes('A')){
                    inputValue += 'A';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("A4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*7):
                if(!notesArr.includes('B')){
                    inputValue += 'B';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("B4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth*8):
                if(!notesArr.includes('B#')){
                    inputValue += 'B#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("B#4", "8n");
                }
                break;

            
        }
    }else if(mouseY >= 0 && mouseY <= blackKeyLength){
        switch(true){
            case (mouseX >= 0 && mouseX < blackKeyOffSet):
                if(!notesArr.includes('C')){
                    inputValue += 'C';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("C4", "8n");
                }
                break;
            case (mouseX >= 0 && mouseX < blackKeyOffSet + blackKeyWidth):
                if(!notesArr.includes('C#')){
                    inputValue += 'C#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("C#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth + blackKeyOffSet):
                if(!notesArr.includes('D')){
                    inputValue += 'D';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("D4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth + blackKeyOffSet + blackKeyWidth):
                if(!notesArr.includes('D#')){
                    inputValue += 'D#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("D#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 3):
                if(!notesArr.includes('E')){
                    inputValue += 'E';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("E4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 3 + blackKeyOffSet):
                if(!notesArr.includes('F')){
                    inputValue += 'F';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("F4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 3 + blackKeyOffSet + blackKeyWidth):
                if(!notesArr.includes('F#')){
                    inputValue += 'F#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("F#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 4 + blackKeyOffSet):
                if(!notesArr.includes('G')){
                    inputValue += 'G';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("G4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 4 + blackKeyOffSet + blackKeyWidth):
                if(!notesArr.includes('G#')){
                    inputValue += 'G#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("G#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 5 + blackKeyOffSet):
                if(!notesArr.includes('A')){
                    inputValue += 'A';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("A4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 5 + blackKeyOffSet + blackKeyWidth):
                if(!notesArr.includes('A#')){
                    inputValue += 'A#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("A#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 7):
                if(!notesArr.includes('B')){
                    inputValue += 'B';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("B4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 8):
                if(!notesArr.includes('B#')){
                    inputValue += 'B#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("B#4", "8n");
                }
                break;
            
        }
    }
}
////35
function changeScale(x) {
    if (x.matches) { // If media query matches
      scale = 20;
      blackKeyOffSet = 30;
      whiteKeyLength = 14.7 * scale;
      whiteKeyWidth = 2.1 * scale;
      blackKeyLength = 9.7 * scale;
      blackKeyWidth = 1.1 * scale;
    } else {
      scale = 35;
      blackKeyOffSet = 55;
    }
  }
  
  let x = window.matchMedia("(max-width: 500px)")
  changeScale(x) // Call listener function at run time
  x.addListener(changeScale) // Attach listener function on state changes