
reviewCount = $('.review-shop-item').length;
$('.rating-count-txt.count.shop').text(reviewCount)
$('.rating-count-txt.count.shop.header').text(reviewCount + " reviews");

var sum = 0;
var count = 0;
$('.review-shop-item').each(function() {
    var rating = $(this).find('.rating-shop-txt').text();
    rating = parseInt(rating);
    if (isNaN(rating)) {
        return true;
    }
    count++;
    sum += rating;
});
var stars = {
    empty: 'https://global-uploads.webflow.com/5cffd68e4c90e2c20be02014/5d922c4e72a61a57208d2098_Star_unactive.svg',
    half: 'https://uploads-ssl.webflow.com/5cffd68e4c90e2c20be02014/5df253940060bf80d899412c_half%20star.svg',
    full: 'https://global-uploads.webflow.com/5cffd68e4c90e2c20be02014/5d922c4e72a61a04fc8d2097_Star_active.svg',
};

var headerStars = {
    empty: 'https://uploads-ssl.webflow.com/5cffd68e4c90e2c20be02014/5df28192f3b0883c6d8b5d2b_head-Star_unactive.svg',
    half: 'https://uploads-ssl.webflow.com/5cffd68e4c90e2c20be02014/5df2819137d24d607dcb4470_head-half-star.svg',
    full: 'https://uploads-ssl.webflow.com/5cffd68e4c90e2c20be02014/5df281919bca42a0e6204a26_head-Star_active.svg',
};

var mobiStars = {
    empty: 'https://global-uploads.webflow.com/5cffd68e4c90e2c20be02014/5d922c4e72a61a57208d2098_Star_unactive.svg',
    half: 'https://uploads-ssl.webflow.com/5cffd68e4c90e2c20be02014/5df253940060bf80d899412c_half%20star.svg',
    full: 'https://global-uploads.webflow.com/5cffd68e4c90e2c20be02014/5d922c4e72a61a04fc8d2097_Star_active.svg',
};

var avg = sum / count;
var decimal = avg - Math.floor(avg);
var data = {};
var headerData = {};
var mobiData = {};

for (var i = 1; i <= 5; i++) {
    if (i <= avg) {
        data[i] = stars.full;
				headerData[i] = headerStars.full;
        mobiData[i] = mobiStars.full;
    } else if (i > Math.ceil(avg)) {
        data[i] = stars.empty;
				headerData[i] = headerStars.empty;
        mobiData[i] = mobiStars.empty;
    } else if (decimal <= 0.3) {
        data[i] = stars.empty;
				headerData[i] = headerStars.empty;
        mobiData[i] = mobiStars.empty;
    } else if(decimal >= 0.7) {
        data[i] = stars.full;
				headerData[i] = headerStars.full;
        mobiData[i] = mobiStars.full;
    } else {
        data[i] = stars.half;
				headerData[i] = headerStars.half;
        mobiData[i] = mobiStars.half;
    }
}
$('#shop-rating img').each(function (key)
{$(this).attr('src', data[key + 1]);});
$('#header-shop-rating img').each(function (key)
{$(this).attr('src', headerData[key + 1]);});
$('#shop-rating-mobile img').each(function (key)
{$(this).attr('src', mobiData[key + 1]);});
