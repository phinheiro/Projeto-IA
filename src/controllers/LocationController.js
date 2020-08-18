const visionapi = require('@google-cloud/vision');

class LocationController {
    async sendImage(req, res) {
        const client = new visionapi.ImageAnnotatorClient();

        const { file } = req.body;

        var nomes = [];
        var localizacoes = [];

        try {
            const [result] = await client.landmarkDetection(file);
            const landmarks = result.landmarkAnnotations;

            landmarks.forEach(land => nomes.push(land.description));
            landmarks.forEach(land => localizacoes.push(land.locations));

            return res.status(200).json({
                nomes,
                localizacoes
            })
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = new LocationController();