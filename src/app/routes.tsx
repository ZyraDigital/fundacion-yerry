import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProgramsPage } from "./pages/ProgramsPage";
import { ImpactPage } from "./pages/ImpactPage";
import { DonatePage } from "./pages/DonatePage";
import { VolunteerPage } from "./pages/VolunteerPage";
import { NewsPage } from "./pages/NewsPage";
import { PartnershipsPage } from "./pages/PartnershipsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProgramDetailPage } from "./pages/ProgramDetailPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "programs", Component: ProgramsPage },
      { path: "programs/:programId", Component: ProgramDetailPage },
      { path: "impact", Component: ImpactPage },
      { path: "donate", Component: DonatePage },
      { path: "volunteer", Component: VolunteerPage },
      { path: "news", Component: NewsPage },
      { path: "news/:newsId", Component: NewsDetailPage },
      { path: "partnerships", Component: PartnershipsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
