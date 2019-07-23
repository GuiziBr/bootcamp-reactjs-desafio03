import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";
import {
  addDeveloperSuccess,
  addDeveloperFailure
} from "../actions/developers";

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.developer}`);

    const isDuplicated = yield select(state =>
      state.developers.data.find(developer => developer.id === data.id)
    );

    if (isDuplicated) {
      yield put(addDeveloperFailure("Usuário já existe"));
    } else {
      const developerData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar_url: data.avatar_url,
        latitude: action.payload.coordinates.latitude,
        longitude: action.payload.coordinates.longitude
      };
      yield put(addDeveloperSuccess(developerData, true));
    }
  } catch (error) {
    yield put(addDeveloperFailure("Erro ao adicionar usuário"));
  }
}
