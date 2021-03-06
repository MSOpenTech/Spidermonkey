// Forward to the target if the trap is not defined
var target = {};
var keys = ['foo'];
if (typeof Symbol === "function")
    keys.push(Symbol("quux"));
for (var key of keys) {
    Object.defineProperty(Proxy(target, {}), key, {
        value: 'bar',
        writable: true,
        enumerable: false,
        configurable: true
    });
    var desc = Object.getOwnPropertyDescriptor(target, key);
    assertEq(desc.value, 'bar');
    assertEq(desc.writable, true);
    assertEq(desc.enumerable, false);
    assertEq(desc.configurable, true);
}
