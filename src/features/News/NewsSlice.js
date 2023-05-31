import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: 0,
  articles: [],
  source: '',
  currentPage: 1,
  status: 'idle',
  error: null,
  country: "us"
}

export const fetchArticles = createAsyncThunk(
    'news/fetchArticles',
    async (_, { rejectWithValue }) => {
      try {
        console.log(process.env.NEWS_API_KEY, "API KEY")
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: initialState.country,
        apiKey: "809b3fb8deee40dd96644175706da955",

      },
    });
    
        return response.data.articles;

      } catch (error) {
        console.log(error,"errorrrr")
        return rejectWithValue(error.response.data);
      }
    }
  );
export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
       
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = newsSlice.actions

export default newsSlice.reducer