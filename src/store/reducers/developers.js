const INITIAL_STATE = {
  data: [],
  error: null,
  success: null
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_DEVELOPER_SUCCESS":
      return {
        ...state,
        data: [...state.data, action.payload.data],
        error: null,
        success: action.payload.success
      };
    case "ADD_DEVELOPER_FAILURE":
      return { ...state, error: action.payload.error, success: null };
    case "REMOVE_DEVELOPER":
      return {
        ...state,
        data: state.data.filter(developer => {
          return developer.id !== action.payload.id;
        }),
        error: null,
        success: null
      };
    default:
      return state;
  }
}
