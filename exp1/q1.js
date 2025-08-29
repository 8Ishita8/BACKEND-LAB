const nestedobj = {
    innerFunction: function() {
        console.log("This is an inner function");
    }
};

function outerFunction() {
    console.log("This is an outer function");
}

exports.nestedobj = nestedobj;
exports.outerFunction = outerFunction;
