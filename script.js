let timerInterval;
let timer;
let isRunning = false;

function updateTimerDisplay() {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  const selectedTime = document.getElementById("timer-duration").value;
  let breakTime = 0;

  // Set timer duration based on user selection
  if (selectedTime === "25") {
    timer = 25 * 60; // 25 minutes
    breakTime = 5 * 60; // 5-minute break
  } else if (selectedTime === "45") {
    timer = 45 * 60; // 45 minutes
    breakTime = 15 * 60; // 15-minute break
  } else if (selectedTime === "75") {
    timer = 75 * 60; // 75 minutes
    breakTime = 25 * 60; // 25-minute break
  }

  if (!isRunning) {
    isRunning = true;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      if (timer > 0) {
        timer--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        isRunning = false;
        // Start break timer once work timer is done
        startBreakTimer(breakTime);
      }
    }, 1000);
  }
}

function startBreakTimer(breakTime) {
  let breakInterval;
  let breakTimer = breakTime;

  // Display break timer
  const breakTimerInterval = setInterval(() => {
    if (breakTimer > 0) {
      breakTimer--;
      document.getElementById('timer').textContent = `Break Time: ${Math.floor(breakTimer / 60)}:${(breakTimer % 60).toString().padStart(2, '0')}`;
    } else {
      clearInterval(breakTimerInterval);
      alert("Break is over! Back to work!");
    }
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  timer = 0 * 60; // Default to 25 minutes
  updateTimerDisplay();
}


function playMusic(type) {
  let playlistURL = "";
  if (type === "calm") {
    playlistURL = "https://open.spotify.com/embed/playlist/5huUcxGmhZsu6iTKoqLnvp";
  } else if (type === "productive") {
    playlistURL = "https://open.spotify.com/embed/playlist/5ph8EfIabvpF6rm7BpE9Nc";
  } else if (type === "focus") {
    playlistURL = "https://open.spotify.com/embed/playlist/08xdpbLYzGsBdlBLwgRnQs";
  }
  document.getElementById("spotify-player").src = playlistURL;
}

// Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const cartoon = document.querySelector('.cartoon-covering-eyes');

  sidebar.classList.toggle('open');
  cartoon.textContent = sidebar.classList.contains('open') ? '🙈' : '👀';
}

// Function to show a specific function section
function showFunction(id) {
  document.querySelectorAll('.embedded-box').forEach(box => box.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Enable drag and drop for the embedded boxes
document.querySelectorAll('.draggable-box').forEach(box => {
  let startX, startY, offsetX = 0, offsetY = 0;

  box.addEventListener('mousedown', (e) => {
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onDrop);
  });

  function onDrag(e) {
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;
    box.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  function onDrop() {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', onDrop);
  }
});

  // Function to show or hide a specific function section
function toggleFunction(id) {
    const box = document.getElementById(id);
    box.classList.toggle('hidden');
  }
let isSidebarOpen = false;

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const coveringEyes = document.querySelector('.cartoon-covering-eyes');
  const openEyes = document.querySelector('.cartoon-open-eyes');
  
  isSidebarOpen = !isSidebarOpen;
  
  if (isSidebarOpen) {
    sidebar.style.width = "250px"; // Expands the sidebar to show the menu items
    coveringEyes.classList.add('hidden');
    openEyes.classList.remove('hidden');
  } else {
    sidebar.style.width = "50px"; // Collapses the sidebar
    coveringEyes.classList.remove('hidden');
    openEyes.classList.add('hidden');
  }
}

function showFunction(boxId) {
  const allBoxes = document.querySelectorAll('.embedded-box');
  const selectedBox = document.getElementById(boxId);

  // Hide all feature boxes
  allBoxes.forEach(box => {
    box.classList.add('hidden');
  });

  // Show the selected box
  selectedBox.classList.remove('hidden');
}

// Function to toggle visibility of individual feature boxes (music, timer, task organizer)
function showFunction(boxId) {
  const selectedBox = document.getElementById(boxId);

  // Toggle the visibility of the selected box (show/hide)
  selectedBox.classList.toggle('hidden');
}
// Function to toggle the eye icon and sidebar state
function toggleSidebar() {
  const coveringEyes = document.querySelector('.cartoon-covering-eyes');
  const openEyes = document.querySelector('.cartoon-open-eyes');
  const sidebar = document.querySelector('.sidebar');
  const featureBoxes = document.querySelectorAll('.embedded-box');

  // Toggle visibility of the cartoon eye images
  coveringEyes.classList.toggle('hidden');
  openEyes.classList.toggle('hidden');

  // Show feature icons when eyes are closed
  if (coveringEyes.classList.contains('hidden')) {
    sidebar.style.width = "200px";  // Show sidebar with all icons
  } else {
    sidebar.style.width = "50px";  // Sidebar collapsed to just eye icons
  }
}
// List of wallpapers
const wallpapers = [
  "images/cosmos-1853491_1280.jpg", 
  "images/stars-1654074_1280.jpg",
  "images/sky-space-dark-galaxy.jpg",
  "images/pexels-photo-4100130.jpeg",
  "images/pexels-photo-2085998.jpeg",
  "images/pexels-photo-1933316.jpeg",
  "images/pexels-photo-1567069.jpeg",
  "images/pexels-photo-1563355.jpeg",
  "images/pexels-photo-1242764.jpeg",
  "images/pexels-photo-1001682.jpeg",
  "images/pexels-photo-635279.jpeg",
  "images/pexels-photo-461940.jpeg",
  "images/pexels-photo-417074.jpeg",
  "images/pexels-photo-360912.jpeg",    
  "images/wp9870760.jpg",
  "images/wp8114822.jpg",
  "images/wp3181476.webp",
  "images/uwp4592893.webp",
  "images/star-trails-8306233_1280.webp",
  "images/stars-2177771_1280.jpg",
  "images/stars-1655504_1280.jpg",
  "images/space-7709489_1280.jpg",
  "images/polar-lights-5858656_1280.jpg",
];

// Get the wallpaper container
const wallpaperElement = document.getElementById("wallpaper");

// Function to set a wallpaper
function setWallpaper(index) {
  const selectedWallpaper = wallpapers[index];
  wallpaperElement.style.backgroundImage = `url('${selectedWallpaper}')`;
  // Save the current wallpaper index in localStorage
  localStorage.setItem("currentWallpaper", index);
}

// Load the last wallpaper or set a default
function loadWallpaper() {
  const savedWallpaperIndex = localStorage.getItem("currentWallpaper");
  const defaultIndex = 0; // Default wallpaper index
  setWallpaper(savedWallpaperIndex !== null ? savedWallpaperIndex : defaultIndex);
}

// Auto-change wallpaper every 15 seconds
let currentWallpaperIndex = 0;
setInterval(() => {
  currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length;
  setWallpaper(currentWallpaperIndex);
}, 15000);

// Initialize the wallpaper on page load
loadWallpaper();
// Ensure the dialog box shows only on hover
document.querySelector('.welcome-bubble').addEventListener('mouseover', () => {
  document.querySelector('.dialog-box').classList.remove('hidden');
});

document.querySelector('.welcome-bubble').addEventListener('mouseout', () => {
  document.querySelector('.dialog-box').classList.add('hidden');
});
// Function to change the color of the top bar over time
let colors = [
  "linear-gradient(to right,rgb(40, 25, 180),rgb(58, 30, 184))",
  "linear-gradient(to right,rgb(16, 39, 173),rgb(11, 50, 100))",
  "linear-gradient(to right,rgb(49, 5, 70),rgb(46, 3, 63))",
  "linear-gradient(to right,rgb(5, 3, 39),rgba(20, 12, 94, 0.32))"
];
let colorIndex = 0;

function changeTopBarColor() {
  const topBar = document.querySelector('.top-bar');
  topBar.style.background = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Loop through color array
}

// Function to create the glitter effect and shooting star cursor
const topBar = document.querySelector('.top-bar');
const customCursor = document.createElement('div');
customCursor.classList.add('custom-cursor');
document.body.appendChild(customCursor);

// Function to move the custom cursor to the mouse position
topBar.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.pageX - 10}px`;
  customCursor.style.top = `${e.pageY - 10}px`;

  // Create glitter stars falling effect
  createGlitter(e.pageX, e.pageY);
});

// Function to create glitter stars
function createGlitter(x, y) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${x + Math.random() * 10 - 5}px`;
  star.style.top = `${y + Math.random() * 10 - 5}px`;
  document.body.appendChild(star);

  // Remove star after animation
  setTimeout(() => {
    star.remove();
  }, 1000); // Adjust time for glitter duration
}

