var hasCycle = function (head) {
    if (!head) return false;

    const nodes = new Map();
    let runner = head;

    while (runner) {
        if (nodes.has(runner)) {
            return true;
        }
        nodes.set(runner, true);
        runner = runner.next;
    }
    return false;
};