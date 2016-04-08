/**
 * Created by bryukhaa on 11/19/15.
 */
var FlatButton = mui.FlatButton,
    FloatingActionButton = mui.FloatingActionButton,
    RaisedButton = mui.RaisedButton;

var Computer = React.createClass({
    getInitialState: function() {
        return { isMacSelected: false, isHpSelected: false};
    },
    selectMac: function () {
        this.setState({ isMacSelected: true, isHpSelected: false});
    },
    selectHp: function () {
        this.setState({ isMacSelected: false, isHpSelected: true});
    },
    render: function () {
        let macClassname = "col-md-6 text-center";
        let macIcon;
        let macLabel = "Select";
        if(!this.state.isMacSelected && this.state.isHpSelected) {
            macClassname += " not-selected";
            macLabel = "Select";
        } else if (this.state.isMacSelected) {
            macIcon = <FontIcon className="material-icons">done</FontIcon>;
            macLabel = "Selected";
        }

        let hpClassname = "col-md-6 text-center";
        let hpLabel = "Select";
        let hpIcon;
        if(!this.state.isHpSelected && this.state.isMacSelected){
            hpClassname += " not-selected";
            hpLabel = "Select";
        } else if (this.state.isHpSelected) {
            hpLabel = "Selected";
            hpIcon = (<FontIcon className="material-icons">done</FontIcon>);
        }

        return (
            <div className="col-md-offset-1 col-md-10">
                <h3 style={{ marginBottom: '100px' }} className="header">
                    Your work machince
                    <p><small>The right tool for the right job</small></p>
                </h3>

                <div className={macClassname}>
                    <h5>MacBook Pro<p><small>Retina, 15-inch</small></p></h5>
                    <div className="col-md-12" style={{ background: 'url(images/macbook-pro.jpeg) center no-repeat',
                                                        backgroundSize: 'contain',
                                                        minHeight: '200px',
                                                        display: 'block' }}></div>
                    <div className="clearfix"></div>
                    <ul className="list-unstyled text-left" style={{
                        display: 'block',
                        marginTop: '20px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '245px'
                    }}>
                        <li><strong>Processor</strong> 2.6 GHz Intel Core i7</li>
                        <li><strong>Memory</strong> 16GB 1600 MHz DDR3</li>
                        <li><strong>Graphics</strong> Intel Iris Pro 1536 MB</li>
                        <li><strong>Software</strong> OS X 10.9.5</li>
                    </ul>
                    <RaisedButton label={macLabel} primary={true} onClick={this.selectMac} icon={macIcon} />
                </div>
                <div className={hpClassname}>
                    <h5 className="text-center">HP EliteBook Folio 1040 G2 Notebook PC<p><small>Touch, 14-inch</small></p></h5>
                    <div className="col-md-12" style={{
                        background: 'url(images/hp-elitebook.png) center no-repeat',
                        backgroundSize: 'contain',
                        minHeight: '200px',
                        display: 'block'
                    }} ></div>
                    <div className="clearfix"></div>
                    <ul className="list-unstyled text-left" style={{
                        display: 'block',
                        marginTop: '20px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '225px'
                    }}>
                        <li><strong>Processor</strong> 2.6 GHz Intel Core i7</li>
                        <li><strong>Memory</strong> 8GB 1600 MHz DDR3L</li>
                        <li><strong>Graphics</strong> HD Graphics 5500</li>
                        <li><strong>Software</strong> OS X 10.9.5</li>
                    </ul>
                    <RaisedButton label={hpLabel} primary={true} linkButton={true} onClick={this.selectHp} icon={hpIcon} />

                </div>
                <div className="col-md-12 text-center" style={{
                    marginTop: '100px'
                }}>
                    <FlatButton label="Done >>" primary={true} onClick={this.next} />
                </div>
            </div>
        );
    }
});

module.exports = Computer;