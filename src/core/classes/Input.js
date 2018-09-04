/**
 * @file Input.js
 */

const ZingEvent = require('./ZingEvent.js');

/**
 * Tracks a single input and contains information about the
 * current, previous, and initial events.
 * Contains the progress of each Input and it's associated gestures.
 * @class Input
 */
class Input {
  /**
   * Constructor function for the Input class.
   * @param {Event} event - The Event object from the window
   * @param {Number} [identifier=0] - The identifier for each input event
   * (taken from event.changedTouches)
   */
  constructor(event, identifier = 0) {
    const currentEvent = new ZingEvent(event, identifier);

    /**
     * Holds the initial event object. A touchstart/mousedown event.
     * @type {ZingEvent}
     */
    this.initial = currentEvent;

    /**
     * Holds the most current event for this Input, disregarding any other past,
     * current, and future events that other Inputs participate in.
     * e.g. This event ended in an 'end' event, but another Input is still
     * participating in events -- this will not be updated in such cases.
     * @type {ZingEvent}
     */
    this.current = currentEvent;

    /**
     * Holds the previous event that took place.
     * @type {ZingEvent}
     */
    this.previous = currentEvent;

    /**
     * Refers to the event.touches index, or 0 if a simple mouse event occurred.
     * @type {Number}
     */
    this.identifier = identifier;

    /**
     * Stores internal state between events for
     * each gesture based off of the gesture's id.
     * @type {Object}
     */
    this.progress = {};
  }

  get phase()       { return this.current.type; }
  get currentTime() { return this.current.timeStamp; }
  get startTime()   { return this.initial.timeStamp; }

  currentDistanceTo(input) {
    return this.current.distanceTo(input.current);
  }

  currentMidpointTo(input) {
    return this.current.midpointTo(input.current);
  }

  totalAngle() {
    return this.initial.angleTo(this.current);
  }

  totalDistance() {
    return this.initial.distanceTo(this.current);
  }

  totalDistanceIsWithin(tolerance) {
    return this.totalDistance() <= tolerance;
  }

  wasInitiallyInside(element) {
    return this.initial.wasInside(element);
  }

  /**
   * Receives an input, updates the internal state of what the input has done.
   * @param {Event} event - The event object to wrap with a ZingEvent.
   * @param {Number} touchIdentifier - The index of inputs, from event.touches
   */
  update(event, touchIdentifier) {
    this.previous = this.current;
    this.current = new ZingEvent(event, touchIdentifier);
  }

  /**
   * Returns the progress of the specified gesture.
   * @param {String} id - The identifier for each unique Gesture's progress.
   * @return {Object} - The progress of the gesture.
   * Creates an empty object if no progress has begun.
   */
  getGestureProgress(id) {
    if (!this.progress[id]) {
      this.progress[id] = {};
    }
    return this.progress[id];
  }
}

module.exports = Input;
