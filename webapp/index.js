// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import ProfilePopover from './components/profile_popover';
import Root from './components/root';
import ChannelHeaderButton from './components/channel_header_button';
import MobileChannelHeaderButton from './components/mobile_channel_header_button';

class PluginClass {
    initialize(registerComponents, store) {
        registerComponents({ProfilePopover, Root, ChannelHeaderButton, MobileChannelHeaderButton}, {});
    }
}

global.window.plugins['e2e-test-plugin'] = new PluginClass();
