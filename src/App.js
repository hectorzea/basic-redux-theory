import {connect} from "react-redux";
import Counter from "./Counter";

let mapStateToProps = (state) => ({
    countValue: state.count
});

// Action
let increaseAction = {type: "increase"};
let decreaseAction = {type: "decrease"};

let mapDispatchToProps = (dispatch) => ({
    increaseCount: () => {
        return dispatch(increaseAction);
    },
    decreaseCount: () => {
        return dispatch(decreaseAction)
    }
});

// high order component <3
let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;