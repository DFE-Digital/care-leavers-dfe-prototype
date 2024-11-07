//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/entitlement-checker', function(request, response) {

    var entcheck = request.session.data['entcheck']
    if (entcheck == "15"){
        response.redirect("/v01/15-question")
    } else if (entcheck == "16") {  
        response.redirect("/v01/16-question");
    } else if (entcheck == "18") {  
        response.redirect("/v01/18-question");
    } else {
        response.redirect("/v01/25-question")
    }
})

router.post('/15-question', function(request, response) {

    var check = request.session.data['check']
    if (check == "incare"){
        response.redirect("/v01/15-incare")
    } else if (check == "custody") {  
        response.redirect("/v01/15-incare");
    } else if (check == "asylum") {  
        response.redirect("/v01/15-incare");
    } else {
        response.redirect("/v01/support-no-results")
    }
})

router.post('/15-incare', function(request, response) {

    var incare = request.session.data['incare']
    if (incare == "yes"){
        response.redirect("/v01/support-child-looked-after")
    } else {
        response.redirect("/v01/support-previously-looked-after-child")
    }
})

// 16-17

router.post('/16-question', function(request, response) {

    var checksixteen = request.session.data['checksixteen']
    if (checksixteen == "incare"){
        response.redirect("/v01/16-incare")
    } else if (checksixteen == "custody") {  
        response.redirect("/v01/16-incare");
    } else if (checksixteen == "asylum") {  
        response.redirect("/v01/16-incare");
    } else {
        response.redirect("/v01/support-no-results")
    }
})

router.post('/16-incare', function(request, response) {

    var incarebirthday = request.session.data['incarebirthday']
    if (incarebirthday == "yes"){
        response.redirect("/v01/16-incare-weeks")
    } else {
        response.redirect("/v01/support-care-experienced")
    }
})

router.post('/16-incare-weeks', function(request, response) {

    var incareweeks = request.session.data['incareweeks']
    if (incareweeks == "yes"){
        response.redirect("/v01/16-incare-currently")
    } else {
        response.redirect("/v01/support-qualifying-child")
    }
})

router.post('/16-incare-currently', function(request, response) {

    var incarecurrently = request.session.data['incarecurrently']
    if (incarecurrently == "yes"){
        response.redirect("/v01/support-eligible-child")
    } else {
        response.redirect("/v01/support-relevant-child")
    }
})

// 18-24

router.post('/18-question', function(request, response) {

    var checkeighteen = request.session.data['checkeighteen']
    if (checkeighteen == "incare"){
        response.redirect("/v01/18-incare")
    } else if (checkeighteen == "custody") {  
        response.redirect("/v01/18-incare");
    } else if (checkeighteen == "asylum") {  
        response.redirect("/v01/18-incare");
    } else {
        response.redirect("/v01/support-no-results")
    }
})

router.post('/18-incare', function(request, response) {

    var incareonbirthday = request.session.data['incareonbirthday']
    if (incareonbirthday == "yes"){
        response.redirect("/v01/18-incare-weeks")
    } else {
        response.redirect("/v01/support-care-experienced")
    }
})

router.post('/18-incare-weeks', function(request, response) {

    var incareforweeks = request.session.data['incareforweeks']
    if (incareforweeks == "yes"){
        response.redirect("/v01/support-former-relevant-child")
    } else {
        response.redirect("/v01/support-qualifying-care-leaver")
    }
})

// 25

router.post('/25-question', function(request, response) {

    var checktwentyfive = request.session.data['checktwentyfive']
    if (checktwentyfive == "incare"){
        response.redirect("/v01/support-care-experienced")
    } else if (checktwentyfive == "custody") {  
        response.redirect("/v01/support-care-experienced");
    } else if (checktwentyfive == "asylum") {  
        response.redirect("/v01/support-care-experienced");
    } else {
        response.redirect("/v01/support-no-results")
    }
})

// VERSION 2

router.post('/v02entitlement-checker', function(request, response) {

    var entcheck = request.session.data['entcheck']
    if (entcheck == "15"){
        response.redirect("/v02/15-question")
    } else if (entcheck == "16") {  
        response.redirect("/v02/16-question");
    } else if (entcheck == "18") {  
        response.redirect("/v02/18-question");
    } else if (entcheck == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/25-question")
    }
})

