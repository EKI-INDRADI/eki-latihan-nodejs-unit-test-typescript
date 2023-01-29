import {ProductService} from "../src/product-service";
import {getAllProducts, getProductById} from "../src/database";

jest.mock("../src/database");



getProductById["mockImplementation"]((id : any ) => {
    return {
        id: id,
        name: "Product Mock"
    }
});


test("mock modules getProductById", () => {


    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
    });
});

test("mock modules getAllProducts", () => {
    const products = [
        {
            id: 1,
            name: "Product Mock"
        },
        {
            id: 2,
            name: "Product Mock"
        }
    ];

    getAllProducts["mockImplementation"](() => {
        return products;
    });

    expect(ProductService.findAll()).toEqual(products);
});

