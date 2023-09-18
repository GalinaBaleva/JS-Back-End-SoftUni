const home = (cats) => {
return `
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link href="https://use.fontawesome.com/releases/v5.0.7/css/all.css" rel="stylesheet">
<link rel="stylesheet" href="../../content/styles/site.css">
<link rel="shortcut icon" type="image/png" href="../../content/images/pawprint.ico" />
<title>Cat Shelter</title>
</head>

<body>
<header>
    <nav>
        <ul class="navigation">
            <li><a href="/">Home Page</a></li>
            <li><a href="/cats/add-breed">Add Breed</a></li>
            <li><a href="/cats/add-cat">Add Cat</a></li>
        </ul>
    </nav>
    <h1>Cat Shelter</h1>
    <form action="/search">
        <input type="text">
        <button type="button">Search</button>
    </form>
</header>

<main>
    <section class="cats">
        <ul>
        ${cats.map(cat => catTemplate(cat))}
        </ul>
    </section>
</main>

</body>

</html>
`
}
;
const homePage = {
    home
}
module.exports = homePage;



function catTemplate(cat) {
    return `
 <li>
 <img src="${cat.img}" alt="${cat.alt}">
 <h3>${cat.name}</h3>
 <p><span>Price: </span>${cat.price}</p>
 <p><span>Breed: </span>${cat.dreed}</p>
 <p><span>Description: </span>${cat.description}</p>
 <ul class="buttons">
     <li class="btn edit"><a href="">Change Info</a></li>
     <li class="btn delete"><a href="">New Home</a></li>
 </ul>
</li>
 `
}



