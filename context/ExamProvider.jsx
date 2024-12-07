import { createContext, useState } from "react";
import { db } from "../hooks/db"; // Ensure db is correctly imported and set up

export const ExamContext = createContext();

const ExamProvider = ({ children }) => {
  const [examData, setExamData] = useState({
    courseId: '',
    courseName: '',
    level: '',
    fullMark: '',
    date: '',
    time: '',
    duration: '',
    durationTime: 'hour',
    questions: [],
  });

  // Function to add a new question to the exam data
  const addQuestion = (question) => {
    setExamData((prevData) => ({
      ...prevData,
      questions: [...prevData.questions, question],
    }));
  };

  // Function to save exam data to IndexedDB
  const saveExamDataToDB = async () => {
    try {
      await db.exams.put(examData);
      console.log('Exam data saved to IndexedDB');
    } catch (error) {
      console.error('Error saving exam data to IndexedDB:', error);
      throw error; // re-throw the error to propagate it up the call stack
    }
  };

  // Function to load exam data from IndexedDB based on courseId
  const loadExamDataFromDB = async (courseId) => {
    if (!courseId || typeof courseId !== 'string') {
      throw new Error('Invalid courseId');
    }

    try {
      console.log(`Attempting to load exam data for courseId: ${courseId}`);
      const savedData = await db.exams.where({ courseId }).first();
      console.log('Loaded exam data:', savedData);
      return savedData || null; // Return null if no data is found
    } catch (error) {
      console.error('Error loading exam data from IndexedDB:', error);
      throw error; // re-throw the error to propagate it up the call stack
    }
  };

  return (
    <ExamContext.Provider
      value={{
        examData,
        setExamData,
        addQuestion,
        saveExamDataToDB,
        loadExamDataFromDB,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export default ExamProvider;