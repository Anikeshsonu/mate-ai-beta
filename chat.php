<?php
// chat.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userMessage = $_POST['message'];

    // For simplicity, we'll just echo back a basic response.
    // In a real application, you'd integrate with an AI API (like OpenAI's GPT).
    $responses = [
        "Hello! How can I assist you today?",
        "I'm here to help you.",
        "Feel free to ask me anything!",
        "What can I do for you?"
    ];

    // Choose a random response
    $aiResponse = $responses[array_rand($responses)];

    echo json_encode([
        'success' => true,
        'message' => $aiResponse
    ]);
}
?>