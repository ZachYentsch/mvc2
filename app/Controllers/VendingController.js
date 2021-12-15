import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";



export class VendingController {
    constructor() {
        console.log('YESCONTROLLER')
        // ProxyState.on('money', drawMoneyMaka)
        // drawMoneyMaka()
    }

    moneyMaka() {
        vendingService.moneyMaka()
    }




    // drawMoneyMaka() {
    //     let template = ''
    //     let mooney = vendingService.money
    //     mooney.forEach(m => template += m.Template);
    //     document.getElementById('money').innerHTML = template
    // }
}




// vendingService
// ProxyState