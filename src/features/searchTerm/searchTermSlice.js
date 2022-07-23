export const setSearchTerm = (term) => {
    return {
        type: 'searchTerm/setSearchTerm',
        payload: term
    }
}

export const clearSearchTerm = () => {
    return {
        type: 'searchTerm/clearSearchTerm'
    }
}

const initialsearchTerm = "";
export const searchTermReducer = (searchTerm=initialsearchTerm, action) => {
    switch(action.type){
        case 'searchTerm/setSearchTerm': {
            const newTerm = action.payload;
            return newTerm;
        }
        case 'searchTerm/clearSearchTerm': {
            return ''; 
        }
        default: {
            return searchTerm; 
        }
    }
}




