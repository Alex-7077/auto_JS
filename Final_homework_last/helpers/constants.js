const brandMap = {
    'Apple': 'Apple',
    'BQ-MOBILE': 'BQ',
    'Cubot': 'Cubot',
    'HONOR': 'HONOR',
    'Huawei': 'Huawei',
    'IIIF150': 'IIIF150',
    'Infinix': 'Infinix',
    'Oppo': 'Oppo',
    'OUKITEL': 'OUKITEL',
    'POCO': 'POCO',
    'SAMSUNG': 'SAMSUNG',
    'TCL': 'TCL',
    'TECNO': 'TECNO',
    'ULEFONE': 'ULEFONE',
    'Umidigi': 'Umidigi',
    'Unihertz': 'Unihertz',
    'vivo': 'vivo',
    'XIAOMI': 'XIAOMI',
    'ZTE': 'ZTE'
};

const storageMap = {
    '1 ТБ': '1 ТБ',
    '16 ГБ': '16 ГБ',
    '32 ГБ': '32 ГБ',
    '64 ГБ': '64 ГБ',
    '128 ГБ': '128 ГБ',
    '256 ГБ': '256 ГБ',
    '512 ГБ': '512 ГБ',
    '1024 ГБ': '1024 ГБ'
};

const ramMap = {
    '8 ГБ': '8 ГБ',
    '4 ГБ': '4 ГБ',
    '6 ГБ': '6 ГБ',
    '12 ГБ': '12 ГБ',
    '3 ГБ': '3 ГБ',
    '2 ГБ': '2 ГБ',
    '16 ГБ': '16 ГБ',
    '1 ГБ': '1 ГБ'
};

const productId = "793798-smartfon-xiaomi-redmi-note-13-8gb-256gb-midnight-black-ru";

const schema = {
    type: 'object',
    required: ['result', 'errors'],
    properties: {
        result: { type: 'boolean' },
        errors: { type: 'array' }
    }
};

module.exports = {
    brandMap,
    storageMap,
    ramMap,
    productId,
    schema
};

