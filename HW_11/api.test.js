const axios = require('axios');
const { validate } = require('jsonschema');
const schema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "id": { "type": "number" },
            "idBook": { "type": "number" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" }
        },
        "required": ["id", "idBook", "firstName", "lastName"]
    }
};

let randomAuthor;

describe('API Tests', () => {
    test('GET full list authors', async () => {
        const response = await axios.get('https://fakerestapi.azurewebsites.net/api/v1/Authors');
        expect(response.status).toBe(200);
        expect(validate(response.data, schema)).toBeTruthy();
        randomAuthor = response.data[Math.floor(Math.random() * response.data.length)];
    });

    test('GET Authors by id', async () => {
        const response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${randomAuthor.id}`);
        expect(response.status).toBe(200);
        expect(validate(response.data, schema)).toBeTruthy();
    });

    test('GET Authors by idBook', async () => {
        const response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Authors/authors/books/${randomAuthor.idBook}`);
        expect(response.status).toBe(200);
        expect(validate(response.data, schema)).toBeTruthy();
    });

    test('DELETE athors', async () => {
        const response = await axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${randomAuthor.id}`);
        expect(response.status).toBe(200);
    });

    test('GET Check Author after DELETE', async () => {
        try {
            await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${randomAuthor.id}`);
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });

    test('POST Create athor', async () => {
        const response = await axios.post('https://fakerestapi.azurewebsites.net//api/v1/Authors', randomAuthor);
        expect(response.status).toBe(200);
    });

    test('GET Check author after POST', async () => {
        const response = await axios.get(`https://fakerestapi.azurewebsites.net//api/v1/Authors/${randomAuthor.id}`);
        expect(response.status).toBe(200);
        expect(validate(response.data, schema)).toBeTruthy();
    });

    test('PUT Change  authors', async () => {
        randomAuthor.idBook = 1;
        const response = await axios.put(`https://fakerestapi.azurewebsites.net//api/v1/Authors/${randomAuthor.id}`, randomAuthor);
        expect(response.status).toBe(200);
    });

    test('GET Check author after PUT', async () => {
        const response = await axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Authors/${randomAuthor.id}`);
        expect(response.status).toBe(200);

        if (response.data.length > 0) {
            expect(response.data[0].idBook).toBe(1);
        }
    });
});