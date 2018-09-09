import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actions';

class Counter extends Component {
    render() {
        return (
            <div>
                <br />
                <button class="button is-primary is-small" onClick={this.props.add}>INCREMENT</button>
                <p clss="is-large">{this.props.counter}</p>
                <button class="button is-primary is-small" onClick={this.props.subtract}>DECREMENT</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
})
const mapDispatchToProps = dispatch => ({
    add: () => dispatch(increment),
    subtract: () => dispatch(decrement)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
