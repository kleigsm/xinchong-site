import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Compare } from "@/components/compare";
import { Evidence } from "@/components/evidence";
import { Download } from "@/components/download";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Features />
        <Compare />
        <Evidence />
        <Download />
      </main>
      <SiteFooter />
    </>
  );
}
