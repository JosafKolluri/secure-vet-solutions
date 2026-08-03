import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CyberCloud Infra LLC | IT, Infrastructure & Staffing" },
      {
        name: "description",
        content:
          "Veteran-owned provider of IT services, infrastructure engineering, and IT, non-IT, and healthcare staffing for government and enterprise.",
      },
      { name: "author", content: "CyberCloud Infra LLC" },
      { property: "og:title", content: "CyberCloud Infra LLC | IT, Infrastructure & Staffing" },
      {
        property: "og:description",
        content:
          "Technology and talent solutions for mission-critical organizations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "CyberCloud Infra LLC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CyberCloud Infra LLC | IT, Infrastructure & Staffing" },
      { name: "twitter:description", content: "Technology and talent solutions for mission-critical organizations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4670dae6-3b36-4a6e-83ed-ff3f24792e14/id-preview-20ac24a9--f33ea567-314e-482f-9b5f-4834b35ab57f.lovable.app-1782396161258.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4670dae6-3b36-4a6e-83ed-ff3f24792e14/id-preview-20ac24a9--f33ea567-314e-482f-9b5f-4834b35ab57f.lovable.app-1782396161258.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CyberCloud Infra LLC",
          description:
            "Service-Disabled Veteran-Owned Small Business delivering IT services, infrastructure engineering, and specialized staffing.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "704 Fox Squirrel CT",
            addressLocality: "Arlington",
            addressRegion: "TX",
            postalCode: "76005",
            addressCountry: "US",
          },
          email: "info@sdvodbtech.com",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTABar />
      <Toaster />
    </QueryClientProvider>

  );
}
