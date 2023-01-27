/**
 * JS Function which accepts a Category root object as a parameter and returns a list of Customer object.
 * Each Customer object containing all the Items visible to the Customer.
 * Author: Avuyile Mgxotshwa
 * Date: 27 January 2023
 */

export const filterByCategory = (customer, itemList) => {
    let customerCategoryList = Array.from(customer.getPermissions.categoryPermissionsList);
    let filteredItemList = [];
    for(let i =0; i < itemList.length; i++) {
        let item = itemList[i];
        console.log(item);
        for(let j =0; j < customerCategoryList.length; j++) {
            let permittedCategory = customerCategoryList[j];
            if (permittedCategory.getTitle === item.getCategory.getTitle || permittedCategory.getTitle === item.getCategory.getParent.getTitle) {
                filteredItemList.push(item);
            }
        }
    }

    return filteredItemList;
}