var defaultDebugMode = false;

$$ = {
      debugMode: defaultDebugMode
    , pause: function () {
        if (this.debugMode) {
            debugger;
        }
    }
    , log: function (message) {
        if (this.debugMode) {
           window.console.log(message);
        }
    }
    , alert: function (message) {
        if (this.debugMode) {
            window.alert(message)
        }
    }
}

debug = $$;