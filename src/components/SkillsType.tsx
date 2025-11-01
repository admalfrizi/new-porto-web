import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface SkillsTypeProps 
{
    icons: string;
    skillName: string;
    skillDesc: string;
    isSelected?: boolean;
    onClick?: () => void;
}

export default function SkillsType({icons, skillName, skillDesc, isSelected, onClick}: SkillsTypeProps) 
{
    return (
        <Card onClick={onClick} className={`cursor-pointer content-center relative bg-brand-100 overflow-hidden p-0 border-0 ${ isSelected ? 'shadow-xl/20' : 'shadow-none' }`}>
            <CardContent className="p-6 w-full">
                <div className="flex flex-col">
                    <div className="relative w-32 h-32 max-[390px]:w-20 max-[390px]:h-20 mb-4">
                        <Image src={icons} alt={""} fill objectFit="contain"/>
                    </div>
                    <div className="max-w-50">
                        <h3 className="text-3xl line-clamp-1 max-[555px]:text-sm font-bold mb-2 text-brand-900">{skillName}</h3>
                        <p className="text-md max-[380px]:text-[10px] line-clamp-2 font-light text-brand-900">{skillDesc}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}