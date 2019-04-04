const CommonHeader = require('./commonHeader.js');
const FloorRequestInformation = require('../attributes/floorRequestInformation.js');
const Message = require('./message.js');
const Primitive = require('./primitive.js');

class FloorRequestStatus extends Message {
  constructor(conferenceId, transactionId, userId, floorRequestId, floorId, requestStatus) {
    super(
      new CommonHeader(
        Primitive.FloorRequestStatus,
        4,
        conferenceId,
        transactionId,
        userId
      ),
      [
        new FloorRequestInformation(floorRequestId, floorId, requestStatus),
      ]
    );
  }
}

module.exports = FloorRequestStatus;
