import { type QueryInterface } from 'sequelize';

export default {
    up: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('skills', [
            { name: 'JavaScript' }, { name: 'TypeScript' }, { name: 'React' },
            { name: 'Node.js' }, { name: 'Express' }, { name: 'Sequelize' },
            { name: 'PostgreSQL' }, { name: 'CSS' }, { name: 'HTML5' },
            { name: 'Git' }, { name: 'GitHub' }, { name: 'Heroku' },
            { name: 'Jest' }, { name: 'Mocha' }, { name: 'Chai' },
            { name: 'TDD' }, { name: 'BDD' }, { name: 'Agile' },
            { name: 'Scrum' }, { name: 'Kanban' }, { name: 'Jira' },
            { name: 'Slack' }, { name: 'Trello' }, { name: 'VSCode' },
            { name: 'Vim' }, { name: 'Linux' }, { name: 'MacOS' },
            { name: 'Windows' }, { name: 'Python' }, { name: 'Java' },
            { name: 'C#' }, { name: 'C++' }, { name: 'C' },
            { name: 'Ruby' }, { name: 'PHP' }, { name: 'SQL' },
            { name: 'MongoDB' }, { name: 'MySQL' }, { name: 'GraphQL' },
            { name: 'Apollo' }, { name: 'Redux' }, { name: 'MobX' },
            { name: 'Angular' }, { name: 'Vue' }, { name: 'Svelte' },
            { name: 'Docker' }, { name: 'Kubernetes' }, { name: 'AWS' },
            { name: 'Azure' }, { name: 'GCP' }, { name: 'Firebase' },
            { name: 'Netlify' }, { name: 'Gatsby' }, { name: 'Next.js' },
            { name: 'Nest.js' }, { name: 'Spring' }, { name: 'Flask' },
            { name: 'Django' }, { name: 'Rails' }, { name: 'Laravel' },
            { name: 'Unity' }, { name: 'Unreal' }, { name: 'Blender' },
            { name: 'Maya' }, { name: 'Photoshop' }, { name: 'Illustrator' },
            { name: 'Figma' }, { name: 'Sketch' }, { name: 'InDesign' },
            { name: 'Premiere' }, { name: 'After Effects' }, { name: 'Lightroom' },
            { name: 'Final Cut Pro' }, { name: 'Logic Pro' }, { name: 'Pro Tools' },
            { name: 'Ableton Live' }, { name: 'Audacity' }, { name: 'Audition' },
            { name: 'Reaper' }, { name: 'Cubase' }, { name: 'Reason' },
            { name: 'Bitwig' }, { name: 'GarageBand' }, { name: 'FL Studio' },
            { name: 'Ardour' }, { name: 'LMMS' }
        ], {}
        );
    },

    down: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('skills', {});
    }
};
