const {connect} = window['react-redux'];
const {bindActionCreators} = window.redux;

import ProfilePopover from './profile_popover.jsx';

function mapStateToProps(state, ownProps) {
    /* Provide values for any custom props or override any existing props here */
    return {
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    /* Provide actions here if needed */
    return {
        actions: bindActionCreators({
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePopover);
