import SessaoAbout from "@/components/about/sessaoAbout";
import SessaoFeedback from "@/components/feedback/sessaoFeedback";
import SessaoServices from "@/components/services/sessaoServices";
import Pagina from "@/components/ui/pagina";

export default function Home() {
  return (
    <Pagina className="w-full max-w-[90%] flex flex-col items-center px-4">
      <div className="absolute top-[95%] w-[90%] flex flex-col border border-[#2E2E2E] rounded-xl pt-8 sm:pt-10 md:pt-16 px-6 sm:px-8 md:px-10 bg-[#090909]/80 gap-8 sm:gap-10 md:gap-12">
        <SessaoAbout />
        <SessaoServices />
        <SessaoFeedback />
      </div>
    </Pagina>
  );
}

