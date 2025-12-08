#include "leap.h"
bool leap_year(int year)
{

    // check if year is divisible by 4
    // unless year is evenly divisible by 100, also divisible by 400
    if (year % 4 == 0)
    {
        if (year % 100 != 0 && year % 400 == 0)
        {
            return true;
        }
    }
    
    return false;
}