import { NavLink, Outlet, useLocation, useMatches } from "react-router";

function App() {
  const location = useLocation();
  const matches = useMatches();
  const currentMatch = matches.at(-1);
  const routeId = currentMatch?.id ?? "unknown";
  const params = currentMatch?.params ?? {};
  const hasParams = Object.keys(params).length > 0;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-6 p-6">
      <nav className="flex items-center gap-3 border-b pb-4">
        <div className="flex items-center gap-3 flex-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "text-muted-foreground"
            }
          >
            Plugin List
          </NavLink>
          <NavLink
            to="/angularJs"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "text-muted-foreground"
            }
          >
            Angular Js
          </NavLink>
        </div>
        <h1> POC ReactPlugins </h1>
      </nav>

      <header className="rounded-md border p-2 px-4 flex justify-between">
        <p className="text-sm text-muted-foreground flex-1">
          Path corrente: <code>{location.pathname}</code>
        </p>
        <p className="text-sm text-muted-foreground flex-1">
          Route id: <code>{routeId}</code>
        </p>
        <p className="text-sm text-muted-foreground flex-1">
          Params: <code>{hasParams ? JSON.stringify(params) : "{}"}</code>
        </p>
      </header>

      <section className="flex-1">
        <Outlet />
      </section>
    </main>
  );
}

export default App;
