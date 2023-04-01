# Hotel Bill Generator

Hotel Bill Generator is an application that helps hotels to calculate the amount to be paid at check out time.

## Working of the application

The webpage contains following input fields:

- Name
- Mobile number
- Email Address
- Check-in Date
- Check-in Time
- Check-out Date
- Check-out Time

The webpage will displays the following output fields:

- The number of days stayed.
- The amount to be paid aat check-out.

## Functional Description

The `generateBill()` function is completed based on following criteria:

**Check-In time and Charges:**

- **Before 8AM:** 100% of the room rent per day.
- **Between 8AM and 12PM:** 75% of the room rent per day.
- **After 12PM:** 50% of the room rent per day.

**Check-Out time and Charges:**

- **Before 8AM:** Cpmplementary.
- **Between 8AM and 12PM:** 50% of the room rent per day.
- **After 12PM:** 75% of the room rent per day.

**Room Rent per Day:** $75.

## Validation

Perform the following validations:

- All input fields should not be empty.
- Date and Time are valid.
- Check-Out date and time should be greater than Check-In date and time.
