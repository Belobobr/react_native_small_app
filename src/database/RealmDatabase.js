import Realm from 'realm';

export default RealmDatabase = (function () {
    var instance;

    function createInstance() {
        const ItemSchema = {
            name: 'Item',
            properties: {
                name:  'string',
                cost: 'int',
            }
        };

        return new Realm({schema: [ItemSchema]});
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();