const publishItems = async () => {
    const itemsToPublish = ["foo", "bar", "baz", "boo", "quux"];
    /*itemsToPublish.forEach(async item => {
        await asyncPublisher.publish(item);
    });*/
    // if we want to publish them in a sequence we should use a basic
    // for loop and await for the publishing
    for (const item of itemsToPublish) {
        // await asyncPublisher.publish(item);
    }
    // if we want to publish them in parallel, we should use a map instead of
    // forEach, because we are just throwing the promises returned from each
    // of the async callback functions. With the use of a map, we will await
    // the array of promises that we get back with Promise.all
    await Promise.all(itemsToPublish.map(async (item) => {
        // await asyncPublisher.publish(item);
    }))
};

publishItems().catch(e => {
    throw new Error("Failed to publish items!");
});

export default publishItems;