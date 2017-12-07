# mattermost-e2e-test-plugin

This plugin is used by the end-to-end tests to confirm that all pluggable components are being added correctly.

## Build

To build the plugin, clone this repo and run `make build`. That will deposit a `e2e-test-plugin.tar.gz` in the `./dist` directory.

## Release

If you just want the already built plugin, grab it from the GitHub releases.

## Component IDs

Below is a list of components this plugin covers and their corresponding HTML ids.

* ProfilePopover - id='e2e_plugin_component_profile_popover'
* Root - id='e2e_plugin_component_root'
* ChannelHeaderButton - id='e2e_plugin_component_channel_header_button'
* MobileChannelHeaderButton - id='e2e_plugin_component_mobile_channel_header_button'
