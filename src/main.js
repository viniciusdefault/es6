// |----------------------then and catch----------------------------------------|

const minhaPromisse = () => new Promise ((resolve, reject) => {
    setTimeout(() => {resolve("ok")}, 2000);
});

// minhaPromisse()
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.error(err)
// });


//|---------------------- async await------------------------------------------------------|

async function executaPromise() {
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
    console.log(await minhaPromisse());
}

executaPromise()