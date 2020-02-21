interface IInitialState {}
const initialState: IInitialState = {};

const profileReducer = (state: IInitialState = initialState, action: any): IInitialState => {
    switch (action.type) {
        default:
            return state;
    }
};

export default profileReducer