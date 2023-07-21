export class Utils {
    static formatDateDDMMYYYY(dateString) {
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1; // Months are zero-based
        const year = dateObj.getFullYear();

        // Pad single-digit day/month with leading zero
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;

        // Return formatted date string
        return `${formattedDay}/${formattedMonth}/${year}`;
    };
    static formatNumberWithComma(number) {
        return number.toLocaleString();
    }
}