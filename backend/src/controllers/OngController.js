const crypto = require('crypto')

const connecttion = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connecttion('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {

    const { name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connecttion('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    });

    return response.json({ id });
    }
}