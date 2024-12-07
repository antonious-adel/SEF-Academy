export const addLesson = "addLesson"
export const removeLesson = "removeLesson"
export const search = 'search';


export const addLessonAction = (lessonNumber)=>{
    return{
        type : addLesson,
        payload: { lessonNumber },
    }
}

export const removeLessonAction = (lessonIndex) => ({
    type: removeLesson,
    payload: { lessonIndex },
  });

export const setSearchTerm = (term) => ({
    type: search,
    payload: term,
});