// Optional: Display a greeting message when the user arrives
window.addEventListener('load', () => {
  alert("Hey! You're here :) Welcome to the website!");
});

// Change color every 5 seconds
setInterval(changeTopBarColor, 5000);

// Function to show the greeting modal
function showGreeting() {
  const modal = document.getElementById("greeting-modal");
  modal.classList.add("show");
}

// Function to close the greeting modal
function closeGreeting() {
  const modal = document.getElementById("greeting-modal");
  modal.classList.remove("show");

  // Move the bubble to the bottom right with the new character
  const bubble = document.getElementById("bubble");
  bubble.style.transition = "all 0.3s ease";
  bubble.style.bottom = "20px";
  bubble.style.right = "20px";
  bubble.innerHTML = '<img src="images/cute-character-bubble.jpg" alt="Cute Character" class="bubble-image">';
}

// Function to open the greeting again from the bubble
function openGreeting() {
  showGreeting();
  const bubble = document.getElementById("bubble");
  bubble.style.transition = "all 0.3s ease";
  bubble.style.bottom = "-100px";  // Move the bubble off the screen
}

// Show greeting when the page loads
window.onload = showGreeting;

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      
      // Create a new task item
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');

      // Create the task text
      const taskTextSpan = document.createElement('span');
      taskTextSpan.textContent = taskText;

      // Create the checkmark button
      const checkmarkSpan = document.createElement('span');
      checkmarkSpan.classList.add('checkmark');
      checkmarkSpan.onclick = function() { toggleTask(checkmarkSpan); };

      // Append the task text and checkmark to the task item
      taskItem.appendChild(taskTextSpan);
      taskItem.appendChild(checkmarkSpan);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = '';
  }
}
const addTaskButton = document.getElementById('add-task-button');
const newTaskInput = document.getElementById('task-item');
const taskList = document.getElementById('task-list');
const taskOrganizer = document.querySelector('.task-container');

