import {configureStore} from "@reduxjs/toolkit";
import user from './slices/userSlice';

const constructStore = () => {

    const store = configureStore({
        reducer: {
            user
        },
    })

    return store
}

const store = constructStore()

export default store