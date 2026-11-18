// ===== Part A =====

const titles = ["극장판 치이카와: 인어섬의 비밀", "암살자(들)", "실낙원", "타짜: 벨제붑의 노래", "클레이페이스"];
const ratings = [7.6, 7.5, 5.5, 7.2, 8.0];
const years = [2026, 2026, 2026, 2026, 2026];
const audiences = [153018, 1766836, 159775, 1015853, 125766];


let sumA = 0;

for (let i = 0; i < ratings.length; i++) {
    sumA += ratings[i];
}

const averageA = sumA / ratings.length;
console.log("A1 평균 평점:", averageA);

let maxA = 0;

for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[maxA]) {
        maxA = i;
    }
}

console.log(
    "A2 최고 평점:",
    titles[maxA],
    ratings[maxA]
);

let countA = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) {
        countA++;
    }
}

console.log("A3 8점 이상:", countA + "편");

let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countOldA = 0;

for (let i = 0; i < years.length; i++) {
    const decade = years[i] - (years[i] % 10);

    switch (decade) {
        case 2020:
            count2020A++;
            break;

        case 2010:
            count2010A++;
            break;

        case 2000:
            count2000A++;
            break;

        default:
            countOldA++;
    }
}

console.log(
    "A4 2020년대",
    count2020A + "편,",
    "2010년대",
    count2010A + "편,",
    "2000년대",
    count2000A + "편,",
    "그 이전",
    countOldA + "편"
);

let bigA = "";

for (let i = 0; i < audiences.length; i++) {
    if (audiences[i] >= 100) {
        if (bigA !== "") {
            bigA += ", ";
        }
        bigA += titles[i];
    }
}

if (bigA === "") {
    bigA = "없음";
}

console.log("A5 관객 100만 이상:", bigA);



// ===== Part B =====
function average(list) {
    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }

    return sum / list.length;
}

function best(list) {
    let max = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }

    return max;
}

function filterByRating(list, min) {
    return list.filter(item => item.rating >= min);
}

function sortBy(list, key, desc = false) {
    return [...list].sort((a, b) => {
        if (typeof a[key] === "string") {
            return desc
                ? b[key].localeCompare(a[key])
                : a[key].localeCompare(b[key]);
        }

        return desc
            ? b[key] - a[key]
            : a[key] - b[key];
    });
}

function search(list, keyword) {
    return list.filter(item =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
    );
}

function formatNumber(num) {
    return num.toLocaleString("ko-KR");
}

function yearsSince(dateStr) {
    return new Date().getFullYear() - new Date(dateStr).getFullYear();
}


// ===== Part C =====

function getList(data) {
    return data.results;
}

function averageBy(list, key) {
    return list.reduce((sum, item) => sum + item[key], 0) / list.length;
}

console.log("C1", TMDB.page, TMDB.total_pages, TMDB.total_results, getList(TMDB).length);

console.log("C2", averageBy(getList(TMDB), "vote_average").toFixed(1));

console.log("C3", sortBy(getList(TMDB), "vote_average", true)
    .slice(0, 5)
    .map(({title, release_date, vote_average}) =>
        [title, release_date, vote_average]
    ));

console.log("C4", search(getList(TMDB), "검색어").length);
