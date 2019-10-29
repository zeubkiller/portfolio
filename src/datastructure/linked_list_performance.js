import {LinkedList} from './linkedlist'


export function test_performance_100_type() {
    const numberValuesTested = [1, 10, 100, 1000, 10000]; //, 100000, 10000000, 100000000, 1000000000
    let resultPerformance = [];

    for(const value of numberValuesTested)
        resultPerformance.push(test_performance_add(value));

    return [numberValuesTested, resultPerformance];
}

export function test_performance_add(numberValues) {
    let linkedList = new LinkedList();

    const timeBefore = new Date();
    for(let i = 0 ; i < numberValues ; i++) {
        linkedList.push(String(i));
    }
    const timeAfter = new Date();

    return timeAfter - timeBefore;
}