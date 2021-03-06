'use strict';

// NOTE: Do not edit this file. This code is auto-generated. Contact the
// Twilio SDK Team for more information.

const TwilioError = require('./twilioerror');
const TwilioErrorByCode = {};

/**
 * Create a {@link TwilioError} for a given code and message.
 * @private
 * @param {number} [code] - Error code
 * @param {string} [message] - Error message
 * @returns {TwilioError}
 */
exports.createTwilioError = function createTwilioError(code, message) {
  code = typeof code === 'number' ? code : 0;
  message = typeof message === 'string' && message ? message : 'Unknown error';
  return TwilioErrorByCode[code] ? new TwilioErrorByCode[code]() : new TwilioError(code, message);
};

/**
 * @class AccessTokenInvalidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room is invalid.
 * @extends TwilioError
 * @property {number} code - 20101
 * @property {string} message - 'Invalid Access Token'
 */
class AccessTokenInvalidError extends TwilioError {
  constructor() {
    super(20101, 'Invalid Access Token');
  }
}

exports.AccessTokenInvalidError = AccessTokenInvalidError;
Object.defineProperty(TwilioErrorByCode, 20101, { value: AccessTokenInvalidError });

/**
 * @class AccessTokenHeaderInvalidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room has an invalid header.
 * @extends TwilioError
 * @property {number} code - 20102
 * @property {string} message - 'Invalid Access Token header'
 */
class AccessTokenHeaderInvalidError extends TwilioError {
  constructor() {
    super(20102, 'Invalid Access Token header');
  }
}

exports.AccessTokenHeaderInvalidError = AccessTokenHeaderInvalidError;
Object.defineProperty(TwilioErrorByCode, 20102, { value: AccessTokenHeaderInvalidError });

/**
 * @class AccessTokenIssuerInvalidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room contains an invalid issuer or subject.
 * @extends TwilioError
 * @property {number} code - 20103
 * @property {string} message - 'Invalid Access Token issuer/subject'
 */
class AccessTokenIssuerInvalidError extends TwilioError {
  constructor() {
    super(20103, 'Invalid Access Token issuer/subject');
  }
}

exports.AccessTokenIssuerInvalidError = AccessTokenIssuerInvalidError;
Object.defineProperty(TwilioErrorByCode, 20103, { value: AccessTokenIssuerInvalidError });

/**
 * @class AccessTokenExpiredError
 * @classdesc Raised whenever the AccessToken used for connecting to Room has expired.
 * @extends TwilioError
 * @property {number} code - 20104
 * @property {string} message - 'Access Token expired or expiration date invalid'
 */
class AccessTokenExpiredError extends TwilioError {
  constructor() {
    super(20104, 'Access Token expired or expiration date invalid');
  }
}

exports.AccessTokenExpiredError = AccessTokenExpiredError;
Object.defineProperty(TwilioErrorByCode, 20104, { value: AccessTokenExpiredError });

/**
 * @class AccessTokenNotYetValidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room is not yet valid.
 * @extends TwilioError
 * @property {number} code - 20105
 * @property {string} message - 'Access Token not yet valid'
 */
class AccessTokenNotYetValidError extends TwilioError {
  constructor() {
    super(20105, 'Access Token not yet valid');
  }
}

exports.AccessTokenNotYetValidError = AccessTokenNotYetValidError;
Object.defineProperty(TwilioErrorByCode, 20105, { value: AccessTokenNotYetValidError });

/**
 * @class AccessTokenGrantsInvalidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room has invalid grants.
 * @extends TwilioError
 * @property {number} code - 20106
 * @property {string} message - 'Invalid Access Token grants'
 */
class AccessTokenGrantsInvalidError extends TwilioError {
  constructor() {
    super(20106, 'Invalid Access Token grants');
  }
}

exports.AccessTokenGrantsInvalidError = AccessTokenGrantsInvalidError;
Object.defineProperty(TwilioErrorByCode, 20106, { value: AccessTokenGrantsInvalidError });

/**
 * @class AccessTokenSignatureInvalidError
 * @classdesc Raised whenever the AccessToken used for connecting to Room has an invalid signature.
 * @extends TwilioError
 * @property {number} code - 20107
 * @property {string} message - 'Invalid Access Token signature'
 */
