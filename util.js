function object_deep_copy(obj) {
    var obj_cpy = {}
    for (var key in obj) {
        obj_cpy[key] = obj[key]
    }
    return obj_cpy
}
