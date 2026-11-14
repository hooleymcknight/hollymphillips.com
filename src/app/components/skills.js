import { createMarkup } from "../helpers/helpers";

const boldenSkills = (skillset) => {
    const newSkillset = [];
    skillset.forEach((skill) => {
        if (skill.startsWith('!')) {
            skill = `<b>${skill.replace('!', '')}</b>`;
        }
        newSkillset.push(skill);
    });
    return newSkillset;
}

const SkillSection = (props) => {
    const skills = props.data;

    return (
        <>
            {Object.keys(skills).map((x, index) =>
                <div key={index} className="mb-4 ml-[8px]">
                    <b className="skill-header font-[family-name:var(--font-cabin)]! inline-block ml-[-8px] mr-[8px]">{x}:</b>
                    <p className="skills font-[family-name:var(--font-cabin)]! inline" dangerouslySetInnerHTML={createMarkup(boldenSkills(skills[x]).join(', '))}></p>
                </div>
            )}
        </>
    )
}

export default SkillSection;