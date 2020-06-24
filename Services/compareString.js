function findDifference(a, b, priority) {
    if (a.trim().length == 0 || b.trim().length == 0) {
        if (a.trim().length != 0) {
            return {
                key: a[0],
                relation: 'START',
                target: 0
            }
        }
        if (b.trim().length != 0) {
            return {
                key: b[0],
                relation: 'START',
                target: 1
            }
        }
        return null;
    }

    var aobj = {};
    var aobj_temp = {};
    var bobj = {};
    var bobj_temp = {};
    var result = [];

    if (a[0] != b[0]) {
        return {
            key: a[0],
            relation: 'START',
            target: 0
        }
    }
    if (a[a.length - 1] != b[b.length - 1]) {
        return {
            key: a[a.length - 1],
            relation: 'END',
            target: 0
        }
    }

    for (var i = 0; i < a.length; i++) {
        var key = a[i];
        if (!aobj.hasOwnProperty(key)) {
            aobj[key] = 1;
        } else {
            aobj[key] = aobj[key] + 1;
        }
    }
    aobj_temp = JSON.parse(JSON.stringify(aobj));

    for (var j = 0; j < b.length; j++) {
        var key = b[j];
        if (!bobj.hasOwnProperty(key)) {
            bobj[key] = 1;
        } else {
            bobj[key] = bobj[key] + 1;
        }
    }
    bobj_temp = JSON.parse(JSON.stringify(bobj));

    for (let bkey in bobj) {
        if (aobj[bkey]) {
            if (aobj[bkey] == bobj[bkey]) {
                delete aobj_temp[bkey];
                delete bobj_temp[bkey];
            }
        }
    }

    for (let key in aobj_temp) {
        if (a.indexOf(key) > -1) {
            var count = (a.match(new RegExp(key, "g")) || []).length
            result.push({
                key: key,
                relation: 'HAS',
                count: count,
                target: 0
            });
        }
    }

    for (let key in bobj_temp) {
        if (b.indexOf(key) > -1) {
            var count = (b.match(new RegExp(key, "g")) || []).length
            result.push({
                key: key,
                relation: 'HAS',
                count: count,
                target: 1
            });
        }
    }

    let order = ["START", "END", "HAS"];
    if (priority) {
        if (priority == 'END') {
            order = ["END", "START", "HAS"];
        } else if (priority == 'HAS') {
            order = ["HAS", "END", "START"];
        }
    }
    for (var l = 0; l < order.length; l++) {
        if (checkRelation(result, order[l]) != null) {
            return checkRelation(result, order[l]);
        }
    }
    return null;
}

function checkRelation(result, relation) {
    let res = null;
    for (var k = 0; k < result.length; k++) {
        if (result[k].relation == relation) {
            if (relation != 'HAS') {
                return result[k];
            }
            if (res == null || result[k].count > res.count) {
                res = result[k];
            }
        }
    }
    return res;
}

module.exports = findDifference
