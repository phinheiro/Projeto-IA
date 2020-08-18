// importando o pacote do cloud vision
const visionapi = require('@google-cloud/vision');

class LocationController {
    // criando o método
    async sendImage(req, res) {

        const client = new visionapi.ImageAnnotatorClient();

        // recebendo o campo file com a url da imagem a ser analisada do corpo da requisição post
        const { file } = req.body;

        // criando os arrays que serão populados e retornados
        var nomes = [];
        var localizacoes = [];

        try {
            // submete a url da imagem ao metodo de detecção de pontos de referência
            const [result] = await client.landmarkDetection(file);

            //seleciona apenas uma parte específica do objeto
            const landmarks = result.landmarkAnnotations;

            // captura a propriedade description de cada objeto dentro do array
            landmarks.forEach(land => nomes.push(land.description));
            // captura a propriedade location de cada objeto dentro do array
            landmarks.forEach(land => localizacoes.push(land.locations));

            // retorna os arrays com nome e dados geograficos localizados com o status http 200
            return res.status(200).json({
                nomes,
                localizacoes
            })
        } catch (err) {
            // caso ocorra algum erro, captura esse erro e printa no console
            console.log(err);
        }

    }
}
// exporta e instancia a classe
module.exports = new LocationController();