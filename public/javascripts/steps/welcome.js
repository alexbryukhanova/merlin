/**
 * Created by bryukhaa on 11/5/15.
 */
var RaisedButton = mui.RaisedButton;

var Welcome = React.createClass({
    getInitialState: function () {
        return {
            welcomeVideoUrl: "http://vimeo.com/..."
        };
    },
    next: function () {
        // Load next step
        this.props.nextStep('whoweare');
    },
    render: function () {
        return (
            <div className="step">
                <iframe src="https://www.youtube.com/embed/I0cKFPoFucw"
                        style={{ 
                            border: 0,
                             minHeight: '100%',
                             width: '100%', 
                            position: 'absolute'
                 }}>
                </iframe>

                <RaisedButton label="Start onboarding" primary={true} onClick={this.next}
                              style={{
                                  position: 'absolute',
                                  bottom: '10%',
                                  left: '45%'
                              }}/>
            </div>
        );
    }
});

module.exports = Welcome;


