import { createStore } from '@reduxjs/toolkit'
import rootred from './redux/reducers/main'

const store = createStore(
    rootred
);

export default store 