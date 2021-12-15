export class Snacks {
    constructor(data) {
        this.name = data.name
        this.flavor = data.flavor
        this.price = data.price
        this.smack = Math.floor(Math.random() * 100)
        this.img = data.img
    }
}

// get Template(){
//     return `

//     `
// }