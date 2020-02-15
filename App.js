var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var soundBank = {
    Q: {
        keyCode: 81,
        id: 'Q',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
        name: "Chord 1"

    },
    W: {
        keyCode: 87,
        id: 'W',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
        name: 'Chord 2'
    },
    E: {
        keyCode: 69,
        id: "E",
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
        name: 'Chord-3'
    },
    A: {
        keyCode: 65,
        id: 'A', soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
        name: 'Shaker'
    },
    S: {
        keyCode: 83,
        id: 'S',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
        name: 'Open HH'
    },
    D: {
        keyCode: 68,
        id: 'D',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
        name: 'Closed HH'
    },
    Z: {
        keyCode: 90,
        id: 'Z',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
        name: 'Punchy Kick'
    },
    X: {
        keyCode: 88,
        id: 'X',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
        name: 'Side Stick'
    },
    C: {
        keyCode: 67,
        id: 'C',
        soundURL: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
        name: 'Snare'
    }
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var arr = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
            var DrumPads = arr.map(function (a) {
                return React.createElement(DrumButton, { letter: a, id: a });
            });

            return React.createElement(
                'div',
                { id: 'drum-machine' },
                React.createElement(
                    'div',
                    { id: 'drum-button' },
                    DrumPads
                )
            );
        }
    }]);

    return App;
}(React.Component);

var DrumButton = function (_React$Component2) {
    _inherits(DrumButton, _React$Component2);

    function DrumButton(props) {
        _classCallCheck(this, DrumButton);

        return _possibleConstructorReturn(this, (DrumButton.__proto__ || Object.getPrototypeOf(DrumButton)).call(this, props));
    }

    _createClass(DrumButton, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { id: this.props.id },
                React.createElement(
                    'p',
                    null,
                    this.props.letter
                )
            );
        }
    }]);

    return DrumButton;
}(React.Component);

var TestSubject = function (_React$Component3) {
    _inherits(TestSubject, _React$Component3);

    function TestSubject(props) {
        _classCallCheck(this, TestSubject);

        return _possibleConstructorReturn(this, (TestSubject.__proto__ || Object.getPrototypeOf(TestSubject)).call(this, props));
    }

    _createClass(TestSubject, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    ' THIS WORKS'
                )
            );
        }
    }]);

    return TestSubject;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#AppContainer'));