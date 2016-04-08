FontIcon = require('material-ui/lib/font-icon');
var Step = require('./steps/step');
var ThemeManager = new mui.Styles.ThemeManager(),
    Card = mui.Card,
    CardActions = mui.CardActions,
    FloatingActionButton = mui.FloatingActionButton,
    IconButton = mui.IconButton,
    Popover = mui.Tooltip;


var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var MyComponent = React.createClass({
        childContextTypes: {
            muiTheme: React.PropTypes.object
        },
        getChildContext: function(){
            return {
                muiTheme: ThemeManager.getCurrentTheme()
            };
        },
        getInitialState: function(){
            return {
                stepsSequence: ['welcome', 'whoweare', 'whatyoulldo', 'meetyourteam', 'phoneselect', 'computerselect', 'done'],
                currentStep: 'welcome',
                steps: ['welcome'],
                isSettingsOpen: true,
                viewAutochange: true
            };
        },
        nextStep: function () {
            var currentIndex = this.state.stepsSequence.indexOf(this.state.currentStep);
            // Check if the next step is already there
            var nextStep = this.state.stepsSequence[currentIndex + 1];
            if(currentIndex + 1 < this.state.steps.length) {
                this.selectStep(nextStep, true);
            } else if(currentIndex < this.state.stepsSequence.length - 1) {
                // Not the end of the wizard yet

                var comms = this.state.steps.concat(nextStep);

                var newState = $.extend({}, this.state);
                newState.steps = comms;
                newState.currentStep = nextStep;
                newState.viewAutochange = true;
                this.setState(newState);
            }
        },
        selectStep: function(step, viewAutochange) {
          var newState = $.extend({}, this.state);
          newState.currentStep = step;
          newState.viewAutochange = viewAutochange;
          this.setState(newState);
        },
        closePopover: function () {
            this.state.isSettingsOpen = false;
            this.setState(this.state);
        },

        render: function(){
            var cardElements = [];
            var stepSelect = [];
            for (var x = 0; x < this.state.steps.length; x++) {
                cardElements.push((
                    <Step key={this.state.steps[x]}
                          stepId={this.state.steps[x]}
                          active={this.state.viewAutochange && this.state.currentStep === this.state.steps[x]}
                          nextStep={this.nextStep}
                          selectStep={this.selectStep}
                    />));
            }
            for(var x = 0; x < this.state.steps.length; x++) {
                let step = this.state.stepsSequence[x];
                let className = "wizard-step";
                if(step === this.state.currentStep) {
                  className += " active";
                }
                stepSelect.push(
                    <FloatingActionButton key={"nav-" + step} mini={true}
                                          onClick={this.selectStep.bind(this, step)}
                                          style={{display: 'block',
                                                  width: '20px',
                                                  height: '20px',
                                                  margin: '25px'}}
                                          className={className}>
                    </FloatingActionButton>
                );
            }
            return (
                <div style={{height: '100%'}}>

                    <FloatingActionButton secondary={true} linkButton={true}
                          style={{
                              float: 'right',
                              margin: '15px'
                          }}>
                          <FontIcon className="material-icons">settings</FontIcon>
                      </FloatingActionButton>
                      <div style={{
                        position: 'fixed',
                        right: 0,
                        top: '50%'
                      }}>
                        {stepSelect}
                      </div>

                    <ReactCSSTransitionGroup style={{height: '100%'}} id="parent" transitionName="carousel" component="div">
                        {cardElements}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }
);

module.exports = MyComponent;

