#Gomez 10/4/22; Pg 122 CH3 PE#6

import math
from random import randint
userNum = 0
name = input("What is your name? ")
ans = str(input("Are you ready to start? enter yes or no: "))
while ans == "yes":
    def generator():
        return randint(1,100)
    num = generator()
    guess = 0
    print ("Pick a number between 1 and 100")
    print ("only 10 guesses allowed")
    while userNum!=num and guess<10:
        userNum = int(input("What number do you pick? "))
        if userNum < num:
            print(" Your guess was too low, pick a higher number")
            guess = guess + 1
        elif userNum > num:
            print(" Your guess was too high, pick a lower number")
            guess = guess + 1
    if userNum == num:
       print(" You match. The number was " + str(num))
       print("You used " + str(guess) + " tries. ")
    if guess==10:
       print("You used all 10 tries")
    ans = str(input("Are you ready to start? enter yes or no: "))

print("Game over")
  
