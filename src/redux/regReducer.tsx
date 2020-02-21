interface IInitialState {}
const initialState: IInitialState = {};

const regReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default regReducer