import ActivityStore from './activityStore';
import { createContext, useContext } from 'react';

interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

//create activity store context
export const StoreContext = createContext(store);

//create hooks, Allow touse react component
export function useStore() {
    return useContext(StoreContext);
}