import SessaoAbout from "@/components/about/sessaoAbout";
import SessaoServices from "@/components/services/sessaoServices";
import Pagina from "@/components/ui/pagina";

export default function Home() {
  return (
    <Pagina className="max-w-[1200px] flex flex-col items-center">
      <div className="flex flex-col border border-[#2E2E2E] rounded-xl pt-16 px-10 bg-[#090909] gap-12">
        <SessaoAbout />
        <SessaoServices />
      </div>
    </Pagina>
  );
}
