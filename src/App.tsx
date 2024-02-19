import { dashboardRouter } from '@routes/dashboard-routes';
import { RouterProvider } from '@tanstack/react-router';
import MuiProvider from '@components/theme-provider/MuiProvider';

function App() {
  return (
    <MuiProvider>
      <RouterProvider router={dashboardRouter} />
    </MuiProvider>
  );
}

export default App;
