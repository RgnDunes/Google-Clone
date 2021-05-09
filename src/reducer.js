export const initialState = {
  term: null,
};

export const actionTypes = {
  "": "",
};

const reducer = ({ action, state }) => {
  console.log(action.type);
  switch (action.type) {
    case "":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
