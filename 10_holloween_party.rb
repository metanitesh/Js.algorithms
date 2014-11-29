# Problem Statement

# Alex is attending a Halloween party with his girlfriend Silvia. At the party, 
# Silvia spots a giant chocolate bar. If the chocolate can be served as only 1 x 1 sized pieces and Alex can cut the chocolate bar exactly K times, 
# what is the maximum number of chocolate pieces Alex can cut and give Silvia?


# Sample Input #00

# 4
# 5
# 6
# 7
# 8

# Sample Output #00

# 6
# 9
# 12
# 16

def solve input 
    return 0 if input <= 1
    return 1 if input == 2
    
    total_slices = 1
    step  = 1
    
    3.upto(input) do |i|
        step += 1 if i%2 == 0
        total_slices += step
        
    end

    total_slices
end



