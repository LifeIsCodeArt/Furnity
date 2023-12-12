import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useCollectionItemsStore = defineStore('CollectionItemsStore', () => {
    const chairCollectionItems = ref([
        {
            id:1,
            label: 'Blue chair',
            imageLink: '../src/assets/images/Items%20Collection/item_1.svg',
            currentPrice: '25.00$',
            oldPrice: ""
        },
        {
            id:2,
            label: 'Blue chair',
            imageLink: '../src/assets/images/Items%20Collection/item_2.svg',
            currentPrice: '25.00$',
            oldPrice: '45.00$'
        },
        {
            id:3,
            label: 'Coral vase',
            imageLink: '../src/assets/images/Items%20Collection/item_3.svg',
            currentPrice: '75.00$',
            oldPrice: '115.00$'
        },
        {
            id:4,
            label: 'Coffee table set',
            imageLink: '../src/assets/images/Items%20Collection/item_4.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:5,
            label: 'Decorative vase',
            imageLink: '../src/assets/images/Items%20Collection/item_5.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:6,
            label: 'Coral vase',
            imageLink: '../src/assets/images/Items%20Collection/item_6.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:7,
            label: 'Gray sofa',
            imageLink: '../src/assets/images/Items%20Collection/item_7.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
        {
            id:8,
            label: 'Black chair',
            imageLink: '../src/assets/images/Items%20Collection/item_8.svg',
            currentPrice: '15.00$',
            oldPrice: '15.00$'
        },
    ])

    const benefitsCollection = ref([
        {
            id:1,
            label: 'Fast and safe delivery',
            imageLink: '/src/assets/icons/benefit-icons/bx-package.png',
            text: 'please login and buy our products, safe delivery guaranteed',
        },
        {
            id:2,
            label: 'Quick and easy returns',
            imageLink: '/src/assets/icons/benefit-icons/bx-loader-circle.png',
            text: 'Items that do not match we are ready to replace, please return',
        },
        {
            id:3,
            label: '24 hour customer service',
            imageLink: '/src/assets/icons/benefit-icons/bx-user-pin.png',
            text: 'Our customer service is ready to serve you at any time, don\'t hesitate to contact us',
        },
        {
            id:4,
            label: 'the price match is very fitting',
            imageLink: '/src/assets/icons/benefit-icons/bx-target-lock.png',
            text: 'The price of the products we offer is very in accordance with the quality of the goods',
        }
    ])
    return {chairCollectionItems, benefitsCollection}
})
