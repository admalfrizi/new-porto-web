import SkillsType from "@/components/elements/SkillsType";
import { skillsData } from "@/data/list_data";
import { prefixPath } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const pillAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { duration: 0.2 }
};

interface SkillsTechStackProps {
    skillsData: SkillsData[];
    selectedSkills: number;
    setSelectedSkills: (idx: number) => void;
}

export default function SkillsTechStack({
    skillsData,
    selectedSkills,
    setSelectedSkills
}: SkillsTechStackProps) {
    return (
        <>
            <div className='w-full mx-auto flex justify-center mt-15 max-[447px]:mx-3'>
                <div className='flex flex-row space-x-20 max-[380px]:space-x-4 max-[473px]:space-x-10 max-[430px]:space-x-4'>
                    {
                        skillsData.map((data, index) => (
                            <SkillsType 
                                key={index} 
                                icons={prefixPath(data.icons)} 
                                skillName={data.type} 
                                skillDesc={data.description} 
                                isSelected={selectedSkills === index}
                                onClick={() => setSelectedSkills(index)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='w-full mx-auto pt-20'>
                <h6 className='mb-3 font-medium text-center text-3xl max-[380px]:text-3xl text-brand-900'>Language and Frameworks</h6>
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={selectedSkills} 
                        className='max-w-full mx-auto flex flex-wrap justify-center gap-x-3 gap-y-6 mt-8'
                        variants={containerVariants}
                        initial="initial"
                        exit="exit"
                        whileInView="animate"
                    >
                        {
                            skillsData[selectedSkills].langFramerwork.map((lang, idx) => (
                                <motion.span 
                                    key={lang} 
                                    variants={pillAnimation}
                                    className='bg-brand-100 px-3 py-3 rounded-lg border border-span text-white'
                                >
                                    {lang}
                                </motion.span>
                            ))
                        }
                    </motion.div>
                </AnimatePresence>
                
            </div>
            <div className='w-full mx-auto pt-10'>
                <h6 className='mb-3 font-medium text-center text-3xl max-[380px]:text-3xl text-brand-900'>Tools Apps</h6>
                <AnimatePresence mode='wait'>
                    <motion.div 
                        key={selectedSkills} 
                        variants={containerVariants}
                        initial="initial"
                        exit="exit"
                        whileInView="animate"
                        className='max-w-full mx-auto flex flex-wrap justify-center gap-3 mt-8'
                    >
                        {
                            skillsData[selectedSkills].tools.map((lang, idx) => (
                                <motion.span 
                                    key={idx}  
                                    variants={pillAnimation}
                                    className='span-ts bg-brand-100 px-3 py-3 rounded-lg border border-span text-white'
                                >
                                    {lang}
                                </motion.span >
                            ))
                        }
                    </motion.div >
                </AnimatePresence>
            </div>
        </>
    )
}