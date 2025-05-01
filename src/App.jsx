import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from "@header/Header";
import Home from "@pages/Home";
import Footer from "@footer/Footer";

const queryClient = new QueryClient();

function App(){
      return <>
      <Header/>
      <QueryClientProvider client={queryClient}>
            <Home />
      </QueryClientProvider>
      <Footer/>
      </>
}

export default App;
