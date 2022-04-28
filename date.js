    exports.getDate = function() {
        const date = new Date();
        const options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        }

        return date.toLocaleDateString('en-us', options);
    }

    exports.getDay = function() {
        const date = new Date();
        const options = {
            weekday: "long",
        }

        return date.toLocaleDateString('en-us', options);
    }