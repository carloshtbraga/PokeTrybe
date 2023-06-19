import { type QueryInterface } from 'sequelize';

export default {
    up: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('classes', [
            {
                number: 27
            }],
        {}
        );
    },

    down: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('classes', {});
    }
};
