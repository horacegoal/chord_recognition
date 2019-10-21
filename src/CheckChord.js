class CheckChoed{
    constructor(notes){
        this.notes = notes;
        this.chordDatabase = {
            'C':    ['C','E','G'],
            'Cm':   ['C','D#','G'],
            'Cdim': ['C','D#','F#'],
            'Caug': ['C','E','G#'],
            'Csus': ['C','F','G'],
            'C2':   ['C','D','E','G'],
            'C6':   ['C','E','G','A'],
            'Cm6':  ['C','D#','G','A'],
            'CM7':  ['C','E','G','B'],
            'CM9':  ['C','E','G','B','D'],
            'C7':   ['C','E','G','A#'],
            'Cm7':  ['C','D#','G','A#'],

            'Db':   ['C#','F','G#'],
            'Dbm':  ['C#','E','G#'],
            'Dbdim':['C#','E','G'],
            'Dbaug':['C#','F','A'],
            'Dbsus':['C#','F#','G#'],
            'Db2':  ['C#','D#','F','G#'],
            'Db6':  ['C#','F','G#','A#'],
            'Dbm6': ['C#','E','G#','A#'],
            'DbM7': ['C#','F','G#','C'],
            'DbM9': ['C#','F','G#','C','D#'],
            'Db7':  ['C#','F','G#','B'],
            'Dbm7': ['C#','E','G#','B'],

            'D':   ['D','F#','A'],
            'Dm':  ['D','F','A'],
            'Ddim':['D','F','G#'],
            'Daug':['D','F#','A#'],
            'Dsus':['D','G','A'],
            'D2':  ['D','E','F#','A'],
            'D6':  ['D','F#','A','B'],
            'Dm6': ['D','F','A','B'],
            'DM7': ['D','F#','A','C#'],
            'DM9': ['D','F#','A','C#','E'],
            'D7':  ['D','F#','A','C'],
            'Dm7': ['D','F','A','C'],

            'Eb':   ['D#','G','A#'],
            'Ebm':  ['D#','F#','A#'],
            'Ebdim':['D#','F#','A'],
            'Ebaug':['D#','G','B'],
            'Ebsus':['D#','G#','A#'],
            'Eb2':  ['D#','F','G','A#'],
            'Eb6':  ['D#','G','A#','C'],
            'Ebm6': ['D#','F#','A#','C'],
            'EbM7': ['D#','G','A#','D'],
            'EbM9': ['D#','G','A#','D','F'],
            'Eb7':  ['D#','G','A#','C#'],
            'Ebm7': ['D#','F#','A#','C#'],

            'E':   ['E','G#','B'],
            'Em':  ['E','G','B'],
            'Edim':['E','G','A#'],
            'Eaug':['E','G#','C'],
            'Esus':['E','A','B'],
            'E2':  ['E','F#','G#','B'],
            'E6':  ['E','G#','B','C#'],
            'Em6': ['E','G','B','C#'],
            'EM7': ['E','G#','B','D#'],
            'EM9': ['E','G#','B','D#','F#'],
            'E7':  ['E','G#','B','D'],
            'Em7': ['E','G','B','D'],

            'F':   ['F','A','C'],
            'Fm':  ['F','G#','C'],
            'Fdim':['F','G#','B'],
            'Faug':['F','A','C#'],
            'Fsus':['F','A#','C'],
            'F2':  ['F','G','A','C'],
            'F6':  ['F','A','C','D'],
            'Fm6': ['F','G#','C','D'],
            'FM7': ['F','A','C','E'],
            'FM9': ['F','A','C','E','G'],
            'F7':  ['F','A','C','D#'],
            'Fm7': ['F','G#','C','D#'],

            'Gb':   ['F#','A#','C#'],
            'Gbm':  ['F#','A','C#'],
            'Gbdim':['F#','A','C'],
            'Gbaug':['F#','A#','D'],
            'Gbsus':['F#','B','C#'],
            'Gb2':  ['F#','G#','A#','C#'],
            'Gb6':  ['F#','A#','C#','D#'],
            'Gbm6': ['F#','A','C#','D#'],
            'GbM7': ['F#','A#','C#','F'],
            'GbM9': ['F#','A#','C#','F','G#'],
            'Gb7':  ['F#','A#','C#','E'],
            'Gbm7': ['F#','A','C#','E'],

            'G':   ['G','B','D'],
            'Gm':  ['G','A#','D'],
            'Gdim':['G','A#','C#'],
            'Gaug':['G','B','D#'],
            'Gsus':['G','C','D'],
            'G2':  ['G','A','B','D'],
            'G6':  ['G','B','D','E'],
            'Gm6': ['G','A#','D','E'],
            'GM7': ['G','B','D','F#'],
            'GM9': ['G','B','D','F#','A'],
            'G7':  ['G','B','D','F'],
            'Gm7': ['G','A#','D','F'],

            'Ab':   ['G#','C','D#'],
            'Abm':  ['G#','B','D#'],
            'Abdim':['G#','B','D'],
            'Abaug':['G#','C','E'],
            'Absus':['G#','C#','D#'],
            'Ab2':  ['G#','A#','C','D#'],
            'Ab6':  ['G#','C','D#','F'],
            'Abm6': ['G#','B','D#','F'],
            'AbM7': ['G#','C','D#','G'],
            'AbM9': ['G#','C','D#','G','A#'],
            'Ab7':  ['G#','C','D#','F#'],
            'Abm7': ['G#','B','D#','F#'],

            'A':   ['A','C#','E'],
            'Am':  ['A','C','E'],
            'Adim':['A','C','D#'],
            'Aaug':['A','C#','F'],
            'Asus':['A','D','E'],
            'A2':  ['A','B','C#','E'],
            'A6':  ['A','C#','E','F#'],
            'Am6': ['A','C','E','F#'],
            'AM7': ['A','C#','E','G#'],
            'AM9': ['A','C#','E','G#','B'],
            'A7':  ['A','C#','E','G'],
            'Am7': ['A','C','E','G'],

            'Bb':   ['A#','D','F'],
            'Bbm':  ['A#','C#','F'],
            'Bbdim':['A#','C#','E'],
            'Bbaug':['A#','D','F#'],
            'Bbsus':['A#','D#','F'],
            'Bb2':  ['A#','C','D','F'],
            'Bb6':  ['A#','D','F','G'],
            'Bbm6': ['A#','C#','F','G'],
            'BbM7': ['A#','D','F','A'],
            'BbM9': ['A#','D','F','A','C'],
            'Bb7':  ['A#','D','F','G#'],
            'Bbm7': ['A#','C#','F','G#'],

            'B':   ['B','D#','F#'],
            'Bm':  ['B','D','F#'],
            'Bdim':['B','D','F'],
            'Baug':['B','D#','G'],
            'Bsus':['B','E','F#'],
            'B2':  ['B','C#','D#','F#'],
            'B6':  ['B','D#','F#','G#'],
            'Bm6': ['B','D','F#','G#'],
            'BM7': ['B','D#','F#','A#'],
            'BM9': ['B','D#','F#','A#','C#'],
            'B7':  ['B','D#','F#','A'],
            'Bm7': ['B','D','F#','A'],
        }
    }

    findChord(){
        let rule = /([CDEFGAB][#b])|[CDEFGAB]/g;
        let notesArr = this.notes.match(rule);
        if(notesArr !== null){
            let keys = Object.keys(this.chordDatabase);
            let chordScores = {};
            for(let i = 0; i < keys.length; i++){
                let score = 0;
                for(let j = 0; j < notesArr.length; j++){
                    if(this.chordDatabase[keys[i]].includes(notesArr[j])){
                        score++;
                    }
                }
                chordScores[keys[i]] = score;
            }

            let maxScore = 0;
            for(let i = 0; i < keys.length; i++){
                let score = chordScores[keys[i]];
                if(score > maxScore){
                    maxScore = score;
                }
            }
            let chords = [];
            
            for(let i = 0; i < keys.length; i++){
                if(chordScores[keys[i]] === maxScore && maxScore !== 0 && this.chordDatabase[keys[i]].length === maxScore){
                    chords = [];
                    chords.push(keys[i]);
                    break;
                }else{
                    if(chordScores[keys[i]] === maxScore && maxScore !== 0){
                        console.log(keys[i]);
                        chords.push(keys[i]);
                    }
                } 
            }
            return chords;
        }
    }
}

export default CheckChoed;