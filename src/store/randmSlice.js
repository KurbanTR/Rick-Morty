import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchPerson = createAsyncThunk(
    'todos/fetchPerson',
    async function(params, {rejectWithValue, dispatch}){
        try{
            const response = await fetch('https://rickandmortyapi.com/api/character/', {params})
            if(!response.ok) {
                throw new Error('Server Error!')
            }
            dispatch(setPerson(response.payload));
        }catch(error){
            return rejectWithValue(error.message)
        }

    }
)

const randmSlice = createSlice({
    name: 'randm',
    initialState: {
        person: [],
        location: [],
        episode: [],
        loading: false,
        error: false,
    },
    reducers: {
        setPerson(state, action){
            state.person = action.payload
        },
        setLocation(state, action){
            state.location = action.payload
        },
        setEpisode(state, action){
            state.episode = action.payload
        }
    },
})
export const {setPerson, setLocation, setEpisode} = randmSlice.actions
export default randmSlice.reducer