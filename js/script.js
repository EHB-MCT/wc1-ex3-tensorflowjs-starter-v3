"use strict";

const CSV_URL = './data/yourdata.csv';
let featuresMinVals, featuresMaxVals, labelsMinVals, labelsMaxVals;

const logic = {
    async init() {
        //Load the data; call the loadData function

        //Shuffle the data

        //Convert into arrays
        const inputs = [];
        const labels = [];

        //call the createModel function

        //call the trainModel function

    },
    createModel(numFeatures) {
        //Create the model as dicusses (slides)

        //return model;
    },
    async loadData() {
        //Docs: https://js.tensorflow.org/api/latest/#data.csv
        //Tutorial: https://www.geeksforgeeks.org/tensorflow-js-tf-data-csv-function/

        //Load data with tf.data.csv

        //return data

    },
    async trainModel(xs, ys, model) {
        // Convert the features and the labels to tensors
        let inputTensor, labelTensor;

        //Normalize the tensors
        const {
            normalizedFeatures,
            normalizedLabels
        } = await this.normalizeTraining(inputTensor, labelTensor);


        //Fit the model

    },
    async normalizeTraining(features, labels) {
        featuresMinVals = features.min(0);
        featuresMaxVals = features.max(0);
        labelsMinVals = labels.min(0);
        labelsMaxVals = labels.max(0);

        const normalizedFeatures = features.sub(featuresMinVals).div(featuresMaxVals.sub(featuresMinVals));
        const normalizedLabels = labels.sub(labelsMinVals).div(labelsMaxVals.sub(labelsMinVals));

        return {
            normalizedFeatures,
            normalizedLabels
        };
    }
};

logic.init();