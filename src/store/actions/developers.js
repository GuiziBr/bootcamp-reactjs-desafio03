export const addDeveloperRequest = (developer, coordinates) => ({
  type: "ADD_DEVELOPER_REQUEST",
  payload: { developer, coordinates }
});

export const addDeveloperSuccess = (data, success) => ({
  type: "ADD_DEVELOPER_SUCCESS",
  payload: { data, success }
});

export const addDeveloperFailure = error => ({
  type: "ADD_DEVELOPER_FAILURE",
  payload: { error }
});

export const removeDeveloper = id => ({
  type: "REMOVE_DEVELOPER",
  payload: { id }
});
