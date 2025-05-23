const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Enable CORS for frontend requests
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));

// Endpoint to get user ID and friends
app.get('/getUserId', async (req, res) => {
    const username = req.query.username;

    try {
        // Fetch user ID from Roblox API
        const userResponse = await axios.get(`https://api.roblox.com/users/get-by-username?username=${username}`);
        const userId = userResponse.data.Id;

        // Fetch user friends (Replace with the correct endpoint or function if needed)
        const friendsResponse = await axios.get(`https://users.roblox.com/v1/users/${userId}/friends`);
        const friends = friendsResponse.data.data;

        res.json({
            userId: userId,
            friends: friends
        });
    } catch (error) {
        res.json({ error: "User not found or there was an error fetching data." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
