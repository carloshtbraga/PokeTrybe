import { type QueryInterface } from 'sequelize';

export default {
    up: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert('people',
            [

                {
                    id: '01',
                    name: 'José Gomes',
                    class_id: 27,
                    // types: ['html'],
                    alias: 'Loreal',
                    animal: 'Cachorro',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0405RK1T34-af9faf5ff4e2-512'
                },
                {
                    id: '02',
                    name: 'Gersinei Santos',
                    class_id: 27,
                    // types: ['html'],
                    alias: 'GG Rotam',
                    animal: 'Cachorro',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U03VD7NG1F0-001ff81bb6bf-512'
                },
                {
                    id: '03',
                    name: 'Pablo Landim',
                    class_id: 27,
                    // types: ['html'],
                    alias: 'Pablito',
                    animal: 'Cachorro',
                    city: 'Campinas-SP',
                    phrase: 'Vai curíntia!',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U03VD7VGUJ2-a55b511e9ca3-512'
                },
                {
                    id: '04',
                    name: 'Carlos Tonini',
                    class_id: 27,
                    // types: ['JS', 'PYTHON'],
                    alias: 'Carlinhos',
                    animal: 'Gato',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U03V58S6N1M-b6285a992b40-512'
                },
                {
                    id: '05',
                    name: 'Matheus Camargo',
                    class_id: 27,
                    // types: ['JS', 'DART', 'FLUTTER', 'REACT'],
                    alias: 'Matheus',
                    animal: 'Cachorro',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0402SH6VA9-d4e49b68b2a7-512'
                },
                {
                    id: '06',
                    name: 'Alex Nunes',
                    class_id: 27,
                    // types: ['JS', 'PYTHON'],
                    alias: 'alex === figma',
                    animal: 'Gato',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://media.licdn.com/dms/image/D4D35AQEuPLe3Keksag/profile-framedphoto-shrink_200_200/0/1662480012893?e=1682305200&v=beta&t=G1_BD4r5cxDkY3RzxeIhrcaEbtiM5TcijztTOvoBxiw'
                },
                {
                    id: '07',
                    name: 'Walber Vaz da Silva',
                    class_id: 27,
                    // types: ['JS', 'PYTHON', 'JAVA', 'REACT', 'TYPESCRIPT'],
                    alias: 'w2k',
                    animal: 'Cachorro',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0405N9NUHH-aa36978f333c-512'
                },
                {
                    id: '08',
                    name: 'Daniel Cintori',
                    class_id: 27,
                    // types: ['JS', 'PYTHON', 'JAVA', 'C', 'C++'],
                    alias: 'DaniBoy',
                    animal: 'Cachorro',
                    city: 'Recife-PE',
                    phrase: 'Xupa que é de Uva',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U040JEBMYAV-e13db50858dd-512'

                },
                {
                    id: '09',
                    name: 'Rafaela Granato',
                    class_id: 27,
                    // types: ['JS'],
                    alias: 'Rafa',
                    animal: 'Gato',
                    city: 'Belo Horizonte-MG',
                    phrase: 'A vingança nunca é plena, mata a alma e a envenena',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U040JEJKZRP-15670d5bdf63-512'
                },
                {
                    id: '10',
                    name: 'Artur',
                    class_id: 27,
                    // types: ['JS', 'JAVA', 'SQL', 'TYPESCRIPT', 'NODE'],
                    alias: 'rutra',
                    animal: 'Cachorro',
                    city: 'Belo Horizonte -MG',
                    phrase: 'Além de não ser fácil, ainda é difícil',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0405RJ3KC2-6b2f9b6354c3-512'
                },
                {
                    id: '11',
                    name: 'Washington Gama',
                    class_id: 24,
                    // types: ['Javascript', 'Typescript', 'JAVA', 'Python', 'Portugol'],
                    alias: 'Cumpadi Wash',
                    animal: 'Corvo',
                    city: 'Feira de Santana - BA',
                    phrase: 'Ximboca',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U03H9LED2BA-e762ff95c734-512'
                },
                {
                    id: '12',
                    name: 'Débora Marim',
                    class_id: 27,
                    // types: ['JS', 'MySQL', 'React', 'Redux'],
                    alias: 'Debs',
                    animal: 'Gato',
                    city: 'Santa Bárbara-MG',
                    phrase: 'Feito é melhor que perfeito!',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0405NC490B-b5d317391482-512'
                },
                {
                    id: '13',
                    name: 'Camilla Skaff',
                    class_id: 27,
                    // types: ['JS', 'MySQL', 'React', 'Redux'],
                    alias: 'Camilinha',
                    animal: 'Coelho',
                    city: 'São Paulo-SP',
                    phrase: 'Bora comer!',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U03V58N61AB-1b0bff9d4d37-512'
                },
                {
                    id: '14',
                    name: 'Maíza Dantas',
                    class_id: 27,
                    // types: ['JS', 'MySQL', 'React', 'Redux'],
                    alias: 'MDV',
                    animal: 'Bulbassauro - Polho',
                    city: 'Rio de Janeiro-RJ',
                    phrase: 'O importante, é o que importa',
                    picture: 'https://ca.slack-edge.com/TMDDFEPFU-U0405N0RULB-de604556223f-512'
                }
            ], {}
        );
    },
    down: async(queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('people', {});
    }
};
