const React = window.react;
import PropTypes from 'prop-types';
import {makeStyleFromTheme} from 'mattermost-redux/utils/theme_utils';

export default class Root extends React.PureComponent {
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
                id='e2e_plugin_component_root'
                style={{...style.container}}
            >
                {'E2E'}
            </div>
        );
    }
}

const getStyle = makeStyleFromTheme((theme) => {
    return {
        container: {
            backgroundColor: theme.centerChannelBg,
            position: 'absolute',
            left: '50%',
            top: '50%',
            height: '200px',
            width: '200px',
            border: '1px solid black',
            zIndex: 9999 // Bring popover to top
        }
    };
});
