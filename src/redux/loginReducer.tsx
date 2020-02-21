interface IInitialState {
    title: string
}

const initialState: IInitialState = {
    title: 'Login'
};

const loginReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default loginReducer