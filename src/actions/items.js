import {ITEMS_LOADING, ITEMS_LOADED, ITEMS_LOADING_ERROR, ITEMS_ADD} from './../constants/actionTypes';
import RealmDatabase  from './../database/RealmDatabase';

export function loadItems() {
    return (dispatch) => {
        let realm = RealmDatabase.getInstance();

        dispatch(handleItemsLoading());
        const realmItems = realm.objects('Item');
        const items = Array.prototype.slice.call(realmItems, 0, realmItems.length).map((realmItem) => {
            return {name: realmItem.name, cost: realmItem.cost}
        });
        dispatch(handleItemsLoaded(items))
    }
}

export function addItem(item, handleBackAction) {
    return (dispatch) => {
        let realm = RealmDatabase.getInstance();

        realm.write(() => {
            realm.create('Item', item);
        });
        dispatch(handleAddItem(item));

        if (handleBackAction) {
            handleBackAction();
        }
    }
}

export function clearDatabaseItems() {
    return (dispatch) => {
        let realm = RealmDatabase.getInstance();

        realm.write(() => {
            let items = realm.objects('Item');
            realm.delete(items);
        });
    }
}

function handleItemsLoading() {
    return {type: ITEMS_LOADING}
}

function handleItemsLoaded(items) {
    return {type: ITEMS_LOADED, items}
}

function handleItemsLoadingError(error) {
    return {type: ITEMS_LOADING_ERROR, error}
}

function handleAddItem(item) {
    return {type: ITEMS_ADD, item}
}

