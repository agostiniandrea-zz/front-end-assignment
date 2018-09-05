import store from './Redux/store';
import Api from 'Api';
import { endLoading, startLoading } from 'Modules/loading';
import { initData as chatInitData } from 'Modules/chat';
import { initData as paramsInitData } from 'Modules/params';
import { initData as researchInitData } from 'Modules/research';
import { initData as userInitData } from 'Modules/user';

let USER_ID = null;
let firstLanding = true;

export default (location) => new Promise((resolve, reject) => {
    USER_ID = location.params.id;
    if (store.getState().user === -1 && firstLanding) {
        firstLanding = false;
        initApp()
            .then(() => {
                resolve();
            })
            .catch((err) => {
                reject(err);
            });
    } else {
        normalProcessing()
        .then(() => {
            resolve();
        }).catch((err) => {
            reject(err);
        });
    }
});

function initApp() {
    return new Promise((resolve, reject) => {
        document.title = 'Loading...';
        store.dispatch(paramsInitData(window.location));
        store.dispatch(startLoading());
        Api.getRegistry(USER_ID)
            .then((resp) => {
                document.title = resp.user.description;
                store.dispatch(userInitData(resp.user));
                store.dispatch(chatInitData({
                    text: resp.text,
                    form_fields: resp.form_fields
                }));
                store.dispatch(researchInitData(resp.text[0]));
                store.dispatch(endLoading());
                resolve();
            })
            .catch((error) => reject(error));
    });
}

function normalProcessing(/*urlParamsTranslated*/) {
    return new Promise((resolve, reject) => {
        resolve();
    });
}