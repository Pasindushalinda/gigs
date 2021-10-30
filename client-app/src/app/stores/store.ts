import ActivityStore from './activityStore';
import { createContext, useContext } from 'react';
import CommonStore from './commonStore';

interface Store {
    activityStore: ActivityStore,
    commonStore: CommonStore,
}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
}

//create activity store context
export const StoreContext = createContext(store);

//create hooks, Allow touse react component
export function useStore() {
    return useContext(StoreContext);
}