# leak-map

A shit weak-map that leaks and is generally bad.

# Why

Internet explorer is bad, you can't make non-enumerable properties on objects, so pretty much all WeakMap polyfills put random properties on objects, which can cause issues.

LeakMap won't put random properties on objects, but it will cause memory to leak, and it will be quite slow. But hey, you're using IE, it isnt like you care about performance or stability anyway.
