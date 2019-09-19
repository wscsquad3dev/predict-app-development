var SERVER_PATH = 'http://localhost:3000/';
var service = (function() {
    return {
        get: function(url, _successCallback, _failCallback) {
            $.ajax({
                type: "GET",
                url: SERVER_PATH + url,
                contentType: "application/json",
                dataType: "json",
                success: function(data) {
                    if (_successCallback) {
                        _successCallback(data);
                    }
                },
                failure: function(errMsg) {
                    if (_failCallback) {
                        _failCallback(errMsg);
                    }
                }
            });
        },

        post: function(url, data, _successCallback, _failCallback) {
            debugger;
            $.ajax({
                type: "POST",
                url: SERVER_PATH + url,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(data),
                success: function(data) {
                    if (_successCallback) {
                        _successCallback(data);
                    }
                },
                failure: function(errMsg) {
                    if (_failCallback) {
                        _failCallback(errMsg);
                    }
                }
            });
        }
    }
})();