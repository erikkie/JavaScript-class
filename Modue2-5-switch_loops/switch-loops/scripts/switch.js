function calculate() {
    var holiday = '';
    let month = document.getElementById("month").value;


    switch (month) {
        case "January":
        case "january":        
            holiday = "National Bagel Day & Bean Day "
            break;

        case "February":
        case "february":
            holiday = "National Carrot Cake Day & World Nutella Day"
            break;    
        
         case "March":
        case "march":
            holiday = "National Hot Chicken Day & National Turkey Neck Soup Day"
            break; 

        case "April":
        case "april":
            holiday = "National Caramel Popcorn Day, International Carbonara Day & New Beer’s Eve"
            break;

        case "May":
        case "may":
            holiday = "National Raspberry Popover Day & National Raspberry Tart Day"
            break;

        case "June":
        case "june":
            holiday = "National Chocolate Macaroon Day & National Egg Day"
            break;

        case "July":
        case "july":
            holiday = "National Creme Brûlée Day & National Junk Food Day"
            break;

        case "August":
        case "august":
            holiday = "National Rum Day & National Bratwurst Day"
            break;

        case "September":
        case "september":
            holiday = "National Welsh Rarebit Day & National Baby Back Ribs Day"
            break;

        case "October":
        case "october":
            holiday = "National Pumpkin Spice Day & World Vegetarian Day"
            break; 

        case "November":
        case "november":
            holiday = "National Lemon Creme Pie Day & National Rice Cake Day"
            break;

        case "December":
        case "december":
     
            holiday = " National Cotton Candy Day & Ferry Floss Day(Great Britain)"
            break;

        default:
            holiday = "NO HOLLADAY FOUND, PLEASE USE PROPER CASING ";


    }
    
   
    document.getElementById("listed-holidays").innerHTML = "Two silly food holidays within this month are " + holiday;
    

}