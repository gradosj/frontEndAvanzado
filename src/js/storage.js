const lStorage = {
    setItem: (key, value) => localStorage.setItem(key, value),
    getItem: key => localStorage.getItem(key),

};

const cookieStorage = {
    setItem: (key, value) => cookieStorage.set(key, value),
    getItem: key => cookieStorage.getItem(key),
    
};


const storage = (type = 'lStorage') => {
    const types = {
        lStorage,
        cookieStorage,
    };

    if (typeof(Storage) !== 'undefined') {
        return types[type];
    }
    return type['cookieStorage'];
};


export default storage;