import { AppProvider } from "@/context/AppContext";
import { ToastProvider } from "@/context/ToastContext";
import Layout from "@/components/layout/Layout";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <AppProvider>
      <ToastProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </ToastProvider>
    </AppProvider>
  );
}
