import React from 'react';

const Table = (props) => {
  return (
    <table>
      <TableHeader hoursOfOperation={props.hoursOfOperation} />
      <TableBody stores={props.stores} />
      <TableFooter
        allStoreCookiesPerHourTotals={props.allStoreCookiesPerHourTotals}
        allStoreDailyTotal={props.allStoreDailyTotal}
      />
    </table>
  )
}

const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <td></td>
        {props.hoursOfOperation.map((hour, key) =>
          <th key={key}>{hour}</th>
        )}
        <th>Daily Total</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  return (
    <tbody>
      {props.stores.map((store, key) =>
        <tr key={key}>
          <th>{store.name}</th>
          {store.cookiesPerHour.map((cookies, key) =>
            <td key={key}>{cookies}</td>
          )}
          <td>{store.dailyCookieTotal}</td>
        </tr>
      )}
    </tbody>
  )
}

const TableFooter = (props) => {
  return (
    <tfoot>
      <tr>
        <td>Hourly Total</td>
        {props.allStoreCookiesPerHourTotals.map((total, key) =>
          <td key={key}>{total}</td>
        )}
        <td>{props.allStoreDailyTotal}</td>
      </tr>
    </tfoot>
  )
}

export default Table;
