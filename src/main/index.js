// Imports
import { Customer, Category, Item, Permissions } from './classes/prototypes.js';
import { filterByCategory } from './functions/filter-by-category.js'

// Category
      const clothing = new Category("Clothing");
      const mens = new Category("Mens", clothing);
      const mensShoes = new Category("Men's Shoes");
            mens.addChild(mensShoes);
      const womens = new Category("Womens", clothing);
      const womensShoes = new Category("Women's Shoes");
            womens.addChild(womensShoes);

// Customer & Category access
      const avuyilePermissions  = new Permissions();
            avuyilePermissions.addCategoryPermission(mens);
      const avuyile = new Customer("Avuyile", "Mgxotshwa", avuyilePermissions);
      const kkPermissions  = new Permissions();
            kkPermissions.addCategoryPermission(womens)
      const kwakhanya = new Customer("Kwakhanya", "Mgxotshwa", kkPermissions);

// Items
      const mensNikeSneaker = new Item("Nike Air Jordan", mensShoes);
      const mensAdidasSneaker = new Item("Adidas Samba", mensShoes);
      const womensReebokSneaker = new Item("Reebok Classics", womensShoes);
      const womensAsicsSneaker = new Item("Asics Classics", womensShoes);

// Collections/Dummy Database
      const customerList =  new Set([avuyile, kwakhanya]);
      const categoryList = new Set([clothing, mens, womens, mensShoes, womensShoes]);
      const itemList = new Set([mensNikeSneaker, mensAdidasSneaker, womensReebokSneaker, womensAsicsSneaker]);


// printing all items
console.log("All Store Items");
console.log("-------------");
itemList.forEach(item => {
    console.log("Item: ", item.getName, " | ", "Category: ", item.getCategory.getTitle);
});
console.log("-------------");
console.log(" ");
console.log("-------------");
// filter By Category
let filteredItemList = filterByCategory(avuyile, itemList);
console.log("Filter by search: " + avuyile.getName);
filteredItemList.forEach(item => {
    console.log("Item: ", item.getName, " | ", "Category: ", item.getCategory.getTitle);
});
console.log("-------------");