router.post('/v0215-question', function(request, response) {

    var check = request.session.data['check']
    if (check == "incare"){
        response.redirect("/v02/15-incare")
    } else if (check == "custody") {  
        response.redirect("/v02/15-incare");
    } else if (check == "asylum") {  
        response.redirect("/v02/15-incare");
    } else if (check == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-no-results")
    }
})

router.post('/v0215-incare', function(request, response) {

    var incare = request.session.data['incare']
    if (incare == "yes"){
        response.redirect("/v02/support-child-looked-after")
    } else if (incare == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-previously-looked-after-child")
    }
})

// 16-17

router.post('/v0216-question', function(request, response) {

    var checksixteen = request.session.data['checksixteen']
    if (checksixteen == "incare"){
        response.redirect("/v02/16-incare")
    } else if (checksixteen == "custody") {  
        response.redirect("/v02/16-incare");
    } else if (checksixteen == "asylum") {  
        response.redirect("/v02/16-incare");
    } else if (checksixteen == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-no-results")
    }
})

router.post('/v0216-incare', function(request, response) {

    var incarebirthday = request.session.data['incarebirthday']
    if (incarebirthday == "yes"){
        response.redirect("/v02/16-incare-weeks")
    } else if (incarebirthday == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-care-experienced")
    }
})

router.post('/v0216-incare-weeks', function(request, response) {

    var incareweeks = request.session.data['incareweeks']
    if (incareweeks == "yes"){
        response.redirect("/v02/16-incare-currently")
    } else if (incareweeks == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-qualifying-child")
    }
})

router.post('/v0216-incare-currently', function(request, response) {

    var incarecurrently = request.session.data['incarecurrently']
    if (incarecurrently == "yes"){
        response.redirect("/v02/support-eligible-child")
    } else if (incarecurrently == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-relevant-child")
    }
})

// 18-24

router.post('/v0218-question', function(request, response) {

    var checkeighteen = request.session.data['checkeighteen']
    if (checkeighteen == "incare"){
        response.redirect("/v02/18-incare")
    } else if (checkeighteen == "custody") {  
        response.redirect("/v02/18-incare");
    } else if (checkeighteen == "asylum") {  
        response.redirect("/v02/18-incare");
    } else if (checkeighteen == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-no-results")
    }
})

router.post('/v0218-incare', function(request, response) {

    var incareonbirthday = request.session.data['incareonbirthday']
    if (incareonbirthday == "yes"){
        response.redirect("/v02/18-incare-weeks")
    } else if (incareonbirthday == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-care-experienced")
    }
})

router.post('/v0218-incare-weeks', function(request, response) {

    var incareforweeks = request.session.data['incareforweeks']
    if (incareforweeks == "yes"){
        response.redirect("/v02/support-former-relevant-child")
    } else if (incareforweeks == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    }else {
        response.redirect("/v02/support-qualifying-care-leaver")
    }
})

// 25

router.post('/v0225-question', function(request, response) {

    var checktwentyfive = request.session.data['checktwentyfive']
    if (checktwentyfive == "incare"){
        response.redirect("/v02/support-care-experienced")
    } else if (checktwentyfive == "custody") {  
        response.redirect("/v02/support-care-experienced");
    } else if (checktwentyfive == "asylum") {  
        response.redirect("/v02/support-care-experienced");
    } else if (checktwentyfive == "dont-know") {  
        response.redirect("/v02/support-dont-know");
    } else {
        response.redirect("/v02/support-no-results")
    }
})

//VERSION 02b

// Route for the form submission
router.post('/v02bent-checker', function(request, response) {
  const status = request.session.data['status'];

  if (status === "british-citizen") {
    response.redirect("/v02b/entitlement-checker-age");
  } else if (status === "with-family") {
    response.redirect("/v02b/25-uasc");
  } else if (status === "seek-asylum") {
    response.redirect("/v02b/status-uasc");
  } else {
    // Optional: handle any unexpected input (e.g., redirect to an error page)
    response.redirect("/v02b/error");
  }
});

