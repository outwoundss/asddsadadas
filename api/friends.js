const axios = require('axios');

module.exports = async (req, res) => {
    if (req.method === 'GET') {
        const username = req.query.username;

        if (!username) {
            return res.status(400).json({ error: "Username is required" });
        }

        try {
            // Log to see if the username is being passed correctly
            console.log(`Searching for username: ${username}`);

            const userResponse = await axios.get(`https://users.roblox.com/v1/users/search?keyword=${username}`);
            console.log('User search response:', userResponse.data);

            if (userResponse.data.data.length === 0) {
                return res.status(404).json({ error: "User not found" });
            }
            const userId = userResponse.data.data[0].id;

            const friendsResponse = await axios.get(`https://friends.roblox.com/v1/users/${userId}/friends`);
            console.log('Friends response:', friendsResponse.data);

            const friends = friendsResponse.data.data.map(friend => ({
                username: friend.username
            }));

            return res.status(200).json({ friends });
        } catch (error) {
            console.error('Error fetching data:', error);
            return res.status(500).json({ error: "An error occurred while fetching data", details: error.message });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
};
