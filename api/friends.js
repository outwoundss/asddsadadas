const axios = require('axios');

// In-memory cache (lives as long as the function instance is warm)
const cache = {};

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        const username = req.query.username?.toLowerCase();

        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }

        // Check if result is already cached
        if (cache[username]) {
            console.log(`Serving from cache for: ${username}`);
            return res.status(200).json({ friends: cache[username] });
        }

        try {
            console.log(`Searching for username: ${username}`);

            const userResponse = await axios.get(`https://users.roblox.com/v1/users/search?keyword=${username}`);
            if (userResponse.data.data.length === 0) {
                return res.status(404).json({ error: "User not found" });
            }

            const userId = userResponse.data.data[0].id;

            const friendsResponse = await axios.get(`https://friends.roblox.com/v1/users/${userId}/friends`);
            const friends = friendsResponse.data.data.map(friend => ({
                id: friend.id,
                name: friend.name
            }));

            // Cache the result
            cache[username] = friends;

            return res.status(200).json({ friends });
        } catch (error) {
            console.error('Error fetching data:', error.message);
            return res.status(500).json({ error: "An error occurred while fetching data", details: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};
