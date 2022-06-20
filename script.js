// List of Projects
const data = [
  {
    Title: "Cockpit Oriented Monitor",
    Description: "Back-end: Node.js\nFront-end: React",
    URL: "https://github.com/hannakatz/CockpitOrientedMonitor.git",
    Image_url:
      "url(https://preview.redd.it/vdl7go63f3a71.jpg?width=640&crop=smart&auto=webp&s=94f65cda67b148c1e563bc84b991ba21f8da8dd8)",
    Bottom_bar_color: "rgb(24, 35, 248)",
  },
  {
    Title: "Trivia Project",
    Description: "Android studio project\nSQLite database\nAnimation utils",
    URL: "https://github.com/hannakatz/AndroidTriviaProject.git",
    Image_url:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4DGS8Gpcoe7FGcbAjWQffZxwk0LF3qRisw&usqp=CAU)",
    Bottom_bar_color: "rgb(175, 118, 32)",
  },
  {
    Title: "NetWork Project",
    Description: "TCP Server written in java\nMultithreading",
    URL: "https://github.com/hannakatz/HITNetworkProject.git",
    Image_url:
      "url(https://media.springernature.com/w580h326/nature-cms/uploads/collections/Networks-Collection-img-final-f2c265a59e457f48645e2aa3ff90e942.jpg)",
    Bottom_bar_color: "rgb(146, 32, 175)",
  },
  {
    Title: "Four In Row",
    Description:
      "Window application in C#.net\nWorking with controls, event and designing forms",
    URL: "https://github.com/hannakatz/FourInRow.git",
    Image_url:
      "url(https://michal-toys.com/wp-content/uploads/2020/06/DD8033.jpg)",
    Bottom_bar_color: "rgb(210, 13, 13)",
  },
  {
    Title: "Chicken Invaders",
    Description: "Fun shooting game\nImplemented on java\nDesign pattern - MVC",
    URL: "https://github.com/florianKProjects/chicken-invaders-swing",
    Image_url:
      "url(https://m.media-amazon.com/images/M/MV5BMzIyMDgwZDktNGVjMi00MDc1LWFiNzYtMTU1NDU2NGM3NjA3XkEyXkFqcGdeQXVyMjkzNDQzNDk@._V1_.jpg)",
    Bottom_bar_color: "rgb(0, 0, 0)",
  },
];

function setContent(data) {
  const newDiv = document.createElement("div");
  const newTitle = document.createElement("h1");
  const newDescription = document.createElement("p");
  const bottomBarDiv = document.createElement("div");

  newDiv.className = "content";
  newTitle.className = "title";
  newDescription.className = "description";
  newTitle.innerText = data.Title;
  newDescription.innerText = data.Description;
  bottomBarDiv.className = "bottomBar";
  bottomBarDiv.style.background = data.Bottom_bar_color;

  newDiv.appendChild(newTitle);
  newDiv.appendChild(newDescription);
  newDiv.appendChild(bottomBarDiv);

  return newDiv;
}
function createProjectDiv(data) {
  const newA = document.createElement("a");
  const newDiv = document.createElement("div");
  const newContent = setContent(data);

  newA.href = data.URL;
  newA.className = "style";
  newDiv.className = "screenshot";
  newDiv.style.backgroundImage = data.Image_url;

  newA.appendChild(newDiv);
  newA.appendChild(newContent);

  return newA;
}
function createProjectsBody() {
  const body = document.getElementById("body");

  data.forEach((element) => {
    const newDiv = createProjectDiv(element);
    body.appendChild(newDiv);
  });
}
document.body.onload = createProjectsBody();
