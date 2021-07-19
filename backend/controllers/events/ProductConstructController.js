const mongoose = require("mongoose");
const express = require("express");

const eventsModel = require("../../models/events.model");
const usersModel = require("../../models/users.model");
const participantsModel = require("../../models/participants.model");

const logger = require("../../utils/LoggerUtils");
const { process500, process400, processData } = require("../../utils/ResponseUtils");
const verifyRequest = require("../../utils/VerifyRequest");
const { S3SignedPolicy } = require("../../utils/S3ClientUploader");

const ESUMMIT_SECRET =
	"  ";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const productConstructSubmit = async (req, res) => {
	console.log(req.body.url);
	const { round } = req.params;
	const { _id: leaderUserID } = verifyRequest(req, "ESUMMIT_IITM_AUTH_TOKEN", ESUMMIT_SECRET);
	const { _id: productConstructID } = await eventsModel.findOne({ name: "product-construct" });

	try {
		await participantsModel
			.updateOne(
				{ userID: leaderUserID, eventID: productConstructID },
				{
					$addToSet: {
						submissions: {
							round: 1,
							submissionType: "url",
							name: "caseStudy",
							submission: req.body.url,
							timestamp: Date.now(),
						},
					},
				}
			)
			.exec();

		console.log({
			round: 1,
			submissionType: "url",
			name: "pitchDeck",
			submission: req.body.url,
			timestamp: Date.now(),
		});
		processData(res, "Submitted successfully");
	} catch (e) {
		process500(e.message);
		console.log(e);
	}
	res.end();
};

// const productConstructChoiceSubmit = async (req, res) => {
// 	console.log(req.body);
// 	const { round } = req.params;
// 	const { _id: leaderUserID } = verifyRequest(req, "ESUMMIT_IITM_AUTH_TOKEN", ESUMMIT_SECRET);
// 	const { _id: productConstructID } = await eventsModel.findOne({ name: "productConstruct" });

// 	try {
// 		await participantsModel
// 			.updateOne(
// 				{ userID: leaderUserID, eventID: productConstructID },
// 				{
// 					$set: { "registrationDetails.caseStudy": req.body.caseStudy },
// 				}
// 			)
// 			.exec();

// 		processData(res, "Submitted successfully");
// 	} catch (e) {
// 		console.log(e, "e");
// 		process500(e.message);
// 	}
// 	res.end();
// };

const getS3SignedPolicy = async (req, res) => {
	try {
		const { _id: leaderUserID } = verifyRequest(req, "ESUMMIT_IITM_AUTH_TOKEN", ESUMMIT_SECRET);

		const signedPolicy = new S3SignedPolicy(req.params.bucketName);
		processData(res, signedPolicy);
	} catch (error) {
		process500(res, error.message);
	}
};

module.exports = { productConstructSubmit, getS3SignedPolicy };
