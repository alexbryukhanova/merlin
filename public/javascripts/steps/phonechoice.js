/**
 * Created by bryukhaa on 11/18/15.
 */

var FlatButton = mui.FlatButton,
    RaisedButton = mui.RaisedButton;

var ChoosePhone = React.createClass({
    next: function () {
        // Scroll down
//        var node = this.getDOMNode();
//        node.scrollTop = node.scrollHeight;

        // Load next step
        this.props.nextStep();
    },
    render: function () {
        return (
            <div className="col-md-offset-1 col-md-10">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <h5>Nokia slider</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>iPhone(R) 5S</h5>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>iPhone(R) 6</h5>
                    </div>
                </div>
                <div className="text-center">
                    <FlatButton label="Now pick your machine >>" primary={true} onClick={this.next} />
                </div>
            </div>
        );
    }
});

module.exports = ChoosePhone;