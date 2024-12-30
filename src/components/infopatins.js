import Image from "next/image";
import { ContainerGrid } from "@/components/container";

const infolist = [
    {
        txt: "25% de economia",
    },
    {
        txt: "100% livre de trânsito",
    },
    {
        txt: "Painel digital",
    },
]

export function InfoPatinSection() {
    return(
        <div className="relative">
            <ContainerGrid>
                <div className="flex flex-col items-center justify-center my-16 pt-16 pb-40 @tablet:pb-60 bg-[#E8F4ED] rounded-[41px] text-center @desktop:pb-[414px]" >
                    <span className="font-dmsans font-bold text-lg">MEIO DE TRANSPORTE INTELIGENTE</span>
                    <h2 className="font-syne text-6xl mt-6 mb-8" >Velocidade na medida certa</h2>
                    <ul className="flex items-center gap-6" >
                        {infolist.map((item, index) => (
                            <li key={index} className="flex items-center gap-2" >
                                <Image
                                    src={"/IconCorrect.svg"}
                                    alt="Icone Correto"
                                    width={12}
                                    height={8}
                                />
                                <p className="font-manrope font-semibold text-base" >{item.txt}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </ContainerGrid>
            <Image
                src={"/CellPhoneCar.png"}
                alt="Imagem frente celular"
                width={1600}
                height={657}
                className="absolute -bottom-16 w-full"
            />
        </div>
    )
}