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
        response.redirect("/v01/support-former-relevant-child");
    } else if (check == "asylum") {  
        response.redirect("/v01/support-former-relevant-child");
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
        response.redirect("/v01/support-former-relevant-child");
    } else if (checksixteen == "asylum") {  
        response.redirect("/v01/support-former-relevant-child");
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
    } else if (checksixteen == "custody") {  
        response.redirect("/v01/support-former-relevant-child");
    } else if (checksixteen == "asylum") {  
        response.redirect("/v01/support-former-relevant-child");
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
        response.redirect("/v01/support-former-relevant-child");
    } else if (checktwentyfive == "asylum") {  
        response.redirect("/v01/support-former-relevant-child");
    } else {
        response.redirect("/v01/support-no-results")
    }
})
