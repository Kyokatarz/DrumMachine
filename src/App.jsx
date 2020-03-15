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
            name: 'Power On',
            pwr: true,
            
            
        }
        this.triggerThis = this.triggerThis.bind(this);
    }
    
     triggerThis(newName){
         this.setState({
             name: newName
         })   
        }
    
    switchPwr(){
            
            if (this.state.pwr == false){
                this.setState(({pwr})=>({name: 'Power On',
                                        pwr: !pwr}))
            } else this.setState(({pwr})=>({name: 'Power Off',
                                        pwr: !pwr}))
                  
        }
    
    render(){
        let arr = ['Q','W','E','A','S','D','Z','X','C'];
        let DrumPads = arr.map((a) => (<DrumButton letter={a} soundUrl ={soundBank[a]['soundURL']}  triggerThis = {this.triggerThis} pwr = {this.state.pwr}/>));
        
       
        
        return(
            <div id='drum-machine'>
                <div id='drum-button'>{DrumPads}</div>
                <Display soundName={this.state.name}/>
                <div id='pwr-control'>
                        {
                            this.state.pwr == true ? 
                            <div className = 'on' onClick={this.switchPwr.bind(this)}></div> : 
                            <div className = 'off' onClick={this.switchPwr.bind(this)}></div>
                        }
                
                </div>    
            </div>
                
        )
    }
}


class DrumButton extends React.Component{
    constructor(props){
        super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKey = this.handleKey.bind(this);
    
    }


    playSound(){
        if (this.props.pwr == true){
            let sound = document.getElementById(this.props.letter);
            sound.currentTime = 0;
            sound.play();
            this.props.triggerThis(soundBank[this.props.letter]['name']);
        }
    }
    
    handleKey(event){
        if(this.props.pwr == true)
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

class Display extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <p id = 'display'>{this.props.soundName}</p>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#AppContainer'));