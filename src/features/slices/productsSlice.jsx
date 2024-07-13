import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("singleProduct")) || storeData,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filteredProducts = filter;
        state.error = false;
        const savedState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", savedState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = state.filteredProducts.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const savedState = JSON.stringify(oneProduct);
        sessionStorage.setItem("singleProduct", savedState);
      } catch (err) {
        return err;
      }
    },

    // sortByPricede(state) {
    //   try {
    //     const price = state.filteredProducts.sort((a, b) => b.price - a.price);
    //     state.filteredProducts = price;
    //     let count = price.length;
    //     if (count > 1) {
    //       const noError = false;
    //       state.error = noError;
    //       if (!noError) {
    //         state.filteredProducts = price;
    //         const saveState = JSON.stringify(price);
    //         sessionStorage.setItem("filteredData", saveState);
    //       }
    //     } else {
    //       state.error = true;
    //       state.filteredProducts = [];
    //     }
    //   } catch (err) {
    //     return err;
    //   }
    // },

    sortByPricede(state) {
      try {
        const price = state.filteredProducts.sort((a, b) => a.price - b.price);
        state.filteredProducts = price;
        let count = price.length;
        if (count > 1) {
          const noError = false;
          state.error = noError;
          if (!noError) {
            state.filteredProducts = price;
            const saveState = JSON.stringify(price);
            sessionStorage.setItem("filteredData", saveState);
          }
        } else {
          state.error = true;
          state.filteredProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPricede,
  sortByPriceac,
  filterByColor,
  filterBySize,
} = productSlice.actions;
export default productSlice.reducer;
