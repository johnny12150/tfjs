// Using github raw file to host the model
const DEFAULT_MODEL_LOCATION =
    'https://raw.githubusercontent.com/johnny12150/yolo-tiny-tfjs/master/model2.json';

async function downloadModel(url = DEFAULT_MODEL_LOCATION) {
    return await tf.loadModel(url);
}

downloadModel();