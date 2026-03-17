import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ProductProvider } from "./contexts/ProductContext";
import Products from "./pages/Products";
import About from "./pages/About";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Products} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <ProductProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </ProductProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
