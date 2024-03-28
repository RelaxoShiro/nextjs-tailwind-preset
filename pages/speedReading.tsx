import React, { useState } from 'react';
import DoubleLineReading from '@/components/DoubleLineReading';
import { addTemplates, sentence } from 'txtgen'; // Import the 'addTemplates' and 'sentence' functions from txtgen

const Practice01Page: React.FC = () => {
    const [sentence1, setSentence1] = useState<string>(''); // State to store the first sentence
    const [sentence2, setSentence2] = useState<string>(''); // State to store the second sentence

    // Add custom sentence templates
    addTemplates([
        "The {{noun}} {{verb}} {{adjective}}",
        "A {{adjective}} {{noun}} {{verb}} across the {{noun}}",
        "In the {{adjective}} {{noun}}, {{noun}} {{verb}} with {{adjective}} {{noun}}",
        "With {{noun}}, {{noun}} {{verb}} {{adjective}}",
        "{{Noun}} {{verb}} {{adjective}} with {{noun}}",
        "The {{adjective}} {{noun}} {{verb}} over the {{adjective}} {{noun}}",
        "Beyond the {{noun}}, {{noun}} {{verb}} with {{adjective}} {{noun}}",
        "At the {{noun}}, {{noun}} {{verb}} {{adjective}}",
        "{{Noun}} {{verb}} over {{noun}}, {{adjective}} {{noun}}",
        "Underneath the {{noun}}, {{noun}} {{verb}} {{adjective}}"
    ]);

    // Function to generate random sentences
    const generateRandomSentences = () => {
        setSentence1(sentence()); // Generate and set the first sentence
        setSentence2(sentence()); // Generate and set the second sentence
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Practice 01 Page</h1>
            <DoubleLineReading line1={sentence1} line2={sentence2} />
            <div className="mt-4">
                <button className="btn btn-primary mt-2" onClick={generateRandomSentences}>Next Random Sentences</button>
            </div>
        </div>
    );
};

export default Practice01Page;