class AccessTokenSignatureInvalidError extends TwilioError {
  constructor() {
    super(20107, 'Invalid Access Token signature');
  }
}

exports.AccessTokenSignatureInvalidError = AccessTokenSignatureInvalidError;
Object.defineProperty(TwilioErrorByCode, 20107, { value: AccessTokenSignatureInvalidError });

/**
 * @class SignalingConnectionError
 * @classdesc Raised whenever a signaling connection error occurs that is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53000
 * @property {string} message - 'Signaling connection error'
 */
class SignalingConnectionError extends TwilioError {
  constructor() {
    super(53000, 'Signaling connection error');
  }
}

exports.SignalingConnectionError = SignalingConnectionError;
Object.defineProperty(TwilioErrorByCode, 53000, { value: SignalingConnectionError });

/**
 * @class SignalingConnectionDisconnectedError
 * @classdesc Raised whenever the signaling connection is unexpectedly disconnected.
 * @extends TwilioError
 * @property {number} code - 53001
 * @property {string} message - 'Signaling connection disconnected'
 */
class SignalingConnectionDisconnectedError extends TwilioError {
  constructor() {
    super(53001, 'Signaling connection disconnected');
  }
}

exports.SignalingConnectionDisconnectedError = SignalingConnectionDisconnectedError;
Object.defineProperty(TwilioErrorByCode, 53001, { value: SignalingConnectionDisconnectedError });

/**
 * @class SignalingConnectionTimeoutError
 * @classdesc Raised whenever the signaling connection times out.
 * @extends TwilioError
 * @property {number} code - 53002
 * @property {string} message - 'Signaling connection timed out'
 */
class SignalingConnectionTimeoutError extends TwilioError {
  constructor() {
    super(53002, 'Signaling connection timed out');
  }
}

exports.SignalingConnectionTimeoutError = SignalingConnectionTimeoutError;
Object.defineProperty(TwilioErrorByCode, 53002, { value: SignalingConnectionTimeoutError });

/**
 * @class SignalingIncomingMessageInvalidError
 * @classdesc Raised whenever the Client receives a message from the Server that the Client cannot handle.
 * @extends TwilioError
 * @property {number} code - 53003
 * @property {string} message - 'Client received an invalid signaling message'
 */
class SignalingIncomingMessageInvalidError extends TwilioError {
  constructor() {
    super(53003, 'Client received an invalid signaling message');
  }
}

exports.SignalingIncomingMessageInvalidError = SignalingIncomingMessageInvalidError;
Object.defineProperty(TwilioErrorByCode, 53003, { value: SignalingIncomingMessageInvalidError });

/**
 * @class SignalingOutgoingMessageInvalidError
 * @classdesc Raised whenever the Client sends a message to the Server that the Server cannot handle.
 * @extends TwilioError
 * @property {number} code - 53004
 * @property {string} message - 'Client sent an invalid signaling message'
 */
class SignalingOutgoingMessageInvalidError extends TwilioError {
  constructor() {
    super(53004, 'Client sent an invalid signaling message');
  }
}

exports.SignalingOutgoingMessageInvalidError = SignalingOutgoingMessageInvalidError;
Object.defineProperty(TwilioErrorByCode, 53004, { value: SignalingOutgoingMessageInvalidError });

/**
 * @class RoomNameInvalidError
 * @classdesc Raised whenever a Room name is invalid, and the scenario is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53100
 * @property {string} message - 'Room name is invalid'
 */
class RoomNameInvalidError extends TwilioError {
  constructor() {
    super(53100, 'Room name is invalid');
  }
}

exports.RoomNameInvalidError = RoomNameInvalidError;
Object.defineProperty(TwilioErrorByCode, 53100, { value: RoomNameInvalidError });

/**
 * @class RoomNameTooLongError
 * @classdesc Raised whenever a Room name is too long.
 * @extends TwilioError
 * @property {number} code - 53101
 * @property {string} message - 'Room name is too long'
 */
class RoomNameTooLongError extends TwilioError {
  constructor() {
    super(53101, 'Room name is too long');
  }
}

exports.RoomNameTooLongError = RoomNameTooLongError;
Object.defineProperty(TwilioErrorByCode, 53101, { value: RoomNameTooLongError });

