
import {configureStore} from '@reduxjs/toolkit'
import {profileReducer, userReducer } from './reducers/userReducer';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { teacherReducer } from './reducers/teacherReducer';
import { top3courseReducer } from './reducers/top3courseReducer';
import { top3teacherReducer } from './reducers/top3teacherReducer';
import { otherReducer } from './reducers/otherReducer';
import { subscriptionplanReducer } from './reducers/subscriptionplanreducer';
const store = configureStore({
    reducer:{
        user:userReducer,
        profile:profileReducer,
        course:courseReducer,
        admin: adminReducer,
        teacher:teacherReducer,
        topcourse:top3courseReducer,
        topteacher:top3teacherReducer,
        subplan:subscriptionplanReducer,
        other: otherReducer,
    }
});

export default store;

export const server = "https://goencodingolive.onrender.com/api/v1"
