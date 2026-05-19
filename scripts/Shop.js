import { inventory } from "./inventory.js";
import { stats } from "./stats.js";
import potions from "../resources/jsons/items/potions.json" with { type: "json"}
console.log(stats)

//object for managing shop interactions
export const shop = {
    potions_for_sale: potions,

    updateMoney() {
        document.getElementById("moneyText").innerHTML = "$" + stats.money.value
    },

    randomShopList() {
        let items_in_stock = []
        for (let i = 0; i < 10; i++) {
            var rand = Math.round(Math.random() * (this.potions_for_sale.length - 1))
            console.log(rand)
            items_in_stock.push(this.potions_for_sale[rand])
        }
        console.log(items_in_stock)
        return items_in_stock
    },

    display_items() {
        for (let i = 0; i < 10; i++) {
            document.getElementById("slot" + (i + 1)).style.display = "block"
            document.getElementById("itemImg" + (i + 1)).src = item_in_stock[i].sprite
            document.getElementById("itemText" + (i + 1)).innerHTML = item_in_stock[i].name
        }
    },

    buy_items(item) {
        if (item.amount_in_stock > 0 && stats.money.value <= selected_item.cost) {
            item.amount_in_stock -= 1;
            stats.money.value = stats.money.value - item.cost
            shop.updateMoney()
            inventory.add_item(item)
        }
    },
    remove_item(item_index) {
        this.items_for_sale.unshift(item_index)
    }
}

//console.log(shop.items_for_sale)
for (let i = 0; i < 21; i++) {
    shop.buy_items(potions, inventory.potions, "Eye Ball")
}

shop.updateMoney()

let item_in_stock = shop.randomShopList()

shop.display_items(item_in_stock);


document.getElementById("slot1").addEventListener("click", function (e) {
    shop.buy_items(potions, inventory.potions, )
    this.style.display = "none"
});

document.getElementById("slot2").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot3").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot4").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot5").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot6").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot7").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot8").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot9").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});

document.getElementById("slot10").addEventListener("click", function (e) {
    console.log("test")
    this.style.display = "none"
});
