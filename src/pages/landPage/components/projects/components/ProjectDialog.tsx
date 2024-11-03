// First create ProjectDialog.tsx component
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui';
import { Box, Tag, Text } from '@/components';
import { NavLink } from 'react-router-dom';
import IProject from '../types/IProject';

type ProjectDialogProps = {
    project: IProject;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className='max-w-5xl h-[80vh] overflow-y-auto'>
                <DialogHeader>
                    <DialogTitle className='text-2xl font-bold'>
                        {project.name}
                    </DialogTitle>
                    <DialogDescription>
                        <Box
                            variant='row'
                            className='gap-8 mt-4 items-center md:items-start flex-col md:flex-row'
                        >
                            <Box
                                variant='column'
                                className='gap-8 items-start w-full  md:w-1/2'
                            >
                                {/* Project Description */}
                                <Box
                                    variant='column'
                                    className='gap-4 items-start'
                                >
                                    <Text variant='h3' className='font-bold'>
                                        Description
                                    </Text>
                                    <Text
                                        variant='p'
                                        className='text-gray-600 dark:text-gray-300 whitespace-pre-line'
                                    >
                                        {project.description}
                                    </Text>
                                </Box>

                                {/* Technologies */}
                                <Box
                                    variant='column'
                                    className='gap-4 items-start'
                                >
                                    <Text variant='h3' className='font-bold'>
                                        Technologies
                                    </Text>
                                    <Box
                                        variant='row'
                                        className='flex-wrap gap-2'
                                    >
                                        {project.stack.map((tech, index) => (
                                            <Tag
                                                key={index}
                                                variant='secondary'
                                            >
                                                {tech}
                                            </Tag>
                                        ))}
                                    </Box>
                                </Box>

                                {/* Links */}
                                {project.github && (
                                    <Box
                                        variant='row'
                                        className='gap-4 items-start'
                                    >
                                        <NavLink
                                            to={project.github}
                                            target='_blank'
                                        >
                                            <Button>Visit Project</Button>
                                        </NavLink>
                                    </Box>
                                )}
                            </Box>
                            {/* Project Images Carousel */}
                            <Box
                                variant='column'
                                className='w-full md:w-1/2 gap-12'
                            >
                                {project.images.map((image, index) => (
                                    <img
                                        src={`${image}`}
                                        alt={`${project.name} screenshot ${
                                            index + 1
                                        }`}
                                        className='w-full h-[300px] object-contain rounded-lg'
                                    />
                                ))}
                            </Box>
                        </Box>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ProjectDialog;
