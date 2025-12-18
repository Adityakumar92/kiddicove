import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Centers from "@/pages/centers/Centers";
import Dehradun from "@/pages/centers/Dehradun";
import Gurugram from "@/pages/centers/Gurugram";
import ScrollToTop from "@/components/ScrollToTop";
import CWP from "@/pages/programs/CWP";
import MAP from "@/pages/programs/MAP";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermCondition";

import { useLocation } from "wouter";
import { useEffect } from "react";
import { trackPageView } from "./analytics";

import { Helmet, HelmetProvider } from "react-helmet-async";
import Internship from "./pages/Internship";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/internship" component={Internship} />
      <Route path="/contact" component={Contact} />
      <Route path="/centers" component={Centers} />
      <Route path="/centers/dehradun" component={Dehradun} />
      <Route path="/centers/gurugram" component={Gurugram} />
      <Route path="/programs/cwp" component={CWP} />
      <Route path="/programs/map" component={MAP} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/T&C" component={TermsAndConditions} />
      <Route component={NotFound} />
    </Switch>
  );
}

function DefaultHeadTags() {
  return (
    <Helmet>
      <title>KiddiCove</title>
      <meta
        name="description"
        content="KiddiCove - Premium childcare and early education centers"
      />
      <meta
        name="keywords"
        content="childcare, daycare, preschool, early education, kids"
      />
      <meta property="og:site_name" content="KiddiCove" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

function App() {
  return (
    <HelmetProvider>
      <DefaultHeadTags />

      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
