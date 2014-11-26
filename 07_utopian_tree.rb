# The Utopian tree goes through 2 cycles of growth every year. The first growth cycle occurs during the spring, when it doubles in height. The second growth cycle occurs during the summer, when its height increases by 1 meter. 
# Now, a new Utopian tree sapling is planted at the onset of the spring. Its height is 1 meter. Can you find the height of the tree after N growth cycles?

#sample input
# 4


#sample output
# 7

def getTreeGrowth currentHight, cycle
    1.upto(cycle) do |sesson|
        
        currentHight = currentHight * 2  if sesson.odd?
        currentHight = currentHight + 1 if sesson.even?
    
    end
    
    currentHight
end

puts getTreeGrowth(1, 4)