// Function to update the height of the task organizer based on the number of tasks
function updateOrganizerHeight() {
  const taskCount = taskList.children.length; // Get the number of tasks
  const baseHeight = 150; // Set a base height for the task organizer
  const taskHeight = 50; // Set the height for each task

  // Dynamically calculate the new height of the task organizer
  taskOrganizer.style.height = `${baseHeight + (taskCount * taskHeight)}px`;
}

// Function to add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  
  if (taskText !== '') {
    // Create a new list item for the task
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    // Append the task item to the task list
    taskList.appendChild(taskItem);
    
    // Clear the input field
    newTaskInput.value = '';

    // Update the height of the task organizer
    updateOrganizerHeight();
  }
});
// Function to toggle the completion of a task
function toggleTask(checkmarkElement) {
  const taskItem = checkmarkElement.parentElement;
  taskItem.classList.toggle('completed');

  if (taskItem.classList.contains('completed')) {
      checkmarkElement.textContent = '✓'; // Add tick mark when task is checked
      checkmarkElement.classList.add('checked');
  } else {
      checkmarkElement.textContent = ''; // Remove tick mark when task is unchecked
      checkmarkElement.classList.remove('checked');
  }
}

function addToGoogleCalendar(task) {
  gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: {
          summary: task,
          start: {
              dateTime: new Date().toISOString(),
              timeZone: 'Asia/Kolkata'
          },
          end: {
              dateTime: new Date(new Date().getTime() + 3600000).toISOString(),
              timeZone: 'Asia/Kolkata'
          }
      }
  });
}

