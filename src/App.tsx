import { dashboardRouter } from '@routes/dashboard-routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import MuiProvider from '@components/theme-provider/MuiProvider';

function App() {
  const queryClient = new QueryClient();

  return (
    <MuiProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={dashboardRouter} />
      </QueryClientProvider>
    </MuiProvider>
  );
}

export default App;
