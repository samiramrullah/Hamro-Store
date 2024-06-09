import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductInterface } from "../../pages/Product";

export const STATUS = Object.freeze({
    IDLE: 'idle',
    LOADING: 'loading',
    ERROR: 'error'
});



// Define Data Interface
interface DataInterface {
    products: ProductInterface[];
}

// Define Product State Interface
interface ProductState {
    data: ProductInterface[];
    status: string;
}

// Initial State
const initialState: ProductState = {
    data: [],
    status: STATUS.IDLE,
};

// Create Redux Slice
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<ProductInterface[]>) {
            state.data = action.payload;
        },
        setStatus(state, action: PayloadAction<string>) {
            state.status = action.payload;
        },
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Async Thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { dispatch }) => {
        dispatch(setStatus(STATUS.LOADING));
        try {
            const res = await axios.get<DataInterface>("http://localhost:5000/api/product/getallproducts", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            });
            dispatch(setProducts(res.data.products));
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
);
