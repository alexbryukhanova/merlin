const FontIcon = require('material-ui/lib/font-icon');
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
        componentDidMount: function() {
          window.addEventListener('scroll', this.scrollSteps);
        },

        componentWillUnmount: function() {
          window.removeEventListener('scroll', this.scrollSteps);
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
                isSettingsOpen: true
            };
        },
        nextStep: function () {
            var currentIndex = this.state.stepsSequence.indexOf(this.state.currentStep);
            if(currentIndex < this.state.stepsSequence.length - 1) {
                // Not the end of the wizard yet
                var nextStep = this.state.stepsSequence[currentIndex + 1];
                var comms = this.state.steps.concat(nextStep);

                var newState = $.extend({}, this.state);
                newState.steps = comms;
                newState.currentStep = nextStep;
                this.setState(newState);
            }
        },
        selectStep: function(step) {
          var newState = $.extend({}, this.state);
          newState.currentStep = step;
          this.setState(newState);
        },
        closePopover: function () {
            this.state.isSettingsOpen = false;
            this.setState(this.state);
        },

        scrollStep: function (scrollEvent) {
          let scrollTop = scrollEvent.srcElement.body.scrollTop;
        },

        render: function(){
            var cardElements = [];
            var stepSelect = [];
            for (var x = 0; x < this.state.steps.length; x++) {
                cardElements.push((
                    <Step key={this.state.steps[x]}
                          stepId={this.state.steps[x]}
                          active={this.state.currentStep === this.state.steps[x]}
                          nextStep={this.nextStep}
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
                                                  margin: '10px'}}
                                          className={className}
                    >
                    </FloatingActionButton>
                );
            }
            return (
                <div style={{height: '100%'}}>

                    <FloatingActionButton secondary={true} linkButton={true}
                          style={{
                              float: 'right',
                              margin: '15px'
                          }}
                      >
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

                    <Popover open={this.state.isSettingsOpen}
                    anchorOrigin={{ horizontal:"right", vertical:"bottom" }}
                    targetOrigin={{ horizontal:"right", vertical:"top" }}
                    onRequestClose={this.closePopover}
                    label="Hello">
                        <span>Hello, World!</span>
                    </Popover>
                </div>
            );
        }
    }
);

module.exports = MyComponent;

//window.addEventListener('DOMContentLoaded', render);


//React.render(<Card />, document.getElementById('content'));

//var CommentBox = React.createClass({
//    getInitialState: function(){
//        return {
//            comments: [ "I am the first comment!" ]
//        }
//    },
//    nextPage: function(){
//        //var comms = this.state.comments.concat([prompt('Enter your comment')]);
//        var comms = this.state.comments.concat('asdf');
//        this.setState({ comments: comms});
//    },
//    render: function() {
//        var commentElements = this.state.comments.map(function(item, i) {
//            return (
//                <Comment index={i} key={i}>
//                        {item}
//                </Comment>
//                );
//        }.bind(this));
//        return (
//            <div className="commentBox">
//                <h1>Comments</h1>
//                <button onClick={this.nextPage}>Next</button>
//                <div>
//                    <ReactCSSTransitionGroup transitionName="carousel">
//                        {commentElements}
//                    </ReactCSSTransitionGroup>
//                </div>
//            </div>
//            );
//    }
//});

//var Comment = React.createClass({
//    render: function() {
//        return (
//            <div className={'step' + this.props.index}>
//            I am Comment #{this.props.index}
//            </div>
//            );
//    }
//});


//React.render(
//    <CommentBox />,
//    document.getElementById('content')
//);