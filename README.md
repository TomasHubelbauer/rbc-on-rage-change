# React Big Calendar `onRangeChange`

`npm start`

In this repository I am exploring a weird behavior with `onRangeChange`.
Either TypeScript typings are wrong or the calendar behaves incorrectly.
This might depend on the view selected.

*Findings*: 
The types seem to be wrong so I created a PR:
https://github.com/DefinitelyTyped/DefinitelyTyped/pull/34616

Also the actual type is just so stupid. It's an array always, but either contains
`Date` instances of `{ start: stringOrDate; end: stringOrDate }` instances.
And the array always has an extra `null` at the end.

| View     | Type                                           | Note                                                                     |
|----------|------------------------------------------------|--------------------------------------------------------------------------|
| `day`    | `Date[]`                                       | Ar array with two elements, the date and `null`                          |
| `week`   | `Date[]`                                       | An array of 8 elements, 7 dates, one for each day of the week and `null` |
| `month`  | `{ start: stringOrDate; end: stringOrDate }[]` | 2 elements, the object and `null`                                        |
| `agenda` | `{ start: stringOrDate; end: stringOrDate }[]` | 2 elements, the object and `null`                                        |

The `day` view date seems to be a day late as well.
