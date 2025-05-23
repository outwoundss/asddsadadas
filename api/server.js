// api/friends.js
const axios = require('axios');

module.exports = async (req, res) => {
    // Only handle GET requests
    if (req.method === 'GET') {
        const username = req.query.username;

        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }

        try {
            // Step 1: Find user ID by username
            const userResponse = await axios.get(`https://users.roblox.com/v1/users/search?keyword=${username}`);
            if (userResponse.data.data.length === 0) {
                return res.status(404).json({ error: "User not found" });
            }
            const userId = userResponse.data.data[0].id;

            // Step 2: Fetch the friends list for that user
            const friendsResponse = await axios.get(`https://friends.roblox.com/v1/users/${userId}/friends`);

            // Map friends data to include only usernames
            const friends = friendsResponse.data.data.map(friend => ({
                username: friend.username
            }));

            // Return the list of friends
            return res.status(200).json({ friends });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: "An error occurred while fetching data" });
        }
    } else {
        // Method Not Allowed
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};
