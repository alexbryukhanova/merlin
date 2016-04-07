/**
 * Created by bryukhaa on 11/5/15.
 */
var RaisedButton = mui.RaisedButton
    ;

var Welcome = React.createClass({
    getInitialState: function () {
        return {
            welcomeVideoUrl: "http://vimeo.com/..."
        };
    },
    next: function () {
        // Scroll down
//        var node = this.getDOMNode();
//        node.scrollTop = node.scrollHeight;

        // Load next step
        this.props.nextStep('whoweare');
    },
    render: function () {
        return (
            <div style={{
                height: '100%'
                }}>
                <iframe src="https://www.youtube.com/embed/I0cKFPoFucw" 
                        style={{ 
                            border: 0,
                             minHeight: '100%',
                             width: '100%', 
                            position: 'absolute'
                         }}> </iframe>

                <RaisedButton label="Start" primary={true} onClick={this.next}
                    style={{
                        backgroundColor: 'red'

                    }}/>
            </div>
        );
    }
});

module.exports = Welcome;


