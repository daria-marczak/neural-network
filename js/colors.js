const brain = require('brain.js');

const colors = [
	{ green: 0.2, blue: 0.4 },
	{ green: 0.4, blue: 0.6 },
	{ red: 0.2, green: 0.8, blue: 0.8 },
	{ green: 1, blue: 1 },
	{ red: 0.8, green: 1, blue: 1 },
	{ red: 1, green: 1, blue: 1 },
	{ red: 1, green: 0.8, blue: 0.8 },
	{ red: 1, green: 0.6, blue: 0.6 },
	{ red: 1, green: 0.4, blue: 0.4 },
	{ red: 1, green: 0.31, blue: 0.31 },
	{ red: 0.8 },
	{ red: 0.6, green: 0.2, blue: 0.2 },
];

const brightnesses = [
	{ dark: 0.8 },
	{ neutral: 0.8 },
	{ light: 0.7 },
	{ light: 0.8 },
	{ light: 0.9 },
	{ light: 1 },
	{ light: 0.8 },
	{ neutral: 0.7, light: 0.5 },
	{ dark: 0.5, neutral: 0.5 },
	{ dark: 0.6, neutral: 0.3 },
	{ dark: 0.85 },
	{ dark: 0.9 },
];

const trainingData = [];

colors.forEach(function(color, index) {
	trainingData.push({
		input: color,
		output: brightnesses[index],
	});
});

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

console.log(stats);

const red = net.run({
	red: 0.9,
});

// Inputing brightness and outputing colors

const invertedTrainingData = [];

brightnesses.forEach(function(brightness, index) {
	invertedTrainingData.push({
		input: brightness,
		output: colors[index],
	});
});

const invertedNet = new brain.NeuralNetwork({ hiddenLayers: [3] });

const invertedStats = invertedNet.train(invertedTrainingData);

console.log(invertedStats);

const light = net.run({
	light: 0.1,
});

console.log(light);
