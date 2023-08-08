const dotenv = require('dotenv')
dotenv.config();

const Airtable = require('airtable-node')

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_ACCESS_TOKEN })
    .base(process.env.AIRTABLE_BASE_ID)
    .table(process.env.AIRTABLE_TABLE_ID);

exports.handler = async (event, context, cb) => {
    try {
        const response = await airtable.list({ maxRecords: 200 });

        const products = response.records.map((product) => {
            const { id, fields } = product;
            const {
                name,
                featured,
                price,
                colors,
                brand,
                description,
                category,
                shipping,
                images 
            } = fields
            const url = images && images.length > 0 ? images[0].url : null;
            return {
                id,
                name,
                featured,
                price,
                colors,
                brand,
                description,
                category,
                shipping,
                image: url,
            };
        })
        return {
            statusCode: 200,
            body: JSON.stringify(products),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'There was an error',
        };
    }
}