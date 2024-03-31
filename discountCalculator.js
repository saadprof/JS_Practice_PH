/*
    This discount calculator will calculate multi-layer ticket buying discounts.
    If someone buys only 20 tickets, no discount.
    For 21-50, will get 5% discount.
    For 51-100 will get 6% discount.
    For 101-200 will get 7% discount.
    For more than 200 will get 8% discount on all tickets (special).

    Per ticket price is 60tk
    Now, let's calculate.
*/


function discountCalculator(tickets){

    let ticketPrice = 0;
    let discount = 0;

    if(tickets < 1){
        return `Invalid ticket count.`;
    } else if(tickets <= 20){
        ticketPrice = tickets * 60;
    } else if(tickets > 20 && tickets <= 50){
        discount = (tickets * 60) * 0.05;
        ticketPrice = (tickets * 60) - discount;
    } else if(tickets > 50 && tickets <= 100){
        let discount1 = ((tickets - 50) * 60) * 0.05;
        let discount2 = ((tickets - 50) * 60) * 0.06;

        discount = discount1 + discount2;
        ticketPrice = (tickets * 60) - discount;
    } else if(tickets > 100 && tickets <= 200){
        let discount1 = ((tickets - 50) * 60) * 0.05;
        let discount2 = ((tickets - 50) * 60) * 0.06;
        let discount3 = ((tickets - 100) * 60) * 0.07;

        discount = discount1 + discount2 + discount3;
        ticketPrice = (tickets * 60) - discount;
    } else{
        discount = (tickets * 60) * 0.08;
        ticketPrice = (tickets * 60) - discount;
    }

    const totalTicketPrice = `Your total ticket price is: ${ticketPrice}`;
    return totalTicketPrice;
}

const calculatedResult = discountCalculator(300);
console.log(calculatedResult);