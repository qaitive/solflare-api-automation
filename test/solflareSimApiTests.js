import { expect } from 'chai';
import SimApiService from "../support/simAPIService";
import{alertData, noAlertData, failedResponse400, constants}  from '../testdata/testData.js'

describe('Sim API service tests ', () => {

    it('Request with alert', (done) => {
        SimApiService.postRequest(alertData)
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.data.action).to.equal(constants.action) //verify response.data.action field
                expect(response.data.alerts[0].message).to.equal(constants.message) //verify alert message
                return done()
            })
            .catch(err => done(err))
    })

    it('Request with no alert', (done) => {
        SimApiService.postRequest(noAlertData)
            .then(response => {
                expect(response.status).to.equal(200)// check status
                expect(response.data.action).to.equal(constants.noAlertAction) //verify response.data.action field
                expect(response.data.alerts).to.be.empty // verify empty alert
                return done()
            })
            .catch(err => done(err))
    })

    it('Failed response (HTTP status code 400)', (done) => {
        SimApiService.postRequest(failedResponse400)
            .then(response => {
                return done()
            })
            .catch(err => {
                // Assert that the error is a 400 Bad Request error
                expect(err.response.status).to.equal(400);
                done();
            });
    })

    it('Test case with expected result that deliberately fails', (done) => {
        SimApiService.postRequest(alertData)
            .then(response => {
                //Test should fail since field action has value 'block'
                expect(response.data.action).to.be.empty
                return done()
            })
            .catch(err => done(err))
    })


})