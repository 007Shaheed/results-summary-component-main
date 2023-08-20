// Fetch the JSON data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Get the container where you want to populate the data
    const categoryCards = document.getElementById("category-cards");

    // Loop through the JSON data and create cards
    data.forEach((category) => {
      const card = document.createElement("div");
      card.classList.add("category-card"); // Add a class for styling

      const icon = document.createElement("img");
      icon.src = category.icon;
      icon.alt = `${category.category} icon`;

      const categoryName = document.createElement("h2");
      categoryName.textContent = category.category;

      // Display the score as "92 / 100" with "92" in bold and "100" in faint
      const score = document.createElement("p");
      const scoreText = `${category.score} / 100`;
      const scoreHTML = scoreText.replace(
        /(\d+) \/ (\d+)/,
        '<strong>$1</strong> / <span class="faint">$2</span>'
      );
      score.innerHTML = scoreHTML;

      card.appendChild(icon);
      card.appendChild(categoryName);
      card.appendChild(score);

      categoryCards.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
