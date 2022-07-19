const definedItems = (array: any[]) => {
    // if we only leave const outputArray = [] the array will be defined as
    // never, and it would lead to a mismatch when we try to push something to it
    // const outputArray: any[] = [] is the correct approach to it
    const outputArray: any[] = [];
    array.forEach(item => {
        if (item) outputArray.push(item);
    });
    return outputArray;
}
export default definedItems;
