Ext.define('PWA.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',

    model: 'PWA.model.Person',

    proxy: {
        type: 'ajax',

        url: '/personnel.json',

        reader: {
            type: 'json'
        }
    },

    grouper: {
        groupFn: function(record) {
            return record.get('lastname')[0];
        }
    },

    sorters: [{
        property: 'lastname'
    }, {
        property: 'firstname'
    }]
});
