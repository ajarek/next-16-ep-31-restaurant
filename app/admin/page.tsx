"use client";

import { useSession, signIn, signOut } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAdminDashboardData } from "@/app/actions/admin";

import {
  Users,
  CalendarDays,
  LogOut,
  ShieldAlert,
  Loader2,
  Mail,
  Lock,
  LayoutDashboard,
  BadgeCheck,
  Ban,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type DBUser = {
  id: string;
  name: string;
  email: string;
  role: string | null;
  emailVerified: boolean;
  createdAt: string;
  banned: boolean | null;
};

type Reservation = {
  id: number;
  namereservation: string;
  partysize: number;
  date: string;
  time: string;
  timeslot: string;
  created_at: string;
  user_email: string | null;
};

type DashboardData = {
  users: DBUser[];
  reservations: Reservation[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function fmtTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: React.ElementType;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-5 shadow-lg">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div>
        <p className="text-zinc-400 text-sm font-medium">{label}</p>
        <p className="text-3xl font-bold text-white mt-1">{value}</p>
      </div>
    </div>
  );
}

// ─── Login Form ───────────────────────────────────────────────────────────────

function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn.email({ email, password });
    if (error) {
      toast.error(error.message || "Błąd logowania");
    } else {
      toast.success("Zalogowano pomyślnie!");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-5">
            <ShieldAlert className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          <p className="text-zinc-400 mt-2 text-sm">Still Sea Restaurant • Dostęp tylko dla administratorów</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl space-y-5"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">Hasło</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold bg-amber-500 hover:bg-amber-400 text-black transition-colors disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function AdminDashboard({ userName, userRole }: { userName: string; userRole?: string }) {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"reservations" | "users">("reservations");

  useEffect(() => {
    getAdminDashboardData()
      .then((result) => {
        if (result.error) throw new Error(result.error);
        setData({ users: result.users as DBUser[], reservations: result.reservations as Reservation[] });
      })
      .catch(() => toast.error("Nie udało się pobrać danych"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-zinc-950 overflow-auto">
      {/* Top bar */}
      <header className="sticky top-0 z-10 bg-zinc-900/80 backdrop-blur border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h1 className="font-bold text-white text-lg leading-none">Admin Dashboard</h1>
            <p className="text-zinc-500 text-xs mt-0.5">Still Sea Restaurant</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-sm">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-sm text-zinc-300 font-medium">{userName}</span>
            <span className="text-xs bg-amber-500/15 text-amber-400 border border-amber-500/25 rounded-full px-2 py-0.5 font-medium">
              admin
            </span>
          </div>
          <button
            onClick={() => signOut()}
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Wyloguj</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
            <p className="text-zinc-400">Ładowanie danych...</p>
          </div>
        ) : !data ? (
          <div className="text-center py-32 text-zinc-500">Nie udało się załadować danych</div>
        ) : (
          <>
            {/* Stats */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                icon={CalendarDays}
                label="Łączna liczba rezerwacji"
                value={data.reservations.length}
                color="bg-blue-600"
              />
              <StatCard
                icon={Users}
                label="Zarejestrowani użytkownicy"
                value={data.users.length}
                color="bg-violet-600"
              />
              <StatCard
                icon={BadgeCheck}
                label="Konta zweryfikowane"
                value={data.users.filter((u) => u.emailVerified).length}
                color="bg-emerald-600"
              />
            </section>

            {/* Tab navigation */}
            <div className="flex gap-2 border-b border-zinc-800 pb-0">
              <button
                onClick={() => setTab("reservations")}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                  tab === "reservations"
                    ? "border-amber-500 text-amber-400 bg-amber-500/5"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <CalendarDays className="w-4 h-4" /> Rezerwacje
              </button>
              <button
                onClick={() => setTab("users")}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                  tab === "users"
                    ? "border-amber-500 text-amber-400 bg-amber-500/5"
                    : "border-transparent text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <Users className="w-4 h-4" /> Użytkownicy
              </button>
            </div>

            {/* Reservations table */}
            {tab === "reservations" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-zinc-800">
                  <h2 className="font-semibold text-white">Wszystkie rezerwacje ({data.reservations.length})</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-zinc-800/50">
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">ID</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Imię i nazwisko</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Email</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Gości</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Data</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Pora</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Slot</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Złożono</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {data.reservations.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="text-center py-12 text-zinc-500">
                            Brak rezerwacji
                          </td>
                        </tr>
                      ) : (
                        data.reservations.map((r) => (
                          <tr key={r.id} className="hover:bg-zinc-800/40 transition-colors">
                            <td className="px-5 py-3.5 text-zinc-500">#{r.id}</td>
                            <td className="px-5 py-3.5 text-white font-medium">{r.namereservation}</td>
                            <td className="px-5 py-3.5 text-zinc-400">{r.user_email ?? "—"}</td>
                            <td className="px-5 py-3.5">
                              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold">
                                {r.partysize}
                              </span>
                            </td>
                            <td className="px-5 py-3.5 text-zinc-300">{fmt(r.date)}</td>
                            <td className="px-5 py-3.5 text-zinc-300 capitalize">{r.time}</td>
                            <td className="px-5 py-3.5 text-zinc-300">{r.timeslot}</td>
                            <td className="px-5 py-3.5 text-zinc-500 text-xs">
                              {fmt(r.created_at)} {fmtTime(r.created_at)}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Users table */}
            {tab === "users" && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="px-6 py-4 border-b border-zinc-800">
                  <h2 className="font-semibold text-white">Użytkownicy ({data.users.length})</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-zinc-800/50">
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Imię</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Email</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Rola</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Zweryfikowany</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Status</th>
                        <th className="text-left px-5 py-3 text-zinc-400 font-medium">Rejestracja</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                      {data.users.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-zinc-500">
                            Brak użytkowników
                          </td>
                        </tr>
                      ) : (
                        data.users.map((u) => (
                          <tr key={u.id} className="hover:bg-zinc-800/40 transition-colors">
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300 font-bold text-xs">
                                  {u.name?.charAt(0).toUpperCase()}
                                </div>
                                <span className="text-white font-medium">{u.name}</span>
                              </div>
                            </td>
                            <td className="px-5 py-3.5 text-zinc-400">{u.email}</td>
                            <td className="px-5 py-3.5">
                              <span
                                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                  u.role === "admin"
                                    ? "bg-amber-500/15 text-amber-400 border border-amber-500/25"
                                    : "bg-zinc-700 text-zinc-400"
                                }`}
                              >
                                {u.role ?? "user"}
                              </span>
                            </td>
                            <td className="px-5 py-3.5">
                              {u.emailVerified ? (
                                <span className="flex items-center gap-1 text-emerald-400 text-xs">
                                  <BadgeCheck className="w-3.5 h-3.5" /> Tak
                                </span>
                              ) : (
                                <span className="text-zinc-500 text-xs">Nie</span>
                              )}
                            </td>
                            <td className="px-5 py-3.5">
                              {u.banned ? (
                                <span className="flex items-center gap-1 text-red-400 text-xs">
                                  <Ban className="w-3.5 h-3.5" /> Zbanowany
                                </span>
                              ) : (
                                <span className="text-emerald-400 text-xs">Aktywny</span>
                              )}
                            </td>
                            <td className="px-5 py-3.5 text-zinc-500 text-xs">{fmt(u.createdAt)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className="fixed inset-0 z-[200] bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
      </div>
    );
  }

  // Not logged in at all → show login form
  if (!session) {
    return <AdminLoginForm />;
  }

  // Logged in but not admin → show access denied
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((session.user as any).role !== "admin") {
    return (
      <div className="fixed inset-0 z-[200] bg-zinc-950 flex flex-col items-center justify-center gap-6 px-4">
        <div className="w-20 h-20 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <ShieldAlert className="w-10 h-10 text-red-400" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Brak uprawnień</h1>
          <p className="text-zinc-400">Twoje konto nie ma uprawnień administratora.</p>
          <p className="text-zinc-500 text-sm mt-1">Zalogowano jako: {session.user.email}</p>
          <p className="text-zinc-500 text-xs mt-1">Rola: {(session.user as any).role ?? 'user'}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
        >
          <LogOut className="w-4 h-4" /> Wyloguj i wróć
        </button>
      </div>
    );
  }

  // Is admin → show dashboard
  return <AdminDashboard userName={session.user.name ?? "Admin"} userRole={(session.user as any).role} />;
}
