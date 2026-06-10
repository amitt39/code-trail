import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'jobs',
  initialState: { jobs: [] },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload)
    },
    moveJob: (state, action) => {
      const job = state.jobs.find(job => {
        return job.id === action.payload.id
      })
      if (job) {
        job.status = action.payload.status
      }
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter(job => {
        return job.id !== action.payload
      })
    }
  }
})

export const { addJob, moveJob, deleteJob } = slice.actions
export default slice.reducer