router.post('/your-next-route', function(request, response) {
  const age = request.session.data['age'];

  if (age === "25-and-under") {
    response.redirect("/status-uasc");
  } else if (age === "over-26") {
    response.redirect("/support-dont-know");
  } else if (age === "dont-know") {
    response.redirect("/support-dont-know");
  }
});

router.post('/v02bentitlement-checker', function(request, response) {

    var entcheck = request.session.data['entcheck']
    if (entcheck == "15"){
        response.redirect("/v02b/15-question")
    } else if (entcheck == "16") {  
        response.redirect("/v02b/16-question");
    } else if (entcheck == "18") {  
        response.redirect("/v02b/18-question");
    } else if (entcheck == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/25-question")
    }
})

router.post('/v02b15-question', function(request, response) {

    var check = request.session.data['check']
    if (check == "incare"){
        response.redirect("/v02b/15-incare")
    } else if (check == "custody") {  
        response.redirect("/v02b/15-incare");
    } else if (check == "asylum") {  
        response.redirect("/v02b/15-incare");
    } else if (check == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-no-results")
    }
})

router.post('/v02b15-incare', function(request, response) {

    var incare = request.session.data['incare']
    if (incare == "yes"){
        response.redirect("/v02b/support-child-looked-after")
    } else if (incare == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-previously-looked-after-child")
    }
})

// 16-17

router.post('/v02b16-question', function(request, response) {

    var checksixteen = request.session.data['checksixteen']
    if (checksixteen == "incare"){
        response.redirect("/v02b/16-incare")
    } else if (checksixteen == "custody") {  
        response.redirect("/v02b/16-incare");
    } else if (checksixteen == "asylum") {  
        response.redirect("/v02b/16-incare");
    } else if (checksixteen == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-no-results")
    }
})

router.post('/v02b16-incare', function(request, response) {

    var incarebirthday = request.session.data['incarebirthday']
    if (incarebirthday == "yes"){
        response.redirect("/v02b/16-incare-weeks")
    } else if (incarebirthday == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-care-experienced")
    }
})

router.post('/v02b16-incare-weeks', function(request, response) {

    var incareweeks = request.session.data['incareweeks']
    if (incareweeks == "yes"){
        response.redirect("/v02b/16-incare-currently")
    } else if (incareweeks == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-qualifying-child")
    }
})

router.post('/v02b16-incare-currently', function(request, response) {

    var incarecurrently = request.session.data['incarecurrently']
    if (incarecurrently == "yes"){
        response.redirect("/v02b/support-eligible-child")
    } else if (incarecurrently == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-relevant-child")
    }
})

// 18-24

router.post('/v02b18-question', function(request, response) {

    var checkeighteen = request.session.data['checkeighteen']
    if (checkeighteen == "incare"){
        response.redirect("/v02b/18-incare")
    } else if (checkeighteen == "custody") {  
        response.redirect("/v02b/18-incare");
    } else if (checkeighteen == "asylum") {  
        response.redirect("/v02b/18-incare");
    } else if (checkeighteen == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-no-results")
    }
})

router.post('/v02b18-incare', function(request, response) {

    var incareonbirthday = request.session.data['incareonbirthday']
    if (incareonbirthday == "yes"){
        response.redirect("/v02b/18-incare-weeks")
    } else if (incareonbirthday == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-care-experienced")
    }
})

router.post('/v02b18-incare-weeks', function(request, response) {

    var incareforweeks = request.session.data['incareforweeks']
    if (incareforweeks == "yes"){
        response.redirect("/v02b/support-former-relevant-child")
    } else if (incareforweeks == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    }else {
        response.redirect("/v02b/support-qualifying-care-leaver")
    }
})

// 25

router.post('/v02b25-question', function(request, response) {

    var checktwentyfive = request.session.data['checktwentyfive']
    if (checktwentyfive == "incare"){
        response.redirect("/v02b/support-care-experienced")
    } else if (checktwentyfive == "custody") {  
        response.redirect("/v02b/support-care-experienced");
    } else if (checktwentyfive == "asylum") {  
        response.redirect("/v02b/support-care-experienced");
    } else if (checktwentyfive == "dont-know") {  
        response.redirect("/v02b/support-dont-know");
    } else {
        response.redirect("/v02b/support-no-results")
    }
})

