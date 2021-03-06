/**
 * Created by bryukhaa on 11/18/15.
 */
var WelcomeWizardStep = require('./welcome');
var WhoWeAre_WizardStep = require('./intro');
var WhatYoullDo_WizardStep = require('./yourwork');
var MeetYourTeam_WizardStep = require('./team');
var ChoosePhone_WizardStep = require('./phonechoice');
var ChooseComputer_WizardStep = require('./computerchoice');
var Done_WizardStep = require('./done');

var Step = React.createClass({

    next: function () {
        this.props.nextStep();
    },
    componentDidMount: function() {
        this.scrollToSelf();
        window.addEventListener('scroll', this.scrollStep);
    },

    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.scrollStep);
    },

    scrollStep: function (scrollEvent) {
        let clientHeightQualifier = window.innerHeight / 2;

        var domElement = this.getDOMNode();
        var elementBounds = domElement.getBoundingClientRect();
        if (elementBounds.top <= clientHeightQualifier && elementBounds.bottom >= clientHeightQualifier) {
            this.props.selectStep(this.props.stepId, false);
        }
    },

    scrollToSelf: function() {
        var node = this.getDOMNode();
        $('html, body').animate({
            scrollTop: $(node).offset().top
        }, 500);
    },

    componentWillReceiveProps: function (newProps) {
        if(newProps.active) {
            this.scrollToSelf();
        }
    },

    render: function () {
        var stepContent;
        switch(this.props.stepId) {
            case 'welcome':
                stepContent = (
                    <WelcomeWizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
            case 'done':
            stepContent = (
                <Done_WizardStep key={this.props.stepId} nextStep={this.next} />
                );
            break;
            case 'phoneselect':
                stepContent = (
                    <ChoosePhone_WizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
            case 'computerselect':
                stepContent = (
                    <ChooseComputer_WizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
            case 'whoweare':
                stepContent = (
                    <WhoWeAre_WizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
            case 'whatyoulldo':
                stepContent = (
                    <WhatYoullDo_WizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
            case 'meetyourteam':
                stepContent = (
                    <MeetYourTeam_WizardStep key={this.props.stepId} nextStep={this.next} />
                    );
                break;
        }

        var stepClasses = "step";
            if(this.props.active) {
                stepClasses += " active";
            }
        return (
            <div className={stepClasses}>
                {stepContent}
            </div>
        );
    }
});

module.exports = Step;