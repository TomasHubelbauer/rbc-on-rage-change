import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

type AppState = {
  args: any[][];
}

export default class App extends Component<{}, AppState> {
  public readonly state: AppState = { args: [] };

  render() {
    const localizer = BigCalendar.momentLocalizer(moment);
    return (
      <div className="App">
        <BigCalendar view="day" onRangeChange={this.handleCalendarRangeChange} localizer={localizer} events={[]} />
        <BigCalendar view="week" onRangeChange={this.handleCalendarRangeChange} localizer={localizer} events={[]} />
        <BigCalendar view="month" onRangeChange={this.handleCalendarRangeChange} localizer={localizer} events={[]} />
        <hr />
        <p>Change the ranges of the different calendar views and see the arguments append to the list</p>
        <hr />
        {this.state.args.map(a => (
          <>
            {JSON.stringify(a)}
            <hr />
          </>
        ))}
      </div>
    );
  }

  private readonly handleCalendarRangeChange = (...args: any[]) => {
    this.setState(state => ({ args: [...state.args, args] }));
  };
}
