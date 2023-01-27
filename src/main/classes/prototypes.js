
// Customer class
export class Customer {

    /**
     * @param {string} name 
     * @param {string} surname 
     * @param {Permissions} permissions 
     */
    constructor(name, surname, permissions) {
        this.name = name;
        this.surname = surname;
        this.permissions = permissions;
    }

    /**
     * @returns {string} name
     */
    get getName() {
        return this.name;
    }

    /**
     * @returns {string} surname
     */
    get getSurname() {
        return this.surname;
    }

    /**
     * @returns {Permissions} permissions
     */
    get getPermissions() {
        return this.permissions;
    }

    /**
     * @param {string} name
     */
    set setName(name) {
        this.name = name;
    }

    /**
     * @param {string} surname
     */
    set setSurname(surname) {
        this.surname = surname;
    }

    /**
     * @param {Permissions} permissions
     */
    set setPermissions(permissions) {
        this.permissions = permissions;
    }
}

// Category class
export class Category {

    /**
     * @param {string} title
     * @param {Category} parent
     */
    constructor(title, parent) {
        this.title = title;
        this.addParent(parent);
        this.children = new Set();
    }

    /**
     * @returns {string} title 
     */
    get getTitle() {
        return this.title;
    }

    /**
     * @param {string} title 
     */
    set setTitle(title) {
        this.title = title;
    }

    /**
     * @param {Category} parent
     */
    addParent(parent) {
        if (parent != null && parent != undefined) {
            this.parent = parent;
            parent.children.add(this);
        }
    }

    /**
     * @param {Category} child
     */
    addChild(child) {
        if (child != null && child != undefined) {
            child.parent = this;
            this.children.add(child);
        }
    }

    /**
     * @param {Set<Category>} children 
     */
    addChildren(children) {
        this.children = children;
        children.forEach(child => {
            child.addParent(this);
        });
    }
}

// Item class
export class Item {

    /**
     * @param {string} name 
     * @param {Category} category 
     */
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }

    /**
     * @returns {string} name
     */
    get getName() {
        return this.name;
    }

    /**
     * @returns {Category} category
     */
    get getCategory() {
        return this.category;
    }

    /**
     * @param {string} name
     */
    set setName(name) {
        this.name = name;
    }

    /**
     * @param {Category} category
     */
    set setCategory(category) {
        this.category = category;
    }
}

// Permissions class
export class Permissions {

    /**
     * empty constructor
     */
    constructor() {
        this.categoryPermissionsList = new Set();
    }

    /**
     * @returns {Set<Category>} categoryPermissionsList
     */
    get getCategoryPermissions() {
        return this.categoryPermissionsList;
    }

    /**
     * @param {Set<Category>} categoryPermissionsList
     */
    set setCategoryPermissions(categoryPermissionsList) {
        this.categoryPermissionsList = categoryPermissionsList;
    }

    addCategoryPermission(category){
        this.categoryPermissionsList.add(category);
    }
}