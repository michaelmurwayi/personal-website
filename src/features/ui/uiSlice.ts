import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  drawerOpen: boolean;
  language: string;
}

const initialState: UiState = {
  drawerOpen: true,
  language: 'en',
};

// UI/domain-agnostic state kept in Redux so it survives navigation and can be
// persisted (e.g. the active locale). Extend with feature slices as the app grows.
export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDrawer(state) {
      state.drawerOpen = !state.drawerOpen;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { toggleDrawer, setLanguage } = uiSlice.actions;
export default uiSlice.reducer;
