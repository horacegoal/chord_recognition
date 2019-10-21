import React, {Component} from 'react';
import NotesForm from './NotesForm';
import CheckChord from './CheckChord';
import Result from './Result';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        inputValue: '',
        chords: []
    }

    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(e){
        
    this.setState({
        inputValue: e.target.value
    }, () => {
        this.checkChord = new CheckChord(this.state.inputValue);
        this.chords = this.checkChord.findChord();
        this.setState({
          chords: this.chords
        })
    })  
  }

  render(){
    return (
    <div className="App">
      <NotesForm method={this.handleChange}/>
      <Result chords={this.chords}/>
    </div>
    );
  }
}



export default App;
