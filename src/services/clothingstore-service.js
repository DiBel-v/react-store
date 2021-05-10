export default class ClothingStoreService {
    data = [
        {
            type: 'clothes',
            items: [
                {
                    id: 1,
                    title: 'Trousers',
                    price: 20,
                    image: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G27/shotview/2205/437-592s.jpg'
                },
                {
                    id: 2,
                    title: 'Jacket',
                    price: 30,
                    image: 'https://www.danezon.com/wp-content/uploads/2019/02/Mens-Casual-Tan-Brown-Bomber-Jacket.jpg'
                },
                {
                    id: 3,
                    title: 'Shirt',
                    price: 15,
                    image: 'https://5.imimg.com/data5/UC/TY/MY-9601095/100-25-cotton-fancy-casual-shirt-for-men-500x500.jpg'
                }
            ]
        },
        {
            type: 'accessories',
            items: [
                {
                    id: 4,
                    title: 'Belt',
                    price: 10,
                    image: 'https://wwws.dior.com/couture/ecommerce/media/catalog/product/cache/1/zoom_image_1/3000x2000/17f82f742ffe127f42dca9de82fb58b1/7/J/1600868702_B0403CVWV_M900_E01_ZH.jpg'
                },
                {
                    id: 5,
                    title: 'Bag',
                    price: 20,
                    image: 'https://cdn.shopify.com/s/files/1/0757/9123/products/linjer-tulip-bag-black-red-3-back_1440x.jpg?v=1547262780'
                },
                {
                    id: 6,
                    title: 'Glasses',
                    price: 15,
                    image: 'https://cdn-images.farfetch-contents.com/15/26/74/61/15267461_26637796_600.jpg'
                }
            ]
        },
        {
            type: 'shoes',
            items: [
                {
                    id: 7,
                    title: 'Sneakers',
                    price: 10,
                    image: 'https://static.nike.com/a/images/t_default/aa9072da-7cff-49ce-b60d-1f8b2b90dfb9/%D0%B1%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-lebron-18-white-black-gold-hK8tcz.png'
                },
                {
                    id: 8,
                    title: 'Boots',
                    price: 20,
                    image: 'http://pngimg.com/uploads/vans/vans_PNG19.png'
                },
                {
                    id: 9,
                    title: 'Gumshoes',
                    price: 15,
                    image: 'https://freepngimg.com/thumb/categories/627.png'
                }
            ]
        },
    ];

    getProducts(productType) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const returnProducts = this.data.find(product => product.type === productType)?.items;
                if (returnProducts) {
                    resolve(returnProducts);
                }
                reject('No such product type');
            }, 800);
        })
    }
}