/**
 * @class RoomNameCharsInvalidError
 * @classdesc Raised whenever a Room name contains invalid characters.
 * @extends TwilioError
 * @property {number} code - 53102
 * @property {string} message - 'Room name contains invalid characters'
 */
class RoomNameCharsInvalidError extends TwilioError {
  constructor() {
    super(53102, 'Room name contains invalid characters');
  }
}

exports.RoomNameCharsInvalidError = RoomNameCharsInvalidError;
Object.defineProperty(TwilioErrorByCode, 53102, { value: RoomNameCharsInvalidError });

/**
 * @class RoomCreateFailedError
 * @classdesc Raised whenever the Server is unable to create a Room.
 * @extends TwilioError
 * @property {number} code - 53103
 * @property {string} message - 'Unable to create Room'
 */
class RoomCreateFailedError extends TwilioError {
  constructor() {
    super(53103, 'Unable to create Room');
  }
}

exports.RoomCreateFailedError = RoomCreateFailedError;
Object.defineProperty(TwilioErrorByCode, 53103, { value: RoomCreateFailedError });

/**
 * @class RoomConnectFailedError
 * @classdesc Raised whenever a Client is unable to connect to a Room, and the scenario is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53104
 * @property {string} message - 'Unable to connect to Room'
 */
class RoomConnectFailedError extends TwilioError {
  constructor() {
    super(53104, 'Unable to connect to Room');
  }
}

exports.RoomConnectFailedError = RoomConnectFailedError;
Object.defineProperty(TwilioErrorByCode, 53104, { value: RoomConnectFailedError });

/**
 * @class RoomMaxParticipantsExceededError
 * @classdesc Raised whenever a Client is unable to connect to a Room because the Room contains too many Participants.
 * @extends TwilioError
 * @property {number} code - 53105
 * @property {string} message - 'Room contains too many Participants'
 */
class RoomMaxParticipantsExceededError extends TwilioError {
  constructor() {
    super(53105, 'Room contains too many Participants');
  }
}

exports.RoomMaxParticipantsExceededError = RoomMaxParticipantsExceededError;
Object.defineProperty(TwilioErrorByCode, 53105, { value: RoomMaxParticipantsExceededError });

/**
 * @class RoomNotFoundError
 * @classdesc Raised whenever attempting operation on a non-existent Room.
 * @extends TwilioError
 * @property {number} code - 53106
 * @property {string} message - 'Room not found'
 */
class RoomNotFoundError extends TwilioError {
  constructor() {
    super(53106, 'Room not found');
  }
}

exports.RoomNotFoundError = RoomNotFoundError;
Object.defineProperty(TwilioErrorByCode, 53106, { value: RoomNotFoundError });

/**
 * @class RoomMaxParticipantsOutOfRangeError
 * @classdesc Raised in the REST API when MaxParticipants is set out of range.
 * @extends TwilioError
 * @property {number} code - 53107
 * @property {string} message - 'MaxParticipants is out of range'
 */
class RoomMaxParticipantsOutOfRangeError extends TwilioError {
  constructor() {
    super(53107, 'MaxParticipants is out of range');
  }
}

exports.RoomMaxParticipantsOutOfRangeError = RoomMaxParticipantsOutOfRangeError;
Object.defineProperty(TwilioErrorByCode, 53107, { value: RoomMaxParticipantsOutOfRangeError });

/**
 * @class RoomTypeInvalidError
 * @classdesc Raised in the REST API when the user attempts to create a Room with an invalid RoomType
 * @extends TwilioError
 * @property {number} code - 53108
 * @property {string} message - 'RoomType is not valid'
 */
class RoomTypeInvalidError extends TwilioError {
  constructor() {
    super(53108, 'RoomType is not valid');
  }
}

exports.RoomTypeInvalidError = RoomTypeInvalidError;
Object.defineProperty(TwilioErrorByCode, 53108, { value: RoomTypeInvalidError });

/**
 * @class RoomTimeoutOutOfRangeError
 * @classdesc Raised in the REST API when Timeout is set out of range.
 * @extends TwilioError
 * @property {number} code - 53109
 * @property {string} message - 'Timeout is out of range'
 */
class RoomTimeoutOutOfRangeError extends TwilioError {
  constructor() {
    super(53109, 'Timeout is out of range');
  }
}

