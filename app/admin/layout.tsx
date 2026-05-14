import type { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Admin Dashboard – Still Sea Restaurant",
  description: "Admin panel for managing reservations and users.",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors closeButton theme="dark" />
    </>
  );
}
