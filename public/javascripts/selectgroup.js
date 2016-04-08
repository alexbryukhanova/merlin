var RaisedButton = mui.RaisedButton;

var SelectableItemGroup = React.createClass({
    componentWillMount: function() {
        let state = Array(this.props.children.length).fill(false);
        this.setState({ itemsState : state});
    },

    selectItem: function(itemIndex) {
        let state = Array(this.props.length).fill(false);
        state[itemIndex] = true;
        this.setState({ itemsState : state});
    },

    render: function () {
        let items = [];
        for(let i = 0; i < this.props.children.length; i++) {
            let label = this.state.itemsState[i] ?  "Selected" : "Select";
            let className = "col-md-" + (12 / this.props.children.length) + " text-center";
            if(!this.state.itemsState[i] && this.state.itemsState.indexOf(true) > -1){
                className += " not-selected";
            }

            items.push((
                <div key={i} className={className}>
                    {this.props.children[i]}
                    <RaisedButton label={label} primary={true} onClick={this.selectItem.bind(this, i)} />
                </div>
            ));
        }

        return (
            <div>
                {items}
            </div>
        );
    }
});

module.exports = SelectableItemGroup;
