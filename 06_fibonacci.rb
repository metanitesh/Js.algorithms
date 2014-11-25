# Problem Statement

# You are given an integer, N. 
# Write a program to determine 
# if N is an element of the Fibonacci Sequence.

#sample input
#13

#sample output 
#is febonacci


def check_febonacci f1, f2, n
    
    f3 = f2 + f1

    return "is febonacci" if n == 0
    return "is febonacci" if f2 == n
    return "is not febonacci " if f2 > n  

    check_febonacci f2, f3, n 

end

def is_febonacci n 
    check_febonacci 0, 1, n
end

puts is_febonacci(13)

