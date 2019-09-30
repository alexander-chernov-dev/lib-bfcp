const Attribute = require('./attribute.js');
const Format = require('./format.js');
const Length = require('./length.js');
const FloorRequestStatus = require('./floorRequestStatus.js');
const RequestStatus = require('./requestStatus.js');
const Type = require('./type.js');

/**
 * @classdesc
 * OverallRequestStatus class is a abstraction of the OverallRequestStatus
 * attribute as defined in the RFC 4582 - BFCP
 * https://tools.ietf.org/html/rfc4582#section-5.2.18
 * @extends Attribute
 * @memberof bfcp-lib.Attribute
 */
class OverallRequestStatus extends Attribute {
  /**
   * @constructor
   * @param {Integer} floorRequestId The floor request id
   * @param {Integer} floorId        The floor id
   * @param {Integer} requestStatus  The request status
   */
  constructor(floorRequestId, floorId, requestStatus) {
    let content = [];
    content.push(floorRequestId);
    content.push(new RequestStatus(requestStatus));
    content.push(new FloorRequestStatus(floorId, requestStatus));
    super(Type.OverallRequestStatus, Length.OverallRequestStatus, Format.Grouped, content);
  }
}

module.exports = OverallRequestStatus;
