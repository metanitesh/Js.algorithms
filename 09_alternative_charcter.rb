# description

# Shashank likes strings in which consecutive characters are different. 
# For example, he likes ABABA, while he doesn't like ABAA. 
# Given a string containing characters A and B only, he wants to 
# change it into a string he likes. To do this, he is allowed to delete the characters in the string.

# Your task is to find the minimum number of required deletions.

# Sample Input

# 5
# AAAA
# BBBBB
# ABABABAB
# BABABA
# AAABBB

# Sample Output
# 3
# 4
# 0
# 0
# 4

# Explanation

# AAAA⟹A, 3 deletions
# BBBBB⟹B, 4 deletions
# ABABABAB⟹ABABABAB, 0 deletions
# BABABA⟹BABABA, 0 deletions
# AAABBB⟹AB, 4 deletions

#reference = https://www.hackerrank.com/challenges/alternating-characters


def solve str

    counter = 0
    lastCh = ''
    str.each_char do |ch|
        if (lastCh != ch)
            lastCh = ch 
        else 
            counter += 1 unless lastCh.empty?
        end

    end
    counter
end


puts solve 'ABBA'

