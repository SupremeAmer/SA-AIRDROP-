/ Fetch user $SA balance data from database or API
fetch('/api/users')
  .then(response => response.json())
  .then(data => {
    // Sort users by $SA balance in descending order
    data.sort((a, b) => b.saBalance - a.saBalance);

    // Populate leaderboard table
    const leaderboardData = document.getElementById('leaderboard-data');
    data.forEach((user, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.saBalance}</td>
      `;
      leaderboardData.appendChild(row);
    });
  });
