var test = require('grape'),
    LeakMap = require('../');

test('get/set',function(t){
    t.plan(4);

    var siv = new LeakMap(),
        key1 = {};
        key2 = {};

    siv.set(key1, 'things');
    siv.set(key2, 'stuff');

    t.equal(siv.get(key1), 'things', 'map has key1');
    t.equal(siv.get(key2), 'stuff', 'map has key2');
    t.notEqual(siv.get(key1), 'stuff', 'map key1 does not have key2\'s value');
    t.notEqual(siv.get(key2), 'things', 'map key2 does not have key1\'s value');
});

test('delete/has',function(t){
    t.plan(5);

    var siv = new LeakMap(),
        key1 = {};
        key2 = {};

    siv.set(key1, 'things');
    siv.set(key2, 'stuff');

    t.equal(siv.get(key1), 'things', 'map has key1');
    t.equal(siv.get(key2), 'stuff', 'map has key2');

    siv.delete(key1);

    t.notOk(siv.has(key1), 'map no longer has key1');
    t.equal(siv.get(key2), 'stuff', 'map still has key2');

    siv.delete(key2);

    t.notOk(siv.has(key2), 'map no longer has key2');
});

test('clear',function(t){
    t.plan(4);

    var siv = new LeakMap(),
        key1 = {};
        key2 = {};

    siv.set(key1, 'things');
    siv.set(key2, 'stuff');

    t.equal(siv.get(key1), 'things', 'map has key1');
    t.equal(siv.get(key2), 'stuff', 'map has key2');

    siv.clear();

    t.notOk(siv.has(key1), 'map does not have key1');
    t.notOk(siv.has(key2), 'map does not have key2');
});

test('validates keys',function(t){
    t.plan(3);

    var siv = new LeakMap(),
        key1 = new Date(),
        key2 = 'wat',
        key3 = null;

    t.doesNotThrow(function(){
        siv.set(key1, 'date');
    });
    t.throws(function(){
        siv.set(key2, 'things');
    });
    t.throws(function(){
        siv.set(key3, 'stuff');
    });
});