# Adrian Ch02 #7 house cleaning app

#housekeeping()
Cust_LName_Prompt = input("What is the customer's last name? ")
custLName = Cust_LName_Prompt


#detailLoop()
Bathroom_Prompt = int(input("How many Bathrooms: "))
bathNum = Bathroom_Prompt
Otherrooms_Prompt =int(input("How many other rooms: "))
otherNum = Otherrooms_Prompt

BASIC_Charge = 40
BATH_Charge = 15
OTHER_Charge = 10

Total_Charge = BASIC_Charge + (bathNum * BATH_Charge) + (otherNum * OTHER_Charge)

print("Basic Charge is: $" + str(BASIC_Charge))
print("Bathroom Charge is: $" + str(bathNum * BATH_Charge))
print("Other Room Charge is: $" + str(otherNum* OTHER_Charge))
print(custLName + " total charge is: $" + str(Total_Charge))
