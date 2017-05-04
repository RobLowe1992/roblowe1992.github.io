var projects = [{
    "img":"images/techCrunch_mock.png",
    "url":"https://github.com/RobLowe1992/techCrunch",
    "title":"TechCrunch Mock Site",
    "github": "github.com/RobLowe1992/techCrunch"
},
{
    "img":"images/airbnb_mock.png",
    "url":"https://github.com/RobLowe1992/css-airbnb",
    "title":"AirBnB Mock Site",
    "github": "github.com/RobLowe1992/css-airbnb"
},
{
    "img":"images/rqg.png",
    "url":"https://github.com/RobLowe1992/Random-Quote-Generator",
    "title":"Random Quote Generator",
    "github": "github.com/RobLowe1992/Random-Quote-Generator"
}];

var $projects = $('#projects');
var $featuredImage = $('.featured-image');

for (var i = 0; i < projects.length; i++) {
    $projects.append(`<div class="col-md-4"><a href="${projects[i].url}"><img src="${projects[i].img}" id="project-${[i+1]}" style="width: 350px; height: 300px" alt="Featured Image 1" class="img-rounded"></a><h2>${projects[i].title}</h2><a class="light-green" href="${projects[i].url}">${projects[i].github}</a></div>`);
}

