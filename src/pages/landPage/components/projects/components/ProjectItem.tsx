import { Button } from "@/components/ui";
import IProject from "../types/IProject"
import { Box, Tag, Text } from "@/components";
import { NavLink } from "react-router-dom";
import { useInView } from "@/hooks";

type ProjectItemPropsType = {
    project: IProject,
}

const ProjectItem = (props: ProjectItemPropsType) => {
    const {
        project,
    } = props;
    const {inView, ref} = useInView();


    return (
        <Box ref={ref} variant='row' className="w-full h-full justify-center sm:flex-row flex-col">
            <Box variant='center' className="
                3xs:w-[80%] my-12
                sm:w-[600px]
                xl:w-[500px]
                2xl:w-[600px]
                rounded-3xl
                mx-8
                mb-0
                animate-projectImageAnimation
            "
            >
                <img src={`${project.images[0]}/700`} alt="" className="w-full h-full object-cover rounded-3xl" />
            </Box>
            <Box variant='column' className="
                items-start
                gap-4
                w-[80%]
                sm:w-[50%]
                overflow-hidden
            ">
                <Text variant='h2' className={`font-pbold overflow-hidden ${inView && 'animate-typewriter'}`}>{project.name}</Text>
                <Text variant='p' className="line-clamp-3 md:line-clamp-5 overflow-hidden tracking-wider text-lg">
                    {project.description}
                </Text>
                <Box variant='row' className="overflow-hidden flex-wrap">
                    <Text variant='mid'>Technologies: </Text>
                    {
                        project.stack.map((tech, key) => {
                            return <Tag key={key} variant="secondary">{tech}</Tag>
                        })
                    }
                </Box>
                <Box className="gap-4">
                    <NavLink to={project.github} target="_blank">
                        <Button variant='default' className="">
                            Visit Project
                        </Button>
                    </NavLink>
                    <NavLink to={project.github}>
                        <Button variant='outline' className="">
                            More info
                        </Button>
                    </NavLink>
                </Box>
            </Box>

        </Box>

    )
}

export default ProjectItem
