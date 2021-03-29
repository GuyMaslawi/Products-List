import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',

  initialState: {
    items: [
      {
        id: 0,
        title: "product1",
        description: " description of product1",
        price: 20,
        created: "01/28/2017"
      },
      {
        id: 1,
        title: "product2",
        description: "description of product2",
        price: 15,
        created: "06/28/2018"
      }
    ],
    filteredArr: null,
    currentProductOpen: 0,
    isNewProduct: false,
    currentSortType: "RECENTLY_ADDED",
    isProductDialogOpen: false
  },

  reducers: {
    addItem: (state: any, action: any) => {
      state.items.push(action.payload);
    },
    deleteItem: (state: any, action: any) => {
      state.items.splice(action.payload, action.payload);
    },
    updateItem: (state: any, action: any) => {
      const { id, value } = action.payload;
      state.items[id] = value.title;
      state.items[id] = value.description;
      state.items[id] = value.price;
    },
    setCurrentProduct: (state: any, action: any) => {
      state.isNewProduct = false;
      state.currentProductOpen = action.payload;
    },
    setNewProduct: (state: any, action: any) => {
      state.isNewProduct = action.payload;
    },
    setProductDialogOpen: (state: any, action: any) => {
      state.isProductDialogOpen = action.payload;
    },
    searchProducts: (state: any, action: any) => {
      const filter = state.items.filter((val: any) => val.title.includes(action.payload.toLowerCase()));
      state.filteredArr = filter;
    },
    sortArr: (state: any, action: any) => {
      switch (action.payload) {
        case 'HIGH_TO_LOW': {
          state.currentSortType = "HIGH_TO_LOW";
          state.items.sort((a: any, b: any) => Number(b.price) - Number(a.price));
          return;
        }
        case 'LOW_TO_HIGH': {
          state.currentSortType = "LOW_TO_HIGH";
          state.items.sort((a: any, b: any) => Number(a.price) - Number(b.price));
          return;
        }
        case 'OLD_ADDED': {
          state.currentSortType = "OLD_ADDED";
          state.items.sort((a: any, b: any) => Date.parse(a.created) - Date.parse(b.created));
          return;
        }
        case 'RECENTLY_ADDED': {
          state.currentSortType = "RECENTLY_ADDED";
          state.items.sort((a: any, b: any) => Date.parse(b.created) - Date.parse(a.created));
          return;
        }
      }
    }
  }
});

export const { addItem, deleteItem, updateItem, setProductDialogOpen, 
               setCurrentProduct, setNewProduct, searchProducts, sortArr } = productsSlice.actions;
export const getList = (state: any) => state.products.items;
export const getFilteredList = (state: any) => state.products.filteredArr;
export const isNewProduct = (state: any) => state.products.isNewProduct;
export const isProductDialogOpen = (state: any) => state.products.isProductDialogOpen;
export const getSortType = (state: any) => state.products.currentSortType;
export const getCurrentOpenProduct = (state: any) => state.products.currentProductOpen;

export default productsSlice.reducer;