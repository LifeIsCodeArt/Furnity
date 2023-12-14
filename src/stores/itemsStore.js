import {defineStore} from "pinia/dist/pinia";
import {ref} from "vue";

export const useCollectionItemsStore = defineStore('CollectionItemsStore', () => {
    const chairCollectionItems = ref([
        {
            id:1,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_1.png',
            price: '25',
        },
        {
            id:2,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_2.png',
            price: '25',
        },
        {
            id:3,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_3.png',
            price: '75',
        },
        {
            id:4,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_4.png',
            price: '15',
        },
        {
            id:5,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_5.png',
            price: '2215'
        },
        {
            id:6,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_6.png',
            price: '15',
        },
        {
            id:7,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_7.png',
            price: '15',
        },
        {
            id:8,
            label: 'Chair',
            text: 'Sakarias Armchair',
            imageLink: '/src/assets/images/Chair%20Collection/chair_8.png',
            price: '15',
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

    const menuTags = ref([
        {
            id:1,
            label: 'Badroom',
        },
        {
            id:2,
            label: 'Living Room',
        },
        {
            id:3,
            label: 'Dining Room',
        },
        {
            id:4,
            label: 'Office',
        },
        {
            id:5,
            label: 'Kitchen'
        },
        {
            id:6,
            label: 'Sofa'
        }
    ])

    return {chairCollectionItems,benefitsCollection,menuTags}
})
