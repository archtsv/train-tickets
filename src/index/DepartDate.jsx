import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { h0 } from '../common/fp';
import './DepartDate.css';

export default function DepartDate(props) {
  const {
    times,
    onClick
  } = props;
  const departDateString = useMemo(() => {
    return dayjs()
  })
  return (
    <div></div>
  )
}