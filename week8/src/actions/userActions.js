export const updateUserId = (id) => {
    return {
        type: 'UPDATE_USER_ID',
        payload: id
    };
};

export const updateUserPw = (pw) => {
    return {
        type: 'UPDATE_USER_PW',
        payload: pw
    };
};
