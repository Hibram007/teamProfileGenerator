const fs = require("fs");

const genManagers = (managers) => {
  return managers.map(({ name, id, email, officeNumber }) => {
    return `    
    <div class="col-sm-4">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item card-header">
                    <h4 class="card-title">${name}</h4>
                    <h5 class="card-text"><i class="fas fa-mug-hot"></i> Manager</h5>
                </li>
                <div class="card-body-wrapper">
                    <li class="list-group-item"><span>ID:</span> ${id}</li>
                    <li class="list-group-item"><span>EMAIL:</span> <a href = "mailto:${email}">${email}</a></li>
                    <li class="list-group-item"><span>OFFICE # :</span> ${officeNumber}</li>
                </div>
            </ul>
        </div>
    </div>
</div>
`;
  });
};

const genEngineers = (engineers) => {
    return engineers.map(({ name, id, email, github }) => {
      return `
      <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item card-header">
                      <h4 class="card-title">${name}</h4>
                      <h5 class="card-text"><i class="fas fa-glasses"></i>
                          Engineer</h5>
                  </li>
                  <div class="card-body-wrapper">
                      <li class="list-group-item"><span>ID:</span> ${id}</li>
                      <li class="list-group-item"><span>EMAIL:</span> <a href = "mailto:${email}">${email}</a></li>
                      <li class="list-group-item"><span>GITHUB:</span> <a href="https://github.com/${github}" target=“_blank”>${github}</a></li>
                  </div>
              </ul>
          </div>
      </div>
  </div>`;
    });
  };
  
  const genInterns = (interns) => {
    return interns.map(({ name, id, email, school }) => {
      return `
      <div class="col-sm-4">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <ul class="list-group list-group-flush">
                  <li class="list-group-item card-header">
                      <h4 class="card-title">${name}</h4>
                      <h5 class="card-text"><i class="fas fa-user-graduate"></i>
                          Intern</h5>
                  </li>
                  <div class="card-body-wrapper">
                      <li class="list-group-item"><span>ID:</span> ${id}</li>
                      <li class="list-group-item"><span>EMAIL:</span> <a href = "mailto:${email}">${email}</a></li>
                      <li class="list-group-item"><span>SCHOOL:</span> ${school}</li>
                  </div>
              </ul>
          </div>
      </div>
  </div>
  `;
    });
  };
  
  module.exports = (data) => {
    const managers = data.filter((employee) => employee.role === "Manager");
    const engineers = data.filter((employee) => employee.role === "Engineer");
    const interns = data.filter((employee) => employee.role === "Intern");
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Newsreader&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <link rel="stylesheet" href="../dist/style.css">
        <title>M.10 TeamProfile Challenge </title>
    
    </head>
    
    <body>
        <div class="nav-wrapper">
            <nav class="navbar">
                <h1 class="navbar-brand" href="#">
                    Test TeamProfile
                </h1>
            </nav>
        </div>
        <div>
        <div class="container" id="managers-container">
        <div class="row">
                    ${genManagers(managers).join("")}
              </div>
          </div>
    
          <div class="container" id="engineers-container">
              <div class="row">
                    ${genEngineers(engineers).join("")}
                </div>
            </div>
    
            <div class="container" id="interns-container">
            <div class="row">
                    ${genInterns(interns).join("")}
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </body>
      `;
  };
  