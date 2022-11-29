const NUMBER_OF_FAVORITES = 5;


const F_FAVORITE_LIST = document.getElementById("favoriteList");


let favorites = new Array(NUMBER_OF_FAVORITES);

let specifics = new Array(NUMBER_OF_FAVORITES)

start();


function start(){
    createFavorites();
    displayFavorites();

}

function createFavorites() {
    favorites[0] = "Sushi";
    specifics[0] = "Japanese";

    favorites[1] = "Pizza";
    specifics[1] = "Italian";

    favorites[2] = "Noodles";
    specifics[2] = "Chinese";

    favorites[3] = "Pho";
    specifics[3] = "Veitnamese";

    favorites[4] = "Kim Chi";
    specifics[4] = "Korean";
}

function displayFavorites() {
    F_FAVORITE_LIST.innerText =
        "1 " + favorites[0] + " - " + specifics[0] +"\n" +
        "2 " + favorites[1] + " - " + specifics[1] +"\n" +
        "3 " + favorites[2] + " - " + specifics[2] +"\n" +
        "4 " + favorites[3] + " - " + specifics[3] +"\n" +
        "4 " + favorites[4] + " - " + specifics[4];
}
