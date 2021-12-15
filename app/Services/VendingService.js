import { ProxyState } from "../AppState.js";
import { Mooney } from "../Models/Money.js";
import { Snacks } from "../Models/Vending.js";
Mooney

// ProxyState
// Snacks

class VendingService {
    constructor() {
        console.log('YEsERVICE')
    }
    moneyMaka() {
        let money = ProxyState.total
        money++
        document.getElementById('moola').innerHTML = Template
    }
};




export const vendingService = new VendingService()