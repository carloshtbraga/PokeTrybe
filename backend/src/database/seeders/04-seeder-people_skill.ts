import { type QueryInterface } from 'sequelize';

export default {
    up: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('people_skills', [
            { person_id: 1, skill_id: 1 },
            { person_id: 1, skill_id: 2 },
            { person_id: 1, skill_id: 9 },
            { person_id: 1, skill_id: 54 },
            { person_id: 1, skill_id: 26 },
            { person_id: 1, skill_id: 25 },
            { person_id: 2, skill_id: 9 },
            { person_id: 3, skill_id: 9 },
            { person_id: 4, skill_id: 1 },
            { person_id: 4, skill_id: 29 },
            { person_id: 5, skill_id: 1 },
            { person_id: 5, skill_id: 91 },
            { person_id: 5, skill_id: 90 },
            { person_id: 5, skill_id: 3 },
            { person_id: 6, skill_id: 1 },
            { person_id: 6, skill_id: 29 },
            { person_id: 7, skill_id: 1 },
            { person_id: 7, skill_id: 29 },
            { person_id: 7, skill_id: 30 },
            { person_id: 7, skill_id: 3 },
            { person_id: 7, skill_id: 2 },
            { person_id: 8, skill_id: 1 },
            { person_id: 8, skill_id: 29 },
            { person_id: 8, skill_id: 30 },
            { person_id: 8, skill_id: 33 },
            { person_id: 8, skill_id: 32 },
            { person_id: 9, skill_id: 1 },
            { person_id: 10, skill_id: 1 },
            { person_id: 10, skill_id: 30 },
            { person_id: 10, skill_id: 36 },
            { person_id: 10, skill_id: 2 },
            { person_id: 10, skill_id: 4 },
            { person_id: 11, skill_id: 1 },
            { person_id: 11, skill_id: 2 },
            { person_id: 11, skill_id: 30 },
            { person_id: 11, skill_id: 29 },
            { person_id: 11, skill_id: 92 },
            { person_id: 12, skill_id: 1 },
            { person_id: 12, skill_id: 38 },
            { person_id: 12, skill_id: 3 },
            { person_id: 12, skill_id: 41 },
            { person_id: 13, skill_id: 1 },
            { person_id: 13, skill_id: 38 },
            { person_id: 13, skill_id: 3 },
            { person_id: 13, skill_id: 41 },
            { person_id: 14, skill_id: 1 },
            { person_id: 14, skill_id: 38 },
            { person_id: 14, skill_id: 3 },
            { person_id: 14, skill_id: 41 }
        ],
        {}
        );
    },

    down: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('people_skill', {});
    }
};
