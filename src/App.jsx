let soundBank = {
    'Q':{
        keyCode: 81,
        id: 'Q',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        name: "Chord 1"
        
},
   'W':{
        keyCode: 87,
        id: 'W',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        name: 'Chord 2'
    },
    'E':{
        keyCode: 69,
        id: "E",
        soundURL : 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        name: 'Chord 3'
    },
    'A':{
        keyCode: 65,
        id: 'A', soundURL:'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        name: 'Shaker'
    },
    'S':{
        keyCode: 83,
        id: 'S',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        name: 'Open HH'
    },
    'D':{
        keyCode: 68,
        id: 'D',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        name:'Closed HH'
    },
    'Z':{
        keyCode: 90,
        id: 'Z',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        name:'Punchy Kick'
    },
    'X':{
        keyCode: 88,
        id: 'X',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        name: 'Side Stick'
    },
    'C':{
        keyCode: 67,
        id: 'C',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        name: 'Snare'
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Default Name'
        }
        this.getName = this.getName.bind(this);
    }
    
     getName(soundName){
         this.setState({
             name: soundName
         })   
        }
    
    render(){
        let arr = ['Q','W','E','A','S','D','Z','X','C'];
        let DrumPads = arr.map((a) => (<DrumButton letter={a} soundUrl ={soundBank[a]['soundURL']} getName={this.getName} />));
        
       
        
        return(
            <div id='drum-machine'>
                <div id='drum-button'>{DrumPads}</div>
                <h1>{this.state.name}</h1>
            </div>
                
        )
    }
}


class DrumButton extends React.Component{
    constructor(props){
        super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.getName = this.getName.bind(this);
    }
    
    getName = this.props.getName;

    playSound(){
        let sound = document.getElementById(this.props.letter);
        sound.currentTime = 0;
        sound.play();
        getName(soundBank[this.props.letter]['name']);
    }
    
    handleKey(event){
        if (event.keyCode === soundBank[this.props.letter]['keyCode']){
            this.playSound();
        }    
    }
    
    componentDidMount(){
        document.addEventListener('keydown',this.handleKey);
    }
    
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKey);
    }
    render(){
        return(
                
                <div className="drum-pad" onClick = {this.playSound}>
                    <p>{this.props.letter}</p>
            
                    <audio id = {this.props.letter} src = {this.props.soundUrl}></audio>
                </div>
                
        )
    }
}

class TestSubject extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
        <div>
            <h1> THIS WORKS</h1>    
        </div>
        );
    }
}
ReactDOM.render(<App/>, document.querySelector('#AppContainer'));