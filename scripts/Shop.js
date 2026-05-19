import { inventory } from "./inventory.js";
import { stats } from "./stats.js";
import potions from "../resources/jsons/items/potions.json" with { type: "json"}

//object for managing shop interactions
export const shop = {
    potions_for_sale: potions,
    item_in_stock: [],

    updateMoney() {
        document.getElementById("moneyText").innerHTML = "$" + stats.money.value
    },

    randomShopList() {
        let items_in_stock = []
        for (let i = 0; i < 10; i++) {
            var rand = Math.round(Math.random() * (this.potions_for_sale.length - 1))
            items_in_stock.push(this.potions_for_sale[rand])
        }
        return items_in_stock
    },

    display_items(items) {
        for (let i = 0; i < 10; i++) {
            document.getElementById("slot" + (i + 1)).style.display = "block"
            document.getElementById("itemImg" + (i + 1)).src = items[i].sprite
            document.getElementById("itemText" + (i + 1)).innerHTML = items[i].name
        }
    },

    buy_items(item, itself) {
        if (stats.money.value >= item.cost) {
            stats.money.value -= item.cost
            shop.updateMoney()
            inventory.add_item(item)
            itself.style.display = "none"
        }
    },
}

for (let i = 0; i < 21; i++) {
    shop.buy_items(potions, inventory.potions, "Eye Ball")
}

shop.updateMoney()

shop.item_in_stock = shop.randomShopList()
shop.display_items(shop.item_in_stock);


document.getElementById("slot1").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[0], this)
});

document.getElementById("slot2").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[1], this)
});

document.getElementById("slot3").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[2], this)
});

document.getElementById("slot4").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[3], this)
});

document.getElementById("slot5").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[4], this)
});

document.getElementById("slot6").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[5], this)
});

document.getElementById("slot7").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[6], this)
});

document.getElementById("slot8").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[7], this)
});

document.getElementById("slot9").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[8], this)
});

document.getElementById("slot10").addEventListener("click", function (e) {
    shop.buy_items(shop.item_in_stock[9], this)
});
