// |----------------------then and catch----------------------------------------|

// const minhaPromisse = () => new Promise ((resolve, reject) => {
//     setTimeout(() => {resolve("ok")}, 2000);
// });

// minhaPromisse()
// .then(response => {
//     console.log(response)
// })
// .catch(err => {
//     console.error(err)
// });


//|---------------------- async await------------------------------------------------------|

// async function executaPromise() {
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
//     console.log(await minhaPromisse());
// }

// executaPromise()

//|--------------------------------------------axios--------------------------------------------|

import axios from "axios";

class api {
    static async getUseInfo(username) {
        try {
            const  response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        }catch(err) {
            console.warn('erro na api') 
        }
    };
}
api.getUseInfo('viniciusdefault')

