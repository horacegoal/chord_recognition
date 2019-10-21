
let synth;

let inputValue;
let notesArr;
function setup() {
    createCanvas(whiteKeyWidth*7, whiteKeyLength);
    synth = new Tone.Synth().toMaster();
}

let whiteKeyLength = 14.7 * 35;
let whiteKeyWidth = 2.1 * 35;
let blackKeyLength = 9.7 * 35;
let blackKeyWidth = 1.1 * 35;
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
    rect(55,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['D#', 'Eb'], notesArr);
    rect(whiteKeyWidth+55,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['F#', 'Gb'], notesArr);
    rect(whiteKeyWidth*3+55,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['G#', 'Ab'], notesArr);
    rect(whiteKeyWidth*4+55,0,blackKeyWidth,blackKeyLength)
    fill('black');
    fillColor(['A#', 'Bb'], notesArr);
    rect(whiteKeyWidth*5+55,0,blackKeyWidth,blackKeyLength)

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
            case (mouseX >= 0 && mouseX < 55):
                if(!notesArr.includes('C')){
                    inputValue += 'C';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("C4", "8n");
                }
                break;
            case (mouseX >= 0 && mouseX < 55 + blackKeyWidth):
                if(!notesArr.includes('C#')){
                    inputValue += 'C#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("C#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth + 55):
                if(!notesArr.includes('D')){
                    inputValue += 'D';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("D4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth + 55 + blackKeyWidth):
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

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 3 + 55):
                if(!notesArr.includes('F')){
                    inputValue += 'F';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("F4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 3 + 55 + blackKeyWidth):
                if(!notesArr.includes('F#')){
                    inputValue += 'F#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("F#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 4 + 55):
                if(!notesArr.includes('G')){
                    inputValue += 'G';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("G4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 4 + 55 + blackKeyWidth):
                if(!notesArr.includes('G#')){
                    inputValue += 'G#';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("G#4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 5 + 55):
                if(!notesArr.includes('A')){
                    inputValue += 'A';
                    let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                    nativeInputValueSetter.call(notesinput, inputValue);

                    notesinput.dispatchEvent(event);
                    synth.triggerAttackRelease("A4", "8n");
                }
                break;

            case (mouseX >= 0 && mouseX < whiteKeyWidth * 5 + 55 + blackKeyWidth):
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