React = require("react/addons");
mui = require('material-ui');

// Events are handled here
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var MyComponent = require('./helloworld');

React.render(<MyComponent />, document.getElementById('content'));
