// search_food
const searchFood = ()=>{
    const searchFeld = document.getElementById('search_feld')
    const searchValue = searchFeld.value 
    // console.log(searchValue)
    searchFeld.value="";
        const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        // console.log(url) 
        fetch(url)
        .then (Response => Response.json())
        .then (data => displaySearch(data.meals))
}
const displaySearch = meals =>{
    console.log(meals)
    const searchResult = document.getElementById('search_result')
    meals.forEach(meal =>{
        const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
            <div class="card" onclick="loadMealId(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
    `
    searchResult.appendChild(div)

    })
}
const loadMealId=  mealId =>{
    // console.log(mealId)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(url)
    fetch(url)
    .then(Response => Response.json())
    .then (data =>displayMealDetail(data.meals[0]))
} 
const displayMealDetail = meal =>{
    const mealresult = document.getElementById('mealResult')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
            <img src="${meal.strMealThumb}" class="w-50 card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            <a href="${meal.strYoutube}" class="btn btn-success"> Go some where </a>
        </div>
    `;
    mealresult.appendChild(div)
}