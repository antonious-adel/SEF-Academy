
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Components/Routes/Routes'
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ExamProvider from './Components/context/ExamProvider';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});


function App() {

  

  return (
     <div className='App'>
          <QueryClientProvider client={queryClient}>
          <ExamProvider>


      <RouterProvider router={router} />
      </ExamProvider>


      </QueryClientProvider>


     </div>

  )
}

export default App
