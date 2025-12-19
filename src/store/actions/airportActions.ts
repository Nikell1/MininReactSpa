import axios from "../../axios"
import { IAirport, ServerResponse } from "../../models/models"
import { AppDispatch } from "../index"
import { airportSlice } from "../slices/airportSlice"

export const fetchAirports = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(airportSlice.actions.fetching())
            const response = await axios.get<ServerResponse<IAirport>>('airports')
            dispatch(airportSlice.actions.fetchSuccess(
                response.data.results
            ))
        }
        catch(e) {
            dispatch(airportSlice.actions.fetchError(e as Error))
        }
    }
}