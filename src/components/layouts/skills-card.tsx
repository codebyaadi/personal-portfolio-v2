import { SkillsType } from "@/config/types";

const SkillCard: React.FC<SkillsType> = ({
    id,
    icon: Icon,
    title,
    skills
}) => {
    return ( 
        <div key={id} className="bg-charcoalblue h-96 w-full md:w-80 px-8 py-8 mb-3 rounded flex flex-col justify-start items-start">
            <div className="bg-[#1a1c23] p-3 rounded-full">
                <Icon size="24" color="#c900da" />
            </div>
            <div className="uppercase font-unbounded tracking-widest bg-linear-gradient bg-clip-text text-transparent my-4">{title}</div>
            <div className="flex flex-wrap justify-start items-center font-medium font-prompt text-sm text-white/50">
                {skills.map((skill) => (
                    <span className="bg-[#930BFD]/10 text-[#930BFD] px-4 py-2 rounded-sm ml-0 mr-2 mb-2">{skill}</span>
                ))}
            </div>
        </div>
     );
}
 
export default SkillCard;