exports.RoomTimeoutOutOfRangeError = RoomTimeoutOutOfRangeError;
Object.defineProperty(TwilioErrorByCode, 53109, { value: RoomTimeoutOutOfRangeError });

/**
 * @class RoomStatusCallbackMethodInvalidError
 * @classdesc Raised in the REST API when StatusCallbackMethod is set to an invalid value.
 * @extends TwilioError
 * @property {number} code - 53110
 * @property {string} message - 'StatusCallbackMethod is invalid'
 */
class RoomStatusCallbackMethodInvalidError extends TwilioError {
  constructor() {
    super(53110, 'StatusCallbackMethod is invalid');
  }
}

exports.RoomStatusCallbackMethodInvalidError = RoomStatusCallbackMethodInvalidError;
Object.defineProperty(TwilioErrorByCode, 53110, { value: RoomStatusCallbackMethodInvalidError });

/**
 * @class RoomStatusCallbackInvalidError
 * @classdesc Raised in the REST API when StatusCallback is not a valid URL or the url is too long.
 * @extends TwilioError
 * @property {number} code - 53111
 * @property {string} message - 'StatusCallback is invalid'
 */
class RoomStatusCallbackInvalidError extends TwilioError {
  constructor() {
    super(53111, 'StatusCallback is invalid');
  }
}

exports.RoomStatusCallbackInvalidError = RoomStatusCallbackInvalidError;
Object.defineProperty(TwilioErrorByCode, 53111, { value: RoomStatusCallbackInvalidError });

/**
 * @class RoomStatusInvalidError
 * @classdesc Raised in the REST API when Status is not valid or the Room is not in-progress.
 * @extends TwilioError
 * @property {number} code - 53112
 * @property {string} message - 'Status is invalid'
 */
class RoomStatusInvalidError extends TwilioError {
  constructor() {
    super(53112, 'Status is invalid');
  }
}

exports.RoomStatusInvalidError = RoomStatusInvalidError;
Object.defineProperty(TwilioErrorByCode, 53112, { value: RoomStatusInvalidError });

/**
 * @class RoomRoomExistsError
 * @classdesc Raised in the REST API when the Room creation fails because a Room exists with the same name.
 * @extends TwilioError
 * @property {number} code - 53113
 * @property {string} message - 'Room exists'
 */
class RoomRoomExistsError extends TwilioError {
  constructor() {
    super(53113, 'Room exists');
  }
}

exports.RoomRoomExistsError = RoomRoomExistsError;
Object.defineProperty(TwilioErrorByCode, 53113, { value: RoomRoomExistsError });

/**
 * @class RoomInvalidParametersError
 * @classdesc Raised in the REST API when one or more Room creation parameter is incompatible with the Room type.
 * @extends TwilioError
 * @property {number} code - 53114
 * @property {string} message - 'Room creation parameter(s) incompatible with the Room type'
 */
class RoomInvalidParametersError extends TwilioError {
  constructor() {
    super(53114, 'Room creation parameter(s) incompatible with the Room type');
  }
}

exports.RoomInvalidParametersError = RoomInvalidParametersError;
Object.defineProperty(TwilioErrorByCode, 53114, { value: RoomInvalidParametersError });

/**
 * @class RoomMediaRegionInvalidError
 * @classdesc Raised in the REST API when MediaRegion is set to an invalid value.
 * @extends TwilioError
 * @property {number} code - 53115
 * @property {string} message - 'MediaRegion is invalid'
 */
class RoomMediaRegionInvalidError extends TwilioError {
  constructor() {
    super(53115, 'MediaRegion is invalid');
  }
}

exports.RoomMediaRegionInvalidError = RoomMediaRegionInvalidError;
Object.defineProperty(TwilioErrorByCode, 53115, { value: RoomMediaRegionInvalidError });

/**
 * @class RoomMediaRegionUnavailableError
 * @classdesc Raised in the REST API when MediaRegion is set to a valid value but no media servers are available.
 * @extends TwilioError
 * @property {number} code - 53116
 * @property {string} message - 'There are no media servers available in the MediaRegion'
 */
class RoomMediaRegionUnavailableError extends TwilioError {
  constructor() {
    super(53116, 'There are no media servers available in the MediaRegion');
  }
}

exports.RoomMediaRegionUnavailableError = RoomMediaRegionUnavailableError;
Object.defineProperty(TwilioErrorByCode, 53116, { value: RoomMediaRegionUnavailableError });

/**
 * @class RoomSubscriptionOperationNotSupportedError
 * @classdesc Raised whenever the subscription operation requested is not supported for the Room type.
 * @extends TwilioError
 * @property {number} code - 53117
 * @property {string} message - 'The subscription operation requested is not supported for the Room type'
 */
class RoomSubscriptionOperationNotSupportedError extends TwilioError {
  constructor() {
    super(53117, 'The subscription operation requested is not supported for the Room type');
  }
}

exports.RoomSubscriptionOperationNotSupportedError = RoomSubscriptionOperationNotSupportedError;
Object.defineProperty(TwilioErrorByCode, 53117, { value: RoomSubscriptionOperationNotSupportedError });

/**
 * @class RoomCompletedError
 * @classdesc Raised whenever a Room is completed via the REST API.
 * @extends TwilioError
 * @property {number} code - 53118
 * @property {string} message - 'Room completed'
 */
class RoomCompletedError extends TwilioError {
  constructor() {
    super(53118, 'Room completed');
  }
}

exports.RoomCompletedError = RoomCompletedError;
Object.defineProperty(TwilioErrorByCode, 53118, { value: RoomCompletedError });

/**
 * @class ParticipantIdentityInvalidError
 * @classdesc Raised whenever a Participant identity is invalid, and the scenario is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53200
 * @property {string} message - 'Participant identity is invalid'
 */
class ParticipantIdentityInvalidError extends TwilioError {
  constructor() {
    super(53200, 'Participant identity is invalid');
  }
}

exports.ParticipantIdentityInvalidError = ParticipantIdentityInvalidError;
Object.defineProperty(TwilioErrorByCode, 53200, { value: ParticipantIdentityInvalidError });

/**
 * @class ParticipantIdentityTooLongError
 * @classdesc Raised whenever a Participant identity is too long.
 * @extends TwilioError
 * @property {number} code - 53201
 * @property {string} message - 'Participant identity is too long'
 */
class ParticipantIdentityTooLongError extends TwilioError {
  constructor() {
    super(53201, 'Participant identity is too long');
  }
}

exports.ParticipantIdentityTooLongError = ParticipantIdentityTooLongError;
Object.defineProperty(TwilioErrorByCode, 53201, { value: ParticipantIdentityTooLongError });

/**
 * @class ParticipantIdentityCharsInvalidError
 * @classdesc Raised whenever a Participant identity contains invalid characters.
 * @extends TwilioError
 * @property {number} code - 53202
 * @property {string} message - 'Participant identity contains invalid characters'
 */
class ParticipantIdentityCharsInvalidError extends TwilioError {
  constructor() {
    super(53202, 'Participant identity contains invalid characters');
  }
}

exports.ParticipantIdentityCharsInvalidError = ParticipantIdentityCharsInvalidError;
Object.defineProperty(TwilioErrorByCode, 53202, { value: ParticipantIdentityCharsInvalidError });

/**
 * @class ParticipantMaxTracksExceededError
 * @classdesc Raised whenever a Participant has too many Tracks.
 * @extends TwilioError
 * @property {number} code - 53203
 * @property {string} message - 'Participant has too many Tracks'
 */
class ParticipantMaxTracksExceededError extends TwilioError {
  constructor() {
    super(53203, 'Participant has too many Tracks');
  }
}

exports.ParticipantMaxTracksExceededError = ParticipantMaxTracksExceededError;
Object.defineProperty(TwilioErrorByCode, 53203, { value: ParticipantMaxTracksExceededError });

/**
 * @class ParticipantNotFoundError
 * @classdesc Raised whenever attempting operation on a non-existent Participant.
 * @extends TwilioError
 * @property {number} code - 53204
 * @property {string} message - 'Participant not found'
 */
class ParticipantNotFoundError extends TwilioError {
  constructor() {
    super(53204, 'Participant not found');
  }
}

exports.ParticipantNotFoundError = ParticipantNotFoundError;
Object.defineProperty(TwilioErrorByCode, 53204, { value: ParticipantNotFoundError });

/**
 * @class ParticipantDuplicateIdentityError
 * @classdesc Raised by the server to the existing Participant when a new Participant joins a Room with the same identity as the existing Participant.
 * @extends TwilioError
 * @property {number} code - 53205
 * @property {string} message - 'Participant disconnected because of duplicate identity'
 */
class ParticipantDuplicateIdentityError extends TwilioError {
  constructor() {
    super(53205, 'Participant disconnected because of duplicate identity');
  }
}

exports.ParticipantDuplicateIdentityError = ParticipantDuplicateIdentityError;
Object.defineProperty(TwilioErrorByCode, 53205, { value: ParticipantDuplicateIdentityError });

/**
 * @class TrackInvalidError
 * @classdesc Raised whenever a Track is invalid, and the scenario is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53300
 * @property {string} message - 'Track is invalid'
 */
class TrackInvalidError extends TwilioError {
  constructor() {
    super(53300, 'Track is invalid');
  }
}

exports.TrackInvalidError = TrackInvalidError;
Object.defineProperty(TwilioErrorByCode, 53300, { value: TrackInvalidError });

/**
 * @class TrackNameInvalidError
 * @classdesc Raised whenever a Track name is invalid, and the scenario is not covered by a more specific error code.
 * @extends TwilioError
 * @property {number} code - 53301
 * @property {string} message - 'Track name is invalid'
 */
class TrackNameInvalidError extends TwilioError {
  constructor() {
    super(53301, 'Track name is invalid');
  }
}

exports.TrackNameInvalidError = TrackNameInvalidError;
Object.defineProperty(TwilioErrorByCode, 53301, { value: TrackNameInvalidError });

/**
 * @class TrackNameTooLongError
 * @classdesc Raised whenever a Track name is too long.
 * @extends TwilioError
 * @property {number} code - 53302
 * @property {string} message - 'Track name is too long'
 */
class TrackNameTooLongError extends TwilioError {
  constructor() {
    super(53302, 'Track name is too long');
  }
}

exports.TrackNameTooLongError = TrackNameTooLongError;
Object.defineProperty(TwilioErrorByCode, 53302, { value: TrackNameTooLongError });

/**
 * @class TrackNameCharsInvalidError
 * @classdesc Raised whenever a Track name contains invalid characters.
 * @extends TwilioError
 * @property {number} code - 53303
 * @property {string} message - 'Track name contains invalid characters'
 */
class TrackNameCharsInvalidError extends TwilioError {
  constructor() {
    super(53303, 'Track name contains invalid characters');
  }
}

exports.TrackNameCharsInvalidError = TrackNameCharsInvalidError;
Object.defineProperty(TwilioErrorByCode, 53303, { value: TrackNameCharsInvalidError });

/**
 * @class TrackNameIsDuplicatedError
 * @classdesc Raised whenever a Participant is currently publishing a Track with the same name.
 * @extends TwilioError
 * @property {number} code - 53304
 * @property {string} message - 'Track name is duplicated'
 */
class TrackNameIsDuplicatedError extends TwilioError {
  constructor() {
    super(53304, 'Track name is duplicated');
  }
}

exports.TrackNameIsDuplicatedError = TrackNameIsDuplicatedError;
Object.defineProperty(TwilioErrorByCode, 53304, { value: TrackNameIsDuplicatedError });

/**
 * @class TrackServerTrackCapacityReachedError
 * @classdesc The server does not have enough resources available to create a new Track.
 * @extends TwilioError
 * @property {number} code - 53305
 * @property {string} message - 'The server has reached capacity and cannot fulfill this request.'
 */
class TrackServerTrackCapacityReachedError extends TwilioError {
  constructor() {
    super(53305, 'The server has reached capacity and cannot fulfill this request.');
  }
}

exports.TrackServerTrackCapacityReachedError = TrackServerTrackCapacityReachedError;
Object.defineProperty(TwilioErrorByCode, 53305, { value: TrackServerTrackCapacityReachedError });

/**
 * @class MediaClientLocalDescFailedError
 * @classdesc Raised whenever a Client is unable to create or apply a local media description.
 * @extends TwilioError
 * @property {number} code - 53400
 * @property {string} message - 'Client is unable to create or apply a local media description'
 */
class MediaClientLocalDescFailedError extends TwilioError {
  constructor() {
    super(53400, 'Client is unable to create or apply a local media description');
  }
}

exports.MediaClientLocalDescFailedError = MediaClientLocalDescFailedError;
Object.defineProperty(TwilioErrorByCode, 53400, { value: MediaClientLocalDescFailedError });

/**
 * @class MediaServerLocalDescFailedError
 * @classdesc Raised whenever the Server is unable to create or apply a local media description.
 * @extends TwilioError
 * @property {number} code - 53401
 * @property {string} message - 'Server is unable to create or apply a local media description'
 */
class MediaServerLocalDescFailedError extends TwilioError {
  constructor() {
    super(53401, 'Server is unable to create or apply a local media description');
  }
}

exports.MediaServerLocalDescFailedError = MediaServerLocalDescFailedError;
Object.defineProperty(TwilioErrorByCode, 53401, { value: MediaServerLocalDescFailedError });

/**
 * @class MediaClientRemoteDescFailedError
 * @classdesc Raised whenever the Client receives a remote media description but is unable to apply it.
 * @extends TwilioError
 * @property {number} code - 53402
 * @property {string} message - 'Client is unable to apply a remote media description'
 */
class MediaClientRemoteDescFailedError extends TwilioError {
  constructor() {
    super(53402, 'Client is unable to apply a remote media description');
  }
}

exports.MediaClientRemoteDescFailedError = MediaClientRemoteDescFailedError;
Object.defineProperty(TwilioErrorByCode, 53402, { value: MediaClientRemoteDescFailedError });

/**
 * @class MediaServerRemoteDescFailedError
 * @classdesc Raised whenever the Server receives a remote media description but is unable to apply it.
 * @extends TwilioError
 * @property {number} code - 53403
 * @property {string} message - 'Server is unable to apply a remote media description'
 */
class MediaServerRemoteDescFailedError extends TwilioError {
  constructor() {
    super(53403, 'Server is unable to apply a remote media description');
  }
}

exports.MediaServerRemoteDescFailedError = MediaServerRemoteDescFailedError;
Object.defineProperty(TwilioErrorByCode, 53403, { value: MediaServerRemoteDescFailedError });

/**
 * @class MediaNoSupportedCodecError
 * @classdesc Raised whenever the intersection of codecs supported by the Client and the Server (or, in peer-to-peer, the Client and another Participant) is empty.
 * @extends TwilioError
 * @property {number} code - 53404
 * @property {string} message - 'No supported codec'
 */
class MediaNoSupportedCodecError extends TwilioError {
  constructor() {
    super(53404, 'No supported codec');
  }
}

exports.MediaNoSupportedCodecError = MediaNoSupportedCodecError;
Object.defineProperty(TwilioErrorByCode, 53404, { value: MediaNoSupportedCodecError });

/**
 * @class MediaConnectionError
 * @classdesc Raised by the Client or Server whenever a media connection fails.
 * @extends TwilioError
 * @property {number} code - 53405
 * @property {string} message - 'Media connection failed'
 */
class MediaConnectionError extends TwilioError {
  constructor() {
    super(53405, 'Media connection failed');
  }
}

exports.MediaConnectionError = MediaConnectionError;
Object.defineProperty(TwilioErrorByCode, 53405, { value: MediaConnectionError });

/**
 * @class ConfigurationAcquireFailedError
 * @classdesc Raised whenever the Client is unable to acquire configuration information from the Server.
 * @extends TwilioError
 * @property {number} code - 53500
 * @property {string} message - 'Unable to acquire configuration'
 */
class ConfigurationAcquireFailedError extends TwilioError {
  constructor() {
    super(53500, 'Unable to acquire configuration');
  }
}

exports.ConfigurationAcquireFailedError = ConfigurationAcquireFailedError;
Object.defineProperty(TwilioErrorByCode, 53500, { value: ConfigurationAcquireFailedError });

/**
 * @class ConfigurationAcquireTurnFailedError
 * @classdesc Raised whenever the Server is unable to return TURN credentials to the Client
 * @extends TwilioError
 * @property {number} code - 53501
 * @property {string} message - 'Unable to acquire TURN credentials'
 */
class ConfigurationAcquireTurnFailedError extends TwilioError {
  constructor() {
    super(53501, 'Unable to acquire TURN credentials');
  }
}

exports.ConfigurationAcquireTurnFailedError = ConfigurationAcquireTurnFailedError;
Object.defineProperty(TwilioErrorByCode, 53501, { value: ConfigurationAcquireTurnFailedError });
