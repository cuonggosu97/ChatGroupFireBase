const API_KQSX = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fkqxs.net.vn%2Frss-feed%2Fxo-so-mien-bac-xsmb-xstd.rss'

async function getNewsFromServer(de, bacang, loto) {
    try {
        let response = await fetch(API_KQSX);
        let responseJson = await response.json();
        const so1 = responseJson.items[0].content.slice(7, 9);
        const so2 = responseJson.items[0].content.slice(16, 18);
        const so3 = responseJson.items[0].content.slice(25, 27);
        const so4 = responseJson.items[0].content.slice(33, 35);
        const so5 = responseJson.items[0].content.slice(42, 44);
        const so6 = responseJson.items[0].content.slice(50, 52);
        const so7 = responseJson.items[0].content.slice(58, 60);
        const so8 = responseJson.items[0].content.slice(66, 68);
        const so9 = responseJson.items[0].content.slice(74, 76);
        const so10 = responseJson.items[0].content.slice(82, 84);
        const so11 = responseJson.items[0].content.slice(90, 92);
        const so12 = responseJson.items[0].content.slice(97, 99);
        const so13 = responseJson.items[0].content.slice(104, 106);
        const so14 = responseJson.items[0].content.slice(111, 113);
        const so15 = responseJson.items[0].content.slice(119, 121);
        const so16 = responseJson.items[0].content.slice(126, 128);
        const so17 = responseJson.items[0].content.slice(133, 135);
        const so18 = responseJson.items[0].content.slice(140, 142);
        const so19 = responseJson.items[0].content.slice(147, 149);
        const so20 = responseJson.items[0].content.slice(154, 156);
        const so21 = responseJson.items[0].content.slice(161, 163);
        const so22 = responseJson.items[0].content.slice(167, 169);
        const so23 = responseJson.items[0].content.slice(173, 175);
        const so24 = responseJson.items[0].content.slice(179, 181);
        const so25 = responseJson.items[0].content.slice(184, 186);
        const so26 = responseJson.items[0].content.slice(189, 191);
        const so27 = responseJson.items[0].content.slice(194, 196);

        return (bacang = responseJson.items[0].content.slice(6, 9),
            de = responseJson.items[0].content.slice(7, 9),
            loto = [so1, so2, so3, so4, so5, so6, so7, so8, so9, so10,
                so11, so12, so13, so14, so15, so16, so17, so18, so19, so20,
                so21, so22, so23, so24, so25, so26, so27,])
    } catch (error) {
        alert(error)
    }
}

export { getNewsFromServer }

// const so1 = responseJson.items[0].content.slice(7, 9);
// const so2 = responseJson.items[0].content.slice(16, 18);
// const so3 = responseJson.items[0].content.slice(25, 27);
// const so4 = responseJson.items[0].content.slice(33, 35);
// const so5 = responseJson.items[0].content.slice(42, 44);
// const so6 = responseJson.items[0].content.slice(50, 52);
// const so7 = responseJson.items[0].content.slice(58, 60);
// const so8 = responseJson.items[0].content.slice(66, 68);
// const so9 = responseJson.items[0].content.slice(74, 76);
// const so10 = responseJson.items[0].content.slice(82, 84);
// const so11 = responseJson.items[0].content.slice(90, 92);
// const so12 = responseJson.items[0].content.slice(97, 99);
// const so13 = responseJson.items[0].content.slice(104, 106);
// const so14 = responseJson.items[0].content.slice(111, 113);
// const so15 = responseJson.items[0].content.slice(119, 121);
// const so16 = responseJson.items[0].content.slice(126, 128);
// const so17 = responseJson.items[0].content.slice(133, 135);
// const so18 = responseJson.items[0].content.slice(140, 142);
// const so19 = responseJson.items[0].content.slice(147, 149);
// const so20 = responseJson.items[0].content.slice(154, 156);
// const so21 = responseJson.items[0].content.slice(161, 163);
// const so22 = responseJson.items[0].content.slice(167, 169);
// const so23 = responseJson.items[0].content.slice(173, 175);
// const so24 = responseJson.items[0].content.slice(179, 181);
// const so25 = responseJson.items[0].content.slice(184, 186);
// const so26 = responseJson.items[0].content.slice(189, 191);
// const so27 = responseJson.items[0].content.slice(194, 196);

// export const bacang = responseJson.items[0].content.slice(6, 9);
// export const de = responseJson.items[0].content.slice(7, 9);
// export const loto = [so1, so2, so3, so4, so5, so6, so7, so8, so9, so10,
//     so11, so12, so13, so14, so15, so16, so17, so18, so19, so20,
//     so21, so22, so23, so24, so25, so26, so27,]

