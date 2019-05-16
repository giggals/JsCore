
function validateRequest(obj) {
    let resultObj = {
        method: '',
        uri: '',
        version: '',
        message: ''
    };

    if (Object.keys(obj).length == 0) {
        throw Error(`Invalid request header: Invalid Method`);
    }

    if (Object.keys(obj).forEach(function (key) {
        if (!obj.hasOwnProperty('method')) {
            throw Error(`Invalid request header: Invalid Method`);
        }
        if (!obj.hasOwnProperty('uri')) {
            throw Error(`Invalid request header: Invalid URI`);
        }
        if (!obj.hasOwnProperty('version')) {
            throw Error(`Invalid request header: Invalid Version`);
        }
        if (!obj.hasOwnProperty('message')) {
            throw Error(`Invalid request header: Invalid Message`);
        }
    }));
    Object.keys(obj).forEach(function (key) {
        var val = obj[key];
        if (key == 'method') {
            if (val == 'GET' || val == 'POST' || val == 'DELETE' || val == 'CONNECT') {
                resultObj[key] = val;
            }
            else {
                throw new Error(`Invalid request header: Invalid Method`);
            }
        }
        if (key == 'uri') {
            let test = /^([\w.]+)$/.test(val);
            if (test && val != '') {
                resultObj[key] = val;
            }
            else {
                throw new Error(`Invalid request header: Invalid URI`);
            }
        }
        if (key == 'version') {
            if (val == 'HTTP/0.9' || val == 'HTTP/1.0' || val == 'HTTP/1.1' || val == 'HTTP/2.0') {
                resultObj[key] = val;
            }
            else {
                throw new Error(`Invalid request header: Invalid Version`);
            }
        }
        if (key == 'message') {
            let test = /^([^<>\\&'"]+)$/.test(val);
            if (test || val == '') {
                resultObj[key] = val;
            }
            else {
                throw new Error(`Invalid request header: Invalid Message`);
            }
        }

    });

    return resultObj;

}

// console.log(validateRequest({

// }));
