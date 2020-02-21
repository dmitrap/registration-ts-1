interface IInitialState {}
const initialState: IInitialState = {};

const recoverReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default recoverReducer