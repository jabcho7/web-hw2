// ===== Part A =====

let sumA = 0;

for (let i = 0; i < partA.length; i++) {
    sumA += partA[i].ratings;
}

console.log("A1 평균 평점:", sumA / partA.length);

let maxA = 0;

for (let i = 1; i < partA.length; i++) {
    if (partA[i].ratings > partA[maxA].ratings) {
        maxA = i;
    }
}

console.log(
    "A2 최고 평점:",
    partA[maxA].title,
    partA[maxA].ratings
);

let countA = 0;

for (let i = 0; i < partA.length; i++) {
    if (partA[i].ratings >= 8) {
        countA++;
    }
}

console.log("A3 8점 이상:", countA + "편");

let count2020A = 0;
let count2010A = 0;
let count2000A = 0;
let countOldA = 0;

for (let i = 0; i < partA.length; i++) {
    const decade = partA[i].year - (partA[i].year % 10);

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

for (let i = 0; i < partA.length; i++) {
    const audience = Number(
        String(partA[i].audiences).replace(/,/g, "")
    );

    if (audience >= 1000000) {
        if (bigA !== "") {
            bigA += ", ";
        }

        bigA += partA[i].title;
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
        sum += list[i].ratings;
    }

    return sum / list.length;
}

function best(list) {
    let max = list[0];

    for (let i = 1; i < list.length; i++) {
        if (list[i].ratings > max.ratings) {
            max = list[i];
        }
    }

    return max;
}

function filterByRating(list, min) {
    return list.filter(item => item.ratings >= min);
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
    return list.reduce(
        (sum, item) => sum + item[key],
        0
    ) / list.length;
}

console.log(
    "C1",
    TMDB.page,
    TMDB.total_pages,
    TMDB.total_results,
    getList(TMDB).length
);

console.log(
    "C2",
    averageBy(getList(TMDB), "vote_average").toFixed(1)
);

console.log(
    "C3",
    sortBy(getList(TMDB), "vote_average", true)
        .slice(0, 5)
        .map(({ title, release_date, vote_average }) => [
            title,
            release_date,
            vote_average
        ])
);

console.log(
    "C4",
    search(getList(TMDB), "검색어").length
);
