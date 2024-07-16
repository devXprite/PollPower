const PoliticalParties = [
    {
        code: 'BJP',
        symbol: '/bjp.png',
        name: 'Bharatiya Janata Party',
        nameHindi: 'भारतीय जनता पार्टी',
        color: '#ff9f40',
    },
    {
        code: 'INC',
        symbol: '/inc.png',
        name: 'Indian National Congress',
        nameHindi: 'भारतीय राष्ट्रीय कांग्रेस',
        color: '#36a2eb',
    },
    {
        code: 'AAP',
        symbol: '/aap.png',
        name: 'Aam Aadmi Party',
        nameHindi: 'आम आदमी पार्टी',
        color: '#ffcd56',
    },
    {
        code: 'BSP',
        symbol: '/bsp.png',
        name: 'Bahujan Samaj Party',
        nameHindi: 'बहुजन समाज पार्टी',
        color: '#9966ff',
    },
    {
        code: 'SP',
        symbol: '/sp.png',
        name: 'Samajwadi Party',
        nameHindi: 'समाजवादी पार्टी',
        color: '#ff6384',
    },

    {
        code: 'RJD',
        symbol: '/rjd.png',
        name: 'Rashtriya Janata Dal',
        nameHindi: 'राष्ट्रीय जनता दल',
        color: '#4bc0c0',
    },

    {
        code: 'TMC',
        symbol: '/tmc.png',
        name: 'All India Trinamool Congress',
        nameHindi: 'तृणमूल कांग्रेस',
        color: '#32cd32',
    },

    {
        code: 'DMK',
        symbol: '/dmk.png',
        name: 'Dravida Munnetra Kazhagm',
        nameHindi: 'द्रविड़ प्रगतिशील महासंघ',
        color: '#d40000',
    },
    {
        code: 'NOTA',
        symbol: '/nota.png',
        name: 'None of the Above',
        nameHindi: 'उप्रोक्त से कोई भी नहीं',
        color: '#c9cbcf',
    },
];

const getPartyInfo = code => {
    const party = PoliticalParties.find(e => e.code === code);
    return party;
};

export default PoliticalParties;
