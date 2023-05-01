import React from 'react';
import { nanoid } from 'nanoid';
import css from './FeedbackOption.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={css.options__list}>
      {options.map(item => (
        <li className={css.options__item} key={nanoid()}>
          <button
            className={css.options__button}
            type="button"
            name={item}
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}
