// Practice Problem Number 2 and Page Number is 84 //
// ※※※ Marhaba, Javascripte Maro Thaba (Published in Bengali) by "Jhankar Mahbub" ※※※ //

// ⁑⁑⁑ Description of the Problem ⁑⁑⁑ // 
/*Recently, you opened a restaurant where you offer discounts based on three conditions:
children under 12 years old eat for free, customers over 60 years old receive a 60% discount,
and if you are dining alone, we give you a 15% discount.
based on this motion please write a JS Program */

// Function Number # 1 //
// This Function is belong with Child Discount //
function Child_Discount(totalMemBer, age_12, TotalBill_12)
{
    let discount_Member = totalMemBer - age_12;
    const Pay_count = (TotalBill_12 / totalMemBer);
    const Pay_TotalTaka = discount_Member * Pay_count;
    console.log("___________________________________________________________________________________________");
    console.log("Dear " + yourNaMe + " After Discout Your Total Bill is " + Pay_TotalTaka.toFixed(2) + " BDT");
    console.log("Kindly advise us of your preferred method of payment");
    let payMent_Type = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
    if(payMent_Type === "CARD")
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
        const cardNumber = parseInt(prompt("Card << "));
        console.log("Dear " + yourNaMe + " We Recived Taka >>> " + Pay_TotalTaka.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
    }
    else if(payMent_Type === "CASH")
    {
        console.log("_________________________________________________________________________________________________");
        console.log(yourNaMe + " Please remit your payment " + Pay_TotalTaka.toFixed(2) + " at the counter. Thank you.");
    }
    else
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
        console.log("Due to current technical issues.....,");
        console.log("BKash mobile banking is the only payment method available at this time.");
        console.log("Your Total Bill is >>> " + Pay_TotalTaka.toFixed(2) + " <<< BDT")
        console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
        console.log("Alternatively, you may scan our BKash QR code for payment.");
    }
}


// Function Number # 2 //
// This Function is belong with Seniors Discount //
function Seniors_Discount(totalMemBer, age_60, TotalBill_60)
{   //age_60 variable is resposible for how many seniors with the host customer //
  
    let pay_per_person = TotalBill_60 / totalMemBer; // how much cost for each member //
    let Seniors_TotalBill = pay_per_person * age_60;
    let Seniors_Discount60 = (Seniors_TotalBill / 100) * 60;
    const Pay_TotalTaka60 = TotalBill_60 - Seniors_Discount60;
    console.log("_____________________________________________________________________________________________________");
    console.log("Dear " + yourNaMe + " After Discout Your Total Bill is BDT >>> " + Pay_TotalTaka60.toFixed(2) + " <<< Taka");
    console.log("Kindly advise us of your preferred method of payment");
    let payMent_Type = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
    if(payMent_Type === "CARD")
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
        const cardNumber = parseInt(prompt("Card << "));
        console.log("Dear " + yourNaMe + " We Recived Taka >>> " + Pay_TotalTaka60.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
    }
    else if(payMent_Type === "CASH")
    {
        console.log("_________________________________________________________________________________________________");
        console.log(yourNaMe + " Please remit your payment BDT >>> " + Pay_TotalTaka60.toFixed(2) + " <<< Taka...at the counter. Thank you.");
        console.log("\n");
    }
    else
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
        console.log("Due to current technical issues.....,");
        console.log("BKash mobile banking is the only payment method available at this time.");
        console.log("Your Total Bill is >>> " + Pay_TotalTaka60.toFixed(2) + " <<< BDT")
        console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
        console.log("Alternatively, you may scan our BKash QR code for payment.");
        console.log("_________________________________________________________________________________________________");
        console.log("\n");

    }
}

