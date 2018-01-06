import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _isLoggedIn = false;

const SessionStore = Object.assign({}, EventEmitter.prototype, {
    isLoggedIn() {
        return _isLoggedIn;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(action => {//регистриуем обработчик действий
    console.info(action.type, action);

    switch(action.type) {
        case AppConstants.SESSION_AUTHORIZE_SUCS: {//успех
            _isLoggedIn = true;

            SessionStore.emitChange();//для передачи всем слушателям
            break;
        }

        case AppConstants.SESSION_AUTHORIZE_FAIL: {//ошибка
            _isLoggedIn = false;

            SessionStore.emitChange();//для передачи всем слушателям
            break;
        }

        default: {
        }
    }
});

export default SessionStore;