import { createSlice } from '@reduxjs/toolkit';
import { Planet } from '../../services/planets';

interface PlanetState {
  planets: Planet[];
  loading: boolean;
}

const initialState: PlanetState = {
  planets: [],
  loading: false,
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action) => {
      state.planets = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setPlanets, setLoading } = planetsSlice.actions;
export default planetsSlice.reducer;
