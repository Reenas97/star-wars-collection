import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../../services/characters';

interface CharactersState {
  characters: Character[];
  loading: boolean;
}

const initialState: CharactersState = {
  characters: [],
  loading: false,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacters, setLoading } = charactersSlice.actions;
export default charactersSlice.reducer;


