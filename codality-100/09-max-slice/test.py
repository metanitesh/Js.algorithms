print("hello")



def golden_max_slice(A):

  max_ending = max_slice = 0
  for a in A:
    # print(a);
    max_ending = max(0, max_ending + a)
    print(max_ending);
    max_slice = max(max_slice, max_ending)
    # print(max_slice);
  # print(max_slice)    
  return max_slice



golden_max_slice([1,-2, 3, 1, -5])