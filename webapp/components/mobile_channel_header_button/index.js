const {connect} = window['react-redux'];

import MobileChannelHeaderButton from './mobile_channel_header_button.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps
    };
}

export default connect(mapStateToProps)(MobileChannelHeaderButton);
