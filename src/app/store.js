import { configureStore } from '@reduxjs/toolkit';
import emailSliderSlice from '../features/listSlider/emailSliderSlice';

export const store = configureStore({
  reducer: {
    emailList: emailSliderSlice,
  },
});
