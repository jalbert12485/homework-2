let projects=[];

function addProject(dashname, name, description, deployatgithub, deployelsewhere, deployelse){
    projects.push(
        {
            "dashname": dashname,
            "name": name,
            "description": description,
            "deployatgithub": deployatgithub,
            "deployelsewhere": deployelsewhere,
            "deployelse": deployelse
        }
    );
}

addProject("limit-electronics","Limit Electronics","Limit Electronics is a one-stop shop for your electronic needs. In this project we created a mock e-commerce site complete with search, add to cart, checkout, inventory management and sales analysis features. Use username: Justin password: password to access admin features.",false,true,null);

addProject("whats-for-dinner","What's For Dinner?","A website meant to recommend dinner and drink options to the user.  After choosing an option, the user can then see the recipe and instructions to make his/her choice.",true,false,null);


addProject("covid-data","COVID Tracking","Want to check the latest statistics for COVID in your state?  You can get detailed up to date information here.",true,false,null);

addProject("team-information","Team Information","A node.js program that can take user infomration and save and display employee information.",false,false,null);

addProject("readme-generator","Readme Generator","A node.js program that is used to generate a detailed readme for github repositories.",false,false,null);

addProject("weather-forecast","Weather Forecast","Choose any city or cities.  Then view the current weather as well as the five-day forecast for a chosen city.",true,false,null);

addProject("code-quiz","Code Quiz","See how well you know javaScript.  After finishing you can also save your high score!",true,false,null);

addProject("daily-calendar","Daily Calendar","Write down and store your planned activities for the day.  Then remove them from you itinerary when you've completed them.",true,false,null);

addProject("password-generator","Password Generator","Generate a secure password from your choice of character sets.",true,false,null);

addProject("refactor","Refactor","A given working code has been refractored to be more accessible.",true,false,null);

for(let i=0; i<projects.length; i++){
let newDiv=$("<div>");
newDiv.addClass("card col-md-6 col-sm-12");
newDiv.attr("style", "width: 18rem");
let newImg=$("<img>");
newImg.addClass("card-img-top");
newImg.attr("src", `img/${projects[i].dashname}.png`);
newImg.attr("alt",`${projects[i].name}`);

newDiv.append(newImg);

let newDiv2=$("<div>");
newDiv2.addClass("card-body");
let cardTitle=$("<h5>");
cardTitle.addClass("card-title");
cardTitle.text(`${projects[i].name}`);
let cardText=$("<p>");
cardText.addClass("card-text");
cardText.text(`${projects[i].description}`);
let repo=$("<a>");
repo.attr("href",`https://github.com/jalbert12485/${projects[i].dashname}`);
repo.attr("target","_blank");
repo.addClass("btn btn-primary m-2");
repo.text("View Github Repository");


newDiv2.append(cardTitle);
newDiv2.append(cardText);
newDiv2.append(repo);

if(projects[i].deployatgithub){
let deploy=$("<a>");
deploy.attr("href",`https://jalbert12485.github.io/${projects[i].dashname}`);
deploy.attr("target","_blank");
deploy.addClass("btn btn-primary m-2");
deploy.text("View Live Deployment");
newDiv2.append(deploy);
} 

if(projects[i].deployelsewhere){
    let deploy=$("<a>");
    deploy.attr("href",`${projects[i].deployelse}`);
    deploy.attr("target","_blank");
    deploy.addClass("btn btn-primary m-2");
    deploy.text("View Live Deployment");
    newDiv2.append(deploy);
    }



newDiv.append(newDiv2);
$("#portfolio-input").append(newDiv);
}

