export default {
	configOverwrite: {
		disableDeepLinking: true,
		prejoinPageEnabled: false,
		disableLocalVideoFlip: true,
		doNotFlipLocalVideo: true,
		hideParticipantsStats: true,
		disableRemoteMute: true,
		disableRemoteControl: true,
		hideConferenceTimer: true,
		remoteVideoMenu: {
			disableKick: true,
			disableGrantModerator: true,
		},
		subject: 'Custom Title'
	},
	interfaceConfigOverwrite: {
		FILM_STRIP_MAX_HEIGHT: '0.1',
		SHOW_CHROME_EXTENSION_BANNER: false,
		DISABLE_DOMINANT_SPEAKER_INDICATOR: true,
		LANG_DETECTION: true,
		VIDEO_QUALITY_LABEL_DISABLED: true,
		CONNECTION_INDICATOR_DISABLED: true,
		TOOLBAR_BUTTONS: ['microphone', 'camera','fullscreen', 'tileview', 'fullscreen', 'hangup']
	},
};