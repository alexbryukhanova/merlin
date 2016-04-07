/**
 * Created by bryukhaa on 11/10/15.
 */
var FlatButton = mui.FlatButton,
    Card = mui.Card,
    CardHeader = mui.CardHeader,
    CardActions = mui.CardActions,
    CardText = mui.CardText;

var Intro = React.createClass({
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
        this.props.nextStep('whatyoulldo');
    },

    render: function () {
        return (
            <div>
                <div>
                    <div className="col-md-12 jumbotron">
                        <h1>Welcome to Lifion!</h1>
                        <p>Here's a nifty guide to get you going in your new role. Welcome to the ADP family.</p>
                    </div>
                </div>
                <div className="col-md-offset-1 col-md-10">
                    <h3>
                        Our People
                        <p><small>Culture at ADP Chelsea Innovation Lab</small></p>
                    </h3>
                    <p>
                    At Lifion, by ADP, you will enjoy a vibrant and diverse organization with exceptional leadership committed to providing everyone with career building opportunities. Our environment is fast paced and dynamic with work/life initiatives that allow for individual goals to be realized. We offer excellent benefits effective first day of employment!

                    </p>
                    <p>
                    We power organizations with insightful solutions that drive business success. Consistently named one of the "Most Admired Companies" by FORTUNE® Magazine, and recognized by Forbes® as one of "The World's Most Innovative Companies," we have over a half-million clients around the globe and 60+ years of experience as a world-wide leader of business outsourcing solutions. As a special unit, a venture that is building solutions for our users who have fast-pace lives and manage their careers on the go. We are building for a generation that switches jobs more frequently than our parents did and we do that with exciting new technologies.

                    </p>
                    <p>
                        We are assembling the best thinkers and makers. We are obsessed about our people. That’s why we provide the best tools, the best environment, and the cutting edge technology needed. Our leaders empower teams to make the complexity of the real world simple for our users.
                    </p>

                    <p>Our people ship stuff that matters.</p>

                    <div className="text-center">
                        <FlatButton label="Check out what you'll do >>" primary={true} onClick={this.next} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Intro;