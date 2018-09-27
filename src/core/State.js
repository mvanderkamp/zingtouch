/**
 * @file State.js
 */

const Gesture = require('./Gesture.js');
const Binding = require('./Binding.js');
const Input   = require('./Input.js');
const util    = require('./util.js');

const DEFAULT_MOUSE_ID = 0;

/**
 * Creates an object related to a Region's state, and contains helper methods to
 * update and clean up different states.
 */
class State {
  /**
   * Constructor for the State class.
   */
  constructor() {
    /**
     * An array of current and recently inactive Input objects related to a
     * gesture.
     * @type {Input}
     */
    this.inputs = [];
  }

  /**
   * Replaces all inputs that are in the 'end' phase with undefined.
   */
  clearEndedInputs() {
    this.inputs = this.inputs.map( i => {
      return (i && i.phase == 'end') ? undefined : i;
    });
  }

  /**
   * @return {Array} Current event for all inputs.
   */
  getCurrentEvents() {
    return this.inputs.map( i => i && i.current );
  }

  /**
   * @return {Array} Inputs in the given phase.
   */
  getInputsInPhase(phase) {
    return this.inputs.filter( i => i && i.phase === phase );
  }

  /**
   * @return {Array} Inputs _not_ in the given phase.
   */
  getInputsNotInPhase(phase) {
    return this.inputs.filter( i => i && i.phase !== phase );
  }

  /**
   * @return {Boolean} true if all inputs are in 'end' phase.
   */
  hasOnlyEndedInputs() {
    return this.getInputsInPhase('end').length === this.inputs.length;
  }

  /**
   * Removes all inputs from the state, allowing for a new gesture.
   */
  resetInputs() {
    this.inputs = [];
  }

  /**
   * @return {Boolean} - true if some input was initially inside the element.
   */
  someInputWasInitiallyInside(element) {
    return this.inputs.some( i => i && i.wasInitiallyInside(element) );
  }

  /**
   * Update the input with the given identifier using the given event.
   *
   * @param {Event} event - The event being captured.
   * @param {Number} identifier - The identifier of the input to update.
   */
  updateInput(event, identifier) {
    if (util.normalizeEvent[ event.type ] === 'start') {
      this.inputs[identifier] = new Input(event, identifier);
    } else if (this.inputs[identifier]) {
      this.inputs[identifier].update(event);
    }
  }

  /**
   * Updates the inputs with new information based upon a new event being fired.
   *
   * @param {Event} event - The event being captured.  this current Region is
   * bound to.
   *
   * @return {boolean} - returns true for a successful update, false if the
   * event is invalid.
   */
  updateAllInputs(event) {
    const update_fns = {
      TouchEvent: (event) => {
        Array.from(event.changedTouches).forEach( touch => {
          this.updateInput(event, touch.identifier);
        });
      },

      PointerEvent: (event) => {
        this.updateInput(event, event.pointerId);
      },

      MouseEvent: (event) => {
        this.updateInput(event, DEFAULT_MOUSE_ID);
      },
    };

    update_fns[event.constructor.name].call(this, event);
  }
}

module.exports = State;

