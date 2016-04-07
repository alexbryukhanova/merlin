/**
 * Created by bryukhaa on 11/17/15.
 */

var FlatButton = mui.FlatButton;

var Team = React.createClass({
    next: function () {

        // Load next step
        this.props.nextStep();
    },
    render: function() {
        return (
            <div className="step">
                <div className="col-md-offset-1 col-md-10">
                    <h3>
                    Lifion Tribe
                        <p><small>People around the lab you should meet</small></p>
                    </h3>
                </div>
                <div className="col-md-8">
                    Org chart here
                </div>
                <div className="col-md-4">
                    <h2>People of note</h2>
                    They go here
                </div>
                <div className="text-center">
                    <FlatButton label="Get ready for your first day >>" primary={true} onClick={this.next} />
                </div>
            </div>
        );
    }
});

module.exports = Team;