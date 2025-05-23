<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Skengs | Roblox Friends Tool</title>
    <style>
        /* Global Styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212; /* Dark background */
            color: #e0e0e0; /* Light text color */
            padding: 20px;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            background-image: linear-gradient(135deg, rgba(18, 18, 18, 1) 0%, rgba(38, 38, 38, 1) 100%);
        }

        h1 {
            color: #ff7043; /* Bright color for heading */
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 20px;
            text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        }

        /* Center the form */
        .search-container {
            text-align: center;
            animation: fadeIn 1s ease-in-out;
        }

        input {
            padding: 12px;
            margin-top: 20px;
            width: 250px;
            font-size: 18px;
            border-radius: 8px;
            border: 2px solid #4caf50;
            background-color: #1a1a1a;
            color: #fff;
            transition: all 0.3s;
        }

        input:focus {
            outline: none;
            border-color: #ff7043;
            background-color: #333;
        }

        button {
            padding: 12px 25px;
            margin-top: 20px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 18px;
            transition: background-color 0.3s ease;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
        }

        button:hover {
            background-color: #45a049;
        }

        button:active {
            transform: scale(0.98);
        }

        /* Friend List Style */
        #friendsList {
            margin-top: 30px;
            padding: 10px;
            list-style-type: none;
            width: 100%;
            max-width: 450px;
            animation: fadeIn 1s ease-in-out;
        }

        .friend-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            transition: all 0.3s ease;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
        }

        .friend-item a {
            color: #ff7043;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            display: block;
            transition: color 0.3s ease;
        }

        .friend-item a:hover {
            color: #ffcc80;
        }

        /* Error Message */
        .error {
            color: #ff5252;
            font-weight: bold;
            margin-top: 20px;
        }

        /* Fade-in Animation */
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        /* Loader (Spinner) */
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #4caf50;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>

    <div class="search-container">
        <h1>Input Roblox Username</h1>
        <input type="text" id="username" placeholder="Enter Roblox Username">
        <button onclick="searchUser()">Search</button>
    </div>

    <div class="loader" id="loader" style="display: none;"></div> <!-- Loader while waiting for data -->
    
    <ul id="friendsList"></ul>
    <div id="error" class="error"></div>

    <script>
        async function searchUser() {
            const username = document.getElementById('username').value;
            const friendsListElement = document.getElementById('friendsList');
            const errorElement = document.getElementById('error');
            const loader = document.getElementById('loader');

            // Clear previous data
            friendsListElement.innerHTML = '';
            errorElement.textContent = '';
            loader.style.display = 'block'; // Show loader

            if (!username) {
                alert("Please enter a username.");
                loader.style.display = 'none'; // Hide loader when no username is entered
                return;
            }

            try {
                // Send the username to the Vercel backend API
                const response = await fetch(`/api/friends?username=${username}`);
                const data = await response.json();

                loader.style.display = 'none'; // Hide loader after data is fetched

                console.log('Data from API:', data); // Log the API response

                if (data.error) {
                    errorElement.textContent = data.error;
                    return;
                }

                // Display friends list if found
                if (data.friends && data.friends.length > 0) {
                    data.friends.forEach(friend => {
                        const li = document.createElement('li');
                        li.classList.add('friend-item');
                        
                        // Create the anchor tag for the friend's name
                        const link = document.createElement('a');
                        link.href = `https://www.roblox.com/users/${friend.id}/profile`;  // Link to Roblox profile
                        link.target = '_blank'; // Open in a new tab
                        link.textContent = friend.name;  // Display the friend's name
                        
                        li.appendChild(link);  // Append the link to the list item
                        friendsListElement.appendChild(li);
                    });
                } else {
                    friendsListElement.textContent = "No friends found for this user.";
                }
            } catch (error) {
                loader.style.display = 'none'; // Hide loader on error
                errorElement.textContent = "An error occurred while fetching data.";
                console.error('Error fetching data:', error);
            }
        }
    </script>
</body>
</html>
