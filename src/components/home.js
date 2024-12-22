import Image from "next/image";
import { ContainerGrid } from "@/components/container";
//reste
export function HomeSection() {
    return(
        <ContainerGrid className={"flex items-center"} >
            <div className="pt-28" >
                <span className="font-dmsans font-bold text-lg text-green-300 mb-6" >GREEN SCOOTER SANY</span>
                <h1 className="font-syne text-7xl w-[620px]" >Muito mais que um patinete</h1>
                <p className="font-epilogue text-sm text-gray-500/80 mt-3 w-[413px]" >Prática e econômica, a scooter é uma ótima opção de mobilidade nos centros urbanos. Você economiza e ainda ganha tempo para aproveitar o melhor da cidade.</p>
                <p className="font-dmsans text-base font-medium py-8">A partir de <span className="text-2xl font-bold">R$5,999</span> </p>
                <div className="flex items-center gap-3">
                    <p className="font-dmsans text-base">Comprar agora</p>
                    <Image
                        src={"/ArrowRight.svg"}
                        alt="Seta Direita"
                        width={52}
                        height={30}
                    />
                </div>
            </div>
            <div>
                <Image
                    src={"/CarGreen.png"}
                    alt="Carrinho verde"
                    width={810}
                    height={820}
                />
            </div>
        </ContainerGrid>
    )
}