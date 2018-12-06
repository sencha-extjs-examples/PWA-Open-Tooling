Ext.define('PWA.Application', {
	extend: 'Ext.app.Application',
	name: 'PWA',
	requires: [
		'PWA.*',
		'Ext.dataview.List',
		'Ext.field.Date',
		'Ext.Video',
		'Ext.carousel.Carousel',
		'Ext.data.TreeStore',
		'Ext.layout.Center'
	],

	launch: function () {
		Ext.getBody().removeCls('launching');
		var elem = document.getElementById("splash");
		if (elem && elem.parentNode) { 
			elem.parentNode.removeChild(elem); 
		}

		Ext.Viewport.add([{ xtype: 'mainview'}]);
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
