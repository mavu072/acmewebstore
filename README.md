
 # ACME Web Store
 
This project contains the solution to the ACME Web Store Challenge.

<hr>

 #### 1. JS Object Structure
    You will find the solution for the Object/Model structure in the directory:
 **src/classes/prototype.js**

 #### 2. JS function: Filter by category
    You will find the solution for the Filter-by-category function in the directory:
**src/functions/filter-by-category.js**

    Remember to review the Objects/Model when reading the code, to better understand logic.

<hr>

# Objects
    Brief descriptions of each object in the model.

### Customer
    This object contains the basic information about the customer and includes a relationship to the Permissions object.

### Permissions
    This object stores all the information regarding data that a single customer can access or view.

### Category
    This object creates a hierarchial structure of item categories, with bidirectional relationship/access between parent and child nodes.

### Item
    This object represents a single store item and belongs to a category.

<hr>