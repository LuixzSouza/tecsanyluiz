import Image from "next/image";
import { ContainerGrid } from "@/components/container";
import Link from "next/link";

export function HeaderTecsany() {
    return(
        <ContainerGrid className={"flex items-center justify-between py-3"}>
            <div className="flex items-center gap-16" >
                <div className="flex items-center gap-3" >
                    <Image
                        src={"/LogoTecsany.svg"}
                        alt="Logo"
                        width={48}
                        height={48}
                    />
                    <span className="font-epilogue font-semibold text-2xl">
                        Tecsany
                    </span>
                </div>
                <div className="hidden items-center justify-center gap-16 @desktop:flex" >
                    <Link href={"#"} className="font-dmsans font-medium text-xs">
                        PARA EMPRESAS
                    </Link>
                    <Link href={"#"} className="font-dmsans font-medium text-xs">
                        PARA CLIENTES
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-6" >
                <Image
                    src={"/IconSearch.svg"}
                    alt="Icone Pesquisa"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                />
                <div className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src={"/IconPerfil.svg"}
                        alt="Icone Perfil"
                        width={24}
                        height={24}
                    />
                    <span className="font-epilogue font-medium text-base">
                        Fazer login
                    </span>
                </div>
            </div>
        </ContainerGrid>
    )
}