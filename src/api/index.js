import axios from 'axios';
import { objValidator } from 'Utilities';

export default {
    getRegistry,
    sendData
};

function getRegistry(id) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/server/registry/' + id + '.json')
            .then((response) => {
                if (response && response.status == 200) {
                    const result = objValidator(response, 'data');
                    resolve(result);
                } else {
                    resolve([]);
                }
            }).catch((error) => {
                console.log(error);
                reject(error);
            });
    });
}

function sendData(obj) {
    return new Promise((resolve, reject) => {
        resolve();
        axios.post('http://localhost:3000/server/answers/', obj)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    });
}