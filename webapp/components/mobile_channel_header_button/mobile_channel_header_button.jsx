const React = window.react;
import PropTypes from 'prop-types';
import {makeStyleFromTheme} from 'mattermost-redux/utils/theme_utils';

export default class MobileChannelHeaderButton extends React.PureComponent {
    static propTypes = {

        /*
         * Logged in user's theme
         */
        theme: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        const style = getStyle(this.props.theme);
        return (
            <div
                id='e2e_plugin_component_mobile_channel_header_button'
                style={{...style.container}}
            >
                {'E2E'}
            </div>
        );
    }
}

/* Define CSS styles here */
const getStyle = makeStyleFromTheme((theme) => {
    return {
        container: {
            backgroundColor: theme.centerChannelBg
        }
    };
});
