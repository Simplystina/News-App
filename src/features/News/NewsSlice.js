import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: 0,
  articles: [],
  currentPage: 1,
  pageSize: 10,
  totalItems: 0,
  status: 'idle',
  error: null,
  country: "us",
  category: 'general',
  loading: false,
  searchList : [],
  currentArticle: []
}

export const fetchArticles = createAsyncThunk(
    'news/fetchArticles',
    async ({country, category}, { rejectWithValue }) => {
      try {
        console.log( "state", country)
        console.log(process.env.NEWS_API_KEY, "API KEY")
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: country,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
         category: category,
         pageSize:100
      },
    });
        console.log(response)
        return response.data;

      } catch (error) {
        console.log(error,"errorrrr")
        return rejectWithValue(error.response.data);
      }
    }
  );


  export const searchArticles = createAsyncThunk(
    'news/searchArticles',
    async ({word, country, category}, { rejectWithValue }) => {
      try {
        console.log( "state", country)
        console.log(process.env.NEXT_PUBLIC_NEWS_API_KEY, "API KEY")
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: country,
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
         category: category,
         q: word,
         pageSize:100
      },
    });
        console.log(response, "search results")
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
      setCountry: (state, action) => {
        state.country = action.payload;
      },
      setCategory: (state, action) => {
        state.category = action.payload;
      },
      setSearchList: (state, action) => {
        state.searchList = [];
      },

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
        state.loading = true
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload?.articles;
        state.totalItems = action.payload?.totalResults
        state.error = null;
        state.loading = false
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        state.loading = false
      })
    // Additional builders
    .addMatcher(
        (action) => action.type === searchArticles.pending.type,
        (state) => {
            state.status = 'loading';
            state.loading = true
          // Update state for the new endpoint pending action
        }
      )
      .addMatcher(
        (action) => action.type === searchArticles.fulfilled.type,
        (state, action) => {
        state.status = 'succeeded';
        state.searchList = action.payload;
        state.error = null;
        state.loading = false
          // Update state for the new endpoint fulfilled action
        }
      )
      .addMatcher(
        (action) => action.type === searchArticles.rejected.type,
        (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            state.loading = false
          // Update state for the new endpoint pending action
        }
      )
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentPage,setCountry, setCategory, setSearchList } = newsSlice.actions

export default newsSlice.reducer