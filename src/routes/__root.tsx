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
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { GoldVeil } from "../components/gold-veil";
import { PageTransition } from "../components/page-transition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-6">404</p>
        <h1 className="text-4xl text-foreground">Seite nicht gefunden</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Die von Ihnen gesuchte Seite existiert leider nicht.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-anthracite bg-anthracite px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold hover:border-gold"
          >
            Zur Startseite
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
        <p className="eyebrow mb-6">Fehler</p>
        <h1 className="text-3xl text-foreground">Diese Seite konnte nicht geladen werden</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-anthracite bg-anthracite px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold hover:border-gold"
          >
            Erneut versuchen
          </button>
          <a
            href="/"
            className="border border-anthracite/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-anthracite transition-colors hover:border-gold hover:text-gold"
          >
            Startseite
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
      { title: "Juwelier Gold & Star – Schmuck, Uhren und Trauringe in Berlin-Reinickendorf" },
      {
        name: "description",
        content:
          "Persönliche Beratung, ausgewählte Schmuckstücke, Uhren und Trauringe. Ihr Juwelier vor Ort in Berlin-Reinickendorf.",
      },
      { name: "author", content: "Juwelier Gold & Star" },
      { property: "og:title", content: "Juwelier Gold & Star – Berlin-Reinickendorf" },
      {
        property: "og:description",
        content:
          "Ausgewählter Schmuck, feine Uhren und Trauringe mit persönlicher Beratung in Berlin-Reinickendorf.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap",
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
    <html lang="de">
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
      <GoldVeil />
      <div className="relative z-[1] flex min-h-screen flex-col text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
