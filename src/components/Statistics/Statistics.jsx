import React from 'react';
import css from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>Good: {good}</li>
        <li className={css.statistics__item}>Neutral: {neutral}</li>
        <li className={css.statistics__item}>Bad: {bad}</li>
        <li className={css.statistics__item}>Total: {total}</li>
        <li className={css.statistics__item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
}
