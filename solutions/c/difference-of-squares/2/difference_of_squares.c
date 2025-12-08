#include "difference_of_squares.h"
#include <math.h>


unsigned int sum_of_squares(unsigned int number)
{
    if (number == 0) 
        return 0;

    return pow(number, 2) + sum_of_squares(number - 1);
}


unsigned int square_of_sum(unsigned int number)
{
    if (number == 0)
        return 0;

    return number * number + sum_of_squares(number - 1);
}



unsigned int difference_of_squares(unsigned int number)
{
    return square_of_sum(number) - sum_of_squares(number);
}

