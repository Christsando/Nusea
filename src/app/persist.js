export const saveState = (state) => {
    localStorage.setItem("reduxState", JSON.stringify(state));
};

export const loadState = () => {
    try {
        const serialized = localStorage.getItem("reduxState");
        if (!serialized) return undefined;
        return JSON.parse(serialized);
    } catch (err) {
        return undefined;
    }
};
