// Data for the 20 students. 
// Edit the names, short bios, and full bios inside the quotes!
const students = [
    { name: "Fred", shortBio: "Likes math and coding.", fullBio: "Fred is a brilliant thinker who loves solving complex math problems and building websites in their free time." },
    { name: "Wilma", shortBio: "Avid reader.", fullBio: "Wilma reads a book a week and hopes to become a published author. Her favorite genre is science fiction." },
    { name: "Barney", shortBio: "Sports enthusiast.", fullBio: "Barney is the captain of the soccer team and brings incredible energy and leadership to the classroom." },
    { name: "Betty", shortBio: "Future doctor.", fullBio: "Betty volunteers at the local hospital and has a deep passion for biology and helping others." },
    { name: "Bam-Bam", shortBio: "Artistic soul.", fullBio: "Bam-Bam is always sketching in their notebook and recently won a local art competition for their landscape painting." },
    { name: "Dino", shortBio: "Tech wizard.", fullBio: "Dino built their own computer from scratch and is the go-to person when anyone has tech issues." },
    { name: "Pebbles", shortBio: "Musician.", fullBio: "Pebbles plays the piano and guitar flawlessly. They plan to study music theory in college." },
    { name: "Betty", shortBio: "Debate champion.", fullBio: "Betty is highly articulate and loves discussing politics, philosophy, and current world events." },
    { name: "Wilma", shortBio: "Nature lover.", fullBio: "Wilma spends their weekends hiking and is deeply involved in the school's environmental club." },
    { name: "Alred", shortBio: "Aspiring chef.", fullBio: "Alred loves experimenting in the kitchen and often brings delicious baked goods for the class to share." },
    { name: "Barney", shortBio: "History buff.", fullBio: "Barney can name every major historical event by date and hopes to become a museum curator." },
    { name: "Mary", shortBio: "Theater star.", fullBio: "Mary always takes the lead role in school plays and brings incredible drama and emotion to the stage." },
    { name: "Katty", shortBio: "Mathlete.", fullBio: "Katty regularly competes in regional math competitions and helps tutor younger students in calculus." },
    { name: "Alvin", shortBio: "Language learner.", fullBio: "Alvin speaks three languages fluently and is currently teaching themselves a fourth." },
    { name: "Chris", shortBio: "Entrepreneur.", fullBio: "Chris has already started their own small business selling custom phone cases online." },
    { name: "Yvette", shortBio: "Animal activist.", fullBio: "Yvette fosters rescue dogs and plans to study veterinary medicine to help animals in need." },
    { name: "Jane", shortBio: "Film critic.", fullBio: "Jane has seen almost every classic movie and writes a popular blog reviewing new cinema releases." },
    { name: "Amos", shortBio: "Chess master.", fullBio: "Amos is the school's reigning chess champion and thinks five moves ahead in everything they do." },
    { name: "Moses", shortBio: "Skateboarder.", fullBio: "Moses knows all the best skate parks in the city and is known for their laid-back, positive attitude." },
    { name: "Sally", shortBio: "Class clown.", fullBio: "Sally always knows how to lighten the mood with a joke, but is also incredibly supportive of their friends." }
];

// Get HTML elements
const grid = document.getElementById('student-grid');
const modal = document.getElementById('bio-modal');
const modalName = document.getElementById('modal-name');
const modalBio = document.getElementById('modal-bio');
const closeBtn = document.querySelector('.close-button');

// Loop through the data and create a card for each student
students.forEach(student => {
    // Create the card container
    const card = document.createElement('div');
    card.className = 'student-card';

    // Add the student's name and short bio to the card
    card.innerHTML = `
        <h3>${student.name}</h3>
        <p>${student.shortBio}</p>
    `;

    // Make the card open the modal when clicked
    card.addEventListener('click', () => {
        modalName.textContent = student.name;
        modalBio.textContent = student.fullBio;
        modal.style.display = 'block';
    });

    // Add the card to the grid
    grid.appendChild(card);
});

// Close the modal when the "X" button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});