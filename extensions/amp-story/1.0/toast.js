import * as Preact from '#core/dom/jsx';
import {Services} from '#service';
import {removeElement} from '#core/dom';
import {getWin} from '#core/window';

/** @private @const {string} */
const TOAST_CLASSNAME = 'i-amphtml-story-toast';

/**
 * The 'alert' role assertively announces toast content to screen readers.
 * @private @const {string}
 * */
const TOAST_ROLE = 'alert';

/**
 * Should be higher than total animation time.
 * @private @const {number}
 */
const TOAST_VISIBLE_TIME_MS = 2600;

/**
 * UI notifications service, displaying a message to the user for a limited
 * amount of time.
 */
export class Toast {
  /**
   * @param {!Element} storyEl
   * @param {!Node|string} childNodeOrText
   */
  static show(storyEl, childNodeOrText) {
    const win = getWin(storyEl);

    const toast = (
      <div class={TOAST_CLASSNAME} role={TOAST_ROLE}>
        {childNodeOrText}
      </div>
    );

    storyEl.appendChild(toast);

    Services.timerFor(win).delay(
      () => removeElement(toast),
      TOAST_VISIBLE_TIME_MS
    );
  }
}