// Function Number # 3 //
// This Function is belong with Child & Seniors Both Discount //
function Child_AND_Seniors_Discount(totalMembers, age_12, age_60, totalBillBoth) 
{
    // The logic and error handing by myself and syntex and code writhing by Bing co pilot //
    /*buddy the logic is suppose total member is 12 adult 2 , seniors 5, and child 5
    total bill 24560 taka now children got 100% discount so .... per person bill is 24560/10 =2046.66 taka total
    children is 5 so 2046.66 * 5 = 10233.33 taka so total bill with discount children is = 24560 - 10233 14327 .00 taka 
    now adult and seniors are total (2 +5) = 7 person now 14327 / 7 = 2046 . 71 taka total seniors are 5 person
    so.... 2046.71 * 5 = 10233.55 taka with 60% discount 10233.55 / 100 * 60 = 6140 .13 taka
    now... 14327 - 6140.13 = 8186.67 taka should be the answer or total bill but the code is not working like this....*/

    console.log("____________________________________________________________________________________________________________");
    console.log("Dear Guest, Welcome! Thank you for dining with us.");

    // Step 1: Calculate Total Per-Person Cost for Everyone (excluding children in distribution)
    let perPersonBill = totalBillBoth / totalMembers; 
    console.log("Per Person Bill (based on total): BDT >>> " + perPersonBill.toFixed(2));

    // Step 2: Calculate Children Discount (100% Discount)
    let childrenDiscount = perPersonBill * age_12; // Total discount for children
    console.log("Children Discount Total BDT >>> " + childrenDiscount.toFixed(2));

    // Step 3: Remaining Bill After Children Discount
    let remainingBillAfterChildDiscount = totalBillBoth - childrenDiscount;
    console.log("Remaining Bill After Children Discount: BDT >>> " + remainingBillAfterChildDiscount.toFixed(2));

    // Step 4: Calculate Adults and Seniors Per-Person Bill
    let adultsAndSeniorsCount = totalMembers - age_12; // Only adults and seniors
    let perPersonBillAfterChildDiscount = remainingBillAfterChildDiscount / adultsAndSeniorsCount;
    console.log("Per Person Bill (Adults + Seniors): BDT >>> " + perPersonBillAfterChildDiscount.toFixed(2));

    // Step 5: Seniors Discount Calculation
    let seniorsCost = perPersonBillAfterChildDiscount * age_60; // Total cost for seniors
    let seniorsDiscount = seniorsCost * 0.6; // Apply 60% discount
    console.log("Seniors Discount Total BDT >>> " + seniorsDiscount.toFixed(2));

    // Step 6: Final Grand Total After All Discounts
    let grandTotal = remainingBillAfterChildDiscount - seniorsDiscount;
    console.log("____________________________________________________________________________________________________________");
    console.log("Dear Customer, After Discounts Your Total Bill is BDT >>> " + grandTotal.toFixed(2) + " <<< Taka");
    console.log("************************************************************************************************************");

    console.log("************************************************************************************************************");
    console.log("Kindly advise us of your preferred method of payment");
    let payMent_Type = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
    if(payMent_Type === "CARD")
    {
        console.log("________________________________________________________________________________________________________");
        console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
        const cardNumber = parseInt(prompt("Card << "));
        console.log("Dear " + yourNaMe + " We Recived Taka >>> " + grandTotal.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
    }
    else if(payMent_Type === "CASH")
    {
        console.log("________________________________________________________________________________________________________");
        console.log(yourNaMe + " Please remit your payment BDT >>> " + grandTotal.toFixed(2) + " <<< Taka...at the counter. Thank you.");
        console.log("\n");
    }
    else
    {
        console.log("________________________________________________________________________________________________________");
        console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
        console.log("Due to current technical issues.....,");
        console.log("BKash mobile banking is the only payment method available at this time.");
        console.log("Your Total Bill is >>> " + grandTotal.toFixed(2) + " <<< BDT")
        console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
        console.log("Alternatively, you may scan our BKash QR code for payment.");
        console.log("________________________________________________________________________________________________________");
        console.log("\n");

    }
}


// JS Main Function //
console.log("\n")
console.log("________________________________________________________________________________________________________________");
// Using for User input...※※※"Please note: This code is running on the VS Code terminal, not on the web.※※※" 
"use strict";
const prosyn = require("prompt-sync");
const prompt = prosyn();

const yourNaMe = prompt("Hello Could you please intoduce yourself >>>  ").toUpperCase();
console.log("Good evening/afternoon.");
console.log(yourNaMe + " Thank you for choosing Our Restaurant.It has been a pleasure having you as our guest.");
const totalMemBer = parseInt(prompt("May I ask the total number of guests in your party for dinner this evening? >>>  "));
console.log("Could you please let me know if there are any children under twelve or seniors over sixty in your group today?");

const ansWer = prompt("Please only YES or NO >>> >>> >>>  ").toUpperCase();
if(ansWer === "YES") // main function main if condition //
{
    const ansWer_A = prompt("Is that Children or Seniors or both ? >>>   ").toLowerCase();
    if(ansWer_A === "children")
    {
        console.log("________________________________________________________________________________________________________________");
        console.log("We are pleased to offer complimentary meals for children under the age of twelve.");
        const age_12 = prompt("Sir, And how many kids under twelve are in your group? >>>  " );
        let TotalBill_12 = parseFloat(prompt("Please Infome us your Total Bill >>>  "));
        Child_Discount(totalMemBer, age_12, TotalBill_12); // calling child discount function and counting the bill //
    }
    else if(ansWer_A === "seniors")
    {
        console.log("________________________________________________________________________________________________________________");
        console.log("We are pleased to offer a 60% discount to our customers who are over the age of sixty.")
        const age_60 = prompt("Sir, And how many Seniors are in your group? >>> " );
        let TotalBill_60 = parseFloat(prompt("Please Infome us your Total Bill >>>  "));
        Seniors_Discount(totalMemBer, age_60, TotalBill_60); // calling seniors discount function and counting the bill //

    }
    else
    {   // BOTh //
        console.log("________________________________________________________________________________________________________________");
        console.log("We are pleased to offer complimentary meals for children under the age of twelve.");
        console.log("and a 60% discount to our customers who are over the age of sixty.");
        console.log("****************************************************************************************************************");
        const age_12 = prompt("Sir, And how many kids under twelve are in your group? >>> " );
        const age_60 = prompt("Sir, And how many Seniors are in your group? >>> " );
        let TotalBill_Both = parseFloat(prompt("Please Infome us your Total Bill >>>  "));
        console.log("________________________________________________________________________________________________________________");
        Child_AND_Seniors_Discount(totalMemBer, age_12, age_60, TotalBill_Both); // calling both discount function and counting the bill //
    }
}

else // main function main else condition //
{
    console.log("Welcome! Welcome! Welcome ! ..... Great to have you with us.")
    let TotalBill_Without_DiscounT = parseInt(prompt("Please let us Infome your Total Bill >>>  "));
    let BillwithDiscount15 = (TotalBill_Without_DiscounT / 100) * 5 ;
    const Pay_TotalTaka15 = TotalBill_Without_DiscounT - BillwithDiscount15;
    console.log("Dear " + yourNaMe + " After 15% Discount Your Total Bill is BDT >>> " + Pay_TotalTaka15.toFixed(2) + " <<< Taka");
    console.log("__________________________________________________________________________________________________________________");
    
    console.log("Kindly advise us of your preferred method of payment");
    let payMent_Type = prompt("What form of payment will you be using today: card, mobile banking, or cash?>>> ").toUpperCase()
    if(payMent_Type === "CARD")
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Please Enter Your Valid VISA , Master Card Or Bank Debit Card ");
        const cardNumber = parseInt(prompt("Card << "));
        console.log("Dear " + yourNaMe + " We Recived Taka >>> " + Pay_TotalTaka15.toFixed(2) + " <<< From Card No: " + cardNumber + " Thank You");
    }
    else if(payMent_Type === "CASH")
    {
        console.log("_________________________________________________________________________________________________");
        console.log(yourNaMe + " Please remit your payment " + Pay_TotalTaka15.toFixed(2) + " at the counter. Thank you.");
    }
    else
    {
        console.log("_________________________________________________________________________________________________");
        console.log("Dear " + yourNaMe + "\nWe sincerely apologize for any inconvenience.");
        console.log("Due to current technical issues.....,");
        console.log("BKash mobile banking is the only payment method available at this time.");
        console.log("Your Total Bill is >>> " + Pay_TotalTaka15.toFixed(2) + " <<< BDT")
        console.log("Please use the following cell phone number +880 1749 070 543 for BKash Payment");
        console.log("Alternatively, you may scan our BKash QR code for payment.");
    }
}
console.log("\n");
