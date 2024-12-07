// Import necessary modules
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import ArticalDetails from "../Details/ArticalDetalis/view-article";
import Business from "../Pages/Business/Business";
import Article from "../Pages/Admin/AdminPanel/AddedArtical/Article";
import AddArticle from "../Pages/Admin/Add/AddArtical/AddArticle";
import Courses from "../Pages/Courses/courses";
import CourseDetails from "../Details/CoursesDetails/course-Details";
import Course from "../Pages/Admin/AdminPanel/AddedCourses/Course";
import Courseform from "../Pages/Admin/Add/AddCoures/Courseform";
import Profile from "../Pages/UserPage/Profile";
import InstructorPortal from "../Pages/UserPage/InstructorPortal";
import StudentPortal from "../Pages/UserPage/StudentPortal";
import Exams from "../Pages/Exam/Exams";
import AddExam from "../Pages/Admin/Add/AddExam/AddExam";
import AddCourse from "../Pages/Admin/Add/AddExam/AddCourse";
import OnlineExam from "../Pages/Exam/OnlinExam";
import ExamResult from "../Pages/Exam/ExamResult";
import Contact from "../Pages/Contact/Contact";
import LookingForAjop from "../Pages/Jobs/lookingForAjob";
import ManagingJops from "../Pages/Jobs/managingJobs";
import ManagingApplications from "../Pages/Jobs/managingApplications";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home/> },
      { path: "artical/:id", element: <ArticalDetails/> },
      { path: "business", element: <Business/> },
      { path: "business/:id", element: <ArticalDetails/> },
      { path: "login", element: <h2>Login page</h2> },
      { path: "admin", element: <Article/> },
      { path: "addarticle", element: <AddArticle/> },
      { path: "courses", element: <Courses/> },
      { path: "courseDetails/:id", element: <CourseDetails/> },
      { path: "addedCourse", element: <Course/> },
      { path: "createCourse", element: <Courseform/> },
      { path: "profile", element: <Profile/> },
      { path: "instructor", element: <InstructorPortal/> },
      { path: "student", element: <StudentPortal/> },
      { path: "exam", element: <Exams/> },
      { path: "addexam", element: <AddExam/> },
      { path: "addcourse", element: <AddCourse/> },
      { path: "onlineexam", element: <OnlineExam/> },
      { path: "examresult", element: <ExamResult/> },
      { path: "jobs", element: <LookingForAjop/> },
      { path: "admin-jobs", element: <ManagingJops/> },
      { path: "admin-applications", element: <ManagingApplications/> },
      { path: "createCv", element: <h2>Create Cv</h2> },
      { path: "contact", element: <Contact/> },
      { path: "*", element: <h2>Not Found</h2> },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router };

export default routes;
