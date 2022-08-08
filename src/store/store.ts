import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./userReducer/userReducer"

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    userReducer,
})

// export const store = configureStore({
//   reducer: rootReducer,
// });

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import userReducer from "./userReducer/userReducer"

// export const store = configureStore({
//     reducer: combineReducers({
//         userReducer,
//     }),
// })

// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
