# description :

# You are given a number N. Find the digits in this number that
# exactly divide N and display their count. For N = 24,
# there are 2 digits - 2 & 4. Both these digits exactly divide 24. So our answer is 2.


# Sample Input :

# 2
# 12
# 1012

# Sample Output :

# 1
# 2
# 3 

# reference - https://www.hackerrank.com/challenges/find-digits




input_array = [2,12,1012]
output = []

input_array.each do |input|
    counter = 0;
    input.to_s.each_char do |char|
       next if char.to_i == 0 
       counter += 1 if input % char.to_i == 0 
   end
   output.push counter
end

puts output

