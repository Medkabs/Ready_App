import PageIllustration from "@/components/page-illustration";
import "**@/styles/globals.css**"
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      <PageIllustration multiple />

      {children}
    </main>
  );
}
