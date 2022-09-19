function fnAsync(){
    return new Promise((resolve, reject) => {
        (true)
            ?setTimeout(() => resolve('Async!!'), 200)
            : reject(new Error('Error!'));
    });
}

const anotheFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('ohh mai gab')
    console.log('After');
}

console.log('Before');
anotheFn();
