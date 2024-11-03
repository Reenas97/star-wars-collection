import { createSlice } from '@reduxjs/toolkit';
import { Starship } from '../../services/starships';

interface StarshipsState {
  starships: Starship[];
  loading: boolean;
}

const initialState: StarshipsState = {
  starships: [],
  loading: false,
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setStarships: (state, action) => {
      state.starships = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setStarships, setLoading } = starshipsSlice.actions;
export default starshipsSlice.reducer;
