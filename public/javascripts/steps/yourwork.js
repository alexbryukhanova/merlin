/**
 * Created by bryukhaa on 11/17/15.
 */
var FlatButton = mui.FlatButton;

var Job = React.createClass({
    next: function () {

        // Load next step
        this.props.nextStep('meetyourteam');
    },
    render: function() {
        return (
            <div className="step active">
                <div className="col-md-offset-1 col-md-10">
                    <h3>
                    What You'll Do
                        <p><small>Here's how we work</small></p>
                    </h3>
                    <div className="col-md-offset-1 col-md-10">
                        <div className="col-md-5">
                            <img className="" src="" />
                            <p className="text-center"><strong>ACT LIKE AN OWNER</strong></p>
                            <p>All decisions matter and time is scarce. When you’re in a difficult situation, think and act like an owner. What would you decide if you owned the business?</p>
                        </div>
                        <div className="col-md-offset-2 col-md-5">
                            <img className="thumb-image loaded" src="" />
                            <p className="text-center"><strong>EVERYONE IS HANDS ON</strong></p>
                            <p>At Lifion everyone is a maker. Our n00bs learn from exceptionally talented colleagues. Our experts develop code and the next generation of technology leaders.</p>
                        </div>
                    </div>
                    <div className="col-md-offset-1 col-md-10">
                        <div className="col-md-5">
                            <img className="" src="" />
                            <p className="text-center"><strong>INTEGRITY IS EVERYTHING</strong></p>
                            <p>Anything worth building is going to be difficult. The success of our platform depends on teams collaborating perfectly at scale. Be transparent, build trust, and help others to ship stuff that matters.</p>
                        </div>
                        <div className="col-md-offset-2 col-md-5">
                            <img className="thumb-image loaded" src="" />
                            <p className="text-center"><strong>OBLIGATION TO DISSENT</strong></p>
                            <p>We don’t want to mask great ideas or run with bad ideas. Speak up – your perspective matters.  Obligation to dissent means everyone has a voice and is expected to share their view. This way we always make the best possible decisions at any given point.</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3>Software Engineer<p><small>The Mad Hatters</small></p></h3>
                        <p>Every Scrum team will have a Software Engineer who gets a thrill out of setting up test frameworks and thrives on quality code.</p>

                        <h5>YOUR RESPONSIBILITIES</h5>

                        <ul>
                            <li>Deliver highly automated, intelligent, and predictive solutions for our client offerings</li>
                            <li>Responsible for building out the core frameworks of the metadata-driven platform being developed in-house, including building out the Source Control Management piece that will allow application developers to have their own isolated development environments</li>
                            <li>Deliver innovative solutions to drive next generation user experiences, designs and technologies</li>
                            <li>Responsible for ensuring the successful transition to a Service Oriented Architecture framework with the help of containers</li>
                            <li>Spearhead POC’s on the latest technologies and help ADP choose the right tool for the right job</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <FlatButton label="Meet your tribe >>" primary={true} onClick={this.next} />
                </div>
            </div>
        );
    }
});

module.exports = Job;