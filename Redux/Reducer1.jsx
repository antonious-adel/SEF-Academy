import React from 'react'
import { addLesson, removeLesson, search } from './Actions/actionType';

const initialState = {
    lessons: [1],
  };
  

const Reducer1 = (state = initialState, action) => {
    switch (action.type) {
      case addLesson:
        return { ...state,  lessons: [...state.lessons, action.payload.lessonNumber],};
     
        case removeLesson:
            return {...state, lessons: state.lessons.filter((_, index) => index !== action.payload.lessonIndex), };
        
            case search:
              return {
                  ...state, searchTerm: action.payload, };

        default:
        return state;
    }
  
}

export default Reducer1
