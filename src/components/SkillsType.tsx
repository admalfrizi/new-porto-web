import Image from "next/image";
import { Card, CardContent } from "./ui/card";

interface SkillsTypeProps 
{
    icons: string;
    skillName: string;
    skillDesc: string;
}

export default function SkillsType({icons, skillName, skillDesc}: SkillsTypeProps) 
{
    return (
        <Card className="content-center relative bg-brand-100 overflow-hidden p-0 border-0">
            <CardContent className="p-6 w-full">
                <div className="flex flex-col">
                    <div className="relative w-32 h-32 mb-4">
                        <Image src={icons} alt={""} fill objectFit="contain"/>
                    </div>
                    <div className="max-w-50">
                        <h3 className="text-3xl line-clamp-1 font-bold mb-2 text-brand-900">{skillName}</h3>
                        <p className="text-md line-clamp-2 font-light text-brand-900">{skillDesc}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}