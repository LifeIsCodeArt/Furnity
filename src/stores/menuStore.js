import {ref} from 'vue'
import { defineStore } from 'pinia'

export const useMenuItemsStore = defineStore('MenuItemsStore', () => {
  const MenuItems = ref([
    {
      id:1,
      name: 'Badroom'
    },
    {
      id:2,
      name: 'Living Room'
    },
    {
      id:3,
      name: 'Dining Room'
    },
    {
      id:4,
      name: 'Office'
    },
    {
      id:5,
      name: 'Kitchen'
    },
    {
      id:6,
      name: 'Sofa'
    },
  ])

  const MenuItemsFooter = ref([
    {
      id:1,
      name: 'Support'
    },
    {
      id:2,
      name: 'Privacy Policy'
    },
    {
      id:3,
      name: 'Terms and Conditions'
    }])


  return {MenuItems,MenuItemsFooter}
})