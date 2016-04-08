/**
 * Created by bryukhaa on 11/18/15.
 */

var FlatButton = mui.FlatButton,
    SelectableItemGroup = require('../selectgroup');

var ChoosePhone = React.createClass({
    next: function () {
        // Scroll down
//        var node = this.getDOMNode();
//        node.scrollTop = node.scrollHeight;

        // Load next step
        this.props.nextStep();
    },
    render: function () {
        let phones = [];
        return (
            <div className="col-md-offset-1 col-md-10">
                <h3 style={{ marginBottom: '100px' }} className="header">
                    Your work phone
                    <p><small>For efficiency on the go</small></p>
                </h3>

                <SelectableItemGroup>
                    {phones}
                </SelectableItemGroup>

                <div className="col-md-12 text-center" style={{
                        marginTop: '100px'
                    }}>
                    <FlatButton label="Now pick your machine >>" primary={true} onClick={this.next} />
                </div>
            </div>
        );
    }
});

module.exports = ChoosePhone;