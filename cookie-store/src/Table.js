import React from 'react';

const Table = (props) => {
  return (
    <table>
      <TableHeader hoursOfOperation={props.hoursOfOperation} />
      <TableBody
        stores={props.stores}
        dataToRender={props.dataToRender}
      />
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
        <th></th>
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
          {props.dataToRender === 'cookies' ? store.cookiesPerHour.map((cookies, key) => <td key={key}>{cookies}</td>) : null}
          {props.dataToRender === 'employees' ?  store.employeesPerHour.map((employees, key) => <td key={key}>{employees}</td>) : null}
          <td>{store.dailyCookieTotal}</td>
        </tr>
      )}
    </tbody>
  )
}

const TableFooter = (props) => {
  if (props.allStoreDailyTotal) {
    return ( 
      <tfoot>
        <tr>
          <th>Hourly Total</th>
          {props.allStoreCookiesPerHourTotals.map((total, key) =>
            <td key={key}>{total}</td>
          )}
          <td>{props.allStoreDailyTotal}</td>
        </tr>
      </tfoot>
    )
  } else {
    return (
      <tfoot></tfoot>
    )
  }
}

export default Table;
