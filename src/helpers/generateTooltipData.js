export default (text, type) => {
    return {
        duration: 3000,
        message: text,
        position: 'is-bottom-left',
        type: `is-${type}`,
    };
};
