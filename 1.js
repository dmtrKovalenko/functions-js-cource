const validator = сompose(...items);
function compose () {
    return (args) => {
        items.reverse().forEach(func => {
            func(args);
        });
    };
};