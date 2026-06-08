// Complete Question Bank for AI Learning Platform
const questions = [
  {
    "question": "In order to overcome the perceptron's limits, we can:",
    "answers": [
      "use neurons with a continuous threshold",
      "use kernel transformations on the domain",
      "these limits can't be overcome",
      "increase the number of neurons"
    ],
    "correct": "ad"
  },
  {
    "question": "What problems can be solved with machine learning?",
    "answers": [
      "regressions",
      "???",
      "plannings and classifications",
      "none of the above"
    ],
    "correct": "ac"
  },
  {
    "question": "The objective of a machine learning algorithm can be represented as:",
    "answers": [
      "numeric functions",
      "probabilistic functions",
      "a set of symbolic rules",
      "a table"
    ],
    "correct": "abcd"
  },
  {
    "question": "The induction phase for the process of building a decision tree is:",
    "answers": [
      "it labels the new data with the build rules",
      "it eliminates the branches that reflect noise & exceptions",
      "based on the training data",
      "works bottom-up or top-down"
    ],
    "correct": "cd"
  },
  {
    "question": "What is a tensor?",
    "answers": [
      "an image with multiple",
      "a mathematical object",
      "generalizations of scalars, vectors, and matrices in an arbitrary number of indices",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "Select the correct combination(s):",
    "answers": [
      "Output type: Continuous Output distribution: Gaussian Output layer: Linear Cost function: MSE",
      "Output type: Discrete Output distribution: Multinoulli Output layer: Softmax Cost function: Cross Entropy",
      "Output type: Binary Output distribution: Bernoulli Output layer: Sigmoid Cost function: BCE",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "What are the differences and similarities between the perceptron's rule and the delta rule?",
    "answers": [
      "In the delta rule, the model's quality is established based on all the data.",
      "The perceptron's rule is based on gradient descent.",
      "They both start with some random weights.",
      "Perceptron's rule recomputes the weights based on while the delta rule.",
      "The perceptron rule and delta rule always converge to the global optimum and are not affected by local minima.",
      "The perceptron rule and delta rule do not require any iterative optimization process and can achieve optimal weights in a single pass."
    ],
    "correct": "ac"
  },
  {
    "question": "What elements determine the velocity of a particle in a PSO algorithm (check all correct ones):",
    "answers": [
      "the old velocity",
      "inertia, social coefficient",
      "the current position of the particle",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "The limited model capacity of an ANN can be overcome by:",
    "answers": [
      "adding more layers in depth",
      "reducing the number of artificial neurons",
      "adding nonlinearity to the model",
      "none of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What is the fitness function for the following problem: \"There is a set of M cards printed with integer numbers from -10 to 10. Select two subsets (that have no common elements and do not necessarily form a partition) using a GA, in such a way that they have the same sum of elements\"?",
    "answers": [
      "the absolute value of the sum of the selected elements from the first set / the number of elements from the second set.",
      "the difference in absolute value between the sum of the subset' elements and their divisors",
      "the difference in absolute value between the sums of elements from each subset",
      "the number of elements"
    ],
    "correct": "c"
  },
  {
    "question": "The Perceptron's algorithm:",
    "answers": [
      "is based on error minimization associated with an instance of train data",
      "the error is the difference between the real output y and the output o computed by the perceptron for an input",
      "it modifies the weights based on errors associated with an instance of train data",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "The \"dying ReLU\" problem refers to:",
    "answers": [
      "the values of the derivative",
      "the vanishing gradient",
      "the values of the function",
      "none of the above"
    ],
    "correct": "a"
  },
  {
    "question": "Choose the correct compatibility between the error function and the activation function from the output layer:",
    "answers": [
      "cross entropy error with softmax",
      "binary cross entropy with logistic error with the sigmoid activation function",
      "mean square error with the linear function",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "How does a ConvNet compute an image?",
    "answers": [
      "in such a network, the filters results are never combined",
      "there is automation in detecting the weights for the kernels",
      "there are usually three stages; several convolutions, a detector stage, and a pooling stage",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "Select the correct statements for Cross-Entropy loss:",
    "answers": [
      "is used in classifications",
      "is the difference between two probability distributions for a provided set of occurrences or random variables",
      "is never used after the softmax transformation after output",
      "none of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "What are the properties of the training and testing data?",
    "answers": [
      "they have to respect the same distribution law",
      "the test data should be based on real experiences, and the training should be based on theoretical experiences",
      "if possible, the training and the data test should be disjunct sets",
      "none of the above"
    ],
    "correct": "ac"
  },
  {
    "question": "The harmonic mean between the precision and the recall is:",
    "answers": [
      "a metric for distance in a reinforcement learning algo",
      "the F1 score",
      "a statistical metric used to evaluate performance in a supervised learning process",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "When we compare two algorithms, we can use:",
    "answers": [
      "the divergence of the Accuracy",
      "confidence intervals",
      "performance measures",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "How are the neurons connected in a feed forward ANN?",
    "answers": [
      "through a backward signal",
      "through an output with a neuron from the same layer",
      "they are not connected",
      "through weighted links"
    ],
    "correct": "d"
  },
  {
    "question": "What sort of problems can a perceptron solve?",
    "answers": [
      "linear separation of elements from the domain",
      "XOR problem",
      "depends on the structure",
      "none of the above"
    ],
    "correct": "a"
  },
  {
    "question": "The vanishing gradients during backpropagation are:",
    "answers": [
      "not affecting us since the derivative is zero in this case on most of the domain",
      "are advantage in the training process that leads to faster convergence",
      "a typical problem when the network has too many hidden layers",
      "none of the above"
    ],
    "correct": "c"
  },
  {
    "question": "The activation logistic function:",
    "answers": [
      "is a linear function",
      "suffers from a vanishing gradient",
      "has limitations regarding the output domain",
      "has limitations regarding the input domain",
      "none of the above"
    ],
    "correct": "bc"
  },
  {
    "question": "An ANN with a structure of 226:15:10:2 with a sigmoid activation function. How many weights will the first neuron from the first hidden layer have?",
    "answers": [
      "2",
      "226",
      "10",
      "15"
    ],
    "correct": "b"
  },
  {
    "question": "In an artificial neuron, the transfer function:",
    "answers": [
      "is the equation of a hyperplane",
      "its nature limits the solving capacity of the neuron",
      "is the inner product of the input vector with the weight vector",
      "it can be the sigmoid function"
    ],
    "correct": "ac"
  },
  {
    "question": "The indirect experience when choosing the training database is:",
    "answers": [
      "in pairs (in/out)",
      "useful feedback for the objective function",
      "based on independent data with annotated content",
      "none of the above"
    ],
    "correct": "b"
  },
  {
    "question": "On a ConvNet, feature learning:",
    "answers": [
      "will minimize the loss function by extracting those who are most useful for classifying the images.",
      "allows a suite of tens or even hundreds of other small filters to be designed in order to detect more complex features in the image",
      "is performed before training the conv. layers",
      "none of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "We can implement the infinite summation as a sum over a finite number of array elements:",
    "answers": [
      "in practice, we have two tensors: the input and the kernel",
      "such implementation is impossible in practice",
      "the input and the kernel are zero everywhere bet in the finite set of points",
      "by using a convolution operation"
    ],
    "correct": "d"
  },
  {
    "question": "Clustering is:",
    "answers": [
      "a process in two steps: training and testing",
      "using an unlabeled database",
      "another name for unsupervised learning",
      "none of the above"
    ],
    "correct": "abc"
  },
  {
    "question": "What are the correct statements about Decision Trees?",
    "answers": [
      "The decision nodes are located at the terminal levels of the tree while the result nodes are at the internal levels.",
      "Each leaf of the tree corresponds to a specific attribute or feature.",
      "They are used to divide a collection of articles into smaller sets by successively applying decision rules.",
      "Decision trees contain four types of nodes: decision nodes, hazard nodes, class nodes, and result nodes."
    ],
    "correct": "c"
  },
  {
    "question": "The activation logistic function:",
    "answers": [
      "suffers from vanishing gradient.",
      "is a linear function.",
      "has limitations regarding the input domain.",
      "none of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Clustering is:",
    "answers": [
      "a one-step process: testing.",
      "Another name for unsupervised learning.",
      "using a labeled database.",
      "none of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What is a feature of the database in training with indirect experience:",
    "answers": [
      "it is based on useful feedback for some objective function.",
      "it comes in pairs (in/out).",
      "it is based on independent data with annotated content.",
      "none of the above."
    ],
    "correct": "a"
  },
  {
    "question": "An ANN has a structure of 26:15:10:2 with a sigmoid activation function. How many weights will have the first neuron from the first hidden layer?",
    "answers": [
      "2",
      "15",
      "26",
      "10"
    ],
    "correct": "c"
  },
  {
    "question": "When constructing a decision tree, the attribute selection can be:",
    "answers": [
      "In preorder.",
      "Random.",
      "Based on the top parent.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The induction phase of the process of building a Decision Tree is:",
    "answers": [
      "It labels the new data with the built rules.",
      "It eliminates the branches that reflect noise or exception",
      "Based on the training data.",
      "Works bottom to bottom or top to top."
    ],
    "correct": "c"
  },
  {
    "question": "The back-propagation algorithm:",
    "answers": [
      "Is a training algorithm for ANNs.",
      "Guarantees finding the optimal set of weights and biases in a finite number of iterations.",
      "Can only be applied to shallow neural networks and is not suitable for deep learning architectures.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Select the correct statements for Cross-Entropy loss:",
    "answers": [
      "Is never used when we apply the softmax transformation to the network's output.",
      "Is used in regressions.",
      "Is the difference between two probability distributions for a provided set of occurrences or random variables.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "What are the characteristics of the back-propagation algorithm?",
    "answers": [
      "It is crossing easy plateaus in the error function landscape.",
      "Does not require the derivatives of activation functions to be known at network design time.",
      "Is guaranteed to find the global minimum of the error function, not only the local minimum.",
      "None of the above."
    ],
    "correct": "d"
  },
  {
    "question": "What is the proper encoding for an individual in ANNs?",
    "answers": [
      "A computer program that learns to classify and performs regressions.",
      "A set of weights used to propagate a signal.",
      "There are no individuals in ANN.",
      "An array of bits that encode proper information related to the solution."
    ],
    "correct": "c"
  },
  {
    "question": "On a ConvNet, the feature learning:",
    "answers": [
      "Allows a suite of tens or even hundreds of other small filters to be erased in order to detect more complex features in the image.",
      "Is performed before training the conv-layers.",
      "Will minimize the loss function by extracting the features that are most useful for classifying the images.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "The \"dying ReLU\" problem refers to:",
    "answers": [
      "The values of the derivative.",
      "The values of the function.",
      "The vanishing gradient.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The universal approximation theorem states that:",
    "answers": [
      "Any function can be approximated with a proper neural network.",
      "There should be enough neurons on the hidden layer in order to do the approximation.",
      "The conditions to approximate a function include the continuity of that function.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "What is a tensor?",
    "answers": [
      "A generalization of scalars, vectors, and matrices to an arbitrary number of indices.",
      "A mathematical object that contains a one-dimensional array of values.",
      "A black and white image with multi-channels.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "How does a ConvNet figure out what is in an image?",
    "answers": [
      "Automatically detecting the weights for the kernels during training.",
      "By decomposing the features.",
      "There are usually three stages: several convolutions, a decomposing stage, a flatten stage.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The softmax function:",
    "answers": [
      "Transforms in probabilities the output scores for the classes.",
      "It incorporates the cross-entropy function.",
      "Is used in regressions.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Select the correct combination:",
    "answers": [
      "Output type: Discrete, Output Distribution: Multinoulli, Output Layer: Linear, Cost Function: Cross Entropy.",
      "Output type: Binary, Output Distribution: Bernoulli, Output Layer: Sigmoid, Cost Function: Binary Cross Entropy.",
      "Output type: Continuous, Output Distribution: Gaussian, Output Layer: Softmax, Cost Function: MSE.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The L1 loss is:",
    "answers": [
      "It computes the average of the sum of absolute differences between actual values and predicted ones",
      "Used for classification problems",
      "Is also called the softmax loss",
      "Is never used when the distribution has outliers"
    ],
    "correct": "a"
  },
  {
    "question": "What is the difference between Particle Swarm Optimization (PSO) and Genetic Algorithms (GA)?",
    "answers": [
      "PSO runs free until it converges to the solution, while GA never reaches the solution",
      "The particles have a memory, while the individuals don't",
      "GA has particles, and PSO has individuals",
      "GA uses a fitness function, and PSO doesn't"
    ],
    "correct": "b"
  },
  {
    "question": "How does the artificial neuron process the information?",
    "answers": [
      "Based on backpropagation",
      "Based on the activation function",
      "Based on the error",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "What are the main advantages of Deep Convolutional Neural Networks?",
    "answers": [
      "The architecture of a ConvNet is analogous to that of the connectivity pattern of neurons in an Artificial Cortex",
      "A ConvNet captures the feature gradient dependencies in a time series",
      "The preprocessing required in a ConvNet is much lower as compared to other classification algorithms",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What can be used when comparing two algorithms?",
    "answers": [
      "The divergence of accuracy",
      "Overconfidence intervals",
      "Performance measures",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What are the advantages of going in depth in an ANN?",
    "answers": [
      "To avoid overfitting",
      "To speed up the network's evaluation",
      "We avoid underfitting the model",
      "None of the above"
    ],
    "correct": "a"
  },
  {
    "question": "How is the objective of a machine learning algorithm typically represented?",
    "answers": [
      "A database table",
      "Numeric functions",
      "Distributions of probability",
      "A set of non-symbolic rules"
    ],
    "correct": "b"
  },
  {
    "question": "In order to overcome the perceptron's limits, we can:",
    "answers": [
      "Installing additional RAM directly enhances the neuron's processing power",
      "These limits can't be overcome",
      "Use neurons with a continuous threshold",
      "Applying the glitter property to the perceptron's activation function improves its ability to learn"
    ],
    "correct": "c"
  },
  {
    "question": "The vanishing gradients during backpropagation is:",
    "answers": [
      "An advantage in the training process that leads to faster convergence",
      "Since the derivative is zero in this case, on most of the domain, it does not affect us",
      "A problem typical when the network has too many hidden layers",
      "None of the above"
    ],
    "correct": "c"
  },
  {
    "question": "What problems can be solved with machine learning?",
    "answers": [
      "Ethical and moral considerations",
      "Planning and classifications",
      "Creative problems that require innovation",
      "None of the above"
    ],
    "correct": "b"
  },
  {
    "question": "The harmonic mean between precision and recall is:",
    "answers": [
      "A measure for distance in certain clustering algorithms.",
      "The F1 score, which combines precision and recall into a single value.",
      "A metric used to evaluate the trade-off between precision and recall in deterministic algorithms.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "The information gain ratio:",
    "answers": [
      "It aims to reduce a bias towards multivalued attributes.",
      "Is the ratio between the information gain and the split information.",
      "It enhances an attribute by integrating a new term that depends on spreading degree.",
      "None of the above."
    ],
    "correct": "ab"
  },
  {
    "question": "We can implement the infinite summation as a sum over a finite number of array elements:",
    "answers": [
      "Such implementation is impossible in practice.",
      "In practice, we have two tensors: the input and the padding.",
      "By using a convolution operation.",
      "The input, the padding, and the kernel contain random numbers everywhere in the beginning."
    ],
    "correct": "c"
  },
  {
    "question": "What are the differences and similarities between the perceptron's rule and the delta rule?",
    "answers": [
      "The perceptron rule and delta rule always converge to the global optimum and are not affected by local minima.",
      "The perceptron rule and delta rule do not require any iterative optimization process and can achieve optimal weights in a single pass.",
      "They both start with some random weights.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "For Unsupervised Learning, choose the appropriate statement:",
    "answers": [
      "The training data comes in pairs: (attributes, outputs).",
      "It finds an unknown function that groups the training data into several classes.",
      "The goal is to find a model or structure inside the data that is useful.",
      "None of those things."
    ],
    "correct": "bc"
  },
  {
    "question": "The ReLU function:",
    "answers": [
      "Provides sparsity since y = 0 when x > 0",
      "Does not correct the problems that occur at sigmoid function",
      "It is a linear activation function",
      "Does not have a vanishing gradient when x > 0"
    ],
    "correct": "d"
  },
  {
    "question": "What elements determine the new velocity of a particle in a PSO algorithm? (check all correct ones)",
    "answers": [
      "The current position of the weakest particle",
      "Inertia, social coefficient",
      "The old velocity of the best particle",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "In computer vision, we apply a filter over an image:",
    "answers": [
      "By using a convolution operation with a kernel",
      "Moving the kernel and adding to the part of the image that the kernel is hovering over.",
      "In order to preprocess the input by subtracting some features from the initial image.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "Choose the correct answer.",
    "answers": [
      "Backpropagation is insensitive to the choice of activation functions and can perform equally well with any activation function.",
      "The gradient descent is based on the error associated with the entire set of train data.",
      "Adding more training data will always result in better generalization and performance for the ANN.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What is standardization?",
    "answers": [
      "A data transformation that introduces the scale effect.",
      "The process by which raw values are transformed into z-scores.",
      "The operation that transforms continuous values into discrete ones.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What crossover method(s) are correct for a binary representation in a GA?",
    "answers": [
      "Uniform",
      "There is no crossover for this representation",
      "Average crossover",
      "Insertion mutation"
    ],
    "correct": "a"
  },
  {
    "question": "Using a feed forward ANN we want to determine if a shape from a black-and-white image is a square or not. How is the error computed?",
    "answers": [
      "Based on the output of the hidden layer.",
      "Based on an induction formula.",
      "Based on the difference between the real output of the network and the desired output.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "Which factor is the primary consideration when selecting an appropriate learning algorithm?",
    "answers": [
      "Ability to predict cluster membership.",
      "Minimization of error through a cost function or loss function.",
      "Alignment with the desired data.",
      "Computational complexity of the target objective."
    ],
    "correct": "c"
  },
  {
    "question": "Choose the right compatibility between the output layer's activation function and error function:",
    "answers": [
      "Mean square error with the linear function.",
      "Binary cross entropy with logistic error with the sigmoid activation function.",
      "Cross entropy error with arctangent.",
      "None of the above."
    ],
    "correct": "ab"
  },
  {
    "question": "In an artificial neuron, the transfer function:",
    "answers": [
      "Represents the equation of a hyperplane.",
      "Utilizes entanglement to calculate the output.",
      "Requires the neuron to perform complex mathematical operations with imaginary numbers.",
      "Is the sigmoid function."
    ],
    "correct": "a"
  },
  {
    "question": "The Perceptron's algorithm:",
    "answers": [
      "It changes the weights based on the inverse error associated with a train data instance.",
      "Is based on maximizing the error for a given set of train data.",
      "The error is the difference between what the real output y is and what the perceptron's output o is for a given input.",
      "None of the above."
    ],
    "correct": "c"
  },
  {
    "question": "What is the relationship between the training and testing data?",
    "answers": [
      "The test data should reflect real-life experiences, while the training data can be based on theoretical experiences.",
      "They should follow the same distribution.",
      "The two sets must overlap.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "What sort of problems can a perceptron solve?",
    "answers": [
      "Linear separations of elements from the domain.",
      "It depends on the structure.",
      "XOR problem.",
      "None of the above."
    ],
    "correct": "a"
  },
  {
    "question": "The limited model capacity of ANNs is overcome by:",
    "answers": [
      "Reducing the number of artificial neurons.",
      "Adding nonlinearity to the model.",
      "Adding more layers at the output level.",
      "None of the above."
    ],
    "correct": "b"
  },
  {
    "question": "Select the correct statement for supervised learning:",
    "answers": [
      "The aim is to provide an arbitrary output for a new input.",
      "The training data comes in an unpaired format: only attributes or only output.",
      "We search for a known function that maps the input attributes to the outputs.",
      "None of the above."
    ],
    "correct": "d"
  },
  {
    "question": "How are the neurons connected into a feed forward ANN?",
    "answers": [
      "Through a backward signal.",
      "Through an output with a neuron from the same layer.",
      "They are not connected.",
      "Through weighted links."
    ],
    "correct": "d"
  },
  {
    "question": "Which of the following statements is true when we apply a max pooling transformation over a tensor:",
    "answers": [
      "We return the maximum value from the portion of the image covered by the kernel.",
      "We handle inputs of different types.",
      "We emphasize the features.",
      "We make the representation dependent on small translations of the input."
    ],
    "correct": "a"
  },


  //////////////////////////////////////////////////////
  // NEW QUESTIONS ADDED
  //////////////////////////////////////////////////////

  // EXAM-MATERIALS SUBJECT   -- Nu stiu daca sunt bune

  {
    "question": "What is a proper encoding for an individual in Genetic Programming?",
    "answers": [
      "a string of bits",
      "depends on the problem",
      "a computer program that solves the given problem",
      "a binary expression"
    ],
    "correct": "c"
  },
  {
    "question": "Which one(s) of the following problems can’t be solved by a perceptron?",
    "answers": [
      "AND logic",
      "any problem that implies finding a function",
      "XOR",
      "OR logic"
    ],
    "correct": "c"
  },
  {
    "question": "What are the main specific features of a particle in PSO optimisation?",
    "answers": [
      "Velocity and trace",
      "Fitness function",
      "Current position and velocity",
      "There is no specific feature"
    ],
    "correct": "c"
  },
  {
    "question": "Which one of the following representations is NOT proper for the N-Queen problem?",
    "answers": [
      "Binary",
      "Vectors of N integers",
      "Vectors of N real numbers",
      "Permutation of N size"
    ],
    "correct": "a"
  },
  {
    "question": "What is the fitness function for the N-Queen problem?",
    "answers": [
      "The number of queens placed on the same line",
      "The number of queens placed on the same column",
      "The number of queens that attack each other",
      "The difference in absolute value between the number of queens that attack each other on line and the number of queens that attack each other on columns"
    ],
    "correct": "c"
  },
  {
    "question": "On what is based the ant colony system?",
    "answers": [
      "On an evolutionary schema",
      "The pheromone trace left by ants",
      "Inertia and speed",
      "Identical with PSO"
    ],
    "correct": "b"
  },
  {
    "question": "How is propagated the error into an artificial neural network that uses back-propagation?",
    "answers": [
      "In the same direction as the input signal",
      "You don’t compute the error for this algorithm",
      "In both directions",
      "It propagates backwards through the network"
    ],
    "correct": "d"
  },
  {
    "question": "Using an ANN to decide if a 15×10-pixel black-and-white image contains a circle (structure 150:15:20:2, sigmoid activation), what type of problem is this?",
    "answers": [
      "Regression",
      "Clustering",
      "Classification",
      "Dimensionality reduction"
    ],
    "correct": "c"
  },
  {
    "question": "In the same ANN (150:15:20:2), how many weights does each neuron in the last layer have (not counting its bias)?",
    "answers": [
      "15",
      "20",
      "2",
      "150"
    ],
    "correct": "b"
  },
  {
    "question": "On what does the adjustment value of the weights depend when training with back-propagation?",
    "answers": [
      "The learning rate and the gradient of the error",
      "The total number of training epochs",
      "The random seed used to initialize weights",
      "The number of hidden layers"
    ],
    "correct": "a"
  },
  {
    "question": "Specify the correct statement(s) in a ruled based system in certain environments inference engine with forward-chaining:",
    "answers": [
      "The inference engine can draw new conclusions",
      "Facts are represented in a working memory which is continually updated",
      "The actions usually involve adding or deleting items from working memory",
      "Rules are written as left-hand side (LHS) ⇒ right-hand side (RHS)"
    ],
    "correct": "abcd"
  },
  {
    "question": "For a Genetic Programming algorithm identify the correct statement(s):",
    "answers": [
      "Convergence (complete, optimal) through global optima is slow",
      "Easy to implement",
      "The solution’s quality depends on the precision of variables involved in the algorithm",
      "The main disadvantage is that it does depend on parameters"
    ],
    "correct": "cd"
  },
  {
    "question": "Which of the following selection methods are commonly used in evolutionary algorithms? (choose all that apply)",
    "answers": [
      "Roulette‐wheel selection",
      "Tournament selection",
      "Rank‐based selection",
      "Elitism (truncation) selection",
      "Random selection",
      "Gradient‐descent selection"
    ],
    "correct": "abcd"
  },
  {
    "question": "In applying a genetic algorithm to select a subset of integer‐engraved balls whose sum is as close as possible to S, which design choices are appropriate? (choose all that apply)",
    "answers": [
      "Binary string representation (1 = include, 0 = exclude)",
      "One‐point crossover and bit‐flip mutation operators",
      "Fitness = –|(sum of selected balls) – S| (maximize)",
      "Tournament selection",
      "Gradient‐descent operator"
    ],
    "correct": "abcd"
  },
  {
    "question": "Fuzzify the raw input data for a person of 45 years old (see diagram). What are the membership values (μ) for each fuzzy set?",
    "image": "imageQ1.png",
    "answers": [
      "μ_young = 0.0, μ_adult = 1.0, μ_middle‐age = 0.4, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 0.8, μ_middle‐age = 0.2, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 0.7, μ_middle‐age = 0.3, μ_old = 0.0",
      "μ_young = 0.0, μ_adult = 1.0, μ_middle‐age = 0.3, μ_old = 0.0"
    ],
    "correct": "a"
  },
  {
    "question": "Which element(s) determine the probability for a new possible element to be added to the solution in an ant colony system? (choose all that apply)",
    "answers": [
      "Pheromone matrix values (τ)",
      "Visibility of nodes (η)",
      "Coefficient of pheromone importance (α)",
      "Coefficient of visibility importance (β)",
      "Genetic crossover operator"
    ],
    "correct": "abcd"
  },

  // 2024 SUBJECT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

  {
    "question": "Consider Figure 1, which represents the fuzzy classes for a person’s age. After fuzzifying the raw input data for a 35-year-old, we obtain the value:",
    "image": "imageQ2.png",
    "answers": [
      "μ_young(35) = 0.6; μ_adult(35) = 1; μ_middle_age(35) = 0.3; μ_old(35) = 0",
      "μ_young(35) = 0; μ_adult(35) = 1; μ_middle_age(35) = 0; μ_old(35) = 0",
      "μ_young(35) = 0.6; μ_adult(35) = 0.1; μ_middle_age(35) = 0.3; μ_old(35) = 0",
      "None of the above"
    ],
    "correct": "b"
  },

  // 2020 SUBJECT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  -- Astea sunt corecte !!
  {
    "question": "You have a problem that is NP-hard and you decide to attempt to solve it with Ant Colony Optimisation. In what sort of problem do you need to transform it?",
    "answers": [
      "Into a classification problem.",
      "You don't need to transform it, just let the algorithm do it for you.",
      "In a problem of identifying the optimal path in an oriented graph.",
      "Into the knapsack problem."
    ],
    "correct": "c"
  },
  {
    "question": "Consider two individuals (represented as permutations) of size 9 and apply an order crossover to them. What is the proper result if the cut points are after the 3rd and 6th position? (Select one or more. Parents are in the image)",
    "image": "imageQ3.png",
    "answers": [
      "[1, 9, 6, 8, 2, 3, 5, 4, 7] and [1, 2, 3, 5, 4, 6, 8, 7, 9]",
      "[1, 9, 8, 2, 3, 5, 6, 4, 7] and [1, 2, 6, 5, 4, 3, 8, 7, 9]",
      "[2, 1, 9, 2, 3, 8, 7, 8, 3] and [1, 4, 6, 6, 5, 4, 5, 7, 9]",
      "[1, 9, 6, 2, 3, 8, 5, 4, 7] and [1, 2, 3, 6, 5, 4, 8, 7, 9]"
    ],
    "correct": "d"
  },
  {
    "question": "Many AI methods are based on examples from nature. Particle Swarm Optimisation is based on:",
    "answers": [
      "In the theory of evolution.",
      "The behaviour of birds or murmuration of fish.",
      "This method is not inspired from nature as other AI methods.",
      "The random movements of particles."
    ],
    "correct": "b"
  },
  {
    "question": "You design an Evolutionary Algorithm for a given problem using a Generationist model. Select the correct properties of such a model that must be reflected within your application:",
    "answers": [
      "Each individual survives a generation only.",
      "A set of parents is totally replaced by the set of offsprings.",
      "At each generation it creates μ offsprings.",
      "A bad offspring is replaced by its parent."
    ],
    "correct": "abc"
  },
  {
    "question": "In what order during a BFS search will the nodes from the following tree be visited",
    "image": "imageQ4.png",
    "answers": [
      "50, 17, 72, 12, 23, 54, 76, 9, 14, 19, 67",
      "50, 72, 17, 76, 54, 23, 12, 64, 19, 14, 9",
      "50, 17, 72, 54, 76, 12, 23, 9, 14, 19, 67",
      "None of the above"
    ],
    "correct": "ab"
  },
  {
    "question": "Choose the correct characteristics for the binary representation, primarily used in Evolutionary Computation:",
    "answers": [
      "There is usually an encoder and a decoder that allow the user to understand the stored information.",
      "Other values can appear within a binary representation but through survival selection and adjustments they are removed.",
      "These representations are lists of zeros and ones.",
      "Once a bit reaches a certain value (0 or 1) a cut is performed to preserve the genotype of the individual represented binary."
    ],
    "correct": "ac"
  },
  {
    "question": "When computing a velocity for a particle using a PSO method, you have a parameter inertia. Specify the correct properties of this parameter:",
    "answers": [
      "Can be constant or descending.",
      "Forces the particle to move in the same direction until now.",
      "Forces the particle to move towards its best position.",
      "Balances the search between global exploration and local exploration."
    ],
    "correct": "abd"
  },
  {
    "question": "How do you initialise an Artificial Neural Network?",
    "answers": [
      "There is no initialization; the network will learn from the dataset the initial values.",
      "The inputs will be zero.",
      "Randomly assign values to the weights.",
      "Randomly assign values to the outputs."
    ],
    "correct": "c"
  },

  {
    "question": "You want to train an Artificial Neural Network for a complex classification problem. The information from the dataset is labeled in four classes. Each entry is composed from an array of five attributes and a label. What is a possible structure for this problem?",
    "answers": [
      "5 : 6 : 4",
      "7 : 6 : 4",
      "5 : 6 : 2",
      "6 : 4"
    ],
    "correct": "a"
  },
  {
    "question": "Check the correct affirmations regarding a population of individuals in an Evolutionary algorithm.",
    "answers": [
      "The candidates to solutions should be uniformly distributed in the search space (if it is possible).",
      "The population doesn’t change its contents during the entire run of the algorithm.",
      "The population is randomly assigned in the beginning of the algorithm.",
      "The reproduction pool is selected from the current population."
    ],
    "correct": "acd"
  },
  {
    "question": "Consider a permutation of n elements as representation for the \"n-Queen\" problem. Please check all the categories where this representation belongs:",
    "answers": [
      "non-binary, discrete",
      "continuous",
      "tree based",
      "class-based",
      "binary"
    ],
    "correct": "a"
  },
  {
    "question": "Consider the following formula:\n\nv_id = w * v_id + c1 * rand() * (P_bestd – x_id) + c2 * rand() * (G_bestd – x_id)\n\nCheck the correct statements related to this formula:",
    "answers": [
      "c1 and c2 will be determined by the algorithm while running.",
      "v_id is the velocity of a particle.",
      "You can find in this formula the current position and also the best position of a particle.",
      "It updates the position of the particle."
    ],
    "correct": "bc"
  },
  {
    "question": "Consider the fuzzy classes described by the following diagram. Compute the membership degree of value 10 to both classes (red and green).",
    "image": "imageQ5.png",
    "answers": [
      "μ_red(10) = 0.66 and μ_green(10) = 2.85",
      "μ_red(10) = 0.25 and μ_green(10) = 0.75",
      "μ_red(10) = 2 and μ_green(10) = 0.5",
      "μ_red(10) = 0 and μ_green(10) = 0"
    ],
    "correct": "d"
  },
  {
    "question": "In a feed forward Artificial Neural Network there are connections between nodes from the same layer.",
    "answers": [
      "True",
      "False"
    ],
    "correct": "b"
  },
  {
    "question": "Check some of the possible activation functions from an Artificial Neural Network.",
    "answers": [
      "Gaussian function",
      "Linear function",
      "Sigmoid function",
      "Error function",
      "Constant function"
    ],
    "correct": "abce"
  },
  {
    "question": "You attempt to solve a problem that fits a binary representation with a PSO. What will you change in order to conserve the representation while you adapt the particles’ positions using the velocity?",
    "answers": [
      "The process of updating the particle's position.",
      "Reset the particle position every time you get out of the domain.",
      "Reduce the inertia so the new update position will not exceed the domain.",
      "The evaluation of the best particle."
    ],
    "correct": "a"
  },
  {
    "question": "The Ant Colony Optimisation (based on the social behaviour of ants) has some particularities. Check the correct statements from the following list:",
    "answers": [
      "The worst individuals are replaced with the best ones.",
      "The search is guided by the variation operators towards the ant queen.",
      "The search operators are constructive ones, adding elements in solution.",
      "The search is cooperative, guided by the relative quality of individuals."
    ],
    "correct": "cd"
  },
  {
    "question": "When adding a new element to the partial solution within an Ant Colony Optimisation Algorithm the following elements can be considered (check all correct ones):",
    "answers": [
      "Probability of crossover",
      "Pheromone matrix",
      "Coefficient of the trail importance",
      "Coefficient of visibility importance",
      "Visibility of the nodes"
    ],
    "correct": "bcde"
  },
  {
    "question": "During the fire process within an artificial neuron the following processes take place (order is unimportant):",
    "answers": [
      "Performs a simple computation through an activation function",
      "Compute the weighted sum of inputs",
      "Compute the difference between the real output and the computed output",
      "Modify the weights such to obtain better results"
    ],
    "correct": "ab"
  },
  {
    "question": "You design an Ant Colony Optimisation algorithm. What are the aspects related to each ant that must be considered?",
    "answers": [
      "The ant has a memory",
      "While constructing the path avoids nodes that already have an ant in them",
      "Cooperates with other ants through the pheromone trail",
      "Moves (in the search space) and puts some pheromones on its path"
    ],
    "correct": "acd"
  },
  {
    "question": "A solution for a problem that you have is represented as a binary array of 8 elements. After a mutation you get the following mutated offspring: (1,1,1,0,1,0,0,1). Considering that you used a weak mutation, check the possible parent(s).",
    "answers": [
      "(1,1,1,0,1,0,0,1)",
      "(0,0,0,1,0,1,1,0)",
      "(0,0,1,0,1,0,0,1)",
      "(1,1,1,0,1,0,1,1)"
    ],
    "correct": "ad"
  },
  {
    "question": "A fitness function for a given problem aims to:",
    "answers": [
      "Associate a value to each candidate solution.",
      "Determine if the problem is properly defined.",
      "Combine individuals with similar characteristics.",
      "Reflect the adaptation to the environment."
    ],
    "correct": "ad"
  },
  {
    "question": "The knowledge base of a RBS in uncertain environments contains:",
    "answers": [
      "Representations of the optimum solutions",
      "Rules",
      "Facts",
      "Positions"
    ],
    "correct": "bc"
  },
  {
    "question": "The Defuzzification is the transformation each fuzzy region into a crisp value.",
    "answers": [
      "True",
      "False"
    ],
    "correct": "a"
  },
  {
    "question": "Consider a complete Artificial Neural Network with the structure 4:6:2. How many weights will have the fourth artificial neuron from the hidden layer?",
    "answers": [
      "4",
      "6",
      "2",
      "12"
    ],
    "correct": "a"
  },
  {
    "question": "The coding type of a possible solution influences the following aspects from the Evolutionary Algorithm’s design:",
    "answers": [
      "It forces the use of a binary crossover",
      "The type of variation operators",
      "The expression of the fitness function",
      "The number of individuals in the population pool"
    ],
    "correct": "bc"
  },
  {
    "question": "You have to choose a stop condition for your PSO algorithm. Check the correct possibilities:",
    "answers": [
      "You never stop; this sort of algorithm runs forever adapting itself.",
      "When you found the parameters c₁ and c₂.",
      "When you reach a predefined number of iterations.",
      "After you evaluate the fitness function a predefined number of times."
    ],
    "correct": "cd"
  },
  {
    "question": "Check the specific elements for the Particle Swarm Optimisation method:",
    "answers": [
      "Inertia",
      "Memory",
      "Velocity",
      "Position"
    ],
    "correct": "abcd"
  },
  {
    "question": "In each iteration of an Ant Colony Optimisation Algorithm we have the following steps (order does not matter):",
    "answers": [
      "Increase the partial solution by an element.",
      "Change the pheromone trail on the paths traversed.",
      "We perform a mutation to the ant’s partial solution.",
      "Initialisation."
    ],
    "correct": "abd"
  },
  {
    "question": "Is cooperation part of a Particle Swarm Optimisation algorithm?",
    "answers": [
      "True",
      "False"
    ],
    "correct": "a"
  },
  {
    "question": "How do ants indirectly communicate in an Ant Colony Optimisation algorithm?",
    "answers": [
      "They do not communicate indirectly.",
      "By changing the chemical repository.",
      "The ants send signals to other ants not to follow them within the partial path.",
      "Accessing the pheromone matrix."
    ],
    "correct": "bd"
  },
  {
    "question": "What is the correspondence of an individual in evolutionary computation?",
    "answers": [
      "A metaphor for an animal from a herd of solutions.",
      "A possible candidate to be a solution for our problem.",
      "The problem solution evolved by random natural processes.",
      "A simple artificial lifeform that exists inside the computer, with its aim to solve our problems."
    ],
    "correct": "b"
  },
  {
    "question": "Which of the following problems can be solved with a perceptron? (Select one or more)",
    "answers": [
      "Facial recognition",
      "Logic \"AND\"",
      "Any problem that implies a linear separation of the space",
      "XOR"
    ],
    "correct": "bc"
  },
  {
    "question": "Consider an Artificial Neural Network that must be trained with the Backpropagation algorithm. Check the correct statements for this algorithm:",
    "answers": [
      "Modify the structure by adding or subtracting nodes from the hidden layer.",
      "Distribute the errors on all connections proportional to the weights and modify the weights.",
      "Forward propagate the information and determine the output of each neuron.",
      "Establish and backward propagate the error."
    ],
    "correct": "bcd"
  },
  {
    "question": "The ReLu function:",
    "answers": [
      "Provides sparsity since y=0 when x>0.",
      "Has a vanishing gradient when x>0.",
      "Corrects the problems that occur at sigmoid function.",
      "It is a linear activation function."
    ],
    "correct": "c"
  },
  {
    "question": "In the expression y = Wx + b, which interpretations are correct?",
    "answers": [
      "The expression cannot appear in neural network layers.",
      "W may represent a matrix of weights.",
      "b may represent a bias vector.",
      "x may represent an input vector."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about VAEs are correct?",
    "answers": [
      "A VAE is a probabilistic autoencoder.",
      "The reparameterization trick can be written as z = μ + σ ⊙ ϵ, ϵ ∼ N(0, I).",
      "VAEs support smooth latent spaces and generative sampling.",
      "The encoder often outputs Gaussian parameters μ and σ."
    ],
    "correct": "abcd"
  },
  {
    "question": "Given x = torch.randn(4, 6, 10) and torch.nn.RNN(input_size=10, hidden_size=8, num_layers=1, batch_first=True), which statements are correct?",
    "answers": [
      "The sequence length is 6.",
      "The final hidden state shape is (1, 4, 8).",
      "The input has batch size 4.",
      "The output shape is (4, 6, 8)."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which scikit-learn tools are used for scaling features to a range or to maximum absolute size?",
    "answers": [
      "OrdinalEncoder",
      "LinearRegression",
      "MinMaxScaler",
      "MaxAbsScaler"
    ],
    "correct": "cd"
  },
  {
    "question": "Which statements about data flow in feedforward networks are correct?",
    "answers": [
      "There are no connections between nodes in the same layer.",
      "Each node can be connected with every node in the next layer.",
      "The data flow goes in one direction.",
      "The output layer sends information back to the input layer during prediction."
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about fitness sharing for population dispersion in a GA are correct?",
    "answers": [
      "It uses a sharing function based on distance.",
      "It is sensitive to the sharing radius σ_share.",
      "It is sensitive to the distance metric.",
      "It reduces the reward of individuals in crowded areas."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about softmax are correct?",
    "answers": [
      "It is suitable for multiclass classification.",
      "It can output probabilities of classes such as A, B, and C.",
      "It is the same as MAE loss.",
      "It converts class scores into probabilities."
    ],
    "correct": "abd"
  },
  {
    "question": "Why does a baseline linear model underfit a nonlinear dataset?",
    "answers": [
      "Due to the nonlinear structure of data.",
      "The linear model can capture this particular data.",
      "The data are impossible for any neural network to learn.",
      "A purely linear model can only split the space with straight lines."
    ],
    "correct": "ad"
  },
  {
    "question": "Which statements correctly compare classical AI and modern AI?",
    "answers": [
      "Modern AI often depends on optimization and data availability.",
      "Classical AI is typically based only on large-scale datasets.",
      "Modern AI often represents knowledge implicitly through parameters.",
      "Classical AI usually represents knowledge explicitly."
    ],
    "correct": "acd"
  },
  {
    "question": "Which problem properties are listed as suitable for ANNs?",
    "answers": [
      "The objective function can be discrete or continuous.",
      "Problem data can be represented by pairs of attribute and value.",
      "The objective function can be single- or multi-criteria.",
      "Training data must always be perfectly noise-free."
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about information gain are correct?",
    "answers": [
      "Information gain is always computed without using class proportions.",
      "Information gain measures how eliminating or splitting by attribute a reduces dataset entropy.",
      "Gain(S, a) = E(S) - ∑(|Sv|/|S|) * E(Sv).",
      "One of the terms from the gain formula is the expected information after splitting by the attribute."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which elements are part of evolutionary algorithms?",
    "answers": [
      "Genetic operators",
      "Fitness function",
      "Chromosome representation",
      "Population model"
    ],
    "correct": "abcd"
  },
  {
    "question": "Consider a dataset with perfectly balanced binary classes before splitting. Which statements about Information Gain are correct?",
    "answers": [
      "Information Gain = 0 if the split subsets remain perfectly balanced.",
      "The initial entropy E(S) = 1 when p+ = 1/2 and p- = 1/2.",
      "All attributes have information gain equal to 1.",
      "Information Gain is always 0.307."
    ],
    "correct": "ab"
  },
  {
    "question": "Which statement correctly describes torch.cuda.is_available()?",
    "answers": [
      "It computes the gradient of the loss function directly on the GPU.",
      "It checks whether CUDA is available.",
      "It automatically trains the neural network.",
      "It deletes all CPU tensors."
    ],
    "correct": "b"
  },
  {
    "question": "Which statements about the gradient step for linear regression are correct?",
    "answers": [
      "Computing the gradient on a single training example has cost O(m).",
      "A full-batch gradient step involves a sum over all training examples.",
      "It requires no access to training data.",
      "It updates w using residuals such as y^(r) - (w^(k-1))^T x^(r)."
    ],
    "correct": "abd"
  },
  {
    "question": "Which recombination types are listed in the lecture?",
    "answers": [
      "Arithmetic crossover for real representation",
      "Order crossover for permutation representation",
      "Uniform crossover for binary or integer representation",
      "N-cutting point crossover for binary or integer representation"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about binary cross-entropy are correct?",
    "answers": [
      "BCEWithLogitsLoss can be used when the model outputs logits.",
      "nn.BCELoss() is used with sigmoid outputs in the example.",
      "Binary cross-entropy is appropriate for binary classification labels.",
      "Binary cross-entropy is used only for image resizing."
    ],
    "correct": "abc"
  },
  {
    "question": "For input 5x5, kernel 3x3, padding 0, which statements are correct?",
    "answers": [
      "The output size is 5x5 without padding.",
      "The output size is 3x3.",
      "H_out = floor((5 - 3 + 0)/1) + 1.",
      "H_out = W_out = 3."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about unsupervised learning are correct?",
    "answers": [
      "The database is not labeled for learning.",
      "It requires class labels for every training example.",
      "It can model internal structure in data.",
      "It can aim to detect clusters."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements about a PyTorch perceptron for binary classification are correct?",
    "answers": [
      "Binary cross-entropy can be used as the loss for binary labels.",
      "The model cannot be trained because PyTorch modules do not support gradients.",
      "SGD can be used as the optimizer.",
      "The model applies a linear transformation followed by a sigmoid activation."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements about permutation representation are correct?",
    "answers": [
      "It allows repeated values freely without affecting validity.",
      "It is suitable for ordering and routing problems.",
      "The genotype is a permutation of n elements.",
      "It can represent visiting order in TSP."
    ],
    "correct": "bcd"
  },
  {
    "question": "Consider a valid 2D cross-correlation operation. Which statements are mathematically correct regarding the output at Y_1,1 given standard filter flipping rules?",
    "answers": [
      "Y_1,3 = 0",
      "The first row is [1, 1, 1].",
      "Y_1,1 = -1",
      "Y_1,2 = 3"
    ],
    "correct": "c"
  },
  {
    "question": "Which NumPy functions can create arrays?",
    "answers": [
      "np.linspace()",
      "np.destroy()",
      "np.trios()",
      "np.zeros()"
    ],
    "correct": "ad"
  },
  {
    "question": "Which steps belong to the generic evolutionary algorithm loop?",
    "answers": [
      "Deselect parents",
      "Evaluate fitness",
      "Initialize population",
      "Apply crossover, mutation, and survivor selection"
    ],
    "correct": "bd"
  },
  {
    "question": "Which statements about multimodal optimization are correct?",
    "answers": [
      "The goal may be to identify several good optima.",
      "Evolutionary populations are unsuitable because they cannot maintain subpopulations.",
      "A multimodal problem has multiple local or global optima.",
      "Alternative optima may represent useful design choices."
    ],
    "correct": "acd"
  },
  {
    "question": "Which typologies of fitness functions are mentioned?",
    "answers": [
      "Only differentiable and convex",
      "One-objective and multi-objective",
      "Maximization and minimization",
      "Deterministic and heuristic"
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about weight notations like W_i^h = (w_{i,1}^h, w_{i,2}^h, ..., w_{i,H_{n-1}}^h) are correct in a deeper architecture?",
    "answers": [
      "The number of incoming weights depends on the previous layer width.",
      "H_{n-1} denotes the number of neurons in the previous hidden layer.",
      "W_i^h collects weights feeding a neuron in hidden layer h.",
      "The notation implies that all layers must have the same number of neurons."
    ],
    "correct": "abc"
  },
  {
    "question": "Which loss functions are listed as common loss functions for ANNs?",
    "answers": [
      "Mean Squared Error Loss",
      "Negative Log-Likelihood Loss",
      "Cross-Entropy Loss",
      "Mean Absolute Error Loss"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which sequence is consistent with a typical CNN image classification pipeline?",
    "answers": [
      "Conv -> ReLU -> Pooling",
      "Input -> Conv -> ReLU",
      "Softmax -> raw image input -> convolution",
      "Flatten or Global Average Pooling -> Dense -> Softmax"
    ],
    "correct": "abd"
  },
  {
    "question": "Which advantages of fuzzy systems are listed?",
    "answers": [
      "Rules can be evaluated in parallel.",
      "Imprecise real-world concepts can be expressed through rules.",
      "Fuzzy systems can be robust when rules or measurements are not perfectly precise.",
      "Rules are usually easy to understand, test, and maintain."
    ],
    "correct": "abcd"
  },
  {
    "question": "For the perceptron learning rule Δw_i = η * e^d * x_i^d, which statements are correct?",
    "answers": [
      "η is the learning rate.",
      "The update is independent of the input data.",
      "x_i^d is input attribute i for instance d.",
      "e^d = t^d - o^d is the error for instance d."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements correctly distinguish certainty, probability, and fuzziness?",
    "answers": [
      "Certainty theory may treat 'Popescu is young' as true or false.",
      "Fuzzy logic may state that Popescu belongs to young people with degree 0.8.",
      "Fuzziness and probability always mean exactly the same thing.",
      "Probability may express an 80% chance that Popescu is young."
    ],
    "correct": "abd"
  },
  {
    "question": "For the basic RNN equations h_t = ϕ(W_x x_t + W_h h_{t-1} + b_h) and y_t = W_y h_t + b_y, which statements are correct?",
    "answers": [
      "h_t depends on the current input x_t.",
      "y_t is computed from h_t.",
      "h_t is independent of all past information.",
      "h_t depends on the previous hidden state h_{t-1}."
    ],
    "correct": "abd"
  },
  {
    "question": "Consider a dataset that is difficult to separate by a straight line in Cartesian coordinates (x,y). After transforming each point to polar coordinates (r,θ), the classes become easier to separate. Which statements are consistent with this example?",
    "answers": [
      "Changing coordinates can reveal a simpler structure.",
      "The chosen representation can change how separable a problem appears.",
      "Representation matters for learning.",
      "All representations are always equally useful."
    ],
    "correct": "abc"
  },
  {
    "question": "Which design choices for feedforward ANNs should be used?",
    "answers": [
      "Architecture",
      "Output units",
      "Loss function",
      "Activation function"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which steps appear usually in a simple PyTorch training loop?",
    "answers": [
      "Call optimizer.zero_grad() before backpropagation.",
      "Call optimizer.step() after loss.backward().",
      "Compute outputs using the perceptron.",
      "Compute a loss value."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about completeness of a fuzzy variable are correct?",
    "answers": [
      "Completeness can be written as: for all x in X, exists A such that mu_A(x) > 0.",
      "Without completeness, some input values cannot be interpreted by the rule base.",
      "Completeness means every membership value must be exactly 1.",
      "A fuzzy variable is complete if every value belongs to at least one fuzzy set with positive degree."
    ],
    "correct": "abd"
  },
  {
    "question": "For a dataset D, which statements about ERM (Empirical Risk Minimization) are correct?",
    "answers": [
      "ERM can be written as argmin (average loss).",
      "ERM requires knowing the true distribution p(x,y) exactly.",
      "ERM is used because the expected risk is usually not directly computable.",
      "ERM minimizes an average loss over the training dataset."
    ],
    "correct": "acd"
  },
  {
    "question": "Which fitness-function examples are correct?",
    "answers": [
      "TSP: minimize path cost.",
      "Paying a sum with coins: minimize |sum to be paid - sum of selected coins|.",
      "Function optimization: minimize or maximize the function value.",
      "Knapsack: minimize |capacity - weight of selected objects| in the shown example."
    ],
    "correct": "abc"
  },
  {
    "question": "Which tasks are mentioned as common applications of ConvNets?",
    "answers": [
      "Optical character recognition",
      "Image classification",
      "Object detection and recognition in scenes",
      "Image retrieval and similarity-based search"
    ],
    "correct": "abcd"
  },
  {
    "question": "Consider a 3x3 input matrix X and a 2x2 filter F in a valid cross-correlation operation. Which expressions are correct for the derivative of E with respect to F_1,1?",
    "answers": [
      "It depends on the upstream gradient dE/dO.",
      "It equals the sum of the products of the upstream gradients and the corresponding input values.",
      "It is always equal to zero.",
      "It depends on the input values covered by F_1,1."
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements about binary representation are correct?",
    "answers": [
      "It can represent selected objects in a knapsack problem.",
      "A gene can take values 0 or 1.",
      "The genotype can be a bit string.",
      "It is mainly used for continuous unconstrained optimization only."
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about feed-forward artificial neural networks are correct?",
    "answers": [
      "Information moves in one direction.",
      "Information must move backward during prediction.",
      "Information moves from input nodes through hidden nodes to output nodes.",
      "A feed-forward network is the most simple type of ANN mentioned."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements about the Universal Approximation Theorem are consistent with the lecture?",
    "answers": [
      "The theorem means deep networks are never useful.",
      "A shallow network may require exponentially more width.",
      "One hidden layer is enough to approximate any function to arbitrary accuracy under suitable conditions.",
      "A neural network can be viewed as function approximation."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which types of membership functions can be used in a rule-based system under uncertainty?",
    "answers": [
      "Trapezoidal membership functions",
      "Triangular membership functions",
      "Functions mapping crisp values to membership degrees in the interval [0, 1].",
      "A function that returns only negative values"
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about the filters shown in the lecture are correct?",
    "answers": [
      "Combining multiple feature maps can detect richer image structure.",
      "A Sobel-like filter can detect vertical edges.",
      "A horizontal line detector responds to horizontal patterns.",
      "Different filters respond to different visual patterns."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which disadvantages of proportional selection are mentioned?",
    "answers": [
      "It never uses the entire population",
      "Premature convergence",
      "Best chromosomes may dominate the population early",
      "Low selection pressure when fitness values are similar"
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about backpropagation are correct?",
    "answers": [
      "It requires activation-function derivatives to be known at network design time.",
      "It is used for fine-tuning ANN weights.",
      "It is not guaranteed to find the global minimum of the error function.",
      "It computes gradients that can be used by gradient descent-based optimizers."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about transforming real values from binary representation are correct?",
    "answers": [
      "Longer chromosomes may slow evolution.",
      "Longer chromosomes can give better precision.",
      "Binary length L has no effect on precision.",
      "A chromosome of length L can represent 2^L values."
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements about padding are correct?",
    "answers": [
      "Same padding can preserve spatial size for stride 1.",
      "With valid padding, the convolution is applied only where the kernel fully overlaps the input.",
      "Padding can help border pixels influence the output more fairly.",
      "Padding means adding extra values around the input border."
    ],
    "correct": "abcd"
  },
  {
    "question": "For the update rule θ^(t+1) = θ^(t) - η * ∇f(θ^(t)), which statements are correct?",
    "answers": [
      "∇f(θ^(t)) is the gradient at the previous iteration.",
      "η > 0 is the step size or learning rate.",
      "The update is a gradient-based optimization step.",
      "The formula does not involve model parameters."
    ],
    "correct": "abc"
  },
  {
    "question": "Which are main characteristics of evolutionary algorithms mentioned in the lecture?",
    "answers": [
      "Exact symbolic proof of optimality at every generation",
      "Parallel population-based search",
      "Iterative processes",
      "Random search components"
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about the most common train-test split are correct?",
    "answers": [
      "train_test_split is used.",
      "test_size = 0.2 means 20% test data.",
      "random_state = 42 makes the split reproducible.",
      "The test data are used to update model weights during training."
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about ridge regression are correct?",
    "answers": [
      "It keeps the linear model form h(x) = w^T x.",
      "It is unrelated to regularization.",
      "It uses the regularizer R(h) = ||w||_2^2.",
      "It adds an L2 penalty to the squared loss objective."
    ],
    "correct": "acd"
  },
  {
    "question": "For Sugeno inference with firing strengths α_i and crisp consequents z_i = f_i(x,y), which statements are correct?",
    "answers": [
      "The denominator is always ignored.",
      "The computation is a weighted average.",
      "Rules with higher firing strength influence the final output more.",
      "The output can be computed as z* = (∑ α_i z_i) / (∑ α_i)."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements correctly describe the real goal of a Machine Learning model?",
    "answers": [
      "The goal can be expressed as minimizing an expected loss.",
      "Low training loss always guarantees low test loss.",
      "The distribution p(x,y) is typically unknown.",
      "The goal is to perform well on unseen future data."
    ],
    "correct": "acd"
  },
  {
    "question": "Which formulas are correct for Softplus and Swish as presented in the lecture?",
    "answers": [
      "Swish is defined as y = max(0, x).",
      "Softplus always outputs values in (0, +∞).",
      "Softplus: y = log(1 + e^x).",
      "Swish: y = x * sigmoid(x)."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements correctly compare clipped and scaled Mamdani consequents?",
    "answers": [
      "Clipping is easy to compute but may lose shape information.",
      "Scaling preserves more shape information but is more computationally demanding.",
      "Clipping cuts the output membership function at the firing-strength level.",
      "Scaling multiplies the output membership function by the firing strength."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which niching methods are mentioned?",
    "answers": [
      "Fitness sharing",
      "Crowding",
      "Speciation",
      "Clearing and island models"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements correctly compare Mamdani, Sugeno, and Tsukamoto models?",
    "answers": [
      "Sugeno produces crisp rule outputs.",
      "Mamdani produces fuzzy output regions.",
      "Tsukamoto uses monotone consequent fuzzy sets and produces crisp values per rule.",
      "All three models use exactly the same consequent representation."
    ],
    "correct": "abc"
  },
  {
    "question": "Which data subsets are explicitly included in the training database discussion?",
    "answers": [
      "Training data",
      "Test data",
      "Only unlabeled pictures with no task",
      "A possible 80% training and 20% testing split"
    ],
    "correct": "abd"
  },
  {
    "question": "Which of the following functions can be used as activation functions?",
    "answers": [
      "Gaussian function",
      "Constant function",
      "Sigmoid function",
      "Step function"
    ],
    "correct": "abcd"
  },
  {
    "question": "For max pooling over an N x N region, which statement about backpropagation is correct?",
    "answers": [
      "The maximum position from the forward pass matters.",
      "The gradient is equally distributed to all inputs regardless of their values.",
      "The gradient is passed only to the input element that achieved the maximum value in the forward pass.",
      "Max pooling has no effect on gradient flow."
    ],
    "correct": "ac"
  },
  {
    "question": "Which distances or similarity measures are mentioned for unsupervised learning?",
    "answers": [
      "Manhattan distance",
      "Cosine similarity",
      "Euclidean distance",
      "Levenshtein distance"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements correctly describe learning-algorithm evaluation?",
    "answers": [
      "Evaluation should ignore accuracy, training time, and testing time.",
      "Experimental evaluation may compare methods on different data.",
      "Theoretical evaluation may analyze computational complexity.",
      "Cross-validation can be used in experimental evaluation."
    ],
    "correct": "cd"
  },
  {
    "question": "Which statements about ResNet bottleneck blocks are correct?",
    "answers": [
      "The middle layer processes features.",
      "A bottleneck block uses 1x1, 3x3, and 1x1 convolutions.",
      "The first layer reduces channels.",
      "The last layer restores dimension."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements correctly describe a model in Machine Learning?",
    "answers": [
      "A model maps features to predictions.",
      "A model is exactly the same thing as the training dataset.",
      "A model is the object used to make predictions after training.",
      "A model is usually a parameterized function."
    ],
    "correct": "acd"
  },
  {
    "question": "Which are problem-side components of an optimization model?",
    "answers": [
      "Objective functions",
      "Decision variables",
      "Constraints and feasible region",
      "Mutation probability only"
    ],
    "correct": "abc"
  },
  {
    "question": "For a network that adds two bits, which input-output pairs are correct if the output is encoded as a decimal sum?",
    "answers": [
      "(1, 1) -> 2",
      "(0, 1) -> 1",
      "(0, 0) -> 0",
      "(1, 0) -> 1"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which node types are included in the decision-tree definition from the lecture?",
    "answers": [
      "Gradient nodes",
      "Decision nodes",
      "Hazard nodes",
      "Result nodes"
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements about neuron processing are correct?",
    "answers": [
      "The neuron computes a weighted sum net = ∑ w_i x_i.",
      "The activation function processes the net input.",
      "Weights are irrelevant to neuron computation.",
      "The output can be written as o = f(net)."
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements correctly explain why AI systems should not be treated as 'thinking' systems?",
    "answers": [
      "If a system produces language, it necessarily understands meaning like a human.",
      "Probabilistic outputs are not equivalent to genuine understanding.",
      "Their behavior is produced by formal models and computation.",
      "Optimization and parameter updates do not imply consciousness."
    ],
    "correct": "bcd"
  },
  {
    "question": "Which statements correctly compare the perceptron algorithm with the gradient descent algorithm?",
    "answers": [
      "Perceptron convergence is finite only under perfect separation conditions.",
      "The perceptron output is discrete and threshold-based.",
      "Gradient descent may use continuous outputs such as o^d = w^T x^d or o^d = sig(w^T x^d).",
      "Gradient descent is never asymptotic."
    ],
    "correct": "abc"
  },
  {
    "question": "Which tasks are examples of sequence problems mentioned in the lecture?",
    "answers": [
      "DNA sequences",
      "Sensor streams",
      "Text",
      "Speech"
    ],
    "correct": "abcd"
  },
  {
    "question": "Why do LSTMs learn long-term dependencies better than plain RNNs?",
    "answers": [
      "Important signals can persist across many time steps.",
      "Cell-state updates are partly additive rather than fully multiplicative.",
      "Gates provide data-dependent control over memory retention.",
      "They remove the need for any optimization."
    ],
    "correct": "abc"
  },
  {
    "question": "For MinMaxScaler with feature range (min, max), which formulas or statements are correct?",
    "answers": [
      "X_std = (X - X_min) / (X_max - X_min).",
      "X_scaled = X_std * (max - min) + min.",
      "The scaler should be fitted separately on each test sample.",
      "The transformation should be fitted on the test data."
    ],
    "correct": "ab"
  },
  {
    "question": "Why were LSTMs introduced?",
    "answers": [
      "To preserve information for longer periods.",
      "To remove sequence modeling entirely.",
      "To use gates that control memory.",
      "To introduce a dedicated cell state."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements about traditional ANNs and generic transforms are correct?",
    "answers": [
      "Generic transforms may map data to a higher-dimensional space.",
      "Manual engineering can require domain-specific human effort.",
      "Generic transforms always guarantee perfect generalization.",
      "RBF kernels are mentioned as an example of kernel methods."
    ],
    "correct": "abd"
  },
  {
    "question": "Given x = (1, 2)^T, W = [[2, 1], [0, 1]], and b = (1, -1)^T, which statements are correct for y = Wx + b?",
    "answers": [
      "The dot product <x, y> is 7.",
      "The Euclidean norm of x is 5.",
      "y = (5, 1)^T.",
      "Wx = (4, 2)^T."
    ],
    "correct": "acd"
  },
  {
    "question": "Which equations correctly describe perceptron-based separation in the lecture?",
    "answers": [
      "For m > 3, a hyperplane can be written using a weighted sum of features.",
      "For m = 2, a line can be written as w_1 x_1 + w_2 x_2 + θ = 0.",
      "A perceptron always separates data using a circle.",
      "For m = 3, a plane can be written as w_1 x_1 + w_2 x_2 + w_3 x_3 + θ = 0."
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements about batching sequence data in PyTorch are correct?",
    "answers": [
      "With batch_first = True, the batch dimension comes first.",
      "Batching allows several sequences to be processed in parallel.",
      "Batching requires every model to ignore sequence length.",
      "Batches can improve computational efficiency during training."
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements correctly distinguish minimizing average loss from Empirical Risk Minimization?",
    "answers": [
      "Minimizing average loss emphasizes an optimization viewpoint on a fixed dataset.",
      "They are always completely different numerical problems.",
      "ERM emphasizes a statistical learning viewpoint under an i.i.d. assumption.",
      "They often lead to the same formula."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements about training are correct?",
    "answers": [
      "Training raises both computational and statistical questions.",
      "Training can be formulated as solving an ERM problem.",
      "Training is the same thing as validation.",
      "Training aims to obtain a learned hypothesis h_hat."
    ],
    "correct": "abd"
  },
  {
    "question": "Which aspects should be compared when evaluating two models trained on the same dataset?",
    "answers": [
      "How accurate they are",
      "Their ability to compile the modeled data.",
      "Their learned weights for the best model",
      "How fast they train to reach accuracy"
    ],
    "correct": "ad"
  },
  {
    "question": "Which statements about linearity and non-linearity are correct?",
    "answers": [
      "A nonlinear transform φ(x) can be used in f(x) = W^T φ(x).",
      "Nonlinear transformations are never used in neural networks.",
      "Linear models can be fit efficiently via convex optimization.",
      "Linear models have limited model capacity."
    ],
    "correct": "acd"
  },
  {
    "question": "Which representations of uncertainty can be used?",
    "answers": [
      "Probabilities",
      "Fuzzy logic",
      "Dempster-Shafer theory",
      "Certainty factors and confidence values"
    ],
    "correct": "abcd"
  },
  {
    "question": "For the network with two inputs and two hidden units, which hidden-layer expressions are correct?",
    "answers": [
      "o_1^H = f(net_1^H).",
      "net_1^H = (W_1^H)^T X = w_11^H x_1 + w_12^H x_2.",
      "net_2^H = (W_2^H)^T X = w_21^H x_1 + w_22^H x_2.",
      "o_1^H is computed without any activation function."
    ],
    "correct": "abc"
  },
  {
    "question": "Which statements about SPEA2 are correct?",
    "answers": [
      "It uses an external archive.",
      "Raw fitness R(i) sums strengths of solutions that dominate i.",
      "Final fitness includes a density estimate D(i).",
      "Strength S(i) counts how many solutions i dominates."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about the F1 Score are correct?",
    "answers": [
      "It is the harmonic mean between precision and recall.",
      "It ignores both precision and recall.",
      "Its range is [0, 1] according to the lecture.",
      "It can be written as F1 = 2 * (1 / (1/Prec + 1/Recall))."
    ],
    "correct": "acd"
  },
  {
    "question": "Which statements correctly distinguish Strong AI from Weak AI?",
    "answers": [
      "Weak AI necessarily implies that the system uses symbolic reasoning only.",
      "Strong AI refers to hypothetical systems with general intelligence comparable to human intelligence.",
      "Strong AI is already achieved by current machine learning systems.",
      "Weak AI refers to systems designed for specific tasks or narrow problems."
    ],
    "correct": "bd"
  },
  {
    "question": "Which design decisions must be made for a feedforward network?",
    "answers": [
      "Loss function",
      "Number of neurons in each layer",
      "Number of layers",
      "Activation function"
    ],
    "correct": "abcd"
  },
  {
    "question": "Which concepts are associated with classical AI?",
    "answers": [
      "Logic",
      "Symbols",
      "Gradient descent as the only reasoning mechanism",
      "Rules"
    ],
    "correct": "abd"
  },
  {
    "question": "Which statements correctly describe modern data-driven AI?",
    "answers": [
      "Its performance may depend on data availability and model capacity.",
      "Optimization is central to model training.",
      "It is always deterministic and independent of data.",
      "Knowledge is often represented implicitly through parameters."
    ],
    "correct": "abd"
  },
  {
    "question": "Which are common modelling errors listed in the lecture?",
    "answers": [
      "Optimizing the wrong objective.",
      "Ignoring scale differences between objectives or constraints.",
      "Using an encoding that generates mostly infeasible candidates.",
      "Reporting one run without measuring stochastic variability."
    ],
    "correct": "abcd"
  },
  {
    "question": "Which statements about the ReLU activation and its gradient are correct?",
    "answers": [
      "Its gradient is 0 for negative inputs.",
      "ReLU can be written as f(x) = max(0, x).",
      "It is smooth and differentiable at x = 0 in the classical sense.",
      "Its gradient is 1 for positive inputs."
    ],
    "correct": "abd"
  },
  {
    "question": "Which fuzzy-logic operations are given in the lecture?",
    "answers": [
      "a ∧ b = min(a, b)",
      "~a = 1 - a",
      "a ∨ b = max(a, b)",
      "a ∧ b = a + b always"
    ],
    "correct": "abc"
  },
  {
    "question": "For training a fully connected network in PyTorch, which components are generally needed?",
    "answers": [
      "A loss criterion comparing predictions with targets.",
      "A database D = {(x_i, y_i) | i ∈ {1,...,n}}.",
      "An optimizer that updates parameters.",
      "A training loop that repeatedly performs forward and update steps."
    ],
    "correct": "abcd"
  },
];

// Total questions for reference
const TOTAL_QUESTIONS = questions.length;

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { questions, TOTAL_QUESTIONS };
}

// Make available globally for browser
if (typeof window !== 'undefined') {
  window.questions = questions;
  window.TOTAL_QUESTIONS = TOTAL_QUESTIONS;
} 
