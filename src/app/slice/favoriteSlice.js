import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  fetchFavorites,
  createFavorites,
  deleteFavorites,
} from '../../api/function/favorite';

export const getFavorites = createAsyncThunk('favorite/getFavorites', () => {
  return fetchFavorites();
});

export const addFavorites = createAsyncThunk(
  'favorite/addFavorites',
  async (book) => {
    const res = await createFavorites(book.ISBN);
    if (res) return { ...book, ...res };
  }
);

export const removeFavorites = createAsyncThunk(
  'favorite/removeFavorites',
  async (isbn) => {
    const res = await deleteFavorites(isbn);
    if (res) return isbn;
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: { favouriteList: [] },
  extraReducers: {
    [getFavorites.fulfilled]: (_, { payload }) => {
      if (payload && payload.favouriteList.length > 0) {
        return payload;
      }
    },
    [addFavorites.fulfilled]: (state, { payload }) => {
      if (!payload) return state;
      toast(`Yêu thích sách thành công`, {
        position: toast.POSITION.BOTTOM_LEFT,
        icon: '❤️',
      });
      return { favouriteList: [...state.favouriteList, payload] };
    },
    [removeFavorites.fulfilled]: (state, { payload }) => {
      if (!payload) return state;
      toast(`Bỏ yêu thích sách thành công`, {
        position: toast.POSITION.BOTTOM_LEFT,
        icon: '💔',
      });
      return {
        favouriteList: state.favouriteList.filter(
          (book) => book.ISBN !== payload
        ),
      };
    },
  },
});

export default favoriteSlice.reducer;
