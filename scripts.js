/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */




// Array of objects of my current shoe collection with Name , Brand , Collab, and URL
const shoes = [
    {name: "Air Jordan 7 Retro 'Quai 54'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/863/760/original/998630_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "A Ma Maniere x Wmns Air Jordan 5 Retro 'Dawn'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/095/071/556/original/1243222_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "A Ma Maniere x Wmns Air Jordan 3 Retro SP 'Raised By Women'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/056/093/849/original/690789_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "A Ma Maniere x Air Jordan 5 Retro 'Dusk'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/094/454/172/original/1243221_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "A Ma Maniere x Air Jordan 1 High OG 'Airness'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/724/040/original/808985_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "Air Jordan 4 Retro 'Thunder' 2023", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/086/042/596/original/1124754_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 4 Retro SE 'Craft'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/405/307/original/1037302_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 4 Retro 'Military Black'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/333/264/original/895934_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 4 Retro 'Bred Reimagined'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/097/777/584/original/1293064_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 4 Retro 'University Blue'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/051/754/906/original/631510_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 4 Retro OG 'Fire Red' 2020", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/247/197/original/612313_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Wmns Air Jordan 1 Retro High OG 'Washed Pink'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/086/133/900/original/1124738_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro 'White Cement Reimagined'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/913/710/original/1101598_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro 'Fear' 2023", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/094/065/971/original/1128539_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "J. Balvin x Air Jordan 3 Retro 'Medellín Sunset'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/093/246/784/original/1220961_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "Air Jordan 3 Retro 'Washington Wizards'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/085/551/722/original/1038216_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro 'Pine Green'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/061/755/490/original/819009_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro 'Cardinal Red'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/068/301/154/original/884871_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro 'Georgetown'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/050/197/714/original/723608_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Air Jordan 3 Retro SE 'Muslin'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/069/293/429/original/878623_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Union LA x Bephie's Beauty Supply x Air Jordan 1 Retro High OG SP 'Summer of '96'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/261/117/original/1190184_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "True"},
    {name: "Air Jordan 1 Retro High OG 'Palomino'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/053/215/original/1116436_01.jpg.jpeg?action=crop&width=1000", brand: "Jordan", collab: "False"},
    {name: "Kasina x Air Max 1 SP 'Won-Ang - Orange'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/720/021/original/939979_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Patta x Air Max 1 'Noise Aqua'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/767/345/original/822643_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Dunk Low SB 'Navy Desert Ochre'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/088/182/382/original/1179329_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Dunk Low SB 'Deep Royal Vintage Green'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/096/982/312/original/1321533_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: ""},
    {name: "Dunk Low SB 'Court Purple'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/097/181/404/original/699721_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Dunk Low Premium SB 'City of Love Collection - Light Bone'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/098/037/584/original/1301516_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Rayssa Leal x Dunk Low SB", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/099/227/861/original/1320672_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Dunk Low Pro SB 'Wheat Mocha'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/094/675/755/original/695799_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Dunk Low SB 'Los Angeles Dodgers'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/487/426/original/999930_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "The Powerpuff Girls x Dunk Low Pro SB QS 'Buttercup'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/095/942/934/original/1252845_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Dunk Low Pro SB 'Fog'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/767/108/original/838715_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "April Skateboards x Dunk Low SB 'Turbo Green'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/092/705/129/original/1236006_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Dunk Low SB 'Catalonia'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/058/577/748/original/797250_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Yuto Horigome x Dunk Low SB", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/091/858/016/original/1164825_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "True"},
    {name: "Dunk Low Pro Premium SB 'Paisley'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/071/231/428/original/910618_01.jpg.jpeg?action=crop&width=1000", brand: "Nike", collab: "False"},
    {name: "Joe Freshgoods x 610 'Lil' Swamps'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/087/421/247/original/1188183_00.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Joe Freshgoods x 9060 'Baby Shower Blue'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/073/122/223/original/939976_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "9060 'Beef & Broccoli'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/084/737/967/original/1107660_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "False"},
    {name: "2002R 'Protection Pack - Purple'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/207/955/original/913403_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "False"},
    {name: "Teddy Santis x 990v3 Made in USA 'Raw Amethyst'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/075/487/827/original/1001491_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Teddy Santis x 990v3 Made in USA 'Tan Green'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/084/275/744/original/1108316_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Teddy Santis x 990v3 Made in USA 'Green Purple'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/405/616/original/1099762_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Teddy Santis x 990v3 Made In USA 'Olive Leaf'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/767/498/original/1037346_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Joe Freshgoods x 990v3 Made In USA 'Outside Clothes'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/059/096/703/original/782872_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Kith x 990v3 Made In USA 'Daytona'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/084/079/original/886887_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Teddy Santis x 990v3 Made in USA 'Scarlet Marblehead'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/076/377/172/original/1009957_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Ronnie Fieg x Frank Lloyd Wright Foundation x 998 Made in USA 'Broadacre City - Chutney'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/087/385/571/original/U998KH1.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "The Basement x 2002R 'Stone Grey'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/560/332/original/1000446_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Salehe Bembury x 2002R 'Water Be The Guide'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/056/825/802/original/786885_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Joe Freshgoods x 993 Made in USA 'Performance Art - Arctic Blue'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/700/890/original/1056929_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 993 Made in USA 'Taupe'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/065/999/135/original/WR993ALL.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 993 Made in USA 'Beef & Broccoli'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/063/600/009/original/847992_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Joe Freshgoods x 610 'Lil' Desert'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/087/421/250/original/1188184_00.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Bodega x 9060 'Age of Discovery'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/082/412/476/original/1091095_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'Grey'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/080/808/603/original/1045900_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'Green Yellow'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/054/789/126/original/760008_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'Warm Sand'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/261/156/original/1186605_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'Olive'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/579/374/original/981385_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'Brown'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/074/478/293/original/981384_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 550 'True Brown'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/032/568/original/1186602_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x 650R 'Navy Grey'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/079/779/181/original/1054373_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x Rainier 'Beige'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/089/453/102/original/1097872_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Aime Leon Dore x Rainier 'Charcoal'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/081/878/722/original/ALD_RANIER_GRY.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "Joe Freshgoods x Rainier 'Lil' Block'", url: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/087/421/249/original/1188187_00.png.png?action=crop&width=1000", brand: "New Balance", collab: "True"},
    {name: "1906D 'Protection Pack - Black'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/560/261/original/1056150_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "False"},
    {name: "1906D 'Protection Pack - Turtledove'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/238/954/original/1102369_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "False"},
    {name: "1906D 'Protection Pack - Castlerock'", url: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/083/360/884/original/1104668_01.jpg.jpeg?action=crop&width=1000", brand: "New Balance", collab: "False"},
    
];


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < shoes.length; i++) {
        let title = shoes[i].name;

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        imageURL = shoes[i].url;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function showCardbyBrand(brand) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < brand.length; i++) {
        let title = brand[i].name;

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        imageURL = brand[i].url;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

console.log(shoes.length);

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function sortByNike() {
    let filterByNike = shoes.filter(shoes => shoes.brand === "Nike")
    showCardbyBrand(filterByNike);
}

function sortByJordan() {
    let filterByJordan = shoes.filter(shoes => shoes.brand === "Jordan")
    showCardbyBrand(filterByJordan);
}

function sortByNB() {
    let filterByNB = shoes.filter(shoes => shoes.brand === "New Balance")
    showCardbyBrand(filterByNB);
}

function sortByCollab() {
    let filterByCollab = shoes.filter(shoes => shoes.collab === "True")
    showCardbyBrand(filterByCollab);
}

function sortByNotCollab() {
    let filterByNotCollab = shoes.filter(shoes => shoes.collab === "False")
    showCardbyBrand(filterByNotCollab);
}
