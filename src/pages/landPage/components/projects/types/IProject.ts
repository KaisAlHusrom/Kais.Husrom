interface IProject {
    id: number;
    name: string,
    description: string,
    github: string,
    stack: Array<string>,
    images: Array<string>,
}

export default IProject;