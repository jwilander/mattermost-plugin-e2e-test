const {connect} = window['react-redux'];

import ChannelHeaderButton from './channel_header_button.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps
    };
}

export default connect(mapStateToProps)(ChannelHeaderButton);
