'use strict';

const obj = {
    key1 : 'value1',
    key2 : {
        key3: 'value3',
        key4: 'value4',
        key5: 'value5',
        key6 : {
            key7: 'value6',
            key8: 'value7',
            key9: 'value8',
        },
        key10 : {
            key11: 'value11',
            key12: 'value12',
            key13: 'value13',
        }
    },
    key14 : 'value14',
};

function printNodes(obj, lvl = 0) {
    const arr = Object.entries(obj);
    console.log(' '.repeat(lvl), '{');
    
    for (let i of arr){
        let lv = lvl;
        if (typeof(i[1]) === 'object') {
            console.log(`\n${' '.repeat(lvl+1)}${i[0]}:`)   ;       
            printNodes(i[1], lv += 1);
            console.log('\n')
        }else{
            console.log(`${' '.repeat(lvl+1)} ${i[0]} : ${i[1]} (Уровень ${lvl})`);
        }
    }

    console.log(' '.repeat(lvl), '}');
};

printNodes